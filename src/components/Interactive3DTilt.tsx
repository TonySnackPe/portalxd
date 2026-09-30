import React, { useRef, useState, useCallback } from 'react';

interface Interactive3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glareEffect?: boolean;
}

export const Interactive3DTilt: React.FC<Interactive3DTiltProps> = ({
  children,
  className = '',
  maxTilt = 14,
  scale = 1.04,
  glareEffect = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  });
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;

    // Calculate tilts
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * maxTilt;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.08s ease-out',
    });

    if (glareEffect) {
      setGlarePosition({
        x: xPct,
        y: yPct,
        opacity: 0.35,
      });
    }
  }, [maxTilt, scale, glareEffect]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative will-change-transform transform-gpu ${className}`}
    >
      {children}

      {/* Glare spotlight following mouse cursor */}
      {glareEffect && (
        <div
          className="pointer-events-none absolute inset-0 rounded-inherit transition-opacity duration-300 z-30 overflow-hidden mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(6, 182, 212, 0.25) 40%, transparent 70%)`,
            opacity: glarePosition.opacity,
          }}
        />
      )}
    </div>
  );
};
