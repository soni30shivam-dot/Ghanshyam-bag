import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate();

  const menuItems = [
    'Dashboard', 'Products', 'Categories', 'Orders', 'Customers', 
    'Banners', 'Coupons', 'Inventory', 'Reviews', 'Payments', 'Settings'
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'Dashboard': return <div><h3>📊 Analytics Overview</h3><p>Total Sales: ₹50,000 | Pending Orders: 5</p></div>;
      case 'Products': return <div><h3>🛍️ Manage Products</h3><button>+ Add New Product</button></div>;
      case 'Orders': return <div><h3>📦 Order Management</h3><p>List of recent orders...</p></div>;
      case 'Settings': return <div><h3>⚙️ Website Settings</h3><p>Logo, UPI, Contact Details settings...</p></div>;
      default: return <div><h3>{activeTab} Module</h3><p>Coming Soon...</p></div>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#0A192F', color: 'white', padding: '20px' }}>
        <h2>Admin Panel</h2>
        {menuItems.map(item => (
          <div key={item} 
            onClick={() => setActiveTab(item)}
            style={{ padding: '10px', cursor: 'pointer', background: activeTab === item ? '#1E293B' : 'transparent' }}>
            {item}
          </div>
        ))}
        <button onClick={() => navigate('/admin/login')} style={{ marginTop: '20px', background: 'red', color: 'white' }}>Logout</button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px', background: '#f8f9fa' }}>
        <header style={{ borderBottom: '2px solid #ddd', marginBottom: '20px' }}>
          <h1>{activeTab}</h1>
        </header>
        {renderContent()}
      </main>
    </div>
  );
}
