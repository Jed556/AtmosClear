import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import History from './pages/History';
import Risks from './pages/Risks';
import Map from './pages/Map'


export default function App() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    localStorage.setItem('sidebarOpen', 'false');
  }

  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to="/dashboard" />} />


        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/history' element={<History />} />
        <Route path='/risks' element={<Risks />} />
        <Route path='/map' element={<Map />} />

      </Routes>
    </Router>
  )
}