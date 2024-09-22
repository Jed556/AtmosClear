import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard'
import History from './pages/History'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<div>Analytics</div>} />
        <Route path='/history' element={<History />} />
        <Route path='/reports' element={<div>Reports</div>} />
      </Routes>
    </Router>
  )
}