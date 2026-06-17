import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', position: 'relative' }}>
      {/* 1. Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', backgroundColor: '#0A192F', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="https://via.placeholder.com/50" alt="Logo" style={{ borderRadius: '50%' }} />
          <h2 style={{ margin: 0 }}>Ghanshyam Bag</h2>
        </div>
        
        {/* 3-Dot Menu */}
        <div onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: 'pointer', fontSize: '28px' }}>⋮</div>
      </nav>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div style={{ position: 'absolute', right: '20px', background: 'white', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', zIndex: 100 }}>
          <Link to="/" style={{ display: 'block', padding: '5px', color: 'black' }}>Home</Link>
          <Link to="/gallery" style={{ display: 'block', padding: '5px', color: 'black' }}>Gallery</Link>
          <Link to="/admin/login" style={{ display: 'block', padding: '5px', color: 'black' }}>Admin Login</Link>
        </div>
      )}

      {/* 2. Floating Action Bar (WhatsApp, Call, Instagram) */}
      <div style={{ position: 'fixed', bottom: '20px', left: '20px', display: 'flex', gap: '10px' }}>
        <a href="https://wa.me/919876543210" style={{ background: '#25D366', padding: '10px', borderRadius: '50%', color: 'white' }}>WA</a>
        <a href="tel:+919876543210" style={{ background: '#007BFF', padding: '10px', borderRadius: '50%', color: 'white' }}>Call</a>
        <a href="https://instagram.com/yourprofile" style={{ background: '#E1306C', padding: '10px', borderRadius: '50%', color: 'white' }}>IG</a>
      </div>

      {/* 3. Catalog Section (Products) */}
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h2>हमारे बैग्स</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px' }}>
            <h3>स्टाइलिश लैपटॉप बैग</h3>
            <p>₹1,299</p>
            <a href="https://wa.me/919876543210?text=I want to buy this bag" style={{ background: '#25D366', color: 'white', padding: '8px', textDecoration: 'none', borderRadius: '5px' }}>WhatsApp Enquiry</a>
          </div>
        </div>
      </main>

      {/* 4. Footer */}
      <footer style={{ backgroundColor: '#f4f4f4', padding: '20px', textAlign: 'center' }}>
        <p>© 2026 Ghanshyam Bag | ट्रस्टेड शॉप</p>
      </footer>
    </div>
  );
}
