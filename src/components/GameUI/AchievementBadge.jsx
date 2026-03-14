import React from 'react';

function AchievementBadge({ title, rank }) {
  return (
    <div style={styles.badge}>
      <span style={styles.icon}>🏆</span>
      <div style={styles.info}>
        <span style={styles.title}>{title}</span>
        <span style={styles.rank}>Rank: {rank}</span>
      </div>
    </div>
  );
}

const styles = {
  badge: { 
    display: 'inline-flex', 
    alignItems: 'center', 
    gap: '10px', 
    backgroundColor: '#e67e22', 
    padding: '8px 15px', 
    borderRadius: '20px', 
    color: 'white',
    margin: '5px 5px 5px 0',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
  },
  icon: { fontSize: '1.5rem' },
  info: { display: 'flex', flexDirection: 'column' },
  title: { fontWeight: 'bold', fontSize: '0.9rem' },
  rank: { fontSize: '0.7rem', textTransform: 'uppercase', color: '#fde3a7' }
};

export default AchievementBadge;