const stats = [
  { title: 'Applications', value: '24', color: 'bg-indigo-50 text-indigo-600' },
  { title: 'Saved Jobs', value: '8', color: 'bg-green-50 text-green-600' },
  { title: 'Interviews', value: '4', color: 'bg-yellow-50 text-yellow-600' },
  { title: 'Offers', value: '2', color: 'bg-pink-50 text-pink-600' },
]

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Good morning, Aayushi 👋</h2>
      <p className="text-gray-500 mb-6">Track your job search in one place.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className={`rounded-xl p-5 ${stat.color}`}>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-5 border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-4">Recent Applications</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 text-left border-b">
              <th className="pb-2">Company</th>
              <th className="pb-2">Role</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { company: 'JTG', role: 'Software Developer', status: 'Assessment' },
              { company: 'TCS', role: 'Frontend Developer', status: 'Applied' },
              { company: 'Wipro', role: 'Engineer', status: 'Interview' },
            ].map((app) => (
              <tr key={app.company} className="border-b last:border-0">
                <td className="py-3 font-medium">{app.company}</td>
                <td className="py-3 text-gray-500">{app.role}</td>
                <td className="py-3">
                  <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full text-xs">
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}