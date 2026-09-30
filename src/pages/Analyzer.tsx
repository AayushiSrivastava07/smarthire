import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  BarChart3,
  Sparkles,
} from "lucide-react";

const userSkills = [
  "react",
  "javascript",
  "html",
  "css",
  "git",
  "python",
  "sql",
  "java",
];

const knownSkills = [
  "react",
  "javascript",
  "typescript",
  "html",
  "css",
  "node.js",
  "mongodb",
  "sql",
  "java",
  "python",
  "git",
  "docker",
  "nextjs",
  "jest",
  "express",
  "fastapi",
  "pandas",
  "matplotlib",
  "tailwind",
];

function analyzeJob(jd: string) {
  const lower = jd.toLowerCase();

  const jdSkills = knownSkills.filter((skill) =>
    lower.includes(skill)
  );

  const matched = jdSkills.filter((skill) =>
    userSkills.includes(skill)
  );

  const missing = jdSkills.filter(
    (skill) => !userSkills.includes(skill)
  );

  const score =
    jdSkills.length === 0
      ? 0
      : Math.round((matched.length / jdSkills.length) * 100);

  const coverage = score;

  return {
    score,
    coverage,
    matched,
    missing,
    totalSkills: jdSkills.length,
  };
}

export default function Analyzer() {
  const [jd, setJd] = useState("");

  const [result, setResult] = useState<{
    score: number;
    coverage: number;
    matched: string[];
    missing: string[];
    totalSkills: number;
  } | null>(null);

  const handleAnalyze = () => {
    if (!jd.trim()) return;

    setResult(analyzeJob(jd));
  };

  const handleClear = () => {
    setJd("");
    setResult(null);
  };

  const recommendations = result
    ? result.missing.slice(0, 4)
    : [];

  return (
    <div className="max-w-4xl space-y-6">

      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Sparkles
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold text-gray-900">
            Job Match Analyzer
          </h2>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Paste a job description to see how closely it matches
          your SmartHire profile skills.
        </p>
      </div>

      {/* Input Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <label
          htmlFor="job-description"
          className="mb-2 block text-sm font-semibold text-gray-800"
        >
          Job Description
        </label>

        <textarea
          id="job-description"
          rows={8}
          placeholder="Example: We are looking for a Software Developer with experience in React, JavaScript, SQL, Python and Git..."
          value={jd}
          onChange={(e) => setJd(e.target.value)}
          className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <div className="mt-4 flex flex-wrap gap-3">

          <button
            type="button"
            onClick={handleAnalyze}
            disabled={!jd.trim()}
            className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Analyze Job
          </button>

          {jd && (
            <button
              type="button"
              onClick={handleClear}
              className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              Clear
            </button>
          )}

        </div>
      </div>

      {/* Empty State */}
      {!result && (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">

          <BarChart3
            size={42}
            className="mx-auto mb-4 text-gray-400"
          />

          <h3 className="font-semibold text-gray-700">
            Ready to analyze
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Paste a job description above and click
            <span className="font-medium text-gray-700">
              {" "}Analyze Job
            </span>.
          </p>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-6">

          {/* Score */}
          <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">

            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Overall Match Score
                </p>

                <p className="mt-2 text-6xl font-bold text-indigo-600">
                  {result.score}%
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {result.matched.length} of{" "}
                  {result.totalSkills} detected skills matched
                </p>
              </div>

              <div className="w-full max-w-md">

                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-gray-600">
                    Skill Coverage
                  </span>

                  <span className="font-semibold text-indigo-600">
                    {result.coverage}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                    style={{ width: `${result.coverage}%` }}
                  />
                </div>

                <p className="mt-3 text-xs text-gray-400">
                  Score is based on detected technical skills in the
                  job description.
                </p>
              </div>

            </div>
          </div>

          {/* Skill Summary */}
          <div className="grid gap-5 md:grid-cols-2">

            {/* Matched */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-6">

              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2
                  size={20}
                  className="text-green-600"
                />

                <h3 className="font-semibold text-green-800">
                  Matched Skills
                </h3>

                <span className="ml-auto rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-green-700">
                  {result.matched.length}
                </span>
              </div>

              {result.matched.length === 0 ? (
                <p className="text-sm text-green-700">
                  No matching skills detected.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {result.matched.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-medium capitalize text-green-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Missing */}
            <div className="rounded-2xl border border-red-100 bg-red-50 p-6">

              <div className="mb-4 flex items-center gap-2">
                <XCircle
                  size={20}
                  className="text-red-600"
                />

                <h3 className="font-semibold text-red-800">
                  Missing Skills
                </h3>

                <span className="ml-auto rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-red-700">
                  {result.missing.length}
                </span>
              </div>

              {result.missing.length === 0 ? (
                <p className="text-sm text-red-700">
                  No missing skills detected.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {result.missing.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-medium capitalize text-red-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Recommendations */}
          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">

            <div className="mb-4 flex items-center gap-2">
              <Lightbulb
                size={20}
                className="text-amber-600"
              />

              <div>
                <h3 className="font-semibold text-amber-900">
                  Recommended Skills
                </h3>

                <p className="text-xs text-amber-700">
                  Skills worth learning or highlighting for this role.
                </p>
              </div>
            </div>

            {recommendations.length === 0 ? (
              <p className="text-sm text-amber-800">
                Your profile covers all detected skills in this
                job description.
              </p>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {recommendations.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-xs font-bold text-amber-700">
                      {index + 1}
                    </span>

                    <span className="text-sm font-medium capitalize text-gray-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Analysis Summary */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <h3 className="mb-4 font-semibold text-gray-900">
              Analysis Summary
            </h3>

            <div className="grid gap-4 sm:grid-cols-3">

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Skills Found in JD
                </p>

                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {result.totalSkills}
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-xs text-green-700">
                  Skills Matched
                </p>

                <p className="mt-1 text-2xl font-bold text-green-700">
                  {result.matched.length}
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-4">
                <p className="text-xs text-red-700">
                  Skills Missing
                </p>

                <p className="mt-1 text-2xl font-bold text-red-700">
                  {result.missing.length}
                </p>
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
}
