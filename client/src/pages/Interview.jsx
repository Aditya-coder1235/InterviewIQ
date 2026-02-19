import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Interview = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchInterview = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5000/api/interview/getInterview/${id}`,
                { withCredentials: true },
            );

            setQuestions(res.data.interview.questions);
            setLoading(false);
        } catch (error) {
            console.log(error.response?.data?.message || error.message);
        }
    };

    useEffect(() => {
        fetchInterview();
    }, [id]);

    useEffect(() => {
        setAnswer(answers[currentIndex] || "");
    }, [currentIndex]);

    const handleNext = () => {
        if (!answer.trim()) {
            alert("Please enter your answer");
            return;
        }

        const updatedAnswers = [...answers];
        updatedAnswers[currentIndex] = answer;
        setAnswers(updatedAnswers);

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            submitInterview(updatedAnswers);
        }
    };

    const submitInterview = async (finalAnswers) => {
        try {
            let res=await axios.post(
                "http://localhost:5000/api/interview/submit",
                {
                    interviewId: id,
                    answers: finalAnswers,
                },
                { withCredentials: true },
            );
            console.log(res.data)
            // alert("Interview Completed Successfully!");

            // navigate(`/result/${id}`);
        } catch (error) {
            console.log(error.response?.data?.message || error.message);
        }
    };

    if (loading) return <p className="p-10">Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
                <h2 className="text-lg font-semibold mb-2 text-gray-500">
                    Question {currentIndex + 1} of {questions.length}
                </h2>

                <p className="text-xl font-medium mb-6">
                    {questions[currentIndex]?.question}
                </p>

                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                    placeholder="Type your answer here..."
                />

                <div className="flex justify-between mt-6">
                    {currentIndex > 0 && (
                        <button
                            onClick={() => setCurrentIndex(currentIndex - 1)}
                            className="px-4 py-2 bg-gray-300 rounded-lg"
                        >
                            Back
                        </button>
                    )}

                    <button
                        onClick={handleNext}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        {currentIndex === questions.length - 1
                            ? "Finish Interview"
                            : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Interview;
