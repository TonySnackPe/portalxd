import React from 'react';
import { Game, Category, Platform, Theme } from '../types';
import { GameCard } from './GameCard';
import { CATEGORIES } from '../data/games';
import { Filter, Layers, ArrowUpDown, Sparkles } from 'lucide-react';

interface GameGalleryProps {
  games: Game[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  selectedPlatform: Platform;
  onSelectPlatform: (platform: Platform) => void;
  sortBy: 'downloads' | 'rating' | 'newest';
  onSortChange: (sort: 'downloads' | 'rating' | 'newest') => void;
  onSelectGame: (game: Game, tab?: 'descarga' | 'requisitos' | 'guia' | 'comentarios') => void;
  onQuickDownload: (game: Game, e: React.MouseEvent) => void;
  searchQuery: string;
  onResetFilters: () => void;
  likedGameIds: Set<string>;
  likesMap: Record<string, number>;
  onToggleLike: (gameId: string, e: React.MouseEvent) => void;
  theme: Theme;
}

export const GameGallery: React.FC<GameGalleryProps> = ({
  games,
  selectedCategory,
  onSelectCategory,
  selectedPlatform,
  onSelectPlatform,
  sortBy,
  onSortChange,
  onSelectGame,
  onQuickDownload,
  searchQuery,
  onResetFilters,
  likedGameIds,
  likesMap,
  onToggleLike,
  theme,
}) => {
  const isLight = theme === 'neon-light';

  return (
    <section id="galeria-juegos" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header & Filter Controls Bar */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b ${
        isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-500" />
            <h2 className={`text-xl sm:text-2xl font-black tracking-wide ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              Catálogo de Juegos Neon
            </h2>
          </div>
          <p className={`mt-1 text-xs sm:text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {games.length} {games.length === 1 ? 'juego disponible' : 'juegos disponibles'} con descarga directa, likes y comentarios de Facebook
          </p>
        </div>

        {/* Sort & Quick Filter Selector */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            <ArrowUpDown className="w-4 h-4 text-cyan-500" />
            <span className="hidden sm:inline">Ordenar por:</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as 'downloads' | 'rating' | 'newest')}
            className={`px-3 py-2 text-xs font-semibold rounded-lg focus:outline-none cursor-pointer border ${
              isLight
                ? 'bg-white border-slate-300 text-slate-800 focus:border-cyan-500 shadow-sm'
                : 'bg-slate-900 border-slate-700 text-slate-200 focus:border-cyan-400'
            }`}
          >
            <option value="downloads">Más Descargados</option>
            <option value="rating">Mejor Calificación (★)</option>
            <option value="newest">Más Recientes (2026)</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className={`text-xs font-semibold flex items-center gap-1 mr-1 flex-shrink-0 ${
          isLight ? 'text-slate-600' : 'text-slate-400'
        }`}>
          <Filter className="w-3.5 h-3.5 text-cyan-500" />
          <span>Géneros:</span>
        </span>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex-shrink-0 border ${
              selectedCategory === category
                ? isLight
                  ? 'bg-cyan-100 text-cyan-900 border-cyan-400 font-bold shadow-[0_2px_8px_rgba(6,182,212,0.25)]'
                  : 'bg-cyan-500/20 text-cyan-300 border-cyan-400/80 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                : isLight
                ? 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:border-cyan-300 shadow-xs'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Game Cards Grid */}
      {games.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onSelectGame={onSelectGame}
              onQuickDownload={onQuickDownload}
              isLiked={likedGameIds.has(game.id)}
              likesCount={likesMap[game.id] ?? game.likesCount ?? 0}
              onToggleLike={onToggleLike}
              theme={theme}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className={`mt-12 p-12 text-center rounded-2xl border ${
          isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/50 border-slate-800'
        }`}>
          <Layers className="w-12 h-12 mx-auto text-slate-400 mb-4" />
          <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
            No se encontraron juegos
          </h3>
          <p className={`mt-1 text-sm max-w-md mx-auto ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            No hay títulos que coincidan con &ldquo;{searchQuery}&rdquo; en la categoría &ldquo;{selectedCategory}&rdquo;.
          </p>
          <button
            onClick={onResetFilters}
            className="mt-4 px-4 py-2 text-xs font-bold text-cyan-800 bg-cyan-100 border border-cyan-300 rounded-lg hover:bg-cyan-200 transition-colors cursor-pointer"
          >
            Restablecer Filtros de Búsqueda
          </button>
        </div>
      )}
    </section>
  );
};
