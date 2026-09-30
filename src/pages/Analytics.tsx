import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const monthlyData = [
  { month: 'Jan', applications: 3 },
  { month: 'Feb', applications: 5 },
  { month: 'Mar', applications: 8 },
  { month: 'Apr', applications: 12 },
  { month: 'May', applications: 18 },
  { month: 'Jun', applications: 24 },
]

const funnelData = [
  { stage: 'Applied', count: 24 },
  { stage: 'Assessment', count: 12 },
  { stage: 'Interview', count: 6 },
  { stage: 'Offer', count: 2 },
]

export default function Analytics() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Applications by Month</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" fill="#4F46E5" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Application Funnel</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={funnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="stage" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#6366F1" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}