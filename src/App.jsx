import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#F3F4F6', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#0A192F', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Ghanshyam Bag</h1>
        <div>
          <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
          <Link to="/admin/login" style={{ color: 'white', textDecoration: 'none' }}>Admin</Link>
        </div>
      </nav>

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>404 - Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}
