import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // यहाँ अपने बैग्स की लिस्ट डालें (प्रोफेशनल तरीका)
  const products = [
    { id: 1, name: 'Leather Office Bag', price: '₹1,299', img: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400' },
    { id: 2, name: 'Stylish School Bag', price: '₹899', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' },
    { id: 3, name: 'Travel Duffle Bag', price: '₹1,599', img: 'https://images.unsplash.com/photo-1581605405669-fcdf811c5afa?w=400' },
    { id: 4, name: 'Minimalist Laptop Sleeve', price: '₹599', img: 'https://images.unsplash.com/photo-1590874103328-e638a6833efc?w=400' },
    { id: 5, name: 'Premium College Backpack', price: '₹1,099', img: 'https://images.unsplash.com/photo-1622560480654-d992244b88e8?w=400' }
  ];

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', background: '#0f172a', minHeight: '100vh', color: 'white' }}>
      
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
        <h2 style={{ margin: 0 }}>GHANSHYAM BAG</h2>
        <div onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: 'pointer', fontSize: '28px' }}>⋮</div>
      </nav>

      {/* Hero Section */}
      <header style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>प्रीमियम बैग्स का नया कलेक्शन</h1>
      </header>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', padding: '20px 40px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ 
            background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '20px', 
            border: '1px solid rgba(255,255,255,0.1)', transition: '0.4s', cursor: 'pointer' 
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src={product.img} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px' }} />
            <h3 style={{ margin: '15px 0 5px' }}>{product.name}</h3>
            <p style={{ color: '#38bdf8', fontSize: '1.2rem', fontWeight: 'bold' }}>{product.price}</p>
            <a href="https://wa.me/919876543210" style={{ display: 'block', background: '#25D366', padding: '10px', borderRadius: '10px', color: 'white', textDecoration: 'none', marginTop: '10px' }}>
              WhatsApp पे आर्डर करें
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
