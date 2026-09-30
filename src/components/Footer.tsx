import React from 'react';
import { PortalXdLogo } from './PortalXdLogo';
import { ShieldCheck, Radio, ArrowUp } from 'lucide-react';
import { Platform, Theme } from '../types';

interface FooterProps {
  onSelectPlatform: (platform: Platform) => void;
  onOpenRequestModal: () => void;
  onOpenGuideModal: () => void;
  theme?: Theme;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectPlatform,
  onOpenRequestModal,
  onOpenGuideModal,
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`w-full border-t text-xs mt-12 transition-colors duration-300 ${
      isLight 
        ? 'bg-slate-100 border-slate-200 text-slate-600' 
        : 'bg-[#04060f] border-slate-800 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand & Disclaimer */}
          <div className="md:col-span-2 space-y-4">
            <div onClick={scrollToTop} className="cursor-pointer inline-block">
              <PortalXdLogo size="sm" showMascot={true} />
            </div>
            <p className={`text-xs sm:text-sm max-w-md leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}>
              <strong>PortalxD.com</strong> es tu biblioteca gamer de descargas directas para PC (Windows) y dispositivos móviles Android. Juegos sin acortadores molestos, testeados y libres de amenazas.
            </p>
            <div className={`flex items-center gap-2 font-semibold text-xs ${
              isLight ? 'text-emerald-700' : 'text-emerald-400'
            }`}>
              <ShieldCheck className="w-4 h-4 drop-shadow-[0_0_6px_#10b981]" />
              <span>Garantía de archivos 100% limpios de virus y troyanos</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className={`text-sm font-bold uppercase tracking-wider font-mono ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              Secciones
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onSelectPlatform('PC');
                    scrollToTop();
                  }}
                  className={`transition-colors cursor-pointer ${
                    isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'
                  }`}
                >
                  Juegos para PC Windows
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectPlatform('Android');
                    scrollToTop();
                  }}
                  className={`transition-colors cursor-pointer ${
                    isLight ? 'hover:text-emerald-700' : 'hover:text-emerald-400'
                  }`}
                >
                  Juegos Android (APK + OBB)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRequestModal}
                  className={`transition-colors cursor-pointer ${
                    isLight ? 'hover:text-pink-700' : 'hover:text-pink-400'
                  }`}
                >
                  Petición de Juegos
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGuideModal}
                  className={`transition-colors cursor-pointer ${
                    isLight ? 'hover:text-cyan-700' : 'hover:text-cyan-400'
                  }`}
                >
                  Guías de Solución de Errores
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Servidores y Radio */}
          <div className="space-y-3">
            <h4 className={`text-sm font-bold uppercase tracking-wider font-mono ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              Servidores & Radio
            </h4>
            <ul className="space-y-2 text-xs">
              <li className={`flex items-center gap-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                <span>MediaFire (Mirrors Directos)</span>
              </li>
              <li className={`flex items-center gap-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                <span>Mega.nz & Google Drive</span>
              </li>
              <li className={`flex items-center gap-1.5 ${isLight ? 'text-pink-700 font-semibold' : 'text-pink-300'}`}>
                <Radio className="w-3.5 h-3.5 text-pink-500" />
                <span>Radio Neón Oficial Online</span>
              </li>
              <li className={`text-[11px] pt-1 ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
                Contraseña ZIP: <strong className={isLight ? 'text-slate-800' : 'text-slate-300'}>PortalxD.com</strong>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] ${
          isLight ? 'border-slate-200 text-slate-500' : 'border-slate-900 text-slate-500'
        }`}>
          <div>
            © 2026 <strong>PortalxD.com</strong>. Todos los derechos reservados. Diseñado para la comunidad gamer.
          </div>

          <div className="flex items-center gap-4">
            <span>Aviso Legal DMCA</span>
            <span>·</span>
            <span>Política de Privacidad</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1 font-semibold transition-colors cursor-pointer ${
                isLight ? 'text-cyan-700 hover:text-cyan-800' : 'text-cyan-400 hover:text-cyan-300'
              }`}
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
