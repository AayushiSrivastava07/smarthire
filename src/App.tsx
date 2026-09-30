import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashboardLayout from './layouts/DashboardLayout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Jobs from './pages/Jobs'
import Applications from './pages/Applications'
import Analyzer from './pages/Analyzer'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/analyzer" element={<Analyzer />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

