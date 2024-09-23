import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics';
import History from './pages/History'
import Reports from './pages/Reports';
import Map from './pages/Map'


export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to="/dashboard" />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/history' element={<History />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/map' element={<Map />} />

      </Routes>
    </Router>
  )
}