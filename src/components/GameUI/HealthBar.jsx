import React from 'react';

function HealthBar({ playerHP }) {
  return (
    <div style={styles.container}>
      <span style={styles.label}>HP (Coffee Level):</span>
      <div style={styles.barBackground}>
        <div style={{ ...styles.barFill, width: `${playerHP}%` }}></div>
      </div>
      <span style={styles.hpText}>{playerHP}/100</span>
    </div>
  );
}

const styles = {
  container: { display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' },
  label: { fontWeight: 'bold', color: '#e74c3c' },
  barBackground: { width: '200px', height: '20px', backgroundColor: '#333', border: '2px solid #555', borderRadius: '10px', overflow: 'hidden' },
  barFill: { height: '100%', backgroundColor: '#e74c3c', transition: 'width 0.3s ease' },
  hpText: { fontWeight: 'bold' }
};

export default HealthBar;