import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

const userSkills = ['react', 'javascript', 'html', 'css', 'git']
const knownSkills = ['react', 'javascript', 'typescript', 'html', 'css', 'node.js', 'mongodb', 'sql', 'java', 'python', 'git', 'docker', 'nextjs', 'jest', 'express']

function analyzeJob(jd: string) {
  const lower = jd.toLowerCase()
  const jdSkills = knownSkills.filter(skill => lower.includes(skill))
  const matched = jdSkills.filter(s => userSkills.includes(s))
  const missing = jdSkills.filter(s => !userSkills.includes(s))
  const score = jdSkills.length === 0 ? 0 : Math.round((matched.length / jdSkills.length) * 100)
  return { score, matched, missing }
}

export default function Analyzer() {
  const [jd, setJd] = useState('')
  const [result, setResult] = useState<null | { score: number; matched: string[]; missing: string[] }>(null)

  const handleAnalyze = () => {
    if (jd.trim()) setResult(analyzeJob(jd))
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Job Match Analyzer</h2>
      <p className="text-gray-500 mb-6">Paste a job description to see how well your skills match.</p>

      <textarea
        rows={6}
        placeholder="Paste job description here..."
        value={jd}
        onChange={(e) => setJd(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300 mb-4"
      />

      <button
        onClick={handleAnalyze}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700"
      >
        Analyze Job
      </button>

      {result && (
        <div className="mt-8">
          <div className="text-center mb-6">
            <p className="text-6xl font-bold text-indigo-600">{result.score}%</p>
            <p className="text-gray-500 mt-1">Match Score</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4">
              <h4 className="font-semibold text-green-700 mb-3">✅ Matched Skills</h4>
              {result.matched.length === 0 && <p className="text-sm text-gray-400">None</p>}
              {result.matched.map(s => (
                <div key={s} className="flex items-center gap-2 text-sm text-green-700 mb-1">
                  <CheckCircle size={14} /> {s}
                </div>
              ))}
            </div>

            <div className="bg-red-50 rounded-xl p-4">
              <h4 className="font-semibold text-red-700 mb-3">⚠️ Missing Skills</h4>
              {result.missing.length === 0 && <p className="text-sm text-gray-400">None</p>}
              {result.missing.map(s => (
                <div key={s} className="flex items-center gap-2 text-sm text-red-700 mb-1">
                  <AlertCircle size={14} /> {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
