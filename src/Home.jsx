import { useEffect, useState } from 'react';

export default function Home() {
  const [settings, setSettings] = useState({
    upiId: 'सेट नहीं है',
    storeName: 'Ghanshyam Bag'
  });

  useEffect(() => {
    // डैशबोर्ड से सेव की गई सेटिंग्स को यहाँ से उठाता है
    const savedSettings = localStorage.getItem('siteSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* यहाँ से दुकान का नाम डैशबोर्ड से अपडेट होगा */}
      <h1 style={{ color: '#0A192F' }}>{settings.storeName}</h1>
      <p>हमारे बैग्स की सबसे बेहतरीन दुकान!</p>

      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
        <h3>पेमेंट के लिए यहाँ पेमेंट करें:</h3>
        {/* यहाँ से UPI ID डैशबोर्ड से अपडेट होगी */}
        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#6B21A8' }}>
          UPI ID: {settings.upiId}
        </p>
      </div>
    </div>
  );
}
