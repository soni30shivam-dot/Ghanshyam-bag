import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from './config';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.apiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      
      if (data.success) {
        setMessage('Login Successful! Welcome Admin.');
        localStorage.setItem('token', data.token);
        
        // 1 सेकंड बाद अपने आप डैशबोर्ड पर ले जाने वाला कोड
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1000);

      } else {
        setMessage(data.message || 'Invalid Credentials');
      }
    } catch (err) {
      setMessage('Network Error: Serverless function might be sleeping.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <form onSubmit={handleLogin} style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#0A192F', marginBottom: '20px' }}>Admin Portal</h2>
        {message && <p style={{ color: message.includes('Successful') ? 'green' : 'red', fontWeight: 'bold' }}>{message}</p>}
        
        <input 
          type="text" placeholder="Username" required
          value={username} onChange={e => setUsername(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
        <input 
          type="password" placeholder="Password" required
          value={password} onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#6B21A8', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px' }}>
          Secure Login
        </button>
      </form>
    </div>
  );
}
