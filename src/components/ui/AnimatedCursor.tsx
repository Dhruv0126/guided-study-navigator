
import React, { useState, useEffect } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Initially hide cursor until mouse moves
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      setLinkHovered(
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.onclick !== null ||
        target.classList.contains('clickable') ||
        !!target.closest('a') ||
        !!target.closest('button')
      );
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // Don't render the custom cursor on touch devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <div 
      className={`custom-cursor bg-primary ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150 opacity-30' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default AnimatedCursor;
