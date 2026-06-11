import { useEffect, useState } from "react";
import {
    MessageSquareText,
    BrainCircuit,
    BarChart,
    CheckCircle2,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { API_URL } from "../config/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InterviewResults = () => {
    const navigate=useNavigate()
    let { id } = useParams();
    const [interview, setInterview] = useState(null);
    const [questions, setQuestions] = useState([]);

    const fetchInterview = async () => {
        try {
            const res = await axios.get(
                `${API_URL}/api/interview/getInterview/${id}`,
                { withCredentials: true },
            );
            // setQuestions(res.data.interview.questions);
            // setLoading(false);
            setInterview(res.data.interview);
            setQuestions(res.data.interview.questions);
            // console.log()
        } catch (error) {
            console.log(error.response?.data?.message || error.message);
        }
    };

    useEffect(() => {
        fetchInterview();
    }, [id]);

    // console.log(questions);
    return (
        <div>
           

            <div className="min-h-screen bg-white p-10">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-12 flex justify-center md:justify-between items-center md:flex-row flex-col">
                        <div>
                            <h1 className="text-xl md:text-3xl font-black text-slate-900 mb-2">
                                Interview Summary
                            </h1>
                            <p className="text-slate-500 text-center">
                                Candidate:{" "}
                                <span className="text-blue-600 font-bold">
                                    {interview && interview.userId.name}
                                </span>{" "}
                            </p>
                        </div>
                        <button
                            className="btn md:mt-0 mt-3 c text-white"
                            onClick={() => navigate("/home")}
                        >
                            Start New Interview
                        </button>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <MessageSquareText className="text-blue-600" />
                                <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest">
                                    Communication Style
                                </h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                The candidate uses professional yet
                                conversational language. Technical concepts are
                                explained clearly without excessive jargon.
                            </p>
                            <div className="flex gap-2">
                                <span className="bg-white px-3 py-1 rounded-lg text-xs font-bold border border-slate-200">
                                    Confident
                                </span>
                                <span className="bg-white px-3 py-1 rounded-lg text-xs font-bold border border-slate-200">
                                    Structured
                                </span>
                                <span className="bg-white px-3 py-1 rounded-lg text-xs font-bold border border-slate-200">
                                    Concise
                                </span>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] flex flex-col justify-between">
                            <div className="flex items-center gap-3 mb-4">
                                <BrainCircuit className="text-blue-400" />
                                <h3 className="font-bold uppercase text-sm tracking-widest">
                                    AI Accuracy Score
                                </h3>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="text-blue-400 text-xl font-black">
                                    {interview && interview.overallScore}
                                </span>
                                <span className="text-blue-400 text-xl font-bold">
                                    / 50
                                </span>
                            </div>
                            <p className="mt-4 text-slate-400 text-sm italic">
                                "Matches top % of all full-stack applicants."
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-black text-slate-900 mb-6">
                            Feedbacks
                        </h3>
                        {questions &&
                            questions.map((que) => {
                                return (
                                    <div className="flex flex-col items-start gap-2 p-6 rounded-3xl hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                                        <h1 className="text-xl font-semibold">
                                            Q. {que.question}
                                        </h1>
                                        <p className="">
                                            <span className="text-xl font-semibold">
                                                Your ans.{" "}
                                            </span>
                                            {que.answer}
                                        </p>
                                        <p>
                                            <span className="text-xl font-semibold">
                                                Feedback.{" "}
                                            </span>
                                            {que.feedback}
                                        </p>
                                        <p>
                                            <span className="text-xl font-semibold">
                                                Score.{" "}
                                            </span>
                                            {que.score}
                                        </p>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default InterviewResults;
