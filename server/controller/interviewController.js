const Interview = require('../models/Interview');

exports.startInterview = async (req, res) => {
    try {
        const { role } = req.body;

        if (!role) {
            return res.status(400).json({ message: "Role is required" });
        }

        const questions = [
            { question: "What is JavaScript?" },
            { question: "What is React?" },
            { question: "Explain Node.js" }
        ];

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
        res.status(500).json({ message: "Server error" });
    }
};


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

        interview.questions.forEach((q, index) => {
            q.answer = answers[index] || "";
        });


        await interview.save();

        res.status(200).json({
            message: "Answers submitted successfully"
        });

    } catch (error) {
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
