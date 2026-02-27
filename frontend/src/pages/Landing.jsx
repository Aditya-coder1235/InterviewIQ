import React from "react";
import { Play } from "lucide-react";
import { Brain } from "lucide-react";
import { Mic } from "lucide-react";
import { ListChevronsUpDown } from "lucide-react";
import { CirclePile } from "lucide-react";
import { Medal } from "lucide-react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const Landing = () => {
    const navigate=useNavigate()
    return (
        <div>
            <nav className="flex h-16 border-b-gray-200 items-center justify-around md:gap-40">
                <div className="md:ms-12">
                    <img src="/logo.png" alt="" className="h-12 md:h-15" />
                </div>
                <div className="flex  md:gap-8 md:font-semibold opacity-60">
                    <a href="/login" className="hidden p md:inline-block">
                        Features
                    </a>
                    <a href="/login" className="hidden p md:inline-block">
                        Reviews
                    </a>
                    <a href="/login" className="hidden p md:inline-block">
                        Pricing
                    </a>
                </div>
                <div className="flex md:gap-5 gap-3 items-center">
                    <Link
                        to={"/login"}
                        className="md:font-semibold text-[8px] md:text-sm"
                    >
                        sign in
                    </Link>
                    <button
                        className="md:btn p-1 md:p-3 c text-[8px] md:text-xs rounded bg-blue-500 text-white"
                        onClick={() => navigate("/signup")}
                    >
                        Get Started Free
                    </button>
                </div>
            </nav>

            <div className="bg-gray-10 w-full  min-h-screen">
                <div className="flex gap-20  justify-center md:justify-start">
                    <div className="flex flex-col text-center md:text-start md:ms-40  md:pt-22  pt-15">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
                            Ace Your Next
                        </h1>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
                            Interview With <span className="b">AI-</span>
                        </h1>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
                            <span className="b">Powered</span> Practice
                        </h1>
                        <p className="pt-3 text-xs opacity-55">
                            Get personalized feedback, practice with realastic
                        </p>
                        <p className="text-xs opacity-55">
                            Senarios, and Boost your confidence with our
                        </p>
                        <p className="text-xs opacity-55">
                            Advance AI Interview coach.
                        </p>
                        <button
                            onClick={() => navigate("/signup")}
                            className="btn mt-9 c text-[10px] md:text-xs w-38 md:w-50 m-auto md:ms-0 bg-blue-500 text-white
"
                        >
                            <Play size={15} />
                            Start Practicing Free
                        </button>
                    </div>
                    <div className="pt-22 hidden md:block">
                        <img
                            src="/b.png"
                            alt="Interview AI Dashboard"
                            className="w-120 "
                        />
                    </div>
                </div>

                <div className="text-center  mt-40">
                    <h1 className=" text-xl md:text-4xl font-bold">
                        Everything You Need To Succeed
                    </h1>
                    <p className="text-xs  md:text-sm mt-3 opacity-55">
                        Our comprehensive platform provides all the tools and
                        insights you
                    </p>
                    <p className="md:text-sm text-xs opacity-55">
                        need to excel in any interview
                    </p>
                    <div className="flex justify-center flex-col items-center md:flex-row mt-15 gap-5">
                        <div className="r w-60 h p-8 h-80 rounded-2xl ">
                            <div className="c w-10 flex items-center h-10 m-auto rounded-xl">
                                <Brain className="m-auto text-white" />
                            </div>
                            <h3 className="font-bold pt-8 pb-8">
                                AI-Powered Analysis
                            </h3>
                            <p className="text-sm opacity-65">
                                Get personalized insights on your job fit,
                                strengths, and areas for improvement with
                                advanced AI technology
                            </p>
                        </div>
                        <div className="r w-60 h p-8 h-80 rounded-2xl ">
                            <div className="c w-10 flex items-center h-10 m-auto rounded-xl">
                                <Mic className="m-auto text-white" />
                            </div>
                            <h3 className="font-bold pt-8 pb-8">
                                Realistic Mock Interviews
                            </h3>
                            <p className="text-sm opacity-65">
                                Practice with out AI interviewer that adapts to
                                your industry and role, providing real-time
                                feedback.
                            </p>
                        </div>
                        <div className="r w-60 h p-8 h-80 rounded-2xl ">
                            <div className="c w-10 flex items-center h-10 m-auto rounded-xl">
                                <ListChevronsUpDown className="m-auto text-white" />
                            </div>
                            <h3 className="font-bold pt-8 pb-8">
                                Detailed Performance Analytics
                            </h3>
                            <p className="text-sm opacity-65">
                                Track your progress with comprehensive analytics
                                and personalized improvement recommendations.
                            </p>
                        </div>
                        <div className="r w-60 h p-8 h-80 rounded-2xl ">
                            <div className="c w-10 flex items-center h-10 m-auto rounded-xl">
                                <CirclePile className="m-auto text-white" />
                            </div>
                            <h3 className="font-bold pt-8 pb-8">
                                Industry-Specific Questions
                            </h3>
                            <p className="text-sm opacity-65">
                                Practice with questions tailored to your
                                specific role and industry for maximum
                                relevance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-40">
                    <h1 className="text-xl md:text-4xl font-bold">
                        How It Works
                    </h1>
                    <p className="text-xs md:text-sm mt-7 opacity-55">
                        Get started in minute and see result immediately
                    </p>
                    <div className="flex justify-center pt-10  md:pt-15 md:gap-15">
                        <div className="flex flex-col gap-3">
                            <div className="c w-8 rounded-full text-xl text-white m-auto h-8">
                                1
                            </div>
                            <span className="border hidden md:inline-block relative bottom-7 left-32"></span>
                            <h2 className="font-bold">Choose Your Role</h2>
                            <p className="text-xs opacity-65">
                                Select job role and experience level.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="c w-8 rounded-full text-xl text-white m-auto h-8">
                                2
                            </div>
                            <span className="border hidden md:inline-block relative bottom-7 left-32"></span>
                            <h2 className="font-bold">Answer Questions</h2>
                            <p className="text-xs opacity-65">
                                AI asks technical interview questions.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="c w-8 rounded-full text-xl text-white m-auto h-8">
                                3
                            </div>

                            <h2 className="font-bold">Get Feedback</h2>
                            <p className="md:hidden"></p>
                            <p className="md:hidden"></p>
                            <p className="text-xs opacity-65">
                                Receive instant AI evaluation and score.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" text-center mt-40 h-70 w-full c flex flex-col justify-center items-center gap-3">
                    <h1 className="text-4xl font-bold text-white">
                        Ready to Ace Your Next Interview ?{" "}
                    </h1>
                    <p className="text-white">
                        Start practice today and boost your confidence for
                        tommorows opportunities.{" "}
                    </p>
                    <button
                        className="btn mt-2 text-blue-500"
                        onClick={() => navigate("/signup")}
                    >
                        <Medal size={15} className="text-black" />
                        Start your Success Story
                    </button>
                </div>
            </div>

            <footer className="footer footer-horizontal footer-center bg-gray-900 text-white  rounded p-10 mt-">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right
                        reserved by ACME Industries Ltd
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Landing;
