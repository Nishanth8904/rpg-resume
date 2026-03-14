import React from 'react';

function AvatarProfile({ playerName, classType }) {
  return (
    <div className="avatar-profile" style={styles.container}>
      <div style={styles.avatarPlaceholder}>🧑‍💻</div>
      <div>
        <h2 style={{ margin: 0 }}>{playerName}</h2>
        <p style={{ margin: 0, color: '#f39c12' }}>Class: {classType}</p>
        <p style={{ margin: 0, fontSize: '0.8rem' }}>Level 99</p>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', alignItems: 'center', gap: '15px', padding: '10px', backgroundColor: '#2c3e50', color: 'white', borderRadius: '8px' },
  avatarPlaceholder: { fontSize: '3rem', backgroundColor: '#34495e', padding: '10px', borderRadius: '50%' }
};

export default AvatarProfile;