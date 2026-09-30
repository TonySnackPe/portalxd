import React from 'react';
import bannerImage from '../assets/images/portalxd_neon_controllers_banner_1790728691850.jpg';
import { PortalXdLogo } from './PortalXdLogo';
import { Search, Sparkles, ShieldCheck, Zap, Download, Gamepad, Smartphone, Monitor } from 'lucide-react';
import { Platform, Theme } from '../types';

interface MainBannerProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activePlatform: Platform;
  onSelectPlatform: (platform: Platform) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  theme: Theme;
  onOpenUploadModal?: () => void;
}

export const MainBanner: React.FC<MainBannerProps> = ({
  searchQuery,
  onSearchChange,
  activePlatform,
  onSelectPlatform,
  searchInputRef,
  theme,
  onOpenUploadModal,
}) => {
  const isLight = theme === 'neon-light';

  return (
    <section className={`relative w-full overflow-hidden border-b transition-colors duration-300 ${
      isLight ? 'bg-[#f0f4f9] border-cyan-300/40' : 'bg-[#060815] border-cyan-500/20'
    }`}>
      {/* Background Graphic: Stylized Neon Controllers & Gaming Light Trails */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src={bannerImage}
          alt="PortalxD Banner Neón con Mandos de Consola"
          className={`w-full h-full object-cover object-center transform scale-105 filter brightness-110 contrast-125 ${
            isLight ? 'opacity-25' : 'opacity-45'
          }`}
          referrerPolicy="no-referrer"
        />
        {/* Neon Gradient Overlays */}
        <div className={`absolute inset-0 ${
          isLight 
            ? 'bg-gradient-to-t from-[#f0f4f9] via-[#f0f4f9]/70 to-transparent' 
            : 'bg-gradient-to-t from-[#050711] via-[#050711]/60 to-transparent'
        }`} />
        <div className={`absolute inset-0 ${
          isLight
            ? 'bg-gradient-to-r from-[#f0f4f9]/80 via-transparent to-[#f0f4f9]/80'
            : 'bg-gradient-to-r from-[#050711] via-transparent to-[#050711]'
        }`} />
        
        {/* Atmospheric neon glows */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-40 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Banner Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16 flex flex-col items-center text-center">
        
        {/* Top Tagline with neon accents */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-6 backdrop-blur-sm ${
          isLight
            ? 'bg-white/80 border-cyan-400 text-cyan-800 shadow-[0_2px_12px_rgba(6,182,212,0.2)]'
            : 'bg-slate-900/80 border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
        }`}>
          <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Descargas Premium de Juegos para PC y Celulares Android
          </span>
          <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
        </div>

        {/* Centerpiece: Prominent PortalxD.com Logo Display */}
        <div className="mb-4 transform hover:scale-102 transition-transform duration-300">
          <PortalXdLogo size="hero" showMascot={true} />
        </div>

        {/* Headline with Neon Balance */}
        <h1 className={`mt-3 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-4xl ${
          isLight ? 'text-slate-900 drop-shadow-sm' : 'text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]'
        }`}>
          Tu Portal de{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
            isLight
              ? 'from-blue-700 via-cyan-600 to-sky-700'
              : 'from-cyan-400 via-sky-300 to-blue-500 neon-text-cyan'
          }`}>
            Juegos PC
          </span>
          {', '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
            isLight
              ? 'from-emerald-700 via-teal-600 to-green-700'
              : 'from-emerald-400 via-lime-300 to-green-500 neon-text-green'
          }`}>
            Android APK
          </span>{' '}
          y{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
            Programas Windows
          </span>
        </h1>

        <p className={`mt-4 text-sm sm:text-base max-w-3xl font-medium leading-relaxed ${
          isLight ? 'text-slate-600' : 'text-slate-300 drop-shadow'
        }`}>
          Descarga juegos testeados, APKs, ISOs de Windows 10 y 11, Antivirus, librerías DirectX / Visual C++ y utilidades para tu PC. 
          Enlaces directos sin publicidad engañosa y con contraseña oficial <strong className="text-cyan-400">PortalxD.com</strong>.
        </p>

        {/* Platform Quick Switch Tabs (Segmented neon controls) */}
        <div className={`mt-7 flex flex-wrap items-center justify-center p-1.5 rounded-2xl border backdrop-blur-md gap-1 ${
          isLight
            ? 'bg-white/90 border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
            : 'bg-slate-900/90 border-slate-700/80 shadow-[0_8px_30px_rgba(0,0,0,0.8)]'
        }`}>
          <button
            onClick={() => onSelectPlatform('Ambos')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
              activePlatform === 'Ambos'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_18px_rgba(6,182,212,0.6)]'
                : isLight
                ? 'text-slate-600 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Todo el Catálogo</span>
          </button>

          <button
            onClick={() => onSelectPlatform('PC')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
              activePlatform === 'PC'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_18px_rgba(56,189,248,0.6)]'
                : isLight
                ? 'text-slate-600 hover:text-cyan-700'
                : 'text-slate-400 hover:text-cyan-300'
            }`}
          >
            <Gamepad className="w-4 h-4 text-cyan-500" />
            <span>Juegos PC</span>
          </button>

          <button
            onClick={() => onSelectPlatform('Android')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
              activePlatform === 'Android'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-[0_0_18px_rgba(16,185,129,0.6)]'
                : isLight
                ? 'text-slate-600 hover:text-emerald-700'
                : 'text-slate-400 hover:text-emerald-300'
            }`}
          >
            <Smartphone className="w-4 h-4 text-emerald-500" />
            <span>Celulares Android</span>
          </button>

          <button
            onClick={() => onSelectPlatform('Programas PC')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
              activePlatform === 'Programas PC'
                ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white shadow-[0_0_18px_rgba(168,85,247,0.7)]'
                : isLight
                ? 'text-slate-600 hover:text-purple-700'
                : 'text-slate-400 hover:text-purple-300'
            }`}
          >
            <Monitor className="w-4 h-4 text-purple-400" />
            <span>Programas PC & Windows</span>
          </button>
        </div>

        {/* Main Search Input with Neon Cyber Glow */}
        <div className="mt-6 w-full max-w-2xl relative">
          <div className="relative flex items-center">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar juegos o programas (Windows 11, Antivirus, Photoshop, GTA, FNF...)"
              className={`w-full py-3.5 pl-12 pr-28 text-sm sm:text-base rounded-xl transition-all ${
                isLight
                  ? 'bg-white text-slate-900 placeholder-slate-400 border-2 border-cyan-400/70 focus:outline-none focus:border-cyan-600 focus:shadow-[0_0_20px_rgba(2,132,199,0.3)] shadow-[0_2px_15px_rgba(0,0,0,0.06)]'
                  : 'bg-slate-900/95 text-slate-100 placeholder-slate-400 border-2 border-cyan-500/40 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(6,182,212,0.5)] shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
              }`}
            />
            <Search className="absolute left-4 w-5 h-5 text-cyan-500 pointer-events-none" />
            
            {searchQuery ? (
              <button
                onClick={() => onSearchChange('')}
                className={`absolute right-3 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  isLight
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Limpiar
              </button>
            ) : (
              <div className={`absolute right-3.5 hidden sm:flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-md pointer-events-none ${
                isLight
                  ? 'text-cyan-800 bg-cyan-100/70 border border-cyan-300'
                  : 'text-cyan-300 bg-cyan-950/80 border border-cyan-500/30'
              }`}>
                <Zap className="w-3 h-3 text-cyan-500" />
                <span>Rápido</span>
              </div>
            )}
          </div>
        </div>

        {/* Upload Game Prompt Row */}
        {onOpenUploadModal && (
          <div className="mt-4 flex items-center justify-center">
            <button
              onClick={onOpenUploadModal}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border ${
                isLight
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100 shadow-xs'
                  : 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/60 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>¿Tienes un juego de PC o Android? <strong>Súbelo a la web aquí</strong></span>
            </button>
          </div>
        )}

        {/* Feature Badges with Neon Color Coding */}
        <div className={`mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm ${
          isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
            <span>Servidores MediaFire & Mega</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <span>APKs 100% Testeados</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-pink-500 drop-shadow-[0_0_6px_#f43f5e]" />
            <span>VirusTotal 0/68 Limpio</span>
          </div>
        </div>

      </div>
    </section>
  );
};
