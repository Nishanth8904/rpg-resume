import React from 'react';

function SkillTree({ skills }) {
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {skills.map(skill => (
          <li key={skill.id} style={{ marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px dashed #34495e' }}>
            <strong>{skill.name}</strong> 
            <span style={{ color: '#3498db', fontWeight: 'bold', marginLeft: '10px' }}>Lvl.{skill.level}</span>
            <div style={{ fontSize: '0.8rem', color: '#95a5a6', marginTop: '8px' }}>{skill.type}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillTree;