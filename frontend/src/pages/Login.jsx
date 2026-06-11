import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import { useNavigate ,Link} from "react-router-dom";
import { ArrowLeft, Mail, Lock } from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser();
    };

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const loginUser = async () => {
        try {
            setLoading(true);
            let res = await axios.post(
                `${API_URL}/api/auth/login`,
                formData,
                { withCredentials: true },
            );
            navigate("/home");
            localStorage.setItem("userId", res.data.user._id);
            localStorage.setItem("user", res.data.user.name);
            localStorage.setItem("email", res.data.user.email);

            // console.log();
            // console.log();
            // console.log();


        } catch (error) {
            console.log(error.response.data.message);
            setError(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-dvh bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans">
            <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 py-8 sm:px-6 sm:py-12">
                <Link
                    to="/"
                    className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to home
                </Link>

                <div className="flex flex-1 flex-col justify-center">
                    <div className="mb-8 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                            Welcome back
                        </h1>
                        <p className="mt-2 text-sm text-slate-600">
                            Sign in to continue your interview prep.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                           
                            <div>
                                <label className="block text-sm font-medium text-slate-700">
                                    Email
                                </label>

                                <div className="relative mt-1.5">
                                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleOnChange}
                                        placeholder="you@company.com"
                                        required
                                        className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-3 text-sm text-slate-900 shadow-inner outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/15"
                                    />
                                </div>
                            </div>

                         
                            <div>
                                <label className="block text-sm font-medium text-slate-700">
                                    Password
                                </label>

                                <div className="relative mt-1.5">
                                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleOnChange}
                                        placeholder="••••••••"
                                        required
                                        className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-3 text-sm text-slate-900 shadow-inner outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/15"
                                    />
                                </div>
                            </div>

                            
                            {error && (
                                <div className="text-red-500 text-sm bg-red-100 p-2 rounded-lg">
                                    {error}
                                </div>
                            )}

                          
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:bg-indigo-500"
                            >
                                {loading ? (
                                    <span className="loading loading-spinner loading-sm"></span>
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm text-slate-600">
                            Don&apos;t have an account?{" "}
                            <Link
                                to="/signup"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
