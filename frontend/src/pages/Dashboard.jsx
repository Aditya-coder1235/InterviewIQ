import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import A from "./A";

const Dashboard = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);

    const notify = () => toast("Lets start the Interview!");

    const createInterview = async () => {
        try {
            setLoading(true);
            let res = await axios.post(
                "https://ai-interview-backend-0upj.onrender.com/api/interview/start",
                { role },
                { withCredentials: true },
            );
            // console.log(res.data);
            navigate(`/interview/${res.data.interviewId}`);
        } catch (error) {
            console.log(error.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!role) {
            toast.error("Please select role");
            return;
        }


        createInterview();
    };


    return (
        <div>
            <Navbar />

            <div className="bg-gray-10">
                <div className="flex md:justify-center flex-col md:flex-row gap-10 md:gap-25  w-full  min-h-screen">
                    <ToastContainer position="top-right" autoClose={3000} />
                    <div className="text-center md:text-start pt-25">
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
                                className="bg-blue-500 text-white px-5 c py-2 rounded-lg"
                            >
                                Start New Interview
                            </button>

                            {showForm && (
                                <div className="mt-6 flex justify-center">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="w-full max-w-md bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200 transition-all duration-300"
                                    >
                                        <p className="mb-3 font-semibold text-gray-700 text-sm">
                                            Select Your Interview Role
                                        </p>

                                        <select
                                            value={role}
                                            onChange={(e) =>
                                                setRole(e.target.value)
                                            }
                                            className="w-full p-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        >
                                            <option value="">
                                                Select Role
                                            </option>
                                            <option value="Frontend">
                                                Frontend Developer
                                            </option>
                                            <option value="Backend">
                                                Backend Developer
                                            </option>
                                            <option value="MERN">
                                                MERN Stack
                                            </option>
                                        </select>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-70"
                                        >
                                            {loading ? (
                                                <span className="loading loading-spinner loading-sm"></span>
                                            ) : (
                                                "Continue"
                                            )}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className=" md:block pt-12">
                        <img
                            src="https://framerusercontent.com/images/gCHx3IZfG0oQz1beoIQjk7WiMFI.png?scale-down-to=1024&width=4096&height=3957"
                            alt="AI Illustration"
                            className="h-110 w-"
                        />
                    </div>
                </div>

                
                <div className="h-60 q w-full text-white flex items-center justify-around text-2xl font-bold">
                    <div className="text-center">
                        100+ Students <br /> Practiced
                    </div>
                    <div className="text-center">
                        50+ Mock Interviews <br /> Completed
                    </div>
                    <div className="text-center">4.8/5 Average <br /> Rating</div>
                    <div className="text-center">
                        10 Active <br /> Users 
                    </div>
                </div> 

                <A/>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
