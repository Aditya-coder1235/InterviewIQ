import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    LogOut,
    Menu,
    PanelLeftClose,
    UserRound,
    X,
    History,
    BarChart3,
    Play,
    TrendingUp,
    Eye,
} from "lucide-react";
// import { BrandLogo } from "../components/BrandLogo";
import axios from "axios";
import { API_URL } from "../config/api";
import { ToastContainer, toast } from "react-toastify";



export default function DashboardPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);

    const [history, setHistory] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    const getHistory = async () => {
        try {
            // setLoading(true);
            let res = await axios.get(`${API_URL}/api/interview/history`, {
                withCredentials: true,
            });
            console.log(res.data);
            setHistory(res.data);
            // navigate(`/interview/${res.data.interviewId}`);
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    };
    useEffect(() => {
        getHistory();
    }, []);

    const navigate = useNavigate();

    const nav = [
        { to: "/home", end: true, label: "Dashboard", icon: LayoutDashboard },
        { to: "history", label: "Interview History", icon: History },
    ];

    // console.log(history)

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
            isActive
                ? "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`;

    const createInterview = async () => {
        try {
            setLoading(true);

            const res = await axios.post(
                `${API_URL}/api/interview/start`,
                { role },
                { withCredentials: true },
            );

            navigate(`/interview/${res.data.interviewId}`);
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong",
            );
        } finally {
            setLoading(false);
        }
    };

    const userLogout = async () => {
        try {
            let res = await axios.post(
                `${API_URL}/api/auth/logout`,
                {},
                { withCredentials: true },
            );
            // console.log(res.data);
            localStorage.removeItem("user");
            localStorage.removeItem("userId");
            localStorage.removeItem("email");
            navigate("/login");
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!role) {
            toast.error("Please select role");
            return;
        }

        createInterview();
    };

    const name = localStorage.getItem("name");

    return (
        <div className="min-h-dvh bg-slate-50 font-sans text-slate-900">
            <ToastContainer position="top-right" autoClose={3000} />

            {sidebarOpen && (
                <button
                    className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-slate-200 bg-white shadow-xl transition-transform duration-200 ease-out md:translate-x-0 ${
                    sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                }`}
            >
                <div className="flex h-16 items-center justify-between border-b border-slate-100 px-4">
                    <Link to="/home">
                        <img src="/logo.png" alt="" className="h-12 md:h-15" />
                    </Link>

                    <button
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="flex flex-col gap-1 p-3">
                    {nav.map((item) =>
                        item.to === "history" ? (
                            <button
                                key={item.to}
                                onClick={() =>
                                    document
                                        .getElementById("history")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            >
                                <item.icon className="h-4 w-4 shrink-0" />
                                {item.label}
                            </button>
                        ) : (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                className={linkClass}
                            >
                                <item.icon className="h-4 w-4 shrink-0" />
                                {item.label}
                            </NavLink>
                        ),
                    )}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 p-3">
                    <button
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-700"
                        onClick={() => userLogout()}
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </button>
                </div>
            </aside>

            <div className="md:pl-72">
                <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur md:px-8">
                    <button
                        className="inline-flex rounded-lg border border-slate-200 bg-white p-2 text-slate-700 shadow-sm md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                    </button>

                    <div className="hidden items-center gap-2 text-xs font-medium text-slate-500 md:flex">
                        <PanelLeftClose className="h-4 w-4" />
                        Workspace
                    </div>

                    <div className="ml-auto flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-xs font-bold text-white">
                            {name.slice(0, 1)}
                        </span>
                    </div>
                </header>

                <main className="px-4 py-6 sm:px-6 md:px-8 md:py-8">
                    <div className="mx-auto max-w-5xl space-y-8">
                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                                Welcome back, {name}
                            </h1>
                            <p className="mt-1 text-sm text-slate-600">
                                Start a new AI interview session.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-slate-600">
                                        Total Interviews
                                    </p>
                                    <span className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                                        <BarChart3 className="h-4 w-4" />
                                    </span>
                                </div>
                                <p className="mt-3 text-3xl font-semibold">
                                    {history.length}
                                </p>
                                <p className="text-xs pt-2">Last 30 days</p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-slate-600">
                                        Average Score
                                    </p>
                                    <span className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                                        <TrendingUp className="h-4 w-4" />
                                    </span>
                                </div>
                                <p className="mt-3 text-3xl font-semibold">
                                    {Math.floor((Math.random()*100)+1)}%
                                </p>
                                <p className="text-xs pt-2 text-green-600">
                                    +4% vs last week
                                </p>
                            </div>
                        </div>

                        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-indigo-200 bg-gradient-to-b from-white to-indigo-50/40 px-6 py-12 text-center shadow-inner">
                            {!showForm ? (
                                <>
                                    <p className="text-sm font-semibold text-blue-600">
                                        Next session
                                    </p>
                                    <h2 className="text-xl font-bold text-slate-900">
                                        Ready for your next interview?
                                    </h2>
                                    <p className="pt-2 opacity-70">
                                        Launch a fresh mock interview. You will
                                        get structured Questions, <br />
                                        pacing cues, and a detailed scorecard at
                                        the end.
                                    </p>

                                    <button
                                        onClick={() => setShowForm(true)}
                                        className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-white font-semibold shadow-xl hover:bg-indigo-500"
                                    >
                                        <Play className="h-5 w-5" />
                                        Start New Interview
                                    </button>
                                </>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-4 w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg"
                                >
                                    <p className="mb-3 text-sm font-semibold text-gray-700">
                                        Select Interview Role
                                    </p>

                                    <select
                                        value={role}
                                        onChange={(e) =>
                                            setRole(e.target.value)
                                        }
                                        className="w-full p-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option value="">Select Role</option>
                                        <option value="Frontend">
                                            Frontend Developer
                                        </option>
                                        <option value="Backend">
                                            Backend Developer
                                        </option>
                                        <option value="MERN">MERN Stack</option>
                                    </select>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-medium flex justify-center items-center"
                                    >
                                        {loading ? "Starting..." : "Continue"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </main>

                <div
                    id="history"
                    className="mx-auto max-w-6xl space-y-6 text-center p-10"
                >
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                            Interview History
                        </h1>
                        <p className="mt-1 text-sm text-slate-600 sm:text-base">
                            Review past sessions, scores, and quick feedback
                            snapshots.
                        </p>
                    </div>

                    <div className=" overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm lg:block">
                        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                            <thead className="bg-slate-50/80">
                                <tr>
                                    <th className="px-6 py-3.5 font-semibold text-slate-700">
                                        Date
                                    </th>
                                    <th className="px-6 py-3.5 font-semibold text-slate-700">
                                        Questions
                                    </th>
                                    <th className="px-6 py-3.5 font-semibold text-slate-700">
                                        Score
                                    </th>
                                    <th className="px-6 py-3.5 font-semibold text-slate-700">
                                        Role
                                    </th>
                                    <th className="px-6 py-3.5 font-semibold text-slate-700">
                                        Status
                                    </th>
                                    <th className="px-6 py-3.5 font-semibold text-slate-700">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-100">
                                {history.map((r) => (
                                    <>
                                      
                                        <tr
                                            key={r._id}
                                            className="hover:bg-slate-50/60"
                                        >
                                            <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">
                                                {new Date(
                                                    r.createdAt,
                                                ).toLocaleDateString("en-IN")}
                                            </td>

                                            <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                                                {r.questions.length}
                                            </td>

                                            <td className="whitespace-nowrap px-6 py-4">
                                                <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                                                    {r.overallScore}
                                                </span>
                                            </td>

                                            <td className="max-w-md px-6 py-4 text-slate-600">
                                                {r.role}
                                            </td>

                                            <td className="max-w-md px-6 py-4 text-slate-600">
                                                {r.status}
                                            </td>

                                            <td className="whitespace-nowrap px-6 py-4">
                                                <button
                                                    onClick={() =>
                                                        setExpandedId(
                                                            expandedId === r._id
                                                                ? null
                                                                : r._id,
                                                        )
                                                    }
                                                    type="button"
                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-700"
                                                >
                                                    <Eye
                                                        className="h-3.5 w-3.5"
                                                        aria-hidden
                                                    />
                                                    View Questions
                                                </button>
                                            </td>
                                        </tr>

                                      
                                        {expandedId === r._id && (
                                            <tr>
                                                <td
                                                    colSpan="6"
                                                    className="bg-slate-50 px-6 py-5"
                                                >
                                                    <div className="space-y-3">
                                                        {r.questions.map(
                                                            (q, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="flex justify-between items-start bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
                                                                >
                                                                    <p className="text-sm text-slate-700">
                                                                        <span className="font-semibold mr-2">
                                                                            {index +
                                                                                1}
                                                                            .
                                                                        </span>
                                                                        {
                                                                            q.question
                                                                        }
                                                                    </p>

                                                                    <span
                                                                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                                                            q.score >
                                                                            0
                                                                                ? "bg-blue-100 text-blue-600"
                                                                                : "bg-red-100 text-red-500"
                                                                        }`}
                                                                    >
                                                                        {
                                                                            q.score
                                                                        }
                                                                    </span>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
