import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const History = () => {
    const [history, setHistory] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const getHistory = async () => {
        try {
            // setLoading(true);
            let res = await axios.get(
                "https://ai-interview-backend-0upj.onrender.com/api/interview/history",
                { withCredentials: true },
            );
            // console.log();
            setHistory(res.data);
            // navigate(`/interview/${res.data.interviewId}`);
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    };
    useEffect(() => {
        getHistory();
    }, []);

    return (
        <div>
            <Navbar />
            {history.length <= 0 && <h2 className="text-center text-2xl font-semibold flex mt-40 justify-center min-h-screen">No Interview Found</h2>}
            {history.length > 0 && (
                <div className="w-[85%] mx-auto md:mt-2 pt-7 min-h-screen">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-sm md:text-2xl  font-black ">
                            Interview History
                        </h1>

                        <button
                            onClick={() => setExpanded(!expanded)}
                            className=" c text-white px-2 py-1  md:px-4 md:py-2 rounded-lg text-sm  transition"
                        >
                            {expanded ? "Close" : "View All"}
                        </button>
                    </div>

                    <div
                        className={`
            transition-all duration-500 ease-in-out
            overflow-hidden
            ${expanded ? "max-h-550" : "max-h-222"}
        `}
                    >
                        <div className="space-y-6">
                            {history.map((item) => (
                                <div
                                    key={item._id}
                                    className="bg-whi rounded-2xl shadow-sm border border-slate-200 p-6"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h2 className="text-xs md:text-xl font-bold text-slate-800">
                                                {item.role} Interview
                                            </h2>
                                            <p className="text-sm text-slate-400"></p>
                                        </div>

                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600">
                                            {item.status}
                                        </span>
                                    </div>

                                    {expanded && (
                                        <div className="space-y-4">
                                            {item.questions.map((q, index) => (
                                                <div
                                                    key={q._id}
                                                    className="border border-slate-100 rounded-xl p-4 bg-slate-50"
                                                >
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-medium">
                                                            {index + 1}.{" "}
                                                            {q.question}
                                                        </p>

                                                        <span
                                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                                q.score > 0
                                                                    ? "bg-blue-100 text-blue-600"
                                                                    : "bg-red-100 text-red-500"
                                                            }`}
                                                        >
                                                            {q.score}
                                                        </span>
                                                    </div>

                                                    {q.improvement && (
                                                        <p className="mt-2 text-xs text-orange-500">
                                                            💡 {q.improvement}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default History;
