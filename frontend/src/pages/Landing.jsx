import React from "react";
import { Play } from "lucide-react";
import { Brain } from "lucide-react";
import { Mic } from "lucide-react";
import { ListChevronsUpDown } from "lucide-react";
import { CirclePile } from "lucide-react";
import { Medal } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
    ArrowRight,
    BarChart3,
    Bot,
    History,
    MessageSquareText,
    Mic2,
    Sparkles,
    Zap,
} from "lucide-react";

const features = [
    {
        title: "AI Generated Questions",
        description:
            "Role-aware prompts that mirror real hiring loops—behavioral, technical, and follow-ups.",
        icon: Bot,
    },
    {
        title: "Real Interview Experience",
        description:
            "Timed flow, natural pacing, and structure that feels like talking to a real interviewer.",
        icon: Mic2,
    },
    {
        title: "Instant Feedback",
        description:
            "Actionable scoring on clarity, depth, and confidence with highlights you can improve fast.",
        icon: Zap,
    },
    {
        title: "Interview History",
        description:
            "Track sessions over time, compare scores, and revisit transcripts when you prep again.",
        icon: History,
    },
];

const steps = [
    {
        step: "1",
        title: "Start Interview",
        body: "Pick your role and stack. We tailor the session to match what recruiters actually ask.",
    },
    {
        step: "2",
        title: "Answer Questions",
        body: "Move through realistic prompts with a calm interface—focus on your answers, not the UI.",
    },
    {
        step: "3",
        title: "Get AI Feedback",
        body: "See strengths, gaps, and next steps instantly so every session compounds into progress.",
    },
];


const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#features", label: "Features" },
    { to: "/#how-it-works", label: "How it Works" },
];

