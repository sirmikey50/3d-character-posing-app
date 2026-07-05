import React, { useState } from 'react';

function PoseInput({ onSubmit }) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const suggestions = [
    '🧘 Meditace se skříženýma nohama',
    '🏃 Běh vpřed',
    '🙌 Ruce vzhůru',
    '👏 Tleskání',
    '🪑 Sezení na židli',
    '💪 Flexing',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        onSubmit(input);
        setInput('');
        setIsLoading(false);
      }, 500);
    }
  };

  const handleSuggestion = (suggestion) => {
    setInput(suggestion);
  };

  return (
    <form className="pose-input" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="pose-description">
          📝 Popis pozice:
        </label>
        <textarea
          id="pose-description"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Napiš jak má postava stát, sedět, nebo co dělat... (např. 'stoj na jedné noze')\n\n💡 Buď konkrétní!"
          rows="4"
          disabled={isLoading}
        />
      </div>

      <div className="suggestions">
        <p>💡 Inspirace:</p>
        <div className="suggestion-buttons">
          {suggestions.map((suggestion, idx) => (
            <button
              key={idx}
              type="button"
              className="suggestion-btn"
              onClick={() => handleSuggestion(suggestion)}
              disabled={isLoading}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={!input.trim() || isLoading}
      >
        {isLoading ? '⏳ Generujem...' : '🚀 Vygeneruj pozu'}
      </button>
    </form>
  );
}

export default PoseInput;