import React, { useState, useRef, useCallback } from 'react';
import urbanNeonLogoImg from '../assets/images/portalxd_urban_neon_1790730281530.jpg';

interface PortalXdLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showMascot?: boolean;
  className?: string;
  enableMouseMovement?: boolean;
}

export const PortalXdLogo: React.FC<PortalXdLogoProps> = ({
  size = 'md',
  className = '',
  enableMouseMovement = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  });
  const [glowStyle, setGlowStyle] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableMouseMovement || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;

    const maxTilt = size === 'hero' ? 14 : 9;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`,
      transition: 'transform 0.08s ease-out',
    });

    setGlowStyle({
      x: xPct,
      y: yPct,
      opacity: 0.6,
    });
  }, [enableMouseMovement, size]);

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setGlowStyle(prev => ({ ...prev, opacity: 0 }));
  }, []);

  const sizeClasses = {
    sm: 'h-12 md:h-14 max-w-[220px] md:max-w-[270px]',
    md: 'h-16 md:h-20 max-w-[300px] md:max-w-[370px]',
    lg: 'h-22 md:h-28 max-w-[400px] md:max-w-[480px]',
    hero: 'h-28 sm:h-36 md:h-48 max-w-[480px] sm:max-w-[620px] md:max-w-[760px]',
  }[size];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`relative inline-flex items-center justify-center select-none cursor-pointer will-change-transform transform-gpu group ${sizeClasses} ${className}`}
    >
      {/* 1. Intense Urban Neon Backlight (Cyan & Hot Magenta) */}
      <div 
        className="absolute -inset-3 bg-gradient-to-r from-cyan-500/40 via-purple-600/35 to-pink-500/45 rounded-2xl blur-xl transition-opacity duration-300 pointer-events-none"
        style={{ opacity: glowStyle.opacity ? 0.95 : 0.55 }}
      />

      {/* 2. Official Urban Neon Logo Artwork */}
      <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.4)] group-hover:border-pink-400/80 group-hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300 bg-black/60">
        <img
          src={urbanNeonLogoImg}
          alt="PortalxD.com - Logo Neón Urbano"
          className="w-full h-full object-cover filter brightness-105 contrast-115 group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Ambient street shine scanline */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-pink-500/15 pointer-events-none" />
      </div>

      {/* 3. Interactive Mouse Glare Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-200 z-20 mix-blend-overlay overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${glowStyle.x}% ${glowStyle.y}%, rgba(255, 255, 255, 0.9) 0%, rgba(6, 182, 212, 0.5) 30%, rgba(236, 72, 153, 0.3) 55%, transparent 75%)`,
          opacity: glowStyle.opacity,
        }}
      />
    </div>
  );
};
