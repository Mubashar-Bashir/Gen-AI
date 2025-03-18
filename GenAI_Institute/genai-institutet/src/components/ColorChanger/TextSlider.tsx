"use client"
import React, { useEffect, useState } from 'react';

const TextSlider = () => {
  const [colors, setColors] = useState(['red', 'green', 'blue', 'purple', 'orange', 'cyan']);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []); // Removed colors array from dependencies to prevent unnecessary re-renders

  return (
    <>
    <div className="text-slider text-8xl font-bold">
      <span className="char text-8xl" style={{ color: colors[(currentIndex + 0) % colors.length] }}>A</span>
      <span className="char text-8xl" style={{ color: colors[(currentIndex + 1) % colors.length] }}>I</span>
      <span className="char text-8xl" style={{ color: colors[(currentIndex + 2) % colors.length] }}>H</span>
      <span className="char text-8xl" style={{ color: colors[(currentIndex + 3) % colors.length] }}>U</span>
      <span className="char text-8xl" style={{ color: colors[(currentIndex + 4) % colors.length] }}>B</span>
    </div>

    {/* <div className="text-slider">
      <span className="char">G</span>
      <span className="char">e</span>
      <span className="char">n</span>
      <span className="char">A</span>
      <span className="char">I</span>
    </div> */}
    </>


  );
};

export default TextSlider;
