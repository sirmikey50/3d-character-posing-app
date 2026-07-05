import React from 'react';

function PoseGallery({ poses, onSelectPose }) {
  if (poses.length === 0) {
    return (
      <div className="pose-gallery empty">
        <p>📝 Dosud žádné pozice. Vytvoř první!</p>
      </div>
    );
  }

  return (
    <div className="pose-gallery">
      <div className="gallery-list">
        {poses.map((pose) => (
          <div
            key={pose.id}
            className="gallery-item"
            onClick={() => onSelectPose(pose)}
          >
            <div className="item-time">{pose.timestamp}</div>
            <div className="item-description">{pose.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PoseGallery;
