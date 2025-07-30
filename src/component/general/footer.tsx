export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 2rem',
      fontFamily: 'Arial, sans-serif',
      fontSize: '0.9rem',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '60px',
      zIndex: 1000,
    }}>
      <div style={{ flex: '1' }}>
        Info
      </div>
      <div style={{ flex: '1', textAlign: 'center' }}>
        © 2025 Your Company. All rights reserved.
      </div>
      <div style={{ flex: '1', textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem' }}>
        <span>Site by NOOON</span>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '4px solid white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          userSelect: 'none'
        }}>
          ©
        </div>
      </div>
    </footer>
  );
};
