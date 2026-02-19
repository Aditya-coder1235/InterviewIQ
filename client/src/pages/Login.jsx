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
                "http://localhost:5000/api/auth/login",
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
        <div className=" flex justify-center md:items-center min-h-screen  py-5">
            <div className="w-full max-w-md  md:shadow-xl md:rounded-2xl p-8 ">
                <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
                    Welcome Back
                </h2>

                <form
                    className="space-y-5 flex flex-col items-center"
                    onSubmit={handleSubmit}
                >
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">email</legend>
                        <input
                            type="email"
                            className="input w-90"
                            placeholder="you@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">password</legend>
                        <input
                            type="password"
                            className="input w-90"
                            placeholder="••••••••"
                            name="password"
                            value={formData.password}
                            onChange={handleOnChange}
                        />
                    </fieldset>
                    {error && (
                        <div
                            role="alert"
                            className="alert alert-error alert-soft"
                        >
                            <span>{error}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn w-30 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                            "Login"
                        )}
                    </button>
                    <p className="text-center mt-1 text-sm ">
                        Don't have an account?{" "}
                        <a
                            href="/signup"
                            className="text-blue-700 font-semibold hover:underline "
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
