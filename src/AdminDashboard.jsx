import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  
  // सेटिंग्स को पहले से लोड करना
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('siteSettings');
    return saved ? JSON.parse(saved) : { upiId: 'अपना UPI यहाँ डालें', storeName: 'Ghanshyam Bag' };
  });

  const handleSave = () => {
    localStorage.setItem('siteSettings', JSON.stringify(settings));
    alert('सेटिंग्स सफलतापूर्वक सेव हो गई हैं!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Master Admin Dashboard</h2>
      
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
        <h3>दुकान और पेमेंट सेटिंग्स (Live Edit)</h3>
        
        <label>दुकान का नाम:</label>
        <input 
          value={settings.storeName}
          onChange={(e) => setSettings({...settings, storeName: e.target.value})}
          style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
        />

        <label>UPI ID (पेमेंट के लिए):</label>
        <input 
          value={settings.upiId}
          onChange={(e) => setSettings({...settings, upiId: e.target.value})}
          style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
        />

        <button 
          onClick={handleSave}
          style={{ background: '#0A192F', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          प्रोफेशनल अपडेट सेव करें
        </button>
      </div>
    </div>
  );
}
