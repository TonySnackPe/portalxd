import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, ThumbsUp, Flame, Heart, Gamepad2, User, Sparkles, Filter, Pin } from 'lucide-react';
import { Theme } from '../types';

interface WallComment {
  id: string;
  author: string;
  avatar?: string;
  badge?: string;
  badgeColor?: string;
  timeAgo: string;
  content: string;
  likes: number;
  userLiked?: boolean;
  gameMention?: string;
  isPinned?: boolean;
}

const INITIAL_WALL_COMMENTS: WallComment[] = [
  {
    id: 'wall-1',
    author: 'Staff_PortalxD',
    badge: 'Administrador',
    badgeColor: 'text-pink-400 bg-pink-950/80 border-pink-400/50',
    timeAgo: 'Fijado',
    content: '¡Bienvenidos a la caja de comentarios oficial de PortalxD.com! 🎮 Aquí pueden dejar sus opiniones, pedir nuevos títulos, avisar si algún mirror necesita actualización o compartir cómo les funcionaron los juegos en sus computadoras y celulares. ¡Los servidores están al 100%!',
    likes: 142,
    isPinned: true,
  },
  {
    id: 'wall-2',
    author: 'Rodrigo_Cyber99',
    badge: 'Gamer Pro',
    badgeColor: 'text-cyan-400 bg-cyan-950/80 border-cyan-400/50',
    timeAgo: 'Hace 30 minutos',
    content: 'Acabo de probar el Cyber Overdrive y me corre a 120 FPS estables con una RTX 3060. Increíble que venga todo pre-activado sin vueltas. Gracias por el trabajo equipo PortalxD.',
    likes: 38,
    gameMention: 'Cyber Overdrive',
  },
  {
    id: 'wall-3',
    author: 'Elena_FNF_Beats',
    badge: 'Modder FNF',
    badgeColor: 'text-emerald-400 bg-emerald-950/80 border-emerald-400/50',
    timeAgo: 'Hace 2 horas',
    content: 'Para los que juegan en celular Android: el FNF Neon Beat Edition tiene los controles táctiles bien calibrados, no hay delay en las notas de ritmo. 10/10.',
    likes: 29,
    gameMention: 'Friday Night Funkin',
  },
  {
    id: 'wall-4',
    author: 'Matias_SpeedRacer',
    badge: 'Miembro',
    badgeColor: 'text-slate-300 bg-slate-800 border-slate-700',
    timeAgo: 'Hace 4 horas',
    content: '¿Alguien sabe si el GTA San Andreas Neon Mod funciona con mando Bluetooth en Android 14? Lo descargué de MediaFire y bajó en 2 minutos.',
    likes: 15,
    gameMention: 'GTA San Andreas',
  },
];

interface CommunityCommentWallProps {
  theme?: Theme;
}

