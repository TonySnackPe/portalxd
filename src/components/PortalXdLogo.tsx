import React from 'react';

interface PortalXdLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showMascot?: boolean;
  className?: string;
}

export const PortalXdLogo: React.FC<PortalXdLogoProps> = ({
  size = 'md',
  showMascot = true,
  className = '',
}) => {
  // Scaling factors based on size
  const scaleClass = {
    sm: 'scale-75 origin-left',
    md: 'scale-90 md:scale-100 origin-left',
    lg: 'scale-105 md:scale-115 origin-center',
    hero: 'scale-110 md:scale-130 lg:scale-140 origin-center',
  }[size];

  return (
    <div className={`inline-flex items-center select-none group cursor-pointer ${scaleClass} ${className}`}>
      {/* Anime Gaming Boy Mascot (Inspired by PortalxD logo reference) */}
      {showMascot && (
        <div className="relative mr-2 md:mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
          {/* Subtle neon glow behind mascot */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
          
          <svg
            className="relative w-11 h-11 md:w-13 md:h-13 drop-shadow-[0_4px_12px_rgba(0,180,255,0.4)]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Mascot Body & Red Cap */}
            {/* Headphones band */}
            <path
              d="M26 42 C 26 22, 74 22, 74 42"
              stroke="#0f172a"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Red Cap with bill */}
            <path
              d="M32 38 C 32 20, 68 20, 68 38 Z"
              fill="#ef4444"
              stroke="#991b1b"
              strokeWidth="2.5"
            />
            <path
              d="M56 27 C 76 25, 84 31, 88 35 C 80 37, 65 37, 56 36 Z"
              fill="#dc2626"
              stroke="#7f1d1d"
              strokeWidth="2"
            />
            {/* Spiky Cyan-Blue Hair */}
            <path
              d="M22 42 C 16 34, 18 20, 32 16 C 36 24, 40 28, 48 26 C 42 34, 30 40, 22 42 Z"
              fill="#00e5ff"
              stroke="#0284c7"
              strokeWidth="2"
            />
            <path
              d="M19 44 C 13 46, 10 55, 18 60 C 22 55, 25 50, 24 44 Z"
              fill="#0284c7"
            />
            {/* Face */}
            <circle cx="50" cy="52" r="21" fill="#fde047" stroke="#eab308" strokeWidth="1" />
            <path
              d="M35 52 C 38 68, 62 68, 65 52 Z"
              fill="#fef08a"
            />
            {/* Confident Smirk and eyes */}
            <path
              d="M40 50 Q 43 47 46 50"
              stroke="#0f172a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M54 50 Q 57 47 60 50"
              stroke="#0f172a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M44 60 Q 52 66 60 59"
              stroke="#0f172a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Headphones earcups with neon blue ring */}
            <rect x="22" y="44" width="8" height="15" rx="4" fill="#0f172a" stroke="#00f0ff" strokeWidth="1.5" />
            <rect x="70" y="44" width="8" height="15" rx="4" fill="#0f172a" stroke="#00f0ff" strokeWidth="1.5" />
            {/* White T-shirt and crossed arms */}
            <path
              d="M34 72 C 34 66, 66 66, 66 72 L 72 92 C 60 96, 40 96, 28 92 Z"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            {/* Crossed arms detail */}
            <path
              d="M30 76 Q 50 85 70 76"
              stroke="#94a3b8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Blue Jeans */}
            <path
              d="M30 90 L 70 90 L 68 100 L 32 100 Z"
              fill="#1d4ed8"
            />
          </svg>
        </div>
      )}

      {/* Main Logo Text Structure: "PORTAL" (Chrome) + "XD" (Neon Electric Blue & Orbit) + ".com" */}
      <div className="relative flex items-baseline tracking-tighter">
        {/* Glow backdrop behind text */}
        <div className="absolute -inset-x-3 -inset-y-2 bg-gradient-to-r from-blue-600/30 via-cyan-500/25 to-sky-400/20 blur-lg pointer-events-none" />

        {/* Chrome "PORTAL" with 3D metallic bevel look */}
        <span 
          className="relative font-black italic tracking-normal uppercase text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl"
          style={{
            fontFamily: 'var(--font-orbitron)',
            backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #e2e8f0 38%, #94a3b8 52%, #f8fafc 65%, #64748b 100%)',
            filter: 'drop-shadow(0 2px 0 #1e293b) drop-shadow(0 4px 8px rgba(0, 150, 255, 0.4))',
            letterSpacing: '-0.03em',
          }}
        >
          PORTAL
        </span>

        {/* XD with Dynamic Cosmic Neon Ring */}
        <div className="relative inline-flex items-center ml-1">
          {/* Cosmic Neon Orbit Ring slicing through XD */}
          <svg
            className="absolute -inset-x-3 -inset-y-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none z-10 overflow-visible"
            viewBox="0 0 100 60"
            fill="none"
          >
            {/* Orbit ellipse with neon glow */}
            <ellipse
              cx="48"
              cy="30"
              rx="46"
              ry="18"
              transform="rotate(-16 48 30)"
              stroke="url(#neonOrbitGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="filter drop-shadow-[0_0_8px_#00d4ff]"
            />
            {/* Bright spark on orbit ring */}
            <circle
              cx="86"
              cy="20"
              r="2.5"
              fill="#ffffff"
              className="filter drop-shadow-[0_0_6px_#00f0ff]"
            />
            <defs>
              <linearGradient id="neonOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="50%" stopColor="#0077ff" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Electric Blue Neon "XD" */}
          <span
            className="relative z-0 font-black italic uppercase text-transparent bg-clip-text text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: 'var(--font-orbitron)',
              backgroundImage: 'linear-gradient(180deg, #67e8f9 0%, #00d2ff 28%, #0077ff 68%, #0044cc 100%)',
              filter: 'drop-shadow(0 0 12px rgba(0, 210, 255, 0.8)) drop-shadow(0 2px 2px #021a47)',
              letterSpacing: '-0.04em',
            }}
          >
            XD
          </span>

          {/* Polished Chrome ".com" */}
          <div className="relative ml-0.5 flex items-baseline self-end mb-1">
            <span
              className="font-bold lowercase text-transparent bg-clip-text text-xs md:text-sm lg:text-base tracking-normal"
              style={{
                fontFamily: 'var(--font-orbitron)',
                backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%)',
                filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.8)) drop-shadow(0 0 6px rgba(0,180,255,0.5))',
              }}
            >
              .com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
