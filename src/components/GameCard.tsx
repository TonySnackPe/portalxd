import React from 'react';
import { Download, Monitor, Smartphone, Star, HardDrive, Heart, MessageSquare } from 'lucide-react';
import { Game, Theme } from '../types';
import { Interactive3DTilt } from './Interactive3DTilt';

interface GameCardProps {
  game: Game;
  onSelectGame: (game: Game, tab?: 'descarga' | 'requisitos' | 'guia' | 'comentarios') => void;
  onQuickDownload: (game: Game, e: React.MouseEvent) => void;
  isLiked?: boolean;
  likesCount?: number;
  onToggleLike: (gameId: string, e: React.MouseEvent) => void;
  theme?: Theme;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onSelectGame,
  onQuickDownload,
  isLiked = false,
  likesCount,
  onToggleLike,
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';
  const currentLikes = likesCount !== undefined ? likesCount : (game.likesCount || 0);

  // Determine neon color theme per game
  const neonBorderClass = {
    cyan: isLight 
      ? 'border-slate-200 hover:border-cyan-500 hover:shadow-[0_4px_25px_rgba(6,182,212,0.3)]' 
      : 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]',
    blue: isLight 
      ? 'border-slate-200 hover:border-blue-500 hover:shadow-[0_4px_25px_rgba(59,130,246,0.3)]' 
      : 'border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]',
    pink: isLight 
      ? 'border-slate-200 hover:border-pink-500 hover:shadow-[0_4px_25px_rgba(236,72,153,0.3)]' 
      : 'border-pink-500/40 hover:border-pink-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]',
    green: isLight 
      ? 'border-slate-200 hover:border-emerald-500 hover:shadow-[0_4px_25px_rgba(16,185,129,0.3)]' 
      : 'border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]',
  }[game.neonColor || 'cyan'];

  const neonBtnClass = {
    cyan: 'neon-glow-btn text-white',
    blue: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_18px_rgba(59,130,246,0.6)] text-white',
    pink: 'neon-glow-btn-pink text-white',
    green: 'neon-glow-btn-green text-white',
  }[game.neonColor || 'cyan'];

  const platformBadge = {
    PC: {
      label: 'PC Windows',
      icon: Monitor,
      color: isLight 
        ? 'text-cyan-800 bg-cyan-100 border-cyan-300'
        : 'text-cyan-300 bg-cyan-950/80 border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]',
    },
    Android: {
      label: 'Android APK',
      icon: Smartphone,
      color: isLight
        ? 'text-emerald-800 bg-emerald-100 border-emerald-300'
        : 'text-emerald-300 bg-emerald-950/80 border-emerald-400/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]',
    },
    'Programas PC': {
      label: 'Software PC',
      icon: Monitor,
      color: isLight
        ? 'text-purple-800 bg-purple-100 border-purple-300'
        : 'text-purple-300 bg-purple-950/80 border-purple-400/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]',
    },
    Ambos: {
      label: 'PC & Android',
      icon: Monitor,
      color: isLight
        ? 'text-pink-800 bg-pink-100 border-pink-300'
        : 'text-pink-300 bg-pink-950/80 border-pink-400/50 shadow-[0_0_10px_rgba(236,72,153,0.3)]',
    },
  }[game.platform];

  const PlatformIcon = platformBadge.icon;

  return (
    <article
      onClick={() => onSelectGame(game)}
      className={`group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
        isLight 
          ? 'bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)]' 
          : 'bg-slate-900/80'
      } ${neonBorderClass}`}
    >
      {/* 1. Main Game Image with Interactive 3D Mouse Parallax Movement */}
      <Interactive3DTilt maxTilt={12} scale={1.03} className="aspect-[4/3] w-full overflow-hidden bg-slate-950">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108 filter brightness-95 group-hover:brightness-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Ambient neon gradient scrim on bottom of image for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity pointer-events-none" />

        {/* Platform Indicator */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-transform group-hover:scale-105 pointer-events-none">
          <span className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold border ${platformBadge.color}`}>
            <PlatformIcon className="w-3 h-3" />
            <span>{platformBadge.label}</span>
          </span>
        </div>

        {/* Image Action Buttons: Botón de Me Gusta + Descarga rápida */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
          {/* Botón de Me Gusta en la imagen */}
          <button
            onClick={(e) => onToggleLike(game.id, e)}
            title={isLiked ? 'Quitar Me Gusta' : 'Dar Me Gusta a este juego'}
            className={`h-9 px-2.5 rounded-full flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer backdrop-blur-sm border ${
              isLiked
                ? 'bg-pink-950/90 border-pink-400 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.7)] scale-105'
                : 'bg-slate-900/85 border-slate-700 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 hover:scale-105 shadow-md'
            }`}
          >
            <Heart className={`w-4 h-4 transition-transform duration-200 ${
              isLiked ? 'fill-pink-500 text-pink-400 scale-110 drop-shadow-[0_0_8px_#ec4899]' : 'text-slate-300'
            }`} />
            <span className="tabular-nums font-mono text-[11px]">
              {currentLikes > 999 ? `${(currentLikes / 1000).toFixed(1)}k` : currentLikes}
            </span>
          </button>

          {/* Quick Download Overlay Icon */}
          <button
            onClick={(e) => onQuickDownload(game, e)}
            title={`Descarga rápida: ${game.title}`}
            className="w-9 h-9 rounded-full bg-slate-900/90 border border-cyan-400/60 text-cyan-300 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.5)] hover:scale-115 hover:bg-cyan-500 hover:text-black transition-all cursor-pointer backdrop-blur-sm"
          >
            <Download className="w-4 h-4 animate-bounce" />
          </button>
        </div>

        {/* Category & Rating Bar above bottom edge */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-slate-300 pointer-events-auto">
          <span className="font-semibold text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
            {game.category}
          </span>
          <div className="flex items-center gap-2">
            {/* Quick Facebook comment count trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectGame(game, 'comentarios');
              }}
              className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs text-[#1877F2] hover:text-cyan-300 transition-colors font-bold cursor-pointer"
              title="Ver comentarios de Facebook"
            >
              <MessageSquare className="w-3 h-3 fill-[#1877F2]" />
              <span className="text-[11px] text-white">FB</span>
            </button>

            <div className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs text-amber-300 font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="tabular-nums">{game.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </Interactive3DTilt>

      {/* 2. Content & Title Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between gap-3">
        <div>
          {/* Game Title with subtle neon glow on hover */}
          <h3 
            className={`text-base sm:text-lg font-bold tracking-tight line-clamp-1 transition-colors drop-shadow-sm ${
              isLight 
                ? 'text-slate-900 group-hover:text-cyan-700' 
                : 'text-white group-hover:text-cyan-300'
            }`}
            title={game.title}
          >
            {game.title}
          </h3>

          {/* Clean Unboxed Metadata */}
          <div className={`mt-1.5 flex items-center gap-2 text-xs font-medium ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            <span className={`flex items-center gap-1 ${isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}`}>
              <HardDrive className="w-3 h-3 text-cyan-500" />
              <span className="tabular-nums">{game.fileSize}</span>
            </span>
            <span aria-hidden="true" className={isLight ? 'text-slate-400' : 'text-slate-600'}>·</span>
            <span className="truncate">{game.version}</span>
            <span aria-hidden="true" className={isLight ? 'text-slate-400' : 'text-slate-600'}>·</span>
            <span>{game.releaseYear}</span>
          </div>

          <p className={`mt-2 text-xs line-clamp-2 leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {game.shortDescription}
          </p>
        </div>

        {/* 3. Easily Visible Neon Download Button + Facebook Discussion Shortcut */}
        <div className={`pt-2 border-t flex items-center gap-2 ${isLight ? 'border-slate-100' : 'border-slate-800/80'}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectGame(game, 'descarga');
            }}
            className={`flex-grow py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer ${neonBtnClass}`}
          >
            <Download className="w-4 h-4" />
            <span>
              {game.platform === 'Android' 
                ? 'Descargar APK' 
                : game.platform === 'PC' 
                ? 'Descargar Juego PC' 
                : 'Descargar Juego'}
            </span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectGame(game, 'comentarios');
            }}
            className={`p-2.5 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'bg-blue-50 border-blue-200 text-[#1877F2] hover:bg-blue-100'
                : 'bg-slate-900 border-slate-700 text-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_12px_rgba(24,119,242,0.4)]'
            }`}
            title="Comentarios de Facebook para este juego"
          >
            <MessageSquare className="w-4 h-4 fill-[#1877F2]" />
          </button>
        </div>
      </div>
    </article>
  );
};
