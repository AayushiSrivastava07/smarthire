import { Home, Search, FileText, BarChart3, Settings, BriefcaseIcon, Brain } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Search, label: 'Find Jobs', path: '/jobs' },
  { icon: BriefcaseIcon, label: 'My Applications', path: '/applications' },
  { icon: Brain, label: 'Analyzer', path: '/analyzer' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: FileText, label: 'Settings', path: '/settings' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col p-4">
      <h1 className="text-xl font-bold text-indigo-600 mb-8 px-2">SmartHire</h1>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
              ${location.pathname === item.path
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}