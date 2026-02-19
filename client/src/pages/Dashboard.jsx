import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router";

const Dashboard = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [role, setRole] = useState("");
    const[loading,setLoading]=useState(false)
    const[history,setHistory]=useState([])
    const [expanded, setExpanded] = useState(false);

    const createInterview = async () => {
        try {
            setLoading(true)
            let res = await axios.post(
                "http://localhost:5000/api/interview/start",
                { role },
                { withCredentials: true },
            );
            // console.log(res.data);
            navigate(`/interview/${res.data.interviewId}`);
        } catch (error) {
            console.log(error.response?.data?.message);
        }finally{
            setLoading(false)
        }
    };

    const getHistory = async () => {
        try {
            // setLoading(true);
            let res = await axios.get(
                "http://localhost:5000/api/interview/history",
                { withCredentials: true },
            );
            // console.log();
            setHistory(res.data);
            // navigate(`/interview/${res.data.interviewId}`);
        } catch (error) {
            console.log(error.response?.data?.message);
        } 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!role) {
            alert("Please select role");
            return;
        }

        // console.log("Selected role:", role);

        createInterview();
    };

    useEffect(()=>{
        getHistory()
    },[])

    console.log(history)

    return (
        <div>
            <Navbar />

            <div className="bg-gray-100">
                <div className="flex md:justify-center flex-col md:flex-row gap-10 md:gap-25  w-full pt-25 min-h-screen">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Prepare for</h1>
                        <h1 className="text-5xl font-bold">
                            Interview With{" "}
                            <span className="gradient-text b">AI</span>
                        </h1>

                        <p className="text-sm mt-5 opacity-75">
                            Practice mock technical interview and get <br />
                            instant AI-powered feedback to improve your skills.
                        </p>

                        <div className="mt-8">
                            <button
                                onClick={() => setShowForm(true)}
                                className="bg-blue-500 text-white px-5 py-2 rounded-lg"
                            >
                                Start New Interview
                            </button>

                            {showForm && (
                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-4 bg-white p-4 rounded-lg shadow-md"
                                >
                                    <p className="mb-2 font-medium text-xs">
                                        First Select Role
                                    </p>

                                    <select
                                        value={role}
                                        onChange={(e) =>
                                            setRole(e.target.value)
                                        }
                                        className="r p-2 rounded w-full h-9 text-sm"
                                    >
                                        <option value="">Select Role</option>
                                        <option value="Frontend">
                                            Frontend Developer
                                        </option>
                                        <option value="Backend">
                                            Backend Developer
                                        </option>
                                        <option value="MERN">MERN Stack</option>
                                    </select>

                                    <button
                                        type="submit"
                                        className="mt-3 btn  px-4 py-2 rounded"
                                    >
                                        {" "}
                                        {loading ? (
                                            <span className="loading loading-spinner loading-sm"></span>
                                        ) : (
                                            "Continue"
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    <div className=" md:block">
                        <img
                            src="/f.png"
                            alt="AI Illustration"
                            className="h-60 w-"
                        />
                    </div>
                </div>

                {history.length > 0 && (
                    <div className="w-[85%] mx-auto md:mt-2 min-h-screen">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-sm md:text-2xl  font-black ">
                                Interview History
                            </h1>

                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="bg-blue-500 text-white px-2 py-1 text-xs md:px-4 md:py-2 rounded-lg text-sm hover:bg-blue-700 transition"
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
                                                {item.questions.map(
                                                    (q, index) => (
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
                                                                        q.score >
                                                                        0
                                                                            ? "bg-blue-100 text-blue-600"
                                                                            : "bg-red-100 text-red-500"
                                                                    }`}
                                                                >
                                                                    {q.score}
                                                                </span>
                                                            </div>

                                                            {q.improvement && (
                                                                <p className="mt-2 text-xs text-orange-500">
                                                                    💡{" "}
                                                                    {
                                                                        q.improvement
                                                                    }
                                                                </p>
                                                            )}
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;
