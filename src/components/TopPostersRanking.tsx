import React, { useState } from 'react';
import { Trophy, Crown, Medal, Award, Flame, Download, UploadCloud, CheckCircle2, Star, ThumbsUp, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { TopPoster, Theme } from '../types';
import { TOP_POSTERS_DATA } from '../data/topPosters';
import { Interactive3DTilt } from './Interactive3DTilt';

interface TopPostersRankingProps {
  theme?: Theme;
  onOpenUploadModal: () => void;
  onSearchUploader?: (term: string) => void;
  onToastMessage?: (msg: string, type?: 'success' | 'info') => void;
}

export const TopPostersRanking: React.FC<TopPostersRankingProps> = ({
  theme = 'neon-dark',
  onOpenUploadModal,
  onSearchUploader,
  onToastMessage,
}) => {
  const isLight = theme === 'neon-light';

  const [timeFilter, setTimeFilter] = useState<'all' | 'month' | 'week'>('all');
  const [posters, setPosters] = useState<TopPoster[]>(TOP_POSTERS_DATA);
  const [thankedPosters, setThankedPosters] = useState<Set<string>>(new Set());

  const handleGiveReputation = (posterId: string, username: string) => {
    if (thankedPosters.has(posterId)) {
      onToastMessage?.(`Ya has agradecido los aportes de ${username} hoy. ¡Vuelve mañana!`, 'info');
      return;
    }

    setPosters(prev =>
      prev.map(p => (p.id === posterId ? { ...p, reputation: p.reputation + 10 } : p))
    );
    setThankedPosters(prev => new Set(prev).add(posterId));
    onToastMessage?.(`+10 Puntos de Reputación otorgados a ${username}. ¡Gracias por apoyar a la comunidad!`, 'success');
  };

  const top3 = posters.slice(0, 3);
  const restPosters = posters.slice(3);

  // Aura and medal styling configs
  const getPodiumConfig = (rank: number) => {
    switch (rank) {
      case 1:
        return {
          title: '#1 Oro Neón',
          border: 'border-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.5)]',
          badgeBg: 'bg-amber-400 text-slate-950 shadow-[0_0_15px_#f59e0b]',
          crownColor: 'text-amber-300 drop-shadow-[0_0_12px_#f59e0b]',
          glowGradient: 'from-amber-500/25 via-yellow-500/15 to-transparent',
          height: 'h-80 sm:h-88',
        };
      case 2:
        return {
          title: '#2 Plata Neón',
          border: 'border-slate-300 shadow-[0_0_30px_rgba(203,213,225,0.4)]',
          badgeBg: 'bg-slate-200 text-slate-900 shadow-[0_0_12px_#cbd5e1]',
          crownColor: 'text-slate-200 drop-shadow-[0_0_10px_#cbd5e1]',
          glowGradient: 'from-slate-400/20 via-cyan-400/10 to-transparent',
          height: 'h-72 sm:h-80',
        };
      case 3:
      default:
        return {
          title: '#3 Bronce Neón',
          border: 'border-amber-600 shadow-[0_0_30px_rgba(217,119,6,0.4)]',
          badgeBg: 'bg-amber-600 text-white shadow-[0_0_12px_#d97706]',
          crownColor: 'text-amber-500 drop-shadow-[0_0_10px_#d97706]',
          glowGradient: 'from-orange-500/20 via-pink-500/10 to-transparent',
          height: 'h-68 sm:h-76',
        };
    }
  };

  return (
    <section id="ranking-posteadores" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
      
      {/* 1. Header with Neon Title & Action */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.6)]">
              <Trophy className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h2 className={`text-2xl sm:text-3xl font-black tracking-wide ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Ranking Neón de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 font-extrabold">
                Top Posteadores
              </span>
            </h2>
          </div>

          <p className={`text-xs sm:text-sm max-w-2xl leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Los uploaders y releasers más activos de <strong>PortalxD.com</strong>. Suben juegos 100% testeados, enlaces directos sin publicidad engañosa y con la contraseña oficial.
          </p>
        </div>

        {/* Filters and CTA to Upload */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Time Filter Buttons */}
          <div className={`flex items-center gap-1 p-1 rounded-xl border ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/90 border-slate-800'
          }`}>
            <button
              onClick={() => setTimeFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                timeFilter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Histórico
            </button>
            <button
              onClick={() => setTimeFilter('month')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                timeFilter === 'month'
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Este Mes
            </button>
            <button
              onClick={() => setTimeFilter('week')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                timeFilter === 'week'
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Esta Semana
            </button>
          </div>

          {/* Upload game CTA */}
          <button
            onClick={onOpenUploadModal}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Subir Aporte & Entrar al Top</span>
          </button>
        </div>
      </div>

      {/* 2. Top 3 Neon Podium (Cards arranged: #2 Silver, #1 Gold, #3 Bronze) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-12">
        
        {/* PODIUM #2 (Silver) */}
        {top3[1] && (() => {
          const cfg = getPodiumConfig(2);
          const p = top3[1];
          const hasThanked = thankedPosters.has(p.id);

          return (
            <Interactive3DTilt key={p.id} maxTilt={10} scale={1.03} className="order-2 md:order-1">
              <div className={`relative rounded-3xl p-6 border ${cfg.border} bg-slate-900/90 overflow-hidden flex flex-col justify-between transition-all backdrop-blur-md`}>
                <div className={`absolute inset-0 bg-gradient-to-b ${cfg.glowGradient} pointer-events-none`} />

                {/* Badge Rank */}
                <div className="flex items-center justify-between z-10 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1 ${cfg.badgeBg}`}>
                    <Medal className="w-3.5 h-3.5" />
                    <span>#2 Plata</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{p.specialty}</span>
                </div>

                {/* Avatar and Crown */}
                <div className="flex flex-col items-center text-center z-10 my-2">
                  <div className="relative mb-3">
                    <Crown className={`w-8 h-8 ${cfg.crownColor} absolute -top-5 left-1/2 -translate-x-1/2 animate-bounce`} />
                    <img
                      src={p.avatar}
                      alt={p.username}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-300 shadow-[0_0_20px_rgba(203,213,225,0.4)]"
                      referrerPolicy="no-referrer"
                    />
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 bg-slate-950 rounded-full absolute -bottom-1 -right-1" />
                  </div>

                  <h3 className="text-lg font-black text-white hover:text-cyan-300 transition-colors">
                    {p.username}
                  </h3>
                  <span className="text-xs font-bold text-slate-300 px-2.5 py-0.5 mt-1 rounded-full bg-slate-800 border border-slate-700">
                    {p.role}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-2xl bg-slate-950/70 border border-slate-800 z-10 my-3 text-center">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Juegos</span>
                    <span className="text-sm font-black text-cyan-300 font-mono">{p.gamesCount}</span>
                  </div>
                  <div className="border-x border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-medium">Descargas</span>
                    <span className="text-sm font-black text-emerald-400 font-mono">{p.totalDownloads}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Puntos</span>
                    <span className="text-sm font-black text-amber-300 font-mono">{(p.reputation / 1000).toFixed(1)}k</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 z-10 pt-2">
                  <button
                    onClick={() => handleGiveReputation(p.id, p.username)}
                    disabled={hasThanked}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      hasThanked
                        ? 'bg-slate-800 text-slate-500 border border-slate-700'
                        : 'bg-slate-800 hover:bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${hasThanked ? '' : 'text-cyan-400'}`} />
                    <span>{hasThanked ? 'Agradecido' : '+10 Puntos'}</span>
                  </button>

                  <button
                    onClick={() => onSearchUploader?.(p.username)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                    title={`Ver aportes de ${p.username}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Interactive3DTilt>
          );
        })()}

        {/* PODIUM #1 (Gold - Center & Elevated) */}
        {top3[0] && (() => {
          const cfg = getPodiumConfig(1);
          const p = top3[0];
          const hasThanked = thankedPosters.has(p.id);

          return (
            <Interactive3DTilt key={p.id} maxTilt={12} scale={1.04} className="order-1 md:order-2 md:-translate-y-4">
              <div className={`relative rounded-3xl p-7 border-2 ${cfg.border} bg-slate-900/95 overflow-hidden flex flex-col justify-between transition-all backdrop-blur-md shadow-[0_0_50px_rgba(251,191,36,0.35)]`}>
                {/* Gold Glow Aura */}
                <div className={`absolute inset-0 bg-gradient-to-b ${cfg.glowGradient} pointer-events-none`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 blur-3xl pointer-events-none" />

                {/* Badge Rank */}
                <div className="flex items-center justify-between z-10 mb-4">
                  <span className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${cfg.badgeBg}`}>
                    <Crown className="w-4 h-4 fill-slate-950" />
                    <span>#1 Máximo Uploader</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                    <span>{p.specialty}</span>
                  </span>
                </div>

                {/* Avatar and Crown */}
                <div className="flex flex-col items-center text-center z-10 my-3">
                  <div className="relative mb-3.5">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 rounded-3xl blur-md opacity-80 animate-pulse" />
                    <Crown className={`w-10 h-10 ${cfg.crownColor} absolute -top-7 left-1/2 -translate-x-1/2 animate-bounce`} />
                    <img
                      src={p.avatar}
                      alt={p.username}
                      className="relative w-24 h-24 rounded-2xl object-cover border-2 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.6)]"
                      referrerPolicy="no-referrer"
                    />
                    <CheckCircle2 className="w-6 h-6 text-amber-400 bg-slate-950 rounded-full absolute -bottom-1 -right-1 z-10" />
                  </div>

                  <h3 className="text-xl font-black text-white hover:text-amber-300 transition-colors drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                    {p.username}
                  </h3>
                  <span className="text-xs font-extrabold text-amber-300 px-3 py-0.5 mt-1 rounded-full bg-amber-950/80 border border-amber-400/60 shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                    {p.role}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1">Último aporte: <strong className="text-slate-200">{p.recentGame}</strong></span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3.5 px-3 rounded-2xl bg-slate-950/80 border border-amber-500/40 z-10 my-3 text-center shadow-[inset_0_0_15px_rgba(251,191,36,0.1)]">
                  <div>
                    <span className="text-[10px] text-amber-200/80 block font-medium uppercase">Juegos</span>
                    <span className="text-base font-black text-amber-300 font-mono">{p.gamesCount}</span>
                  </div>
                  <div className="border-x border-slate-800">
                    <span className="text-[10px] text-amber-200/80 block font-medium uppercase">Descargas</span>
                    <span className="text-base font-black text-emerald-400 font-mono">{p.totalDownloads}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-200/80 block font-medium uppercase">Puntos</span>
                    <span className="text-base font-black text-amber-400 font-mono">{(p.reputation / 1000).toFixed(1)}k</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 z-10 pt-2">
                  <button
                    onClick={() => handleGiveReputation(p.id, p.username)}
                    disabled={hasThanked}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      hasThanked
                        ? 'bg-slate-800 text-slate-500 border border-slate-700'
                        : 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:shadow-[0_0_30px_rgba(251,191,36,0.9)] hover:scale-102'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{hasThanked ? 'Aportes Agradecidos' : '¡Dar +10 Puntos al #1!'}</span>
                  </button>

                  <button
                    onClick={() => onSearchUploader?.(p.username)}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                    title={`Ver todos los aportes de ${p.username}`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Interactive3DTilt>
          );
        })()}

        {/* PODIUM #3 (Bronze) */}
        {top3[2] && (() => {
          const cfg = getPodiumConfig(3);
          const p = top3[2];
          const hasThanked = thankedPosters.has(p.id);

          return (
            <Interactive3DTilt key={p.id} maxTilt={10} scale={1.03} className="order-3">
              <div className={`relative rounded-3xl p-6 border ${cfg.border} bg-slate-900/90 overflow-hidden flex flex-col justify-between transition-all backdrop-blur-md`}>
                <div className={`absolute inset-0 bg-gradient-to-b ${cfg.glowGradient} pointer-events-none`} />

                {/* Badge Rank */}
                <div className="flex items-center justify-between z-10 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1 ${cfg.badgeBg}`}>
                    <Award className="w-3.5 h-3.5" />
                    <span>#3 Bronce</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{p.specialty}</span>
                </div>

                {/* Avatar and Crown */}
                <div className="flex flex-col items-center text-center z-10 my-2">
                  <div className="relative mb-3">
                    <Crown className={`w-8 h-8 ${cfg.crownColor} absolute -top-5 left-1/2 -translate-x-1/2 animate-bounce`} />
                    <img
                      src={p.avatar}
                      alt={p.username}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-600 shadow-[0_0_20px_rgba(217,119,6,0.4)]"
                      referrerPolicy="no-referrer"
                    />
                    <CheckCircle2 className="w-5 h-5 text-amber-500 bg-slate-950 rounded-full absolute -bottom-1 -right-1" />
                  </div>

                  <h3 className="text-lg font-black text-white hover:text-amber-400 transition-colors">
                    {p.username}
                  </h3>
                  <span className="text-xs font-bold text-amber-400 px-2.5 py-0.5 mt-1 rounded-full bg-slate-800 border border-slate-700">
                    {p.role}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-2xl bg-slate-950/70 border border-slate-800 z-10 my-3 text-center">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Juegos</span>
                    <span className="text-sm font-black text-cyan-300 font-mono">{p.gamesCount}</span>
                  </div>
                  <div className="border-x border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-medium">Descargas</span>
                    <span className="text-sm font-black text-emerald-400 font-mono">{p.totalDownloads}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Puntos</span>
                    <span className="text-sm font-black text-amber-300 font-mono">{(p.reputation / 1000).toFixed(1)}k</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 z-10 pt-2">
                  <button
                    onClick={() => handleGiveReputation(p.id, p.username)}
                    disabled={hasThanked}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      hasThanked
                        ? 'bg-slate-800 text-slate-500 border border-slate-700'
                        : 'bg-slate-800 hover:bg-orange-950 border border-orange-500/40 text-orange-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${hasThanked ? '' : 'text-orange-400'}`} />
                    <span>{hasThanked ? 'Agradecido' : '+10 Puntos'}</span>
                  </button>

                  <button
                    onClick={() => onSearchUploader?.(p.username)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                    title={`Ver aportes de ${p.username}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Interactive3DTilt>
          );
        })()}

      </div>

      {/* 3. Leaderboard Table (Ranks #4 to #8) */}
      <div className={`rounded-3xl border overflow-hidden backdrop-blur-md ${
        isLight ? 'bg-white border-slate-200 shadow-lg' : 'bg-slate-900/80 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
      }`}>
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-pink-500 animate-pulse" />
            <h3 className={`text-base sm:text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Cuadro de Honor Comunitario · Top 4 al 8
            </h3>
          </div>
          <span className="text-xs font-mono text-cyan-400 font-bold hidden sm:inline">
            ACTUALIZADO EN TIEMPO REAL
          </span>
        </div>

        <div className="divide-y divide-slate-800/80">
          {restPosters.map((poster) => {
            const hasThanked = thankedPosters.has(poster.id);

            return (
              <div
                key={poster.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
              >
                {/* Left: Rank, Avatar and Info */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-black text-sm text-cyan-400 flex-shrink-0">
                    #{poster.rank}
                  </span>

                  <img
                    src={poster.avatar}
                    alt={poster.username}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-700 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-sm sm:text-base truncate ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        {poster.username}
                      </span>
                      {poster.isVerified && (
                        <span title="Uploader Verificado 100% Sin Virus">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span className="text-cyan-300 font-medium">{poster.role}</span>
                      <span>·</span>
                      <span className="truncate">{poster.specialty}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Stats & Action */}
                <div className="flex items-center justify-between sm:justify-end gap-5">
                  <div className="flex items-center gap-4 sm:gap-6 text-center">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Juegos</span>
                      <span className="font-mono font-bold text-xs sm:text-sm text-white">{poster.gamesCount}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Descargas</span>
                      <span className="font-mono font-bold text-xs sm:text-sm text-emerald-400">{poster.totalDownloads}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Puntos</span>
                      <span className="font-mono font-bold text-xs sm:text-sm text-amber-300">{(poster.reputation / 1000).toFixed(1)}k</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleGiveReputation(poster.id, poster.username)}
                    disabled={hasThanked}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      hasThanked
                        ? 'bg-slate-800 text-slate-500 border border-slate-700'
                        : 'bg-slate-800 hover:bg-cyan-950 border border-slate-700 hover:border-cyan-400 text-cyan-300 shadow-sm'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{hasThanked ? 'Agradecido' : '+10 Pts'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
