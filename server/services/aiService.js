const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

exports.generateQuestions = async (role, level) => {
    try {
        const prompt = `
    Generate 5 ${level} level interview questions for ${role}.
    Return only JSON array format.
    `;

        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: prompt,
        });

        const text = response.text;

        return JSON.parse(text);

    } catch (error) {
        console.error("Gemini Question Error:", error);
        return [];
    }
};

exports.evaluateAnswer = async (question, answer) => {
    try {
        const prompt = `
    Evaluate this answer.
    Question: ${question}
    Answer: ${answer}

    Give score out of 10 and short feedback.
    Return JSON format.
    `;

        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: prompt,
        });

        return JSON.parse(response.text);

    } catch (error) {
        console.error("Gemini Evaluation Error:", error);
        return { score: 0, feedback: "Evaluation failed" };
    }
};
