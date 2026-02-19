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
                "http://localhost:5000/api/auth/signup",
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
        <div className=" flex justify-center md:items-center min-h-screen  py-5">
            <div className="w-full max-w-md  md:shadow-xl md:rounded-2xl p-8 ">
                <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
                    Create Your Account
                </h2>

                <form
                    className="space-y-5 flex flex-col items-center"
                    onSubmit={handleSubmit}
                >
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            What is your name?
                        </legend>
                        <input
                            type="text"
                            className="input w-90"
                            placeholder="e.g. John Doe"
                            name="name"
                            value={formData.name}
                            onChange={handleOnChange}
                            required
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            What is your email?
                        </legend>
                        <input
                            type="email"
                            className="input w-90"
                            placeholder="you@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}
                            required
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            What is your password?
                        </legend>
                        <input
                            type="password"
                            className="input w-90"
                            placeholder="••••••••"
                            name="password"
                            value={formData.password}
                            onChange={handleOnChange}
                            required
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
                        className="btn  bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                            "Create Account"
                        )}
                    </button>
                    <p className="text-center mt-1 text-sm ">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-blue-700 font-semibold hover:underline "
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
