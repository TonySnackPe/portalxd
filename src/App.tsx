import React, { useState, useMemo, useRef, useEffect } from 'react';
import { GAMES_DATA } from './data/games';
import { Game, Category, Platform, Theme } from './types';
import { Header } from './components/Header';
import { MainBanner } from './components/MainBanner';
import { GameGallery } from './components/GameGallery';
import { GameDetailModal } from './components/GameDetailModal';
import { NeonRadioPlayer } from './components/NeonRadioPlayer';
import { SocialBar } from './components/SocialBar';
import { CommunityCommentWall } from './components/CommunityCommentWall';
import { UploadGameModal } from './components/UploadGameModal';
import { RequestGameModal } from './components/RequestGameModal';
import { InstallationGuideModal } from './components/InstallationGuideModal';
import { Footer } from './components/Footer';
import { Flame, Monitor, Smartphone, Heart, MessageSquare } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portalxd_theme') as Theme;
      if (saved === 'neon-light' || saved === 'neon-dark') return saved;
    }
    return 'neon-dark';
  });

  const [activePlatform, setActivePlatform] = useState<Platform>('Ambos');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'downloads' | 'rating' | 'newest'>('downloads');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'descarga' | 'requisitos' | 'guia' | 'comentarios'>('descarga');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState<boolean>(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);

  // User Uploaded Games (persisted in localStorage)
  const [customGames, setCustomGames] = useState<Game[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portalxd_custom_games');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return [];
  });

  // User Likes state persisted in localStorage
  const [likedGameIds, setLikedGameIds] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portalxd_user_likes');
      if (saved) {
        try {
          return new Set<string>(JSON.parse(saved));
        } catch {
          // fallback
        }
      }
    }
    return new Set<string>();
  });

  const [likesMap, setLikesMap] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    GAMES_DATA.forEach(g => {
      map[g.id] = g.likesCount || 0;
    });
    return map;
  });

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Sync theme with body & localStorage
  useEffect(() => {
    if (theme === 'neon-light') {
      document.body.classList.add('neon-light');
      document.documentElement.classList.remove('dark');
    } else {
      document.body.classList.remove('neon-light');
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('portalxd_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'neon-dark' ? 'neon-light' : 'neon-dark'));
  };

  const isLight = theme === 'neon-light';

  // Toggle Like handler
  const handleToggleLike = (gameId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedGameIds(prev => {
      const next = new Set(prev);
      const isCurrentlyLiked = next.has(gameId);

      if (isCurrentlyLiked) {
        next.delete(gameId);
        setLikesMap(m => ({ ...m, [gameId]: Math.max(0, (m[gameId] || 0) - 1) }));
      } else {
        next.add(gameId);
        setLikesMap(m => ({ ...m, [gameId]: (m[gameId] || 0) + 1 }));
      }

      localStorage.setItem('portalxd_user_likes', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  // Upload Game Handler (Saves to state & localStorage)
  const handleGameUploaded = (newGame: Game) => {
    const updated = [newGame, ...customGames];
    setCustomGames(updated);
    localStorage.setItem('portalxd_custom_games', JSON.stringify(updated));

    // Register like
    setLikesMap(m => ({ ...m, [newGame.id]: newGame.likesCount || 1 }));

    // Reset filters and scroll to games gallery to showcase the new game
    setActivePlatform('Ambos');
    setSelectedCategory('Todos');
    setSearchQuery('');
    setTimeout(() => {
      const el = document.getElementById('galeria-juegos');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  // Master Games List: Custom uploaded games + Built-in games
  const allGames = useMemo(() => {
    return [...customGames, ...GAMES_DATA];
  }, [customGames]);

  // Filtered & Sorted Games List
  const filteredGames = useMemo(() => {
    let result = allGames.filter((game) => {
      // Platform filter
      if (activePlatform === 'PC' && game.platform === 'Android') return false;
      if (activePlatform === 'Android' && game.platform === 'PC') return false;

      // Category filter
      if (selectedCategory !== 'Todos' && game.category !== selectedCategory) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = game.title.toLowerCase().includes(query);
        const matchCategory = game.category.toLowerCase().includes(query);
        const matchDeveloper = game.developer.toLowerCase().includes(query);
        const matchDesc = game.shortDescription.toLowerCase().includes(query);
        if (!matchTitle && !matchCategory && !matchDeveloper && !matchDesc) return false;
      }

      return true;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'downloads') return b.downloadsCount - a.downloadsCount;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return parseInt(b.releaseYear) - parseInt(a.releaseYear);
      return 0;
    });

    return result;
  }, [allGames, activePlatform, selectedCategory, searchQuery, sortBy]);

  // Featured Spotlight Games
  const featuredGames = useMemo(() => {
    return allGames.filter((g) => g.isFeatured).slice(0, 3);
  }, [allGames]);

  const handleSelectGame = (game: Game, tab: 'descarga' | 'requisitos' | 'guia' | 'comentarios' = 'descarga') => {
    setSelectedGame(game);
    setModalInitialTab(tab);
  };

  const handleQuickDownload = (game: Game, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedGame(game);
    setModalInitialTab('descarga');
  };

  const handleResetFilters = () => {
    setActivePlatform('Ambos');
    setSelectedCategory('Todos');
    setSearchQuery('');
  };

  const handleFocusSearch = () => {
    searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => searchInputRef.current?.focus(), 350);
  };

  const handleShowTrending = () => {
    setActivePlatform('Ambos');
    setSelectedCategory('Todos');
    setSortBy('downloads');
    const galleryEl = document.getElementById('galeria-juegos');
    galleryEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToComments = () => {
    const el = document.getElementById('caja-comentarios');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      isLight ? 'bg-[#f0f4f9] text-slate-800 selection:bg-cyan-200 selection:text-cyan-900' : 'bg-[#050711] text-slate-100 selection:bg-cyan-500 selection:text-black'
    }`}>
      {/* 1. Header Navigation with Theme Toggle and "+ Subir Juego" */}
      <Header
        activePlatform={activePlatform}
        onSelectPlatform={setActivePlatform}
        onOpenRequestModal={() => setIsRequestModalOpen(true)}
        onOpenGuideModal={() => setIsGuideModalOpen(true)}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
        onScrollToComments={handleScrollToComments}
        onFocusSearch={handleFocusSearch}
        onShowTrending={handleShowTrending}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* 2. Main Hero Banner with stylized PortalxD.com logo & neon controller art */}
      <MainBanner
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activePlatform={activePlatform}
        onSelectPlatform={setActivePlatform}
        searchInputRef={searchInputRef}
        theme={theme}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
      />

      {/* 3. Featured Spotlight Highlights */}
      {!searchQuery && selectedCategory === 'Todos' && (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-pink-500 animate-pulse" />
              <h2 className={`text-lg sm:text-xl font-black tracking-wide ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Destacados Neón de la Semana
              </h2>
            </div>
            <span className={`text-xs font-mono hidden sm:inline font-bold ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>
              100% FUNCIONALES & PROBADOS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredGames.map((game) => {
              const isLiked = likedGameIds.has(game.id);
              const likes = likesMap[game.id] ?? game.likesCount ?? 0;

              return (
                <div
                  key={game.id}
                  onClick={() => handleSelectGame(game)}
                  className={`group relative h-48 sm:h-56 rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                    isLight
                      ? 'border-slate-300 hover:border-cyan-500 shadow-[0_4px_20px_rgba(2,132,199,0.15)] hover:shadow-[0_8px_30px_rgba(2,132,199,0.25)]'
                      : 'border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.45)]'
                  }`}
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-90 group-hover:brightness-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-black/70 border border-slate-700 backdrop-blur-xs text-cyan-300">
                    {game.platform === 'PC' ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                    <span>{game.platform === 'Ambos' ? 'PC & Android' : game.platform}</span>
                  </div>

                  {/* Botón de Me Gusta en la imagen de Destacados */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <button
                      onClick={(e) => handleToggleLike(game.id, e)}
                      title={isLiked ? 'Quitar Me Gusta' : 'Dar Me Gusta'}
                      className={`h-8 px-2.5 rounded-full flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer backdrop-blur-sm border ${
                        isLiked
                          ? 'bg-pink-950/90 border-pink-400 text-pink-300 shadow-[0_0_12px_rgba(236,72,153,0.7)]'
                          : 'bg-black/60 border-slate-700 text-slate-200 hover:text-pink-400 hover:border-pink-500/50'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-pink-500 text-pink-400' : ''}`} />
                      <span className="font-mono text-[11px]">
                        {likes > 999 ? `${(likes / 1000).toFixed(1)}k` : likes}
                      </span>
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                        {game.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {game.title}
                      </h3>
                      <span className="text-xs text-slate-300 font-medium">
                        {game.fileSize} · {game.version}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectGame(game, 'comentarios');
                        }}
                        className="p-1.5 rounded-lg bg-black/60 hover:bg-[#1877F2] text-white border border-slate-700 transition-colors cursor-pointer"
                        title="Ver comentarios de Facebook"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => handleQuickDownload(game, e)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-white neon-glow-btn cursor-pointer"
                      >
                        Descargar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. Main Games Gallery (Includes Custom User Uploaded Games) */}
      <main className="flex-grow">
        <GameGallery
          games={filteredGames}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedPlatform={activePlatform}
          onSelectPlatform={setActivePlatform}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onSelectGame={handleSelectGame}
          onQuickDownload={handleQuickDownload}
          searchQuery={searchQuery}
          onResetFilters={handleResetFilters}
          likedGameIds={likedGameIds}
          likesMap={likesMap}
          onToggleLike={handleToggleLike}
          theme={theme}
        />

        {/* 5. Live Community Comments Box (Muro de Comentarios General) */}
        <CommunityCommentWall theme={theme} />

        {/* 6. Community & Social Networks Bar */}
        <SocialBar theme={theme} />
      </main>

      {/* 7. Side Neon Radio Player */}
      <NeonRadioPlayer streamUrl="https://technoplayerserver.net/8202/stream" theme={theme} />

      {/* 8. Game Download & Facebook Comments Modal */}
      <GameDetailModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
        initialTab={modalInitialTab}
        isLiked={selectedGame ? likedGameIds.has(selectedGame.id) : false}
        likesCount={selectedGame ? (likesMap[selectedGame.id] ?? selectedGame.likesCount ?? 0) : 0}
        onToggleLike={handleToggleLike}
        theme={theme}
      />

      {/* 9. Upload Game Modal (User can upload games to the web) */}
      <UploadGameModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onGameUploaded={handleGameUploaded}
        theme={theme}
      />

      {/* 10. Request Game Modal */}
      <RequestGameModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        theme={theme}
      />

      {/* 11. Installation Guide Modal */}
      <InstallationGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        theme={theme}
      />

      {/* 12. Footer */}
      <Footer
        onSelectPlatform={setActivePlatform}
        onOpenRequestModal={() => setIsRequestModalOpen(true)}
        onOpenGuideModal={() => setIsGuideModalOpen(true)}
        theme={theme}
      />
    </div>
  );
}
