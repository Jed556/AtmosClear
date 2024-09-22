import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/analytics' element={<div>Analytics</div>} />
        <Route path='/history' element={<div>History</div>} />
        <Route path='/reports' element={<div>Reports</div>} />
      </Routes>
    </Router>
  )
}