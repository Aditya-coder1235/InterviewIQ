const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

exports.generateQuestions = async (role) => {
    try {
        const prompt = `
Generate 5 interview questions for ${role}.
Return ONLY JSON array like:
[
  { "question": "..." },
  { "question": "..." }
]
`;

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
        });

        const text = response.choices[0].message.content;

        return JSON.parse(text);

    } catch (error) {
        console.error("OpenAI Question Error:", error);
        return [];
    }
};

exports.evaluateAnswer = async (question, answer) => {
    try {
        const prompt = `
Evaluate this answer.

Question: ${question}
Answer: ${answer}

Return ONLY JSON:
{
  "score": number (0-10),
  "feedback": "short explanation"
}
`;

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.5,
        });

        return JSON.parse(response.choices[0].message.content);

    } catch (error) {
        console.error("OpenAI Evaluation Error:", error);
        return { score: 0, feedback: "Evaluation failed" };
    }
};
