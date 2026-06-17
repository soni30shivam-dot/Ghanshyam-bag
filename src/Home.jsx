import React from 'react';

export default function Home() {
  const products = [
    { id: 1, name: 'Premium Office Bag', price: '₹1,299', rating: '4.8 ⭐', img: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400' },
    { id: 2, name: 'Student Backpack', price: '₹899', rating: '4.5 ⭐', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' },
    { id: 3, name: 'Travel Duffle', price: '₹1,599', rating: '4.9 ⭐', img: 'https://images.unsplash.com/photo-1581605405669-fcdf811c5afa?w=400' }
  ];

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#f8f9fa' }}>
      {/* 1. Header & Nav */}
      <header style={{ background: '#0A192F', color: 'white', padding: '15px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Ghanshyam Bag</h2>
        <div>
          <a href="tel:+918109950542" style={{ color: 'white', marginRight: '15px' }}>📞 +91 81099 50542</a>
          <a href="/admin/login" style={{ color: 'white' }}>Admin</a>
        </div>
      </header>

      {/* 2. Floating Action Bar (WhatsApp & Maps) */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 1000 }}>
        <a href="https://wa.me/918109950542" style={{ background: '#25D366', padding: '15px', borderRadius: '50%', color: 'white', textDecoration: 'none' }}>💬</a>
        <a href="https://www.google.com/maps/place/2JJR%2BW6G+ghanshyam+bag,+Champa+Basti,+Champa,+Chhattisgarh+495671/@22.0323352,82.6405889,16z/data=!4m6!3m5!1s0x3a27bfc4187047ab:0xa032cd6930113a1a!8m2!3d22.0323352!4d82.6405889!16s%2Fg%2F11sgznr_3j?g_ep=Eg1tbF8yMDI2MDYxMF8wIOC7DCoASAJQAQ%3D%3D" style={{ background: '#4285F4', padding: '15px', borderRadius: '50%', color: 'white', textDecoration: 'none' }}>📍</a>
      </div>

      {/* 3. Hero Section */}
      <section style={{ height: '300px', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1523779105316-d2449102432a?w=1200)', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexDirection: 'column' }}>
        <h1>Ghanshyam Bag Champa</h1>
        <p>Premium Quality Bags at Best Prices</p>
      </section>

      {/* 4. Products */}
      <section style={{ padding: '40px' }}>
        <h2>Popular Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map(p => (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', textAlign: 'center', background: 'white' }}>
              <img src={p.img} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <h3>{p.name}</h3>
              <p>{p.price} | {p.rating}</p>
              <a href="https://wa.me/918109950542" style={{ display: 'block', padding: '10px', background: '#25D366', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Order on WhatsApp</a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer with Address & Social */}
      <footer style={{ background: '#0A192F', color: 'white', padding: '40px', textAlign: 'center' }}>
        <h3>Ghanshyam Bag</h3>
        <p>Sadar Bazar, Champa, Chhattisgarh 495671</p>
        <div style={{ margin: '20px 0' }}>
          <a href="https://www.instagram.com/ghanshyam_bag_champa" style={{ color: '#E1306C', margin: '0 10px', textDecoration: 'none' }}>Instagram</a>
          <a href="tel:+918109950542" style={{ color: '#38bdf8', margin: '0 10px', textDecoration: 'none' }}>Call Us</a>
        </div>
        <p>© 2026 Ghanshyam Bag. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