export const CommunityCommentWall: React.FC<CommunityCommentWallProps> = ({ theme = 'neon-dark' }) => {
  const isLight = theme === 'neon-light';
  const storageKey = 'portalxd_community_wall_comments';

  const [comments, setComments] = useState<WallComment[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return INITIAL_WALL_COMMENTS;
  });

  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [selectedTag, setSelectedTag] = useState('General');
  const [filterMode, setFilterMode] = useState<'all' | 'popular'>('all');

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments]);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: WallComment = {
      id: `wall-${Date.now()}`,
      author: authorName.trim() || 'Gamer_PortalxD',
      badge: 'Miembro',
      badgeColor: 'text-cyan-400 bg-cyan-950/80 border-cyan-400/50',
      timeAgo: 'Justo ahora',
      content: commentText.trim(),
      likes: 1,
      userLiked: true,
      gameMention: selectedTag !== 'General' ? selectedTag : undefined,
    };

    setComments([newComment, ...comments]);
    setCommentText('');
  };

  const handleToggleLike = (id: string) => {
    setComments(prev =>
      prev.map(c => {
        if (c.id === id) {
          const nextLiked = !c.userLiked;
          return {
            ...c,
            likes: nextLiked ? c.likes + 1 : Math.max(0, c.likes - 1),
            userLiked: nextLiked,
          };
        }
        return c;
      })
    );
  };

  const displayedComments = [...comments].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    if (filterMode === 'popular') return b.likes - a.likes;
    return 0;
  });

  return (
    <section id="caja-comentarios" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <h2 className={`text-xl sm:text-2xl font-black tracking-wide ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Caja de Comentarios de la Comunidad ·{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-pink-400">
                PortalxD.com
              </span>
            </h2>
          </div>
          <p className={`mt-1 text-xs sm:text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Comparte tus experiencias, deja tus recomendaciones o debate con otros gamers de la comunidad en vivo
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2">
          <span className={`text-xs flex items-center gap-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            <Filter className="w-3.5 h-3.5 text-cyan-500" />
            <span>Ver:</span>
          </span>
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
              filterMode === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                : isLight ? 'bg-white text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            Más Recientes
          </button>
          <button
            onClick={() => setFilterMode('popular')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border flex items-center gap-1 ${
              filterMode === 'popular'
                ? 'bg-pink-500/20 text-pink-300 border-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.3)]'
                : isLight ? 'bg-white text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Más Votados</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Form to Write a Comment */}
        <div className="lg:col-span-1">
          <div className={`p-5 sm:p-6 rounded-2xl border sticky top-24 transition-colors ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/90 border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
          }`}>
            <h3 className={`text-base font-bold mb-1 flex items-center gap-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Deja tu Mensaje en el Muro</span>
            </h3>
            <p className={`text-xs mb-4 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Tu mensaje será visible para todos los visitantes de PortalxD.com al instante.
            </p>

            <form onSubmit={handlePostComment} className="space-y-3.5 text-xs">
              <div>
                <label className={`block font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Tu Nombre o Nickname
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Ej: DarkPlayer_99"
                    className={`w-full py-2 pl-8 pr-3 rounded-lg border focus:outline-none ${
                      isLight 
                        ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500' 
                        : 'bg-slate-950 border-slate-700 text-white focus:border-cyan-400'
                    }`}
                  />
                  <User className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>

              <div>
                <label className={`block font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Tema o Juego Mencionado
                </label>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className={`w-full py-2 px-3 rounded-lg border focus:outline-none cursor-pointer ${
                    isLight 
                      ? 'bg-slate-50 border-slate-300 text-slate-900' 
                      : 'bg-slate-950 border-slate-700 text-white'
                  }`}
                >
                  <option value="General">General / Comunidad</option>
                  <option value="Cyber Overdrive">Cyber Overdrive (PC)</option>
                  <option value="Friday Night Funkin">Friday Night Funkin (PC & Android)</option>
                  <option value="GTA San Andreas">GTA San Andreas (Android)</option>
                  <option value="Mech Arena Prime">Mech Arena (Android)</option>
                  <option value="Velocidad de Servidores">Velocidad de Descarga</option>
                  <option value="Petición de Juego">Petición de Nuevo Juego</option>
                </select>
              </div>

              <div>
                <label className={`block font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Tu Comentario *
                </label>
                <textarea
                  rows={4}
                  required
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="¿Qué tal te pareció la web? ¿Te sirvió algún juego? Deja tus consejos para otros usuarios..."
                  className={`w-full py-2 px-3 rounded-lg border focus:outline-none leading-relaxed ${
                    isLight 
                      ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500' 
                      : 'bg-slate-950 border-slate-700 text-white focus:border-cyan-400'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={!commentText.trim()}
                className="w-full py-2.5 px-4 rounded-xl font-bold uppercase tracking-wider text-white neon-glow-btn flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-98 disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Publicar en la Caja</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Live Stream of Comments */}
        <div className="lg:col-span-2 space-y-4">
          {displayedComments.map((comment) => (
            <div
              key={comment.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                comment.isPinned
                  ? isLight
                    ? 'bg-cyan-50/70 border-cyan-400 shadow-sm'
                    : 'bg-gradient-to-r from-cyan-950/40 to-slate-900/90 border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : isLight
                  ? 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Comment Header */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  {comment.isPinned && (
                    <span className="flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-pink-950 text-pink-300 border border-pink-500/50">
                      <Pin className="w-3 h-3" /> Fijado
                    </span>
                  )}

                  <span className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {comment.author}
                  </span>

                  {comment.badge && (
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${comment.badgeColor || 'text-cyan-300 bg-cyan-950 border-cyan-800'}`}>
                      {comment.badge}
                    </span>
                  )}

                  {comment.gameMention && (
                    <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                      <Gamepad2 className="w-3 h-3" />
                      <span>{comment.gameMention}</span>
                    </span>
                  )}
                </div>

                <span className="text-xs text-slate-400 font-mono flex-shrink-0">
                  {comment.timeAgo}
                </span>
              </div>

              {/* Comment Content */}
              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                {comment.content}
              </p>

              {/* Comment Bottom Bar with Interactive Reactions */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleToggleLike(comment.id)}
                    className={`flex items-center gap-1.5 font-bold transition-all cursor-pointer ${
                      comment.userLiked
                        ? 'text-pink-400 drop-shadow-[0_0_8px_#ec4899]'
                        : isLight
                        ? 'text-slate-500 hover:text-pink-500'
                        : 'text-slate-400 hover:text-pink-400'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${comment.userLiked ? 'fill-pink-500 text-pink-400 scale-110' : ''}`} />
                    <span>Me Gusta</span>
                    <span className="font-mono text-[11px] tabular-nums">({comment.likes})</span>
                  </button>

                  <button
                    onClick={() => {
                      setCommentText(`@${comment.author} `);
                    }}
                    className={`transition-colors cursor-pointer ${
                      isLight ? 'text-slate-500 hover:text-slate-800' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Responder
                  </button>
                </div>

                <span className="text-[11px] text-slate-500 font-mono">
                  #PortalxD_Community
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
