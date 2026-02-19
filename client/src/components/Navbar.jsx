import React from 'react'
import { Link } from 'react-router';

const Navbar = () => {

    let user=localStorage.getItem("user")

  return (
      <nav className="flex h-16 border-b-gray-200 items-center gap-40 justify-around">
          <div className="ms-25 text-xl font-bold text-blue-500">
              InterviewIQ
          </div>
          <div className="flex gap-8 font-semibold opacity-60">
              <Link to={"/home"}>Home</Link>
              <Link to={"/home"}>History</Link>
              <Link to={"/home"}>Pricing</Link>
              <Link to={"/home"}>About</Link>
          </div>
          <div className="flex gap-5 items-center">
              {/* <Link to={"/login"} className="font-semibold">
                  sign in
              </Link>
              <button
                  className="btn bg-blue-500 text-white"
                //   onClick={() => navigate("/signup")}
              >
                  Logout
              </button> */}
              <div className="flex items-center gap-5">
                  <h2 className="font-semibold">Welcome {user}!</h2>
                  <div className="c h-10 w-10 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-white ">
                          {user.charAt(0).toUpperCase()}
                      </span>
                  </div>
              </div>
          </div>
      </nav>

      
  );
}

export default Navbar
