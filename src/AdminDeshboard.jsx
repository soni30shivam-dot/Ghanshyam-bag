import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '40px auto', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#0A192F', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Welcome to Admin Dashboard</h2>
      <p style={{ fontSize: '18px', color: '#666', marginTop: '20px' }}>
        लॉगिन एकदम सफल रहा! यहाँ से आप अपने बैग्स के प्रोडक्ट्स और गैलरी मैनेज कर पाएंगे।
      </p>
      
      <button 
        onClick={handleLogout}
        style={{ marginTop: '30px', padding: '10px 20px', background: '#DC2626', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px', fontWeight: 'bold' }}
      >
        Logout (बाहर जाएं)
      </button>
    </div>
  );
}
