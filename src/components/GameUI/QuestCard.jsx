import React, { useState } from 'react';

function QuestCard({ quest }) {
  // State for the main modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for the full-screen image/video
  const [fullScreenMedia, setFullScreenMedia] = useState(null); 

  return (
    <>
      {/* 1. The visible card in the list */}
      <div 
        className="quest-card clickable" 
        onClick={() => setIsModalOpen(true)}
      >
        <h3 style={{ margin: '0 0 5px 0', color: '#f1c40f', fontSize: '1.2rem' }}>
          ▶️ {quest.title}
        </h3>
        <p style={{ margin: '0', color: '#bdc3c7', fontSize: '0.9rem' }}>
          {quest.role} @ {quest.company}
        </p>
      </div>

      {/* 2. The Popup Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>X</button>
            
            <h2 style={{ color: '#f1c40f', margin: '0 0 5px 0', fontSize: '1.2rem' }}>{quest.title}</h2>
            <p style={{ color: '#bdc3c7', fontSize: '0.8rem', marginBottom: '10px' }}>{quest.role} @ {quest.company}</p>
            
            {/* The Media Gallery */}
            {Array.isArray(quest.media) && quest.media.length > 0 && (
              <div className="media-gallery">
                {quest.media.map((itemUrl, index) => {
                  const isVideo = itemUrl.endsWith('.mp4') || itemUrl.endsWith('.webm');
                  
                  return isVideo ? (
                    <video 
                      key={index}
                      src={itemUrl} 
                      className="gallery-item clickable-media" 
                      autoPlay loop muted playsInline
                      onClick={() => setFullScreenMedia(itemUrl)} // Opens full screen
                    />
                  ) : (
                    <img 
                      key={index}
                      src={itemUrl} 
                      alt={`Screenshot ${index + 1}`} 
                      className="gallery-item clickable-media" 
                      onClick={() => setFullScreenMedia(itemUrl)} // Opens full screen
                    />
                  );
                })}
              </div>
            )}
            
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{quest.description}</p>
            <p style={{ color: '#f39c12', marginTop: '15px' }}>Loot: {quest.reward}</p>
            
            <div style={{ marginTop: '20px' }}>
              {quest.githubLink && (
                <a href={quest.githubLink} target="_blank" rel="noreferrer" className="github-btn">🛡️ Source Code</a>
              )}
              {quest.websiteUrl && (
                <a href={quest.websiteUrl} target="_blank" rel="noreferrer" className="github-btn">🔮 Live Demo</a>
              )}
            </div>
            
          </div>
        </div>
      )}

      {/* 3. NEW: The Full Screen Lightbox */}
      {fullScreenMedia && (
        <div className="fullscreen-overlay" onClick={() => setFullScreenMedia(null)}>
          {/* A close button just for the full screen view */}
          <button className="close-btn" style={{ top: '20px', right: '20px', position: 'fixed' }}>X</button>
          
          {fullScreenMedia.endsWith('.mp4') || fullScreenMedia.endsWith('.webm') ? (
            <video src={fullScreenMedia} className="fullscreen-media" controls autoPlay />
          ) : (
            <img src={fullScreenMedia} alt="Fullscreen View" className="fullscreen-media" />
          )}
        </div>
      )}
    </>
  );
}

export default QuestCard;