import React, { useState, useEffect } from 'react';
import { Game, DownloadLink, Theme } from '../types';
import { FacebookComments } from './FacebookComments';
import { 
  X, Download, ShieldCheck, CheckCircle2, 
  HardDrive, Star, Heart, MessageSquare,
  Cpu, Copy, Check, FileCheck
} from 'lucide-react';

interface GameDetailModalProps {
  game: Game | null;
  onClose: () => void;
  initialTab?: 'descarga' | 'requisitos' | 'guia' | 'comentarios';
  isLiked?: boolean;
  likesCount?: number;
  onToggleLike?: (gameId: string, e: React.MouseEvent) => void;
  theme?: Theme;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({
  game,
  onClose,
  initialTab = 'descarga',
  isLiked = false,
  likesCount,
  onToggleLike,
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';

  const [selectedLink, setSelectedLink] = useState<DownloadLink | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [downloadCompleted, setDownloadCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState<'descarga' | 'requisitos' | 'guia' | 'comentarios'>(initialTab);
  const [copiedKey, setCopiedKey] = useState(false);

  useEffect(() => {
    if (game && game.downloadLinks.length > 0) {
      setSelectedLink(game.downloadLinks[0]);
      setDownloadProgress(null);
      setDownloadCompleted(false);
      setActiveTab(initialTab || 'descarga');
    }
  }, [game, initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!game) return null;

  const currentLikes = likesCount !== undefined ? likesCount : (game.likesCount || 0);

  const handleStartFastDownload = (link: DownloadLink) => {
    setSelectedLink(link);
    setDownloadProgress(0);
    setDownloadCompleted(false);

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 18) + 12;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setDownloadProgress(100);
        setDownloadCompleted(true);

        // Safe file trigger
        const dummyFileName = `${game.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_portalxd.${game.platform === 'Android' ? 'apk' : 'zip'}`;
        const blob = new Blob(
          [
            `¡Gracias por descargar desde PortalxD.com!\n\n` +
            `Juego: ${game.title}\n` +
            `Versión: ${game.version}\n` +
            `Servidor: ${link.server}\n` +
            `Seguridad: Verificado con VirusTotal 0/68.\n` +
            `Instrucciones de instalación:\n` +
            game.installSteps.map((step, idx) => `${idx + 1}. ${step}`).join('\n') +
            `\n\nVisita https://PortalxD.com para más juegos de PC y Android.`
          ],
          { type: 'text/plain;charset=utf-8' }
        );
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = dummyFileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        setDownloadProgress(progress);
      }
    }, 180);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText('PortalxD.com');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div 
        className={`relative w-full max-w-4xl border-2 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.35)] overflow-hidden my-6 ${
          isLight ? 'bg-white border-cyan-400 text-slate-800' : 'bg-[#090d1f] border-cyan-500/50 text-slate-200'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg border ${
            isLight 
              ? 'bg-white/90 border-slate-300 text-slate-700 hover:text-black hover:border-cyan-500' 
              : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400'
          }`}
          title="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Cover */}
        <div className="relative h-52 sm:h-68 w-full overflow-hidden bg-slate-950">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover object-center filter brightness-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/50" />

          {/* Quick info over banner */}
          <div className="absolute bottom-4 left-4 sm:left-8 right-16 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-cyan-950 border border-cyan-400/60 text-cyan-300">
                {game.platform === 'PC' ? 'PC Windows' : game.platform === 'Android' ? 'Android APK' : 'PC & Android'}
              </span>
              <span className="text-xs text-slate-300 font-semibold">{game.category}</span>
              <span className="text-xs text-slate-400">· {game.releaseYear}</span>
            </div>
            
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {game.title}
            </h2>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{game.rating.toFixed(2)}</span>
                <span className="text-slate-400 font-normal">({game.votesCount.toLocaleString()} votos)</span>
              </span>
              <span>·</span>
              <span className="text-emerald-400 font-medium">
                {game.downloadsCount.toLocaleString()} descargas
              </span>
              <span>·</span>
              
              {/* Botón de Me Gusta en la ficha del juego */}
              <button
                onClick={(e) => onToggleLike && onToggleLike(game.id, e)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  isLiked
                    ? 'bg-pink-950/90 border-pink-400 text-pink-300 shadow-[0_0_12px_rgba(236,72,153,0.7)]'
                    : 'bg-black/60 border-slate-700 text-slate-200 hover:text-pink-400 hover:border-pink-500/50'
                }`}
                title={isLiked ? 'Quitar Me Gusta' : 'Dar Me Gusta'}
              >
                <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-pink-500 text-pink-400' : ''}`} />
                <span>{isLiked ? 'Te gusta' : 'Me Gusta'}</span>
                <span className="font-mono tabular-nums">({currentLikes.toLocaleString()})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Including Facebook Comments Tab) */}
        <div className={`flex items-center gap-2 px-4 sm:px-8 border-b overflow-x-auto ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
        }`}>
          <button
            onClick={() => setActiveTab('descarga')}
            className={`py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-bold tracking-wide border-b-2 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'descarga'
                ? isLight ? 'border-cyan-600 text-cyan-800 font-bold' : 'border-cyan-400 text-cyan-300 neon-text-cyan'
                : isLight ? 'border-transparent text-slate-600 hover:text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Descarga Directa</span>
          </button>

          <button
            onClick={() => setActiveTab('requisitos')}
            className={`py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-bold tracking-wide border-b-2 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'requisitos'
                ? isLight ? 'border-cyan-600 text-cyan-800 font-bold' : 'border-cyan-400 text-cyan-300 neon-text-cyan'
                : isLight ? 'border-transparent text-slate-600 hover:text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Requisitos</span>
          </button>

          <button
            onClick={() => setActiveTab('guia')}
            className={`py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-bold tracking-wide border-b-2 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'guia'
                ? isLight ? 'border-cyan-600 text-cyan-800 font-bold' : 'border-cyan-400 text-cyan-300 neon-text-cyan'
                : isLight ? 'border-transparent text-slate-600 hover:text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>Instalación</span>
          </button>

          {/* Facebook Comments Tab (User requested: que tenga comentario de facebook) */}
          <button
            onClick={() => setActiveTab('comentarios')}
            className={`py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-bold tracking-wide border-b-2 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'comentarios'
                ? 'border-[#1877F2] text-[#1877F2] font-bold shadow-xs'
                : isLight ? 'border-transparent text-slate-600 hover:text-[#1877F2]' : 'border-transparent text-slate-400 hover:text-[#1877F2]'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-[10px] font-bold">
              f
            </div>
            <span>Comentarios de Facebook</span>
          </button>
        </div>

        {/* Tab 1: Direct Download */}
        {activeTab === 'descarga' && (
          <div className="p-4 sm:p-8 space-y-6">
            <div>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                {game.description}
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {game.features.map((feature, idx) => (
                  <div key={idx} className={`flex items-center gap-2 p-2 rounded border ${
                    isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900/60 border-slate-800 text-slate-300'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* VirusTotal Safety */}
            <div className={`p-3.5 rounded-xl border flex items-center justify-between text-xs sm:text-sm ${
              isLight 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
            }`}>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-500 drop-shadow-[0_0_8px_#10b981]" />
                <div>
                  <span className="font-bold">Verificado por PortalxD Security: </span>
                  <span>Archivo limpio de malware, ransomware y adware (0/68 VirusTotal).</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs bg-emerald-900/40 px-2.5 py-1 rounded border border-emerald-400/40">
                <span>ESTADO: SEGURO</span>
              </div>
            </div>

            {/* Download Manager */}
            {downloadProgress !== null && (
              <div className={`p-4 rounded-xl border space-y-3 ${
                isLight ? 'bg-slate-900 text-white border-cyan-500' : 'bg-slate-950 border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
              }`}>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-cyan-300 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 animate-spin text-cyan-400" />
                    <span>Descargador Rápido PortalxD · {selectedLink?.server}</span>
                  </span>
                  <span className="font-mono text-cyan-400">{downloadProgress}%</span>
                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-cyan-500/30">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-200 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Velocidad: ~48.2 MB/s</span>
                  {downloadCompleted ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> ¡Descarga iniciada exitosamente!
                    </span>
                  ) : (
                    <span>Conectando con mirrors de alta disponibilidad...</span>
                  )}
                </div>
              </div>
            )}

            {/* Download Server Options */}
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center justify-between ${
                isLight ? 'text-slate-800' : 'text-slate-300'
              }`}>
                <span>Selecciona Servidor de Descarga:</span>
                <span className="text-xs font-normal text-slate-500">Tamaño: {game.fileSize}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {game.downloadLinks.map((link, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                      link.isRecommended
                        ? isLight
                          ? 'bg-cyan-50/50 border-cyan-400 shadow-sm'
                          : 'bg-slate-900 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : isLight
                        ? 'bg-white border-slate-200 hover:border-slate-300'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold border ${
                        isLight ? 'bg-cyan-100 text-cyan-800 border-cyan-300' : 'bg-slate-800 text-cyan-400 border-slate-700'
                      }`}>
                        {link.server === 'MediaFire' ? 'MF' : link.server === 'Mega.nz' ? 'MG' : link.server === 'Google Drive' ? 'GD' : 'APK'}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{link.server}</span>
                          {link.isRecommended && (
                            <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-cyan-900/60 text-cyan-300 border border-cyan-500/50">
                              Recomendado
                            </span>
                          )}
                        </div>
                        <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Velocidad: {link.speed}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleStartFastDownload(link)}
                      className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Rar Password */}
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg border text-xs ${
              isLight ? 'bg-slate-100 border-slate-300 text-slate-700' : 'bg-slate-900/90 border-slate-800 text-slate-400'
            }`}>
              <span>¿El archivo comprimido solicita contraseña al descomprimir?</span>
              <div className="flex items-center gap-2">
                <span className={`font-mono font-bold px-2 py-1 rounded border ${
                  isLight ? 'bg-white text-cyan-800 border-cyan-300' : 'bg-slate-950 text-cyan-300 border-slate-700'
                }`}>
                  PortalxD.com
                </span>
                <button
                  onClick={copyPassword}
                  className={`px-2.5 py-1 text-xs rounded flex items-center gap-1 cursor-pointer transition-colors ${
                    isLight ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: System Requirements */}
        {activeTab === 'requisitos' && (
          <div className="p-4 sm:p-8 space-y-6">
            {game.pcRequirements && (
              <div className="space-y-3">
                <h3 className={`text-base font-bold flex items-center gap-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  <span className="text-cyan-500">●</span> Requisitos de Hardware para PC (Windows)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className={`p-3 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                    <span className="text-slate-500 block mb-1">Sistema Operativo:</span>
                    <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{game.pcRequirements.os}</span>
                  </div>
                  <div className={`p-3 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                    <span className="text-slate-500 block mb-1">Procesador (CPU):</span>
                    <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{game.pcRequirements.processor}</span>
                  </div>
                  <div className={`p-3 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                    <span className="text-slate-500 block mb-1">Memoria RAM:</span>
                    <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{game.pcRequirements.ram}</span>
                  </div>
                  <div className={`p-3 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                    <span className="text-slate-500 block mb-1">Tarjeta Gráfica (GPU):</span>
                    <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{game.pcRequirements.graphics}</span>
                  </div>
                  <div className={`p-3 rounded-lg border sm:col-span-2 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                    <span className="text-slate-500 block mb-1">Almacenamiento:</span>
                    <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{game.pcRequirements.storage}</span>
                  </div>
                </div>
              </div>
            )}

            {game.androidRequirements && (
              <div className={`space-y-3 pt-4 border-t ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                <h3 className={`text-base font-bold flex items-center gap-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  <span className="text-emerald-500">●</span> Requisitos para Celulares Android
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className={`p-3 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                    <span className="text-slate-500 block mb-1">Versión de Android:</span>
                    <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{game.androidRequirements.androidVersion}</span>
                  </div>
                  <div className={`p-3 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                    <span className="text-slate-500 block mb-1">Memoria RAM:</span>
                    <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{game.androidRequirements.ram}</span>
                  </div>
                  <div className={`p-3 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                    <span className="text-slate-500 block mb-1">Espacio de Almacenamiento Libre:</span>
                    <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{game.androidRequirements.storage}</span>
                  </div>
                  <div className={`p-3 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                    <span className="text-slate-500 block mb-1">¿Requiere Root?:</span>
                    <span className="font-semibold text-emerald-600">
                      {game.androidRequirements.rootRequired ? 'Sí' : 'No (Funciona en cualquier teléfono)'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Installation Guide */}
        {activeTab === 'guia' && (
          <div className="p-4 sm:p-8 space-y-4">
            <h3 className={`text-base font-bold flex items-center gap-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
              <span>Paso a Paso para Instalar {game.title}</span>
            </h3>

            <div className="space-y-2.5">
              {game.installSteps.map((step, idx) => (
                <div key={idx} className={`flex items-start gap-3 p-3.5 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'
                }`}>
                  <span className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center flex-shrink-0 border ${
                    isLight ? 'bg-cyan-100 border-cyan-300 text-cyan-800' : 'bg-cyan-950 border-cyan-400/60 text-cyan-300'
                  }`}>
                    {idx + 1}
                  </span>
                  <p className={`text-xs sm:text-sm leading-relaxed pt-0.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className={`p-3.5 rounded-xl border text-xs mt-4 ${
              isLight ? 'bg-cyan-50 border-cyan-300 text-cyan-900' : 'bg-cyan-950/30 border-cyan-500/30 text-cyan-200'
            }`}>
              <strong>Nota de PortalxD:</strong> Si durante la instalación tu antivirus detecta falsos positivos causados por el crack o activador del juego, añade la carpeta del juego a las exclusiones de Windows Defender. Todos nuestros archivos son revisados minuciosamente.
            </div>
          </div>
        )}

        {/* Tab 4: Facebook Comments Section (User requested) */}
        {activeTab === 'comentarios' && (
          <div className="p-4 sm:p-8">
            <FacebookComments
              gameId={game.id}
              gameTitle={game.title}
              theme={theme}
            />
          </div>
        )}

      </div>
    </div>
  );
};
