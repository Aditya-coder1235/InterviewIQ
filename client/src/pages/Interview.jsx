import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { User, Bot, Send, CheckCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Interview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const chatEndRef = useRef(null);

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

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
            let res = await axios.post(
                "http://localhost:5000/api/interview/submit",
                {
                    interviewId: id,
                    answers: finalAnswers,
                },
                { withCredentials: true },
            );

            console.log(res.data);
            alert("Interview Completed Successfully!");
            navigate(`/result/${id}`);
        } catch (error) {
            console.log(error.response?.data?.message || error.message);
        }
    };

    if (loading) return <p className="p-10">Loading...</p>;

    return (
        <div className=" h-screen bg-slate-50">
            <Navbar />
            <div className="flex-1 flex flex-col">
                <h1 className="text-center pt-5 text-blue-500 md:text-4xl font-bold">
                    Answer The All Questions
                </h1>
                <div className="flex-1 overflow-y-auto p-8 space-y-6">
                    <div className="flex justify-start">
                        <div className="max-w-[70%] flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                                <Bot size={16} />
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                <p className="text-sm">
                                    {questions[currentIndex]?.question}
                                </p>
                            </div>
                        </div>
                    </div>

                    {answer && (
                        <div className="flex justify-end">
                            <div className="max-w-[70%] flex gap-4 flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                                    <User size={16} />
                                </div>
                                <div className="p-4 rounded-2xl bg-blue-500 text-white shadow-sm ">
                                    <p className="text-sm">{answer}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={chatEndRef} />
                </div>

                <div className="p-6 bg-white mt-15 border-t border-slate-200">
                    <div className="flex items-center gap-4 bg-slate-50 border p-2 rounded-2xl">
                        <textarea
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            rows="2"
                            placeholder="Type your answer here..."
                            className="flex-1 bg-transparent outline-none resize-none px-2"
                        />
                        <button
                            onClick={handleNext}
                            className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-700 transition"
                        >
                            {currentIndex === 4 ? "Submit" : <Send size={18} />}
                        </button>
                    </div>

                    <div className="flex justify-between mt-2 text-sm text-slate-500">
                        <span>
                            Question {currentIndex + 1} of {questions.length}
                        </span>
                        {currentIndex > 0 && (
                            <button
                                onClick={() =>
                                    setCurrentIndex(currentIndex - 1)
                                }
                                className="hover:text-blue-500"
                            >
                                Back
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Interview;
