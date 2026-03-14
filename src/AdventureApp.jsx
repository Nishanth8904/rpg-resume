import React, { useState } from 'react'; // CRITICAL: Added useState here!
import AvatarProfile from './components/GameUI/AvatarProfile';
import HealthBar from './components/GameUI/HealthBar';
import SkillTree from './components/GameUI/SkillTree';
import QuestLog from './components/GameUI/QuestLog';
import Inventory from './components/GameUI/Inventory';
import AchievementBadge from './components/GameUI/AchievementBadge';

import { skillData } from './data/stats';
import { questData } from './data/quests';

import './App.css'; 

function AdventureApp() {
  // NEW: This controls whether the Skill Popup is visible!
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  return (
    <div className="app-container">
      <header className="game-header">
        <AvatarProfile playerName="Nishanth" classType="Full-Stack Adventurer" />
        <HealthBar playerHP={85} />
        
        <div className="badges-container">
           <AchievementBadge title="React Mastery" rank="Diamond" />
           <AchievementBadge title="CSS Wizardry" rank="Gold" />
        </div>
      </header>
      
      <main className="main-grid">
        
        {/* --- LEFT COLUMN --- */}
        <div className="left-column">
            
            <section className="pixel-panel">
              <h2 className="section-title">📜 Character Lore</h2>
              <p style={{ lineHeight: '1.6', color: '#bdc3c7', marginTop: '0' }}>
                Greetings, traveler! I am a passionate Full-Stack developer with a knack for building smart, scalable applications. When I'm not coding, I'm exploring new technologies or hunting down bugs in the wild.
              </p>
            </section>

            {/* CHANGED: Skill Tree is now a button! */}
            <section className="pixel-panel">
              <h2 className="section-title">⚔️ Skills</h2>
              <button 
                className="pixel-btn" 
                onClick={() => setIsSkillModalOpen(true)}
              >
                Open Skill Tree
              </button>
            </section>

            <section className="pixel-panel">
              <h2 className="section-title">🏛️ Training Grounds</h2>
              <ul className="retro-list">
                <li>
                  <strong>B.E / Computer Science</strong><br/>
                  <span style={{ color: '#bdc3c7' }}>SKCET (2022 - 2026)</span><br/>
                  <span style={{ color: '#2ecc71', fontSize: '0.9rem' }}>CGPA: 8.00</span>
                </li>
                <li>
                  <strong>12th Grade (HSC)</strong><br/>
                  <span style={{ color: '#bdc3c7' }}>Gokilambal matric higher secondary school (2022)</span><br/>
                  <span style={{ color: '#2ecc71', fontSize: '0.9rem' }}>Score: 95.833333%</span>
                </li>
                <li>
                  <strong>10th Grade (SSLC)</strong><br/>
                  <span style={{ color: '#bdc3c7' }}>Gokilambal matric higher secondary school (2020)</span><br/>
                  <span style={{ color: '#2ecc71', fontSize: '0.9rem' }}>Score: 91.2%</span>
                </li>
              </ul>
            </section>
            
            <Inventory />
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="right-column">
            
            <section className="pixel-panel">
              <h2 className="section-title">📜 Quest Log (Experience)</h2>
              <QuestLog quests={questData} />
            </section>

            <section className="pixel-panel">
              <h2 className="section-title">🏅 Guild Licenses</h2>
              <ul className="retro-list">
                <li>🏆 <strong>AWS Certified Cloud Practitioner</strong> - Amazon</li>
                <li>🏆 <strong>Blend ai hackathon</strong> - Microsoft</li>
                <li>🏆 <strong>Android App using kotlin</strong> - IIT Bombay</li>
                <li>🏆 <strong>Java Spring training</strong> - Infosys</li>
              </ul>
            </section>

            <section className="pixel-panel">
              <h2 className="section-title">🎭 Side Quests</h2>
              <ul className="retro-list">
                <li>🎯 <strong>Hackathon Organizer:</strong> Core team member for Blend AI Hackathon.</li>
                <li>🎯 <strong>Tech Club:</strong> Conducted workshops on React and Web Development.</li>
                <li>🎯 <strong>Open Source:</strong> Contributed code to various beginner-friendly repositories.</li>
              </ul>
            </section>

        </div>
      </main>

      <footer className="game-footer">
        <p className="blink-text">Press [Start] to hire this adventurer.</p>
      </footer>

      {/* NEW: The Skill Tree Popup Modal */}
      {isSkillModalOpen && (
        <div className="modal-overlay" onClick={() => setIsSkillModalOpen(false)}>
          {/* We reuse the same modal styling from your Quest cards! */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsSkillModalOpen(false)}>X</button>
            
            <h2 style={{ color: '#f1c40f', margin: '0 0 20px 0', fontSize: '1.5rem', textAlign: 'center', textTransform: 'uppercase' }}>
              ⚔️ Skill Tree
            </h2>
            
            {/* The actual skill tree renders inside the popup now */}
            <SkillTree skills={skillData} />
            
          </div>
        </div>
      )}

    </div>
  );
}

export default AdventureApp;