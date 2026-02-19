import React from "react";
import { Brain, Sparkles, Target, Zap, ShieldCheck, Heart } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-white">
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                            We’re Humanizing <br />
                            <span className="text-blue-400">
                                Artificial Intelligence.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                            HireAI was born from a simple observation: technical
                            interviews are often broken, biased, and stressful.
                            We built a chatbot that doesn't just "test" you—it
                            understands you.
                        </p>
                    </div>
                </section>

                <section className="py-24 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4 text-center">
                            <div className="w-12 m-auto h-12 bg-blue-50 flex items-center justify-center rounded-2xl text-blue-600">
                                <Brain size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Cognitive Feedback
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our AI doesn't just look for keywords. It
                                analyzes the logic, structure, and sentiment
                                behind every chat response.
                            </p>
                        </div>
                        <div className="space-y-4 text-center">
                            <div className="w-12 m-auto h-12 bg-purple-50 flex items-center justify-center rounded-2xl text-purple-600">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Zero Bias
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                By focusing on text-based conversational
                                patterns, we eliminate visual and auditory
                                biases, ensuring a level playing field.
                            </p>
                        </div>
                        <div className="space-y-4 text-center">
                            <div className="w-12 m-auto h-12 bg-green-50 flex items-center justify-center rounded-2xl text-green-600">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Instant Insights
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                No more waiting for weeks. Get a full technical
                                and behavioral breakdown within seconds of
                                finishing the chat.
                            </p>
                        </div>
                    </div>
                </section>

               
            </div>
            <Footer/>
        </div>
    );
};

export default About;
