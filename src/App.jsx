import React, { useState } from 'react';
import CharacterViewer from './components/CharacterViewer';
import PoseInput from './components/PoseInput';
import PoseGallery from './components/PoseGallery';
import './styles.css';

function App() {
  const [currentPose, setCurrentPose] = useState(null);
  const [poseHistory, setPoseHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('input');

  const handlePoseSubmit = (poseDescription) => {
    const newPose = {
      id: Date.now(),
      description: poseDescription,
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setCurrentPose(newPose);
    setPoseHistory([newPose, ...poseHistory]);
  };

  const selectPose = (pose) => {
    setCurrentPose(pose);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎭 3D Character Posing App</h1>
        <p>AI-Powered Character Pose Generator</p>
      </header>

      <div className="app-layout">
        {/* 3D Viewer */}
        <div className="viewer-section">
          <CharacterViewer pose={currentPose} />
        </div>

        {/* Control Panel */}
        <div className="control-section">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'input' ? 'active' : ''}`}
              onClick={() => setActiveTab('input')}
            >
              📝 Nová Poza
            </button>
            <button
              className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              📚 Historie ({poseHistory.length})
            </button>
          </div>

          {activeTab === 'input' && (
            <PoseInput onSubmit={handlePoseSubmit} />
          )}

          {activeTab === 'gallery' && (
            <PoseGallery poses={poseHistory} onSelectPose={selectPose} />
          )}
        </div>
      </div>

      <footer className="app-footer">
        <p>💡 Napiš popis pozice (např. "sezení se zkříženýma nohama") a AI vytvoří 3D modelu</p>
      </footer>
    </div>
  );
}

export default App;
