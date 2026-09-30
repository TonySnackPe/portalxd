import React from 'react';
import { PortalXdLogo } from './PortalXdLogo';
import { Search, Gamepad2, Smartphone, Flame, BookOpen, Sun, Moon, Upload, MessageSquare } from 'lucide-react';
import { Platform, Theme } from '../types';

interface HeaderProps {
  activePlatform: Platform;
  onSelectPlatform: (platform: Platform) => void;
  onOpenRequestModal: () => void;
  onOpenGuideModal: () => void;
  onOpenUploadModal: () => void;
  onScrollToComments: () => void;
  onFocusSearch: () => void;
  onShowTrending: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePlatform,
  onSelectPlatform,
  onOpenRequestModal,
  onOpenGuideModal,
  onOpenUploadModal,
  onScrollToComments,
  onFocusSearch,
  onShowTrending,
  theme,
  onToggleTheme,
}) => {
  const isLight = theme === 'neon-light';

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-300 ${
      isLight
        ? 'bg-white/90 border-cyan-400/30 shadow-[0_4px_20px_rgba(0,150,255,0.08)] text-slate-800'
        : 'bg-[#050711]/90 border-cyan-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.6)] text-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark element */}
        <div 
          onClick={() => onSelectPlatform('Ambos')}
          className="flex-shrink-0 cursor-pointer"
          title="PortalxD.com - Inicio"
        >
          <PortalXdLogo size="sm" showMascot={true} />
        </div>

        {/* Zone 2: 4-6 Clean single-line text nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide">
          <button
            onClick={() => onSelectPlatform('PC')}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer pb-0.5 border-b-2 ${
              activePlatform === 'PC'
                ? isLight
                  ? 'text-cyan-700 border-cyan-600 font-bold'
                  : 'text-cyan-400 border-cyan-400 neon-text-cyan'
                : isLight
                ? 'text-slate-600 border-transparent hover:text-cyan-600 hover:border-cyan-400'
                : 'text-slate-300 border-transparent hover:text-cyan-300 hover:border-cyan-500/50'
            }`}
          >
            <Gamepad2 className="w-4 h-4 text-cyan-500" />
            <span>Juegos PC</span>
          </button>

          <button
            onClick={() => onSelectPlatform('Android')}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer pb-0.5 border-b-2 ${
              activePlatform === 'Android'
                ? isLight
                  ? 'text-emerald-700 border-emerald-600 font-bold'
                  : 'text-emerald-400 border-emerald-400 neon-text-green'
                : isLight
                ? 'text-slate-600 border-transparent hover:text-emerald-600 hover:border-emerald-400'
                : 'text-slate-300 border-transparent hover:text-emerald-300 hover:border-emerald-500/50'
            }`}
          >
            <Smartphone className="w-4 h-4 text-emerald-500" />
            <span>Juegos Android</span>
          </button>

          <button
            onClick={onShowTrending}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer pb-0.5 border-b-2 border-transparent ${
              isLight
                ? 'text-slate-600 hover:text-pink-600 hover:border-pink-400'
                : 'text-slate-300 hover:text-pink-400 hover:border-pink-500/50'
            }`}
          >
            <Flame className="w-4 h-4 text-pink-500" />
            <span>Populares</span>
          </button>

          <button
            onClick={onScrollToComments}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer pb-0.5 border-b-2 border-transparent ${
              isLight
                ? 'text-slate-600 hover:text-cyan-700 hover:border-cyan-400'
                : 'text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Comunidad</span>
          </button>

          <button
            onClick={onOpenRequestModal}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer pb-0.5 border-b-2 border-transparent ${
              isLight
                ? 'text-slate-600 hover:text-cyan-700 hover:border-cyan-400'
                : 'text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50'
            }`}
          >
            <span>Pide tu Juego</span>
          </button>

          <button
            onClick={onOpenGuideModal}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer pb-0.5 border-b-2 border-transparent ${
              isLight
                ? 'text-slate-600 hover:text-cyan-700 hover:border-cyan-400'
                : 'text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-cyan-500" />
            <span>Guías</span>
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Actions + Subir Juego + Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Botón "+ Subir Juego" */}
          <button
            onClick={onOpenUploadModal}
            className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.4)] transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            title="Subir un juego a PortalxD.com"
          >
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Subir Juego</span>
            <span className="sm:hidden">Subir</span>
          </button>

          {/* Global Theme Selector */}
          <button
            onClick={onToggleTheme}
            className={`px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer border ${
              isLight
                ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-xs hover:bg-amber-100'
                : 'bg-slate-900 border-cyan-400/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:bg-slate-800'
            }`}
            title={isLight ? 'Cambiar a Neon Dark' : 'Cambiar a Neon Light'}
          >
            {isLight ? (
              <Sun className="w-4 h-4 text-amber-500 fill-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-300 fill-cyan-400" />
            )}
          </button>

          {/* Quick Search Button */}
          <button
            onClick={onFocusSearch}
            className={`p-2 sm:px-2.5 sm:py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer border ${
              isLight
                ? 'text-cyan-800 bg-cyan-50 border-cyan-300 hover:bg-cyan-100'
                : 'text-cyan-300 bg-cyan-950/40 border-cyan-500/40 hover:bg-cyan-900/50 hover:border-cyan-400'
            }`}
            title="Buscar juegos"
          >
            <Search className="w-4 h-4 text-cyan-500" />
          </button>
        </div>
      </div>
    </header>
  );
};
