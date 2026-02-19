const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        role: {
            type: String,
            required: true,
            enum: ["Frontend", "Backend", "MERN"]
        },

        questions: [
            {
                question: {
                    type: String,
                    required: true
                },
                answer: {
                    type: String,
                    default: ""
                },
                feedback: {
                    type: String,
                    default: ""
                },
                score: {
                    type: Number,
                    min: 0,
                    max: 10
                }
            }
        ],

        overallScore: {
            type: Number,
            min: 0,
            max: 10
        }
    },
    { timestamps: true }
);

const Interview = mongoose.model("Interview", interviewSchema);
module.exports = Interview;
