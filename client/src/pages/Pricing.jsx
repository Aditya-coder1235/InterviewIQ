import React from "react";
import { Check, Clock, Info } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing = () => {
    const tiers = [
        {
            name: "Starter",
            price: "0",
            description: "Perfect for students and early-stage startups.",
            features: [
                "5 AI Interviews / month",
                "Basic Text Analysis",
                "Shareable Results URL",
                "Email Support",
            ],
            status: "Available Now",
        },
        {
            name: "Professional",
            price: "49",
            description: "For scaling teams needing deeper insights.",
            features: [
                "Unlimited Interviews",
                "Deep Skills Mapping",
                "Custom Question Sets",
                "Priority Support",
            ],
            status: "Coming Soon",
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Enterprise-grade security and integration.",
            features: [
                "SSO Integration",
                "Custom AI Fine-tuning",
                "Dedicated Recruiter Dashboard",
                "API Access",
            ],
            status: "Coming Soon",
        },
    ];

    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-black text-slate-900 mb-4">
                            Plans & Pricing
                        </h1>
                    </div>
                    <div className="bg-blue-600 w-70 rounded-xl m-auto p-10 mb-20 flex flex-col lg:flex-row items-center justify-between text-white shadow-2xl shadow-blue-200">
                        <div className="mb-6 lg:mb-0 text-center lg:text-left">
                            <h2 className="text-3xl font-black mb-2">
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
