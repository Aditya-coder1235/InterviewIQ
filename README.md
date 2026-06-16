# intervAI — AI-Powered Interview Prep Platform

intervAI is a full-stack MERN application that helps developers practice technical interviews. Users select a role, answer 5 AI-generated questions, and receive an overall score and detailed feedback powered by the OpenAI API.

🔗 **Live Demo:** https://interview-iq-puce.vercel.app/  
⭐ **GitHub:** https://github.com/Aditya-coder1235/InterviewIQ

---

## Features

- **JWT Authentication** — Secure signup and login with JSON Web Tokens
- **Role-Based Interviews** — Choose from Frontend, Backend, or MERN stack
- **AI-Generated Questions** — 5 unique questions generated per session via OpenAI API
- **Answer Evaluation** — AI reviews each answer and generates an overall score and feedback
- **Dashboard** — Track total interviews completed at a glance

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT (JSON Web Tokens) |
| AI | OpenAI API |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- OpenAI API key

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Aditya-coder1235/InterviewIQ.git
cd InterviewIQ
```

2. **Install dependencies**

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. **Set up environment variables**

Create a `.env` file in the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
```

4. **Run the application**

```bash
# Start backend (from server folder)
npm run dev

# Start frontend (from client folder)
npm start
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How It Works

1. **Sign up / Log in** — Create an account or log in with JWT-based authentication
2. **Dashboard** — View your total interview count and start a new interview
3. **Select Role** — Choose Frontend, Backend, or MERN
4. **Answer Questions** — Get 5 AI-generated questions and type your answers one by one
5. **Get Feedback** — Submit and receive an AI-generated score and detailed feedback

---

## Project Structure

```
InterviewIQ/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Landing, Login, Signup, Dashboard, Interview, Results
│   │   └── App.js
├── backend/                 # Node.js + Express backend
│   ├── routes/             # Auth and interview routes
│   ├── models/             # MongoDB models (User, Interview)
│   ├── middleware/         # JWT auth middleware
│   ├── controllers/        # Route logic
│   └── app.js
└── README.md
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `OPENAI_API_KEY` | Your OpenAI API key |
| `PORT` | Backend server port (default: 5000) |

---

## Screenshots

> Add screenshots of your Landing Page, Dashboard, Interview, and Results pages here.

---

## Future Improvements

- Add difficulty levels (beginner, intermediate, advanced)
- Voice-based answer input
- Interview history with detailed past results
- Leaderboard / community scores
- More roles (DevOps, Data Science, System Design)

---

## Author

**Aditya** — [@Aditya-coder1235](https://github.com/Aditya-coder1235)

---

## License

This project is open source and available under the [MIT License](LICENSE).