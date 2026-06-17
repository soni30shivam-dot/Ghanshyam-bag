import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1 style={{ color: '#0A192F', fontSize: '2.5rem', marginBottom: '10px' }}>Champa's Trusted Bag & Luggage Destination</h1>
      <p style={{ color: '#6B21A8', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 30px' }}>
        School Bags, College Bags, Travel Bags, Trolley Bags, Office Bags and Premium Luggage Collection.
      </p>
      
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="https://wa.me/918109950542" style={{ padding: '12px 25px', backgroundColor: '#25D366', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>WhatsApp Order</a>
        <a href="tel:+918109950542" style={{ padding: '12px 25px', backgroundColor: '#0A192F', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Call Now</a>
      </div>
    </div>
  );
}
