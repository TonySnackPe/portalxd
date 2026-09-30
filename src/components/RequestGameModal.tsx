import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle, ThumbsUp, Gamepad, Smartphone } from 'lucide-react';
import { Platform, Theme } from '../types';

interface RequestGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: Theme;
}

export const RequestGameModal: React.FC<RequestGameModalProps> = ({
  isOpen,
  onClose,
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';

  const [gameTitle, setGameTitle] = useState('');
  const [platform, setPlatform] = useState<Platform>('PC');
  const [comments, setComments] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [communityRequests, setCommunityRequests] = useState([
    { id: 1, title: 'Black Myth: Wukong (PC)', platform: 'PC', votes: 412, voted: false },
    { id: 2, title: 'Sonic Frontiers + DLCs (PC)', platform: 'PC', votes: 329, voted: false },
    { id: 3, title: 'Minecraft 1.21.30 APK Oficial', platform: 'Android', votes: 580, voted: false },
    { id: 4, title: 'Naruto Shippuden Ultimate Ninja Storm 4', platform: 'PC', votes: 290, voted: false },
  ]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameTitle.trim()) return;

    setCommunityRequests([
      {
        id: Date.now(),
        title: `${gameTitle} (${platform})`,
        platform,
        votes: 1,
        voted: true,
      },
      ...communityRequests,
    ]);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setGameTitle('');
      setComments('');
      setEmail('');
      onClose();
    }, 2200);
  };

  const handleVote = (id: number) => {
    setCommunityRequests(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextVoted = !item.voted;
          return {
            ...item,
            votes: nextVoted ? item.votes + 1 : item.votes - 1,
            voted: nextVoted,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div 
        className={`relative w-full max-w-2xl border-2 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.35)] overflow-hidden p-6 sm:p-8 ${
          isLight ? 'bg-white border-cyan-400 text-slate-800' : 'bg-[#0a0f26] border-cyan-500/50 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
            isLight ? 'bg-slate-100 border-slate-300 text-slate-700 hover:text-black' : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-cyan-500" />
          <h2 className={`text-xl sm:text-2xl font-black tracking-wide ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Pide tu Juego en PortalxD.com
          </h2>
        </div>
        <p className={`text-xs sm:text-sm mb-6 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          ¿No encuentras el juego que estás buscando? Nuestro equipo de modders y uploaders subirá la versión testeada en menos de 48 horas.
        </p>

        {isSubmitted ? (
          <div className={`p-8 text-center rounded-xl border space-y-3 ${
            isLight ? 'bg-cyan-50 border-cyan-300' : 'bg-cyan-950/40 border-cyan-400/60'
          }`}>
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
            <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>¡Petición Recibida con Éxito!</h3>
            <p className={`text-xs ${isLight ? 'text-cyan-800' : 'text-cyan-200'}`}>
              Hemos añadido tu solicitud a la lista prioritaria de PortalxD.com. Te notificaremos cuando los enlaces estén listos.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Nombre del Juego *
              </label>
              <input
                type="text"
                required
                value={gameTitle}
                onChange={(e) => setGameTitle(e.target.value)}
                placeholder="Ejemplo: Need for Speed Most Wanted, FNF Mario Madness..."
                className={`w-full py-2.5 px-3.5 rounded-lg text-sm placeholder-slate-400 border focus:outline-none ${
                  isLight
                    ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                    : 'bg-slate-900 border-slate-700 text-white focus:border-cyan-400'
                }`}
              />
            </div>

            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Plataforma Solicitada *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPlatform('PC')}
                  className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    platform === 'PC'
                      ? isLight ? 'bg-cyan-100 text-cyan-900 border-cyan-400' : 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                      : isLight ? 'bg-slate-50 text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-700'
                  }`}
                >
                  <Gamepad className="w-4 h-4" />
                  <span>Juego para PC Windows</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatform('Android')}
                  className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    platform === 'Android'
                      ? isLight ? 'bg-emerald-100 text-emerald-900 border-emerald-400' : 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                      : isLight ? 'bg-slate-50 text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-700'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Celular Android (APK)</span>
                </button>
              </div>
            </div>

            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Detalles Adicionales o Mod Deseado (Opcional)
              </label>
              <textarea
                rows={2}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Indica si requieres algún mod específico, idioma español, o versión ligera para PC de bajos recursos."
                className={`w-full py-2 px-3.5 rounded-lg text-xs placeholder-slate-400 border focus:outline-none ${
                  isLight
                    ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                    : 'bg-slate-900 border-slate-700 text-white focus:border-cyan-400'
                }`}
              />
            </div>

            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Tu Correo Electrónico (Para avisarte cuando se suba)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu_correo@ejemplo.com"
                className={`w-full py-2 px-3.5 rounded-lg text-xs placeholder-slate-400 border focus:outline-none ${
                  isLight
                    ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                    : 'bg-slate-900 border-slate-700 text-white focus:border-cyan-400'
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white neon-glow-btn flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Petición a los Moderadores</span>
            </button>
          </form>
        )}

        {/* Community Requests Voting Board */}
        <div className={`mt-8 pt-6 border-t ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
          <span className={`text-xs font-bold uppercase tracking-wider block mb-3 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Peticiones Más Votadas por la Comunidad:
          </span>
          <div className="space-y-2">
            {communityRequests.map((req) => (
              <div
                key={req.id}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-xs ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    req.platform === 'PC' 
                      ? isLight ? 'bg-cyan-100 text-cyan-800' : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                      : isLight ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                  }`}>
                    {req.platform}
                  </span>
                  <span className={`font-semibold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>{req.title}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleVote(req.id)}
                  className={`px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    req.voted
                      ? 'bg-cyan-500 text-black shadow-[0_0_8px_rgba(6,182,212,0.6)]'
                      : isLight ? 'bg-slate-200 hover:bg-slate-300 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>{req.votes}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
