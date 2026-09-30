import { useState } from 'react'
import { MapPin, Bookmark } from 'lucide-react'

const jobsData = [
  { id: 1, company: 'JTG', role: 'Software Developer', location: 'Gurgaon', salary: '11-14 LPA', skills: ['React', 'Java', 'SQL'], type: 'Full Time' },
  { id: 2, company: 'TCS', role: 'Frontend Developer', location: 'Noida', salary: '8-12 LPA', skills: ['React', 'CSS', 'JavaScript'], type: 'Full Time' },
  { id: 3, company: 'Wipro', role: 'React Developer', location: 'Bangalore', salary: '10-15 LPA', skills: ['React', 'TypeScript', 'Git'], type: 'Full Time' },
  { id: 4, company: 'Infosys', role: 'UI Developer', location: 'Pune', salary: '7-10 LPA', skills: ['HTML', 'CSS', 'JavaScript'], type: 'Remote' },
]

export default function Jobs() {
  const [search, setSearch] = useState('')

  const filtered = jobsData.filter(job =>
    job.role.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.skills.some(s => s.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Jobs</h2>

      <input
        type="text"
        placeholder="🔍 Search job title, company or skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-6 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
      />

      <div className="grid gap-4">
        {filtered.length === 0 && (
          <p className="text-gray-400 text-center py-10">No jobs found. Try a different search.</p>
        )}
        {filtered.map(job => (
          <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{job.role}</h3>
                <p className="text-indigo-600 font-medium">{job.company}</p>
              </div>
              <Bookmark size={18} className="text-gray-400 cursor-pointer hover:text-indigo-600" />
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
              <MapPin size={14} />
              {job.location} • {job.type} • {job.salary}
            </div>
            <div className="flex gap-2 flex-wrap">
              {job.skills.map(skill => (
                <span key={skill} className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}