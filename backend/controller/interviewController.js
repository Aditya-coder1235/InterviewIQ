const Interview = require('../models/Interview');
const {evaluateAnswer}=require('../services/aiService')
const {generateQuestions}=require('../services/aiService')

exports.startInterview = async (req, res) => {
    try {
        const { role } = req.body;

        if (!role) {
            return res.status(400).json({ message: "Role is required" });
        }

        const aiResponse = await generateQuestions(role);

        if (!Array.isArray(aiResponse)) {
            return res.status(500).json({ message: "AI did not return valid questions" });
        }

        const questions = aiResponse.map(q => ({
            question: q.question,
            answer: "",
            feedback: "",
            score: 0
        }));

        const interview = await Interview.create({
            userId: req.user.id,
            role,
            questions
        });

        res.status(201).json({
            message: "Interview started",
            interviewId: interview._id,
            questions: interview.questions
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};



exports.getInterview=async(req,res)=>{
    try {
        const { id } = req.params;

        const interview=await Interview.findById(id).populate("userId")

        res.status(200).json({
            message: "Interview Fetched", interview
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}


exports.submitInterview = async (req, res) => {
    try {
        const { interviewId, answers } = req.body;

        if (!interviewId || !answers) {
            return res.status(400).json({ message: "Interview ID and answers are required" });
        }

        const interview = await Interview.findOne({
            _id: interviewId,
            userId: req.user.id
        });

        if (!interview) {
            return res.status(404).json({ message: "Interview not found" });
        }

        let totalScore = 0;

        for (let i = 0; i < interview.questions.length; i++) {
            const q = interview.questions[i];
            const userAnswer = answers[i] || "";

            const aiResult = await evaluateAnswer(
                q.question,
                userAnswer,
                interview.role
            );

            q.answer = userAnswer;
            q.score = aiResult.score;
            q.feedback = aiResult.feedback;
            q.improvement = aiResult.improvement;

            totalScore += aiResult.score;
        }

        interview.overallScore = totalScore;
        interview.status = "completed";

        await interview.save();

        res.status(200).json({
            message: "Interview evaluated successfully",
            totalScore,
            interview
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};


exports.getInterviewHistory = async (req, res) => {
    try {
        const interviews = await Interview.find({ userId: req.user.id })
            .select('-questions.answer -questions.feedback')
            .sort({ createdAt: -1 });

        res.status(200).json(interviews);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
