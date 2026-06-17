import React from 'react';

export default function Home() {
  // Dummy Data for Products
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
        <input type="text" placeholder="Search bags..." style={{ padding: '8px', borderRadius: '5px', border: 'none' }} />
        <div>Cart 🛒 | Wishlist ❤️ | <a href="/admin/login" style={{color:'white'}}>Admin</a></div>
      </header>

      {/* 2. Navigation Menu */}
      <nav style={{ display: 'flex', gap: '20px', padding: '10px 50px', background: '#e9ecef', justifyContent: 'center' }}>
        {['Home', 'Men', 'Women', 'School', 'Travel', 'Offers'].map(item => <a href="#" key={item} style={{textDecoration:'none', color:'#333'}}>{item}</a>)}
      </nav>

      {/* 3. Hero Banner */}
      <section style={{ height: '400px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1>New Summer Collection 2026</h1>
        <button style={{ padding: '15px 30px', background: '#38bdf8', border: 'none', borderRadius: '10px', fontSize: '18px' }}>Shop Now</button>
      </section>

      {/* 4. Featured Products */}
      <section style={{ padding: '50px' }}>
        <h2>Popular Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map(p => (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
              <img src={p.img} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <h3>{p.name}</h3>
              <p>{p.price} | {p.rating}</p>
              <button style={{ width: '100%', padding: '10px', background: '#25D366', border: 'none', color: 'white' }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section style={{ padding: '50px', textAlign: 'center', background: '#fff' }}>
        <h2>Why Choose Us?</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <div>✅ Quality Assurance</div>
          <div>🚚 Fast Delivery</div>
          <div>↩️ Easy Returns</div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer style={{ background: '#0A192F', color: 'white', padding: '40px', textAlign: 'center' }}>
        <p>Ghanshyam Bag - The best quality shop in Champa.</p>
        <div style={{ gap: '15px', display: 'flex', justifyContent: 'center' }}>
          <a href="#" style={{color:'white'}}>Instagram</a> | <a href="#" style={{color:'white'}}>WhatsApp</a>
        </div>
        <p style={{marginTop:'20px'}}>© 2026 Ghanshyam Bag. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
