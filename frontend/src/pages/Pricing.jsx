import React from "react";
import { Check, Clock, Info } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing = () => {
   
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-black text-slate-900 mb-4">
                            Plans & Pricing
                        </h1>
                    </div>
                    <div className="bg-blue-600 w-70 rounded-xl m-auto p-10 mb-20 flex flex-col lg:flex-row items-center justify-between text-white shadow-2xl shadow-blue-200">
                        <div className="mb-6 lg:mb-0 text-center lg:text-left">
                            <h2 className="text-2xl font-black mb-2">
                                Early Access: 100% Free
                            </h2>
                            <p className="text-blue-100 opacity-80">
                                We are currently in Beta. All features are free
                                for the first 1,000 users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Pricing;
