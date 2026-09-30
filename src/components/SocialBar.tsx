import React from 'react';
import { MessageSquare, Send, Youtube, Video, Sparkles, Users } from 'lucide-react';
import { Theme } from '../types';

interface SocialBarProps {
  theme?: Theme;
}

export const SocialBar: React.FC<SocialBarProps> = ({ theme = 'neon-dark' }) => {
  const isLight = theme === 'neon-light';

  const socials = [
    {
      name: 'Discord Oficial',
      handle: 'PortalxD Community',
      description: 'Canales de soporte 24/7, pedidos de juegos y torneos semanales.',
      icon: MessageSquare,
      url: 'https://discord.gg',
      color: 'blue',
      glow: isLight ? 'shadow-[0_4px_16px_rgba(59,130,246,0.15)]' : 'shadow-[0_0_20px_rgba(59,130,246,0.35)]',
      border: isLight ? 'border-blue-200 hover:border-blue-400' : 'border-blue-500/40 hover:border-blue-400',
      badge: '45.2K Miembros',
      btnText: 'Unirse al Servidor',
    },
    {
      name: 'Canal Telegram VIP',
      handle: '@PortalxD_VIP',
      description: 'Descargas directas sin acortadores y notificaciones al instante.',
      icon: Send,
      url: 'https://telegram.org',
      color: 'cyan',
      glow: isLight ? 'shadow-[0_4px_16px_rgba(6,182,212,0.15)]' : 'shadow-[0_0_20px_rgba(6,182,212,0.35)]',
      border: isLight ? 'border-cyan-200 hover:border-cyan-400' : 'border-cyan-500/40 hover:border-cyan-400',
      badge: 'Canal Oficial',
      btnText: 'Entrar a Telegram',
    },
    {
      name: 'YouTube Gaming',
      handle: 'PortalxD Games',
      description: 'Tutoriales de instalación sin errores y pruebas en PC de bajos recursos.',
      icon: Youtube,
      url: 'https://youtube.com',
      color: 'pink',
      glow: isLight ? 'shadow-[0_4px_16px_rgba(244,63,94,0.15)]' : 'shadow-[0_0_20px_rgba(244,63,94,0.35)]',
      border: isLight ? 'border-pink-200 hover:border-pink-400' : 'border-pink-500/40 hover:border-pink-400',
      badge: '180K Suscriptores',
      btnText: 'Ver Tutoriales',
    },
    {
      name: 'TikTok PortalxD',
      handle: '@portalxd_oficial',
      description: 'Los mejores mods de FNF, trucos para celulares y tops semanales.',
      icon: Video,
      url: 'https://tiktok.com',
      color: 'green',
      glow: isLight ? 'shadow-[0_4px_16px_rgba(16,185,129,0.15)]' : 'shadow-[0_0_20px_rgba(16,185,129,0.35)]',
      border: isLight ? 'border-emerald-200 hover:border-emerald-400' : 'border-emerald-500/40 hover:border-emerald-400',
      badge: '95K Seguidores',
      btnText: 'Seguir en TikTok',
    },
  ];

  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t ${
      isLight ? 'border-slate-200' : 'border-slate-800'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-500" />
            <h2 className={`text-xl sm:text-2xl font-black tracking-wide ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              Comunidad y Redes Sociales de{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isLight
                  ? 'from-blue-700 via-cyan-600 to-pink-600'
                  : 'from-cyan-400 via-sky-300 to-pink-400'
              }`}>
                PortalxD.com
              </span>
            </h2>
          </div>
          <p className={`mt-1 text-xs sm:text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Únete a nuestra comunidad gamer para recibir avisos de nuevos lanzamientos y soporte técnico en vivo
          </p>
        </div>

        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs border ${
          isLight
            ? 'bg-white border-slate-200 text-slate-700 shadow-xs'
            : 'bg-slate-900 border-slate-700 text-slate-300'
        }`}>
          <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
          <span>Atención al usuario 24/7 en Discord</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {socials.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-4 ${
                isLight ? 'bg-white' : 'bg-slate-900/80'
              } ${item.border} ${item.glow}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-cyan-500 ${
                    isLight ? 'bg-cyan-50 border-cyan-200' : 'bg-slate-800 border-slate-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    isLight 
                      ? 'bg-slate-100 text-slate-700 border-slate-200' 
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {item.name}
                </h3>
                <span className={`text-xs font-mono block mb-2 font-semibold ${
                  isLight ? 'text-cyan-700' : 'text-cyan-400'
                }`}>
                  {item.handle}
                </span>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {item.description}
                </p>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center transition-all cursor-pointer border ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 hover:border-cyan-500'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700 hover:border-cyan-400 shadow-sm'
                }`}
              >
                {item.btnText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
