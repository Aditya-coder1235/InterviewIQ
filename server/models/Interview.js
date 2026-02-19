const mongoose = require("mongoose");

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
                improvement: {
                    type: String,
                    default: ""
                },
                score: {
                    type: Number,
                    min: 0,
                    max: 10,
                    default: 0
                }
            }
        ],

        overallScore: {
            type: Number,
            default: 0
        },

        status: {
            type: String,
            enum: ["started", "completed"],
            default: "started"
        }
    },
    { timestamps: true }
);

const Interview = mongoose.model("Interview", interviewSchema);
module.exports = Interview;