const Landing = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    return (
        <div>
            <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link
                        to="/"
                        className="shrink-0"
                        onClick={() => setOpen(false)}
                    >
                        <img src="/logo.png" alt="" className="h-12 md:h-15" />
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((l) => (
                            <a
                                key={l.label}
                                href={l.to}
                                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 md:flex">
                        <Link
                            to="/login"
                            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-500/30 transition hover:bg-indigo-500"
                        >
                            Sign up
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="inline-flex rounded-lg p-2 text-slate-700 md:hidden"
                        aria-label={open ? "Close menu" : "Open menu"}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {open && (
                    <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.to}
                                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    onClick={() => setOpen(false)}
                                >
                                    {l.label}
                                </a>
                            ))}
                            <hr className="my-2 border-slate-100" />
                            <Link
                                to="/login"
                                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                onClick={() => setOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="rounded-lg bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
                                onClick={() => setOpen(false)}
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 via-white to-white">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/60 via-transparent to-transparent blur-3xl"
                />
                <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
                            <Sparkles className="h-3.5 w-3.5" aria-hidden />
                            Built for serious interview prep
                        </div>
                        <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Practice AI Interviews and Get Instant Feedback
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                            Ship confident answers with a polished prep
                            flow—structured sessions, crisp scoring, and history
                            that keeps you improving every week.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                            <Link
                                to="/interview"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 sm:w-auto"
                            >
                                Start Interview
                                <ArrowRight className="h-4 w-4" aria-hidden />
                            </Link>
                            <a
                                href="#features"
                                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                        <div className="mt-12 grid gap-4 sm:grid-cols-3">
                            {[
                                { k: "Sessions run", v: "10k+" },
                                { k: "Avg. score lift", v: "+18%" },
                                { k: "Time to first prep", v: "< 2 min" },
                            ].map((s) => (
                                <div
                                    key={s.k}
                                    className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-4 text-left shadow-sm backdrop-blur"
                                >
                                    <p className="text-2xl font-semibold tracking-tight text-slate-900">
                                        {s.v}
                                    </p>
                                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                                        {s.k}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section
                    id="features"
                    className="scroll-mt-20 border-b border-slate-100 py-16 sm:py-20"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                                Features
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                Everything you need to interview like it is the
                                real thing
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                                A focused toolkit—no clutter—so you can
                                rehearse, review, and repeat on a tight
                                schedule.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map((f) => (
                                <article
                                    key={f.title}
                                    className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
                                >
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 transition group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-600">
                                        <f.icon
                                            className="h-5 w-5"
                                            aria-hidden
                                        />
                                    </span>
                                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                        {f.title}
                                    </h3>
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                                        {f.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="how-it-works"
                    className="scroll-mt-20 bg-slate-50 py-16 sm:py-20"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                                    How it works
                                </p>
                                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                    Three calm steps from warm-up to confident
                                    delivery
                                </h2>
                                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                                    We keep the loop tight: start fast, answer
                                    with intent, and leave with a clear
                                    improvement plan.
                                </p>
                                <div className="mt-8 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex">
                                    <BarChart3
                                        className="h-9 w-9 shrink-0 text-indigo-600"
                                        aria-hidden
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">
                                            Insightful scoring
                                        </p>
                                        <p className="text-xs text-slate-600">
                                            Rubrics tuned for hiring signals—not
                                            generic word counts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ol className="space-y-4">
                                {steps.map((s, i) => (
                                    <li
                                        key={s.step}
                                        className="relative flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow-md shadow-indigo-500/30">
                                            {s.step}
                                        </span>
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                Step {s.step}
                                            </p>
                                            <h3 className="mt-0.5 text-lg font-semibold text-slate-900">
                                                {s.title}
                                            </h3>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                                {s.body}
                                            </p>
                                        </div>
                                        {i < steps.length - 1 && (
                                            <span
                                                aria-hidden
                                                className="absolute -bottom-3 left-[2.25rem] hidden h-6 w-px bg-gradient-to-b from-indigo-200 to-transparent sm:block"
                                            />
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>

                <div className=" text-center mt-10 h-70 w-[80%] m-auto mb-10 rounded-3xl c flex flex-col justify-center items-center gap-3">
                    <h1 className=" text-xl md:text-4xl font-bold text-white">
                        Ready to Ace Your Next Interview ?{" "}
                    </h1>
                    <p className="text-white ">
                        Start practice today and boost your confidence for
                        tommorows opportunities.{" "}
                    </p>
                    <button
                        className="btn mt-2 text-blue-500"
                        onClick={() => navigate("/signup")}
                    >
                        <Medal size={15} className="text-black" />
                        Start your Success Story
                    </button>
                </div>
            </section>

            <footer className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-sm space-y-3">
                            <img
                                src="/logo.png"
                                alt=""
                                className="h-12 md:h-15"
                            />

                            <p className="text-sm leading-relaxed text-slate-600">
                                Practice realistic interviews, sharpen your
                                answers, and ship confident performance with
                                instant AI feedback.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Product
                                </p>
                                <ul className="mt-3 space-y-2 text-sm">
                                    <li>
                                        <a
                                            href="#features"
                                            className="text-slate-600 hover:text-indigo-600"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#how-it-works"
                                            className="text-slate-600 hover:text-indigo-600"
                                        >
                                            How it works
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            to="/signup"
                                            className="text-slate-600 hover:text-indigo-600"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Account
                                </p>
                                <ul className="mt-3 space-y-2 text-sm">
                                    <li>
                                        <Link
                                            to="/login"
                                            className="text-slate-600 hover:text-indigo-600"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/signup"
                                            className="text-slate-600 hover:text-indigo-600"
                                        >
                                            Sign up
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="text-slate-600 hover:text-indigo-600"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Legal
                                </p>
                                <ul className="mt-3 space-y-2 text-sm">
                                    <li>
                                        <span className="cursor-default text-slate-600">
                                            Privacy
                                        </span>
                                    </li>
                                    <li>
                                        <span className="cursor-default text-slate-600">
                                            Terms
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="mt-10 border-t border-slate-200 pt-8 text-center text-xs text-slate-500 sm:text-left">
                        © {new Date().getFullYear()} AI Interview. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
