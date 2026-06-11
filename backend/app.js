const express = require('express');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDb = require('./config/db');
const OpenAI = require("openai");


const port = process.env.PORT || 5000;

connectDb()
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

const allowedOrigins = [
    "http://localhost:5173",
    "https://interview-iq-puce.vercel.app"
];

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());

const authRoutes = require('./routes/authRoutes');
const interviewRoutes=require('./routes/interviewRoutes')
app.use('/api/auth', authRoutes);
app.use('/api/interview', interviewRoutes);


app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
