import React, { useState } from 'react';

function PoseInput({ onSubmit }) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    
    // Simulate API call (later: connect to Python backend)
    setTimeout(() => {
      onSubmit(input);
      setInput('');
      setLoading(false);
    }, 500);
  };

  const suggestedPoses = [
    'sedí se zkříženýma nohama',
    'ruce nahoru',
    'běh',
    'tleskání',
    'skákání',
    'leží na zemi',
    'krčí se',
  ];

  const handleSuggestedPose = (pose) => {
    setInput(pose);
  };

  return (
    <div className="pose-input">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Napiš popis pozice... např. 'sedí se zkříženýma nohama'"
            rows="4"
            disabled={loading}
          />
          <button 
            type="submit" 
            disabled={!input.trim() || loading}
            className="submit-btn"
          >
            {loading ? '⏳ Zpracovávám...' : '✨ Vytvořit Poza'}
          </button>
        </div>
      </form>

      <div className="suggestions">
        <p>💡 Namětů pozic:</p>
        <div className="suggestion-buttons">
          {suggestedPoses.map((pose, index) => (
            <button
              key={index}
              className="suggestion-btn"
              onClick={() => handleSuggestedPose(pose)}
            >
              {pose}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PoseInput;
