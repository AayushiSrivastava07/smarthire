import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  FileSearch,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: Briefcase,
      title: "Find Jobs",
      text: "Explore and organize job opportunities in one place.",
      link: "/jobs",
    },
    {
      icon: FileSearch,
      title: "Resume Analyzer",
      text: "Analyze your resume and identify useful skill matches.",
      link: "/analyzer",
    },
    {
      icon: BarChart3,
      title: "Track Applications",
      text: "Keep your applications, interviews and offers organized.",
      link: "/applications",
    },
    {
      icon: Sparkles,
      title: "Career Analytics",
      text: "Understand your job-search progress through simple insights.",
      link: "/analytics",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            SmartHire
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
              Features
            </a>

            <Link
              to="/jobs"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600"
            >
              Jobs
            </Link>

            <Link
              to="/analytics"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600"
            >
              Analytics
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700">
                <Sparkles size={16} />
                Smarter job searching
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Your career.
                <span className="block text-indigo-600">
                  Organized smarter.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                SmartHire helps you discover jobs, analyze your resume,
                track applications and understand your career progress from
                one simple dashboard.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700"
                >
                  Open Dashboard
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/jobs"
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Explore Jobs
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Job Tracking
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Resume Analysis
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Career Insights
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">SmartHire Dashboard</p>
                    <h2 className="mt-1 text-xl font-bold">Good morning 👋</h2>
                  </div>

                  <div className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="rounded-2xl bg-indigo-50 p-4">
                    <p className="text-2xl font-bold text-indigo-600">24</p>
                    <p className="mt-1 text-xs text-slate-600">Applications</p>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <p className="text-2xl font-bold text-emerald-600">8</p>
                    <p className="mt-1 text-xs text-slate-600">Saved Jobs</p>
                  </div>

                  <div className="rounded-2xl bg-amber-50 p-4">
                    <p className="text-2xl font-bold text-amber-600">4</p>
                    <p className="mt-1 text-xs text-slate-600">Interviews</p>
                  </div>

                  <div className="rounded-2xl bg-pink-50 p-4">
                    <p className="text-2xl font-bold text-pink-600">2</p>
                    <p className="mt-1 text-xs text-slate-600">Offers</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold">Recent Applications</h3>
                    <Link
                      to="/applications"
                      className="text-sm font-medium text-indigo-600"
                    >
                      View all
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {[
                      ["TCS", "Frontend Developer", "Applied"],
                      ["Wipro", "Software Engineer", "Interview"],
                      ["JTG", "Software Developer", "Assessment"],
                    ].map(([company, role, status]) => (
                      <div
                        key={company}
                        className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
                      >
                        <div>
                          <p className="font-semibold">{company}</p>
                          <p className="text-sm text-slate-500">{role}</p>
                        </div>

                        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Everything in one place
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Tools to manage your job search
              </h2>

              <p className="mt-4 text-slate-600">
                Discover jobs, improve your resume and keep track of every
                application without switching between multiple tools.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <Link
                    key={feature.title}
                    to={feature.link}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.text}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                      Open
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to manage your career smarter?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Start with your dashboard and keep your entire job search
              organized.
            </p>

            <Link
              to="/dashboard"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-900 hover:bg-slate-100"
            >
              Go to Dashboard
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SmartHire. All rights reserved.</p>
          <p>Built with React, TypeScript and Vite.</p>
        </div>
      </footer>
    </div>
  );
}