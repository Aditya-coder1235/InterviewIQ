import { useState } from "react";

const data = [
    {
        id: 1,
        title: "AI-Powered Experience",
        desc: "Simulates real technical interviews with structured questions and timers.",
    },
    {
        id: 2,
        title: "Personalized Feedback",
        desc: "Get instant scoring and improvement suggestions.",
    },
    {
        id: 3,
        title: "Industry-Focused Questions",
        desc: "MERN, Node.js, React, MongoDB and more.",
    },
    {
        id: 4,
        title: "Track Your Growth",
        desc: "Detailed reports and progress tracking.",
    },
];

export default function A() {
    const [active, setActive] = useState(1);

    return (
        <div className="min-h-screen flex flex-col justify-center ">
            <h2 className="text-center text-4xl font-bold b pt-15"> Why IntervAI</h2>

            <div className="flex gap-50 p-10 m-auto w-200 bg-gray-00 rounded-2xl">
                <div className="flex flex-col gap-6">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            onMouseEnter={() => setActive(item.id)}
                            className={`text-4xl font-bold cursor-pointer transition-all duration-300 
            ${active === item.id ? "b scale-125" : "text-gray-400"}`}
                        >
                            {item.id}
                        </div>
                    ))}
                </div>

                <div className="max-w-md transition-all duration-500">
                    {data.map(
                        (item) =>
                            active === item.id && (
                                <div key={item.id}>
                                    <h2 className="text-4xl font-bold mb-3">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ),
                    )}
                </div>
            </div>
        </div>
    );
}
