import React, { useEffect, useState } from 'react';

const CanvasBackground = ({ darkMode = true }) => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let animationFrameId;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      // Smooth interpolation for natural fluid following
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePosition({ x: Math.round(currentX), y: Math.round(currentY) });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Engineered Dot Matrix Grid */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          darkMode ? 'opacity-[0.18]' : 'opacity-[0.25]'
        }`}
        style={{
          backgroundImage: darkMode 
            ? 'radial-gradient(rgba(148, 163, 184, 0.45) 1px, transparent 1px)' 
            : 'radial-gradient(rgba(100, 116, 139, 0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Smooth Cursor Spotlight (Linear / Vercel style) */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full transition-opacity duration-300 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          background: darkMode
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 65%)',
        }}
      />

      {/* Subtle top ambient vignette */}
      <div 
        className="absolute top-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: darkMode 
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.12), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.08), transparent)'
        }}
      />
    </div>
  );
};

export default CanvasBackground;
