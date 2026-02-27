import React from "react";
import { Link } from "react-router";
import axios from "axios";

const Navbar = () => {
    let user = localStorage.getItem("user");

    const userLogout = async () => {
        try {
            let res = await axios.post(
                "https://ai-interview-backend-0upj.onrender.com/api/auth/logout",
                {},
                { withCredentials: true },
            );
            console.log(res.data);
            localStorage.removeItem("user");
            localStorage.removeItem("userId");
            localStorage.removeItem("email");
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    return (
        <nav className="flex h-16 border-b-gray-200 items-center gap- md:gap-40 justify-around">
            <div className="md:ms-12">
                <img src="/logo.png" alt="" className="h-15" />
            </div>
            <div className="flex md:gap-8 md:text-sm text-xs gap-2 ms-8 md:ms-0 md:font-semibold opacity-75 md:opacity-60">
                <Link to={"/home"} className="p">
                    Home
                </Link>
                <Link to={"/history"} className="p">
                    History
                </Link>
                <Link to={"/price"} className="p">
                    Pricing
                </Link>
                <Link to={"/about"} className="p">
                    About
                </Link>
                {user && (
                    <button
                        onClick={() => userLogout()}
                        className="cursor-pointer p"
                    >
                        Logout
                    </button>
                )}
            </div>
            <div className="flex md:gap-5 items-center">
                {/* <Link to={"/login"} className="font-semibold">
                  sign in
              </Link>
              <button
                  className="btn bg-blue-500 text-white"
                //   onClick={() => navigate("/signup")}
              >
                  Logout
              </button> */}
                <div className="flex items-center gap-5 ">
                    <h2 className="font-semibold hidden md:block ">
                        Welcome {user}!
                    </h2>
                    <div className="c md:h-10 h-6 w-6 md:w-10 rounded-full md:flex items-center justify-center hidden m">
                        <span className="text-xs md:text-xl font-bold text-white hidden md:block">
                            {user && user.charAt(0).toUpperCase()}
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
