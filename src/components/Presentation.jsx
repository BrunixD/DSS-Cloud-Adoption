import React, { useState, useEffect, useMemo } from 'react';
import './Presentation.css';

const Presentation = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState([0, 0]);
  const [h, v] = currentSlide;

  const navigate = (direction) => {
    setCurrentSlide(prev => {
      const [h, v] = prev;
      switch (direction) {
        case 'right': return h + 1 < slides.length ? [h + 1, 0] : prev;
        case 'left': return h - 1 >= 0 ? [h - 1, 0] : prev;
        case 'down': return v + 1 < slides[h].length ? [h, v + 1] : prev;
        case 'up': return v - 1 >= 0 ? [h, v - 1] : prev;
        default: return prev;
      }
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const directionMap = {
        ArrowRight: 'right',
        ArrowLeft: 'left',
        ArrowDown: 'down',
        ArrowUp: 'up',
      };
      if (directionMap[e.key]) {
        navigate(directionMap[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [slides]);

  const possibleMoves = useMemo(() => ({
    up: v > 0,
    down: v < slides[h].length - 1,
    left: h > 0,
    right: h < slides.length - 1,
  }), [h, v, slides]);

  const deckStyle = {
    transform: `translateX(-${h * 100}vw) translateY(-${v * 100}vh)`,
    width: `${slides.length * 100}vw`,
  };

  return (
    <div className="deck-container">
      <img src="./assets/iscte-logo.png" alt="Iscte Logo" className="persistent-logo" />

      <div className="deck" style={deckStyle}>
        {slides.map((hSection, hIndex) => (
          <div className="h-section" key={hIndex}>
            {hSection.map((slideContent, vIndex) => (
              <div className="slide" key={`${hIndex}-${vIndex}`}>
                {slideContent}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* --- persistent footer --- */}
      <footer className="persistent-footer">
        DSS in the Adoption of Cloud Based Solutions by SMEs | Bruno Carvalho @ Iscte
      </footer>

      <div className="controls">
        <button className={`arrow up ${possibleMoves.up ? 'active' : ''}`} onClick={() => navigate('up')}>▲</button>
        <button className={`arrow left ${possibleMoves.left ? 'active' : ''}`} onClick={() => navigate('left')}>◀</button>
        <button className={`arrow down ${possibleMoves.down ? 'active' : ''}`} onClick={() => navigate('down')}>▼</button>
        <button className={`arrow right ${possibleMoves.right ? 'active' : ''}`} onClick={() => navigate('right')}>▶</button>
      </div>
    </div>
  );
};

export default Presentation;