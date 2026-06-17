import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [products, setProducts] = useState([]); // Yahan saare products store honge
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const navigate = useNavigate();

  // 1. Product Add karne ka function
  const addProduct = () => {
    if(!newProduct.name || !newProduct.price) return alert("Pehle details bharein!");
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: '', price: '' });
    alert("Product Successfully Added!");
  };

  // 2. Tab ke hisab se content dikhane ka logic
  const renderContent = () => {
    switch(activeTab) {
      case 'Dashboard':
        return <div><h3>📊 Analytics</h3><p>Total Products: {products.length}</p></div>;
      
      case 'Products':
        return (
          <div>
            <h3>🛍️ Product Management</h3>
            <div style={{marginBottom: '20px'}}>
              <input placeholder="Bag Name" onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} />
              <input placeholder="Price" onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} />
              <button onClick={addProduct} style={{background: '#25D366', color: 'white'}}>+ Add Product</button>
            </div>
            <ul>
              {products.map(p => <li key={p.id}>{p.name} - ₹{p.price}</li>)}
            </ul>
          </div>
        );

      case 'Settings':
        return (
          <div>
            <h3>⚙️ Shop Settings</h3>
            <input placeholder="Change Shop Name" />
            <button onClick={() => alert("Settings Updated!")}>Save Changes</button>
          </div>
        );

      default: return <div>Select a section...</div>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '200px', background: '#0A192F', color: 'white', padding: '20px' }}>
        <h2>Admin Panel</h2>
        {['Dashboard', 'Products', 'Orders', 'Settings'].map(tab => (
          <div key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #1e293b' }}>
            {tab}
          </div>
        ))}
      </aside>
      <main style={{ flex: 1, padding: '40px' }}>
        {renderContent()}
      </main>
    </div>
  );
}
