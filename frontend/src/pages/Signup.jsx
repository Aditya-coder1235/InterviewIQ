import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        signupUser();
    };

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const signupUser = async () => {
        try {
            setLoading(true)
            let res = await axios.post(
                "https://interviewiq-zjne.onrender.com/api/auth/signup",
                formData,
                { withCredentials: true },
            );
            navigate('/login')

            // console.log(res.data);
        } catch (error) {
            console.log(error.response.data.message);
            setError(error.response.data.message);
        }finally{
            setLoading(false)
        }
    };
    return (
        <div className="flex justify-center mt-20 md:mt-0 md:items-center min-h-screen py-5 bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-500 mb-6">
                    Create Your Account
                </h2>

                <form
                    className="space-y-5 flex flex-col"
                    onSubmit={handleSubmit}
                >
                    <fieldset className="flex flex-col">
                        <legend className="text-sm md:text-xs font-semibold mb-1">
                            What is your name?
                        </legend>
                        <input
                            type="text"
                            className="input w-full md:w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g. John Doe"
                            name="name"
                            value={formData.name}
                            onChange={handleOnChange}
                            required
                        />
                    </fieldset>

                    <fieldset className="flex flex-col">
                        <legend className="text-sm md:text-xs font-semibold mb-1">
                            What is your email?
                        </legend>
                        <input
                            type="email"
                            className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}
                            required
                        />
                    </fieldset>

                    <fieldset className="flex flex-col">
                        <legend className="text-sm md:text-xs font-semibold mb-1">
                            What is your password?
                        </legend>
                        <input
                            type="password"
                            className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                            "Create Account"
                        )}
                    </button>

                    <p className="text-center mt-2 text-sm">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-blue-700 font-semibold hover:underline"
                        >
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
