import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router";

const Dashboard = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [role, setRole] = useState("");
    const[loading,setLoading]=useState(false)

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!role) {
            alert("Please select role");
            return;
        }

        // console.log("Selected role:", role);

        createInterview();
    };

    return (
        <div>
            <Navbar />

            <div className="bg-gray-100">
                <div className="flex justify-around items-center w-full pt-20">
                    <div>
                        <h1 className="text-5xl font-bold">Prepare for</h1>
                        <h1 className="text-5xl font-bold">
                            Interview With{" "}
                            <span className="gradient-text">AI</span>
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

                    <div>
                        <img
                            src="/f.png"
                            alt="AI Illustration"
                            className="h-60 w-auto object-contain"
                        />
                    </div>
                </div>

                <div className=" w-[80%] h-100 p-10 m-auto mt-15 flex gap-10">
                    <div className=" w-150 flex flex-col gap-">
                        <div className=" flex gap-5 justify-center">
                            <div className=" w-70 h-30 rounded-xl  bg-white">
                                sessions
                            </div>
                            <div className=" w-70 h-30 rounded-xl  bg-white">
                                time practice
                            </div>
                        </div>
                        <div className=" w-full mt-5 h-30 rounded-xl  bg-white">
                            avg.score
                        </div>
                    </div>
                    <div className=" w-90 h-50 rounded-xl  bg-white">
                        recent history
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;
