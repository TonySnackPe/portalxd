import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, ChevronRight, ChevronLeft, Wifi } from 'lucide-react';
import { Theme } from '../types';

interface NeonRadioPlayerProps {
  streamUrl?: string;
  theme?: Theme;
}

export const NeonRadioPlayer: React.FC<NeonRadioPlayerProps> = ({
  streamUrl = 'https://technoplayerserver.net/8202/stream',
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = streamUrl;
    audio.preload = 'none';
    audio.volume = volume;
    audioRef.current = audio;

    audio.onwaiting = () => setIsLoading(true);
    audio.onplaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
      setHasError(false);
    };
    audio.onpause = () => {
      setIsPlaying(false);
      setIsLoading(false);
    };
    audio.onerror = () => {
      setIsLoading(false);
      setIsPlaying(false);
      setHasError(true);
    };

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [streamUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      setHasError(false);
      audioRef.current.src = streamUrl;
      audioRef.current.play().catch(() => {
        setIsLoading(false);
        setIsPlaying(false);
        setHasError(true);
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (isMuted && val > 0) setIsMuted(false);
  };

  return (
    <aside 
      aria-label="Reproductor de Radio Neón PortalxD"
      className={`fixed right-0 top-1/3 z-40 transition-transform duration-300 ${
        isCollapsed ? 'translate-x-[calc(100%-42px)]' : 'translate-x-0'
      }`}
    >
      <div className="flex items-center">
        {/* Collapse / Expand Tab Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`h-28 w-10.5 rounded-l-xl border-y-2 border-l-2 border-cyan-400 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-colors ${
            isLight
              ? 'bg-white/95 text-cyan-700 shadow-[-5px_0_15px_rgba(2,132,199,0.2)] hover:bg-slate-50'
              : 'bg-slate-900/95 text-cyan-300 shadow-[-5px_0_20px_rgba(6,182,212,0.4)] hover:bg-slate-800'
          }`}
          title={isCollapsed ? 'Abrir Radio Neón' : 'Minimizar Radio'}
        >
          {isCollapsed ? (
            <>
              <ChevronLeft className="w-5 h-5 text-cyan-500 animate-pulse" />
              <Radio className="w-4 h-4 text-pink-500" />
              <span className={`text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 ${
                isLight ? 'text-cyan-800' : 'text-cyan-300'
              }`}>
                RADIO
              </span>
            </>
          ) : (
            <ChevronRight className="w-5 h-5 text-cyan-500" />
          )}
        </button>

        {/* Main Neon Radio Panel */}
        <div className={`w-68 sm:w-76 p-4 rounded-l-2xl backdrop-blur-xl border-y-2 border-l-2 border-cyan-400 flex flex-col gap-3.5 ${
          isLight
            ? 'bg-white/95 text-slate-800 shadow-[-10px_0_30px_rgba(2,132,199,0.25)]'
            : 'bg-[#080c1e]/95 text-slate-100 shadow-[-10px_0_35px_rgba(6,182,212,0.45)]'
        }`}>
          
          {/* Header with Live Neon Signal */}
          <div className={`flex items-center justify-between border-b pb-2.5 ${
            isLight ? 'border-slate-200' : 'border-cyan-500/20'
          }`}>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Radio className="w-5 h-5 text-cyan-500" />
                {isPlaying && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
                )}
              </div>
              <div>
                <span 
                  className={`text-xs font-black uppercase tracking-wider text-transparent bg-clip-text ${
                    isLight 
                      ? 'bg-gradient-to-r from-blue-700 via-cyan-600 to-pink-600' 
                      : 'bg-gradient-to-r from-cyan-400 via-sky-300 to-pink-400'
                  }`} 
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  PORTALXD RADIO
                </span>
                <span className={`block text-[10px] font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Techno & Gamer Beats
                </span>
              </div>
            </div>

            {/* LIVE Badge */}
            <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border ${
              isLight 
                ? 'bg-pink-100 border-pink-300 shadow-xs' 
                : 'bg-pink-950/80 border-pink-500/50 shadow-[0_0_8px_rgba(236,72,153,0.4)]'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-pink-500'}`} />
              <span className={`text-[10px] font-bold uppercase tracking-wider font-mono ${
                isLight ? 'text-pink-800' : 'text-pink-300'
              }`}>
                {isPlaying ? 'EN VIVO' : 'STREAM'}
              </span>
            </div>
          </div>

          {/* Equalizer Visualizer */}
          <div className={`h-10 px-3 rounded-xl border flex items-center justify-between gap-1 overflow-hidden shadow-inner ${
            isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-950/80 border-cyan-500/30'
          }`}>
            {[45, 80, 60, 95, 30, 70, 90, 50, 85, 40, 100, 65, 35, 75, 90].map((height, i) => (
              <span
                key={i}
                className={`w-1 rounded-full transition-all duration-150 ${
                  isPlaying
                    ? i % 3 === 0
                      ? 'bg-pink-500 shadow-[0_0_8px_#ec4899]'
                      : i % 2 === 0
                      ? 'bg-cyan-500 shadow-[0_0_8px_#06b6d4]'
                      : 'bg-emerald-500 shadow-[0_0_8px_#10b981]'
                    : isLight
                    ? 'bg-slate-300 h-2'
                    : 'bg-slate-700 h-2'
                }`}
                style={{
                  height: isPlaying ? `${Math.max(15, (height * (i % 2 === 0 ? 0.9 : 1.1)) % 100)}%` : '6px',
                  animation: isPlaying ? `bounce ${(i % 4) * 0.2 + 0.4}s infinite alternate ease-in-out` : 'none',
                }}
              />
            ))}
          </div>

          {/* Main Controls: Play Button & Status */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className="flex-grow py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-white neon-glow-btn flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Conectando...</span>
                </>
              ) : isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white text-white" />
                  <span>Pausar Radio</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white text-white" />
                  <span>Sintonizar En Vivo</span>
                </>
              )}
            </button>

            {/* Mute button */}
            <button
              onClick={toggleMute}
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                isLight 
                  ? 'bg-slate-100 border-slate-300 text-slate-700 hover:text-cyan-700 hover:border-cyan-400' 
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400'
              }`}
              title={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-pink-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-cyan-500" />
              )}
            </button>
          </div>

          {/* Volume Slider */}
          <div className={`flex items-center gap-2 text-xs px-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            <Volume2 className="w-3.5 h-3.5 flex-shrink-0" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-cyan-500 bg-slate-300"
            />
            <span className={`font-mono text-[10px] w-8 text-right font-bold ${
              isLight ? 'text-cyan-800' : 'text-cyan-300'
            }`}>
              {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>

          {/* Stream Connection info */}
          <div className={`flex items-center justify-between text-[10px] pt-1 border-t ${
            isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800/80 text-slate-400'
          }`}>
            <span className="flex items-center gap-1">
              <Wifi className="w-3 h-3 text-cyan-500" />
              <span>technoplayerserver.net</span>
            </span>
            <span className={`font-mono font-bold ${isLight ? 'text-cyan-700' : 'text-cyan-300'}`}>
              192 kbps HD
            </span>
          </div>

          {hasError && (
            <div className="text-[11px] text-pink-700 bg-pink-100 p-2 rounded border border-pink-300 text-center font-medium">
              El stream está reconectando. Pulsa Sintonizar de nuevo.
            </div>
          )}

        </div>
      </div>
    </aside>
  );
};
