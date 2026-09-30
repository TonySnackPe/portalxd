import React, { useState, useEffect } from 'react';
import { FacebookComment, Theme } from '../types';
import { MessageCircle, ThumbsUp, Send, User, Share2, Check } from 'lucide-react';

interface FacebookCommentsProps {
  gameId: string;
  gameTitle: string;
  theme?: Theme;
}

const DEFAULT_COMMENTS: Record<string, FacebookComment[]> = {
  default: [
    {
      id: 'fb-1',
      author: 'Carlos Mendoza Gamer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      timeAgo: 'Hace 2 horas',
      content: '¡Descargado e instalado al 100%! La velocidad por MediaFire es brutal, descargó a 40 MB/s. Muchas gracias PortalxD por no poner acortadores molestos 🔥🎮',
      likes: 18,
    },
    {
      id: 'fb-2',
      author: 'Valeria NeoRider',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      timeAgo: 'Hace 5 horas',
      content: 'Me funcionó perfecto en Windows 11 sin ningún error de DLL. Los gráficos en ultra se ven increíbles.',
      likes: 9,
    },
    {
      id: 'fb-3',
      author: 'Kevin Android Pro',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
      timeAgo: 'Ayer',
      content: 'Para los que juegan en celular: copien la carpeta OBB antes de instalar el APK y les va a correr a 60 fps estables. ¡Recomendadísimo!',
      likes: 27,
    },
  ],
};

export const FacebookComments: React.FC<FacebookCommentsProps> = ({
  gameId,
  gameTitle,
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';
  const storageKey = `portalxd_fb_comments_${gameId}`;

  const [comments, setComments] = useState<FacebookComment[]>(() => {
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
    return DEFAULT_COMMENTS[gameId] || DEFAULT_COMMENTS.default;
  });

  const [newCommentText, setNewCommentText] = useState('');
  const [authorName, setAuthorName] = useState('Gamer_PortalxD');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments, storageKey]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: FacebookComment = {
      id: `fb-${Date.now()}`,
      author: authorName.trim() || 'Gamer Anónimo',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      timeAgo: 'Justo ahora',
      content: newCommentText.trim(),
      likes: 0,
      userLiked: false,
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  const toggleCommentLike = (id: string) => {
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

  const handleShareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=500');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={`p-5 sm:p-6 rounded-2xl border transition-colors ${
      isLight 
        ? 'bg-slate-50/90 border-slate-200 text-slate-800' 
        : 'bg-slate-950/80 border-slate-800 text-slate-200'
    }`}>
      {/* Facebook Plugin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-700/50 mb-5">
        <div className="flex items-center gap-2.5">
          {/* Facebook Official Blue Icon */}
          <div className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-lg shadow-[0_0_12px_rgba(24,119,242,0.5)]">
            f
          </div>
          <div>
            <h3 className={`text-sm sm:text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Comentarios de Facebook
            </h3>
            <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {comments.length} comentarios sobre <span className="font-semibold">{gameTitle}</span>
            </span>
          </div>
        </div>

        {/* Facebook Share Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleShareOnFacebook}
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-[0_0_10px_rgba(24,119,242,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Compartir</span>
          </button>

          <button
            onClick={handleCopyLink}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1.5 cursor-pointer ${
              isLight ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100' : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{isCopied ? '¡Enlace copiado!' : 'Copiar enlace'}</span>
          </button>
        </div>
      </div>

      {/* New Comment Input Form */}
      <form onSubmit={handleAddComment} className="mb-6 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 text-xs font-bold">
            <User className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Tu nombre en Facebook..."
            className={`py-1.5 px-3 rounded-lg text-xs font-medium border focus:outline-none ${
              isLight 
                ? 'bg-white border-slate-300 text-slate-900 focus:border-blue-500' 
                : 'bg-slate-900 border-slate-700 text-slate-200 focus:border-cyan-400'
            }`}
          />
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            (Conectado como usuario de PortalxD)
          </span>
        </div>

        <div className="relative">
          <textarea
            rows={2}
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            placeholder={`Escribe un comentario sobre ${gameTitle}... ¿Te funcionó bien? ¿Qué tal la velocidad?`}
            className={`w-full py-2.5 px-3.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all ${
              isLight
                ? 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#1877F2] focus:shadow-[0_0_12px_rgba(24,119,242,0.2)]'
                : 'bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-[#1877F2] focus:shadow-[0_0_15px_rgba(24,119,242,0.3)]'
            }`}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Los comentarios se publican de forma instantánea y respetan las normas de la comunidad.
          </span>
          <button
            type="submit"
            disabled={!newCommentText.trim()}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_12px_rgba(24,119,242,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Publicar comentario</span>
          </button>
        </div>
      </form>

      {/* Existing Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`p-3.5 rounded-xl border transition-all ${
              isLight 
                ? 'bg-white border-slate-200 shadow-xs' 
                : 'bg-slate-900/70 border-slate-800'
            }`}
          >
            <div className="flex items-start gap-3">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-9 h-9 rounded-full object-cover border border-[#1877F2]/50 flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {comment.author}
                    </span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-[9px] font-bold" title="Verificado Facebook">
                      ✓
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">{comment.timeAgo}</span>
                </div>

                <p className={`mt-1.5 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {comment.content}
                </p>

                {/* Comment Actions (Like, Reply) */}
                <div className="mt-2.5 flex items-center gap-4 text-xs">
                  <button
                    onClick={() => toggleCommentLike(comment.id)}
                    className={`flex items-center gap-1 font-semibold transition-colors cursor-pointer ${
                      comment.userLiked
                        ? 'text-[#1877F2]'
                        : isLight
                        ? 'text-slate-500 hover:text-[#1877F2]'
                        : 'text-slate-400 hover:text-cyan-400'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${comment.userLiked ? 'fill-[#1877F2]' : ''}`} />
                    <span>Me gusta</span>
                    {comment.likes > 0 && (
                      <span className="font-mono text-[11px] ml-0.5">({comment.likes})</span>
                    )}
                  </button>

                  <button
                    onClick={() => setNewCommentText(`@${comment.author} `)}
                    className={`font-semibold cursor-pointer transition-colors ${
                      isLight ? 'text-slate-500 hover:text-slate-800' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Responder
                  </button>

                  <span className="text-slate-600">·</span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    PortalxD Community
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Official Facebook Social Disclaimer Footer */}
      <div className="mt-5 pt-3 border-t border-slate-700/40 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#1877F2]" />
          <span>Plugin social de comentarios de Facebook sincronizado con PortalxD</span>
        </div>
        <span className="font-mono text-[10px] text-slate-500">v2.4 API</span>
      </div>
    </div>
  );
};
