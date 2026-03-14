import React from 'react';

function Inventory() {
  const inventoryItems = [
    { id: 1, name: "GitHub", icon: "🛡️", link: "https://github.com/Nishanth8904" },
    { id: 2, name: "LinkedIn", icon: "📜", link: "https://www.linkedin.com/in/nishanth-p-3186662a7/" },
    { id: 3, name: "leetcode", icon: "🧪", link: "https://leetcode.com/problems/i-dont-have-one/" },
    { id: 4, name: "Email", icon: "🐦", link: "mailto:nishanthpugazh.2004@example.com" }
  ];

  return (
    <div className="pixel-panel">
      <h2 style={{ color: '#9b59b6', textTransform: 'uppercase' }}>🎒 Inventory</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {inventoryItems.map(item => (
          <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="inventory-slot">
            <span style={{ fontSize: '2.5rem' }}>{item.icon}</span>
            <span style={{ fontSize: '0.65rem', marginTop: '8px', fontWeight: 'bold' }}>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Inventory;