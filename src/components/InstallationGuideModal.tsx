import React, { useState } from 'react';
import { X, BookOpen, Monitor, Smartphone, AlertTriangle } from 'lucide-react';
import { Theme } from '../types';

interface InstallationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: Theme;
}

export const InstallationGuideModal: React.FC<InstallationGuideModalProps> = ({
  isOpen,
  onClose,
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';
  const [guideCategory, setGuideCategory] = useState<'pc' | 'android' | 'errores'>('pc');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div 
        className={`relative w-full max-w-3xl border-2 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.35)] overflow-hidden p-6 sm:p-8 ${
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
          <BookOpen className="w-5 h-5 text-cyan-500" />
          <h2 className={`text-xl sm:text-2xl font-black tracking-wide ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Centro de Ayuda e Instalación · PortalxD.com
          </h2>
        </div>
        <p className={`text-xs sm:text-sm mb-6 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          Aprende a instalar tus juegos favoritos en PC y Celulares Android paso a paso, sin errores ni complicaciones.
        </p>

        {/* Tab switch */}
        <div className={`flex items-center gap-2 border-b pb-3 mb-6 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
          <button
            onClick={() => setGuideCategory('pc')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border ${
              guideCategory === 'pc'
                ? isLight ? 'bg-cyan-100 text-cyan-900 border-cyan-400' : 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                : isLight ? 'bg-slate-50 text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Guía para Juegos de PC</span>
          </button>

          <button
            onClick={() => setGuideCategory('android')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border ${
              guideCategory === 'android'
                ? isLight ? 'bg-emerald-100 text-emerald-900 border-emerald-400' : 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                : isLight ? 'bg-slate-50 text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Guía APK + OBB Android</span>
          </button>

          <button
            onClick={() => setGuideCategory('errores')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border ${
              guideCategory === 'errores'
                ? isLight ? 'bg-pink-100 text-pink-900 border-pink-400' : 'bg-pink-500/20 text-pink-300 border-pink-400'
                : isLight ? 'bg-slate-50 text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Solución de Errores Comunes</span>
          </button>
        </div>

        {/* Category: PC Guide */}
        {guideCategory === 'pc' && (
          <div className="space-y-3.5 text-xs sm:text-sm">
            <div className={`p-3.5 rounded-xl border flex gap-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}>
              <span className={`w-6 h-6 rounded-full font-bold flex items-center justify-center flex-shrink-0 border ${
                isLight ? 'bg-cyan-100 border-cyan-300 text-cyan-800' : 'bg-cyan-950 border-cyan-400 text-cyan-300'
              }`}>
                1
              </span>
              <div>
                <strong className={`block mb-0.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Descarga y Descompresión</strong>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                  Descarga todas las partes si el juego viene dividido. Guarda todas las partes en una misma carpeta, da clic derecho a la Parte 1 y selecciona &ldquo;Extraer aquí&rdquo; usando <strong>WinRAR</strong> o <strong>7-Zip</strong>. Contraseña de extracción: <code className="text-cyan-600 font-bold">PortalxD.com</code>.
                </p>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl border flex gap-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}>
              <span className={`w-6 h-6 rounded-full font-bold flex items-center justify-center flex-shrink-0 border ${
                isLight ? 'bg-cyan-100 border-cyan-300 text-cyan-800' : 'bg-cyan-950 border-cyan-400 text-cyan-300'
              }`}>
                2
              </span>
              <div>
                <strong className={`block mb-0.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Ejecutar Instalador como Administrador</strong>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                  Abre la carpeta resultante, localiza el archivo <strong>Setup.exe</strong>, haz clic derecho y selecciona &ldquo;Ejecutar como Administrador&rdquo;. Marca la casilla para crear acceso directo en el escritorio.
                </p>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl border flex gap-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}>
              <span className={`w-6 h-6 rounded-full font-bold flex items-center justify-center flex-shrink-0 border ${
                isLight ? 'bg-cyan-100 border-cyan-300 text-cyan-800' : 'bg-cyan-950 border-cyan-400 text-cyan-300'
              }`}>
                3
              </span>
              <div>
                <strong className={`block mb-0.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Librerías DirectX y Visual C++ Redistributable</strong>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                  Si el instalador te pregunta si deseas instalar DirectX y Visual C++, déjalo activado para evitar errores de arranque como pantallas negras o archivos DLL faltantes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Category: Android Guide */}
        {guideCategory === 'android' && (
          <div className="space-y-3.5 text-xs sm:text-sm">
            <div className={`p-3.5 rounded-xl border flex gap-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}>
              <span className={`w-6 h-6 rounded-full font-bold flex items-center justify-center flex-shrink-0 border ${
                isLight ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-emerald-950 border-emerald-400 text-emerald-300'
              }`}>
                1
              </span>
              <div>
                <strong className={`block mb-0.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Permitir Fuentes Desconocidas</strong>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                  En tu celular ve a <em>Ajustes &gt; Seguridad o Privacidad &gt; Instalar aplicaciones de fuentes desconocidas</em> y activa el permiso para tu navegador o gestor de archivos (como Google Chrome o ZArchiver).
                </p>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl border flex gap-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}>
              <span className={`w-6 h-6 rounded-full font-bold flex items-center justify-center flex-shrink-0 border ${
                isLight ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-emerald-950 border-emerald-400 text-emerald-300'
              }`}>
                2
              </span>
              <div>
                <strong className={`block mb-0.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Instalar Datos OBB (Si el juego los requiere)</strong>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                  Si el juego descargado incluye una carpeta OBB (por ejemplo <code>com.rockstargames.gtasa</code>), cópiala exactamente dentro de la memoria interna en: <code>Memoria Interna &gt; Android &gt; obb</code>.
                </p>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl border flex gap-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}>
              <span className={`w-6 h-6 rounded-full font-bold flex items-center justify-center flex-shrink-0 border ${
                isLight ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-emerald-950 border-emerald-400 text-emerald-300'
              }`}>
                3
              </span>
              <div>
                <strong className={`block mb-0.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Instalar el APK e Iniciar</strong>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                  Toca sobre el archivo .APK descargado, pulsa &ldquo;Instalar&rdquo; y una vez finalizado ábrelo. ¡El mod de recursos infinitos y desbloqueo ya estará activo!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Category: Common Errors */}
        {guideCategory === 'errores' && (
          <div className="space-y-3.5 text-xs sm:text-sm">
            <div className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-pink-50 border-pink-200' : 'bg-slate-900/90 border-pink-500/30'
            }`}>
              <strong className={`block mb-1 ${isLight ? 'text-pink-900' : 'text-pink-300'}`}>
                Falta archivo DLL (ej: MSVCP140.dll, D3DX9_43.dll)
              </strong>
              <p className={isLight ? 'text-slate-700' : 'text-slate-400'}>
                Instala el paquete <strong>Visual C++ Redistributable AIO (All in One)</strong> y el instalador web de tiempos de ejecución para usuario final de DirectX 9/11 de Microsoft.
              </p>
            </div>

            <div className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-pink-50 border-pink-200' : 'bg-slate-900/90 border-pink-500/30'
            }`}>
              <strong className={`block mb-1 ${isLight ? 'text-pink-900' : 'text-pink-300'}`}>
                Windows Defender elimina el archivo de crack o activación
              </strong>
              <p className={isLight ? 'text-slate-700' : 'text-slate-400'}>
                Los cracks son modificadores de ejecutables que los antivirus marcan como falso positivo. Agrega la carpeta del juego a la lista de exclusiones de Seguridad de Windows para que no borre ningún archivo.
              </p>
            </div>

            <div className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-pink-50 border-pink-200' : 'bg-slate-900/90 border-pink-500/30'
            }`}>
              <strong className={`block mb-1 ${isLight ? 'text-pink-900' : 'text-pink-300'}`}>
                Error de descompresión: &ldquo;CRC falló o archivo dañado&rdquo;
              </strong>
              <p className={isLight ? 'text-slate-700' : 'text-slate-400'}>
                Actualiza tu versión de WinRAR a la versión más reciente (v7.0+) o usa 7-Zip. Si alguna parte se interrumpió durante la descarga, vuelve a descargar esa parte específica.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
