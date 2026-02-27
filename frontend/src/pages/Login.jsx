import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

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
                "https://ai-interview-backend-0upj.onrender.com/api/auth/login",
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
        <div className="flex justify-center mt-20 md:mt-0 min-h-screen py-5 px-4 bg-gray-50">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl b md:text-3xl font-bold text-center text-blue-500 mb-6">
                    Welcome Back
                </h2>

                <form
                    className="space-y-5 flex flex-col"
                    onSubmit={handleSubmit}
                >
                    <fieldset className="flex flex-col">
                        <legend className="text-sm md:text-xs font-semibold mb-1">
                            Email
                        </legend>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}
                            required
                        />
                    </fieldset>

                    <fieldset className="flex flex-col">
                        <legend className="text-sm md:text-xs font-semibold mb-1">
                            Password
                        </legend>
                        <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            name="password"
                            value={formData.password}
                            onChange={handleOnChange}
                            required
                        />
                    </fieldset>

                    {error && (
                        <div className="text-red-500 text-sm bg-red-100 p-2 rounded-md">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full c py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                            "Login"
                        )}
                    </button>

                    <p className="text-center mt-2 text-sm">
                        Don't have an account?{" "}
                        <a
                            href="/signup"
                            className="text-blue-700 font-semibold hover:underline"
                        >
                            Signup
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
