import React, { useState, useRef } from 'react';
import { X, User, Globe, Calendar, Camera, Edit2, Check, LogOut, Award, ThumbsUp, MessageSquare, UploadCloud, ShieldCheck, Sparkles, Gamepad2 } from 'lucide-react';
import { UserProfile, Theme } from '../types';
import { COUNTRIES_LIST } from '../data/countries';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
  onLogout: () => void;
  theme?: Theme;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  onUpdateProfile,
  onLogout,
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [country, setCountry] = useState(user.country);
  const [countryFlag, setCountryFlag] = useState(user.countryFlag);
  const [age, setAge] = useState(user.age);
  const [bio, setBio] = useState(user.bio);
  const [favoritePlatform, setFavoritePlatform] = useState(user.favoritePlatform);
  const [avatar, setAvatar] = useState(user.avatar);

  if (!isOpen) return null;

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const found = COUNTRIES_LIST.find((c) => c.name === selectedName);
    setCountry(selectedName);
    if (found) {
      setCountryFlag(found.flag);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const updated: UserProfile = {
      ...user,
      username: username.trim() || user.username,
      country,
      countryFlag,
      age: Number(age) || user.age,
      bio: bio.trim() || user.bio,
      favoritePlatform,
      avatar,
    };

    onUpdateProfile(updated);
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className={`relative w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden my-6 transition-all ${
          isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)]'
        }`}
      >
        {/* Cover / Banner with Neon Glow */}
        <div className="relative h-28 bg-gradient-to-r from-blue-900 via-indigo-950 to-cyan-900 p-4 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 border border-cyan-400/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.4)]">
              Perfil Gamer · PortalxD
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-950/70 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Avatar & Header Identity */}
        <div className="px-6 relative pb-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-14 mb-4 gap-3">
            <div className="relative">
              <img
                src={avatar}
                alt={user.username}
                className="w-24 h-24 rounded-2xl object-cover border-4 border-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.5)] bg-slate-950"
              />
              {isEditing && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-1 right-1 p-2 rounded-xl bg-cyan-500 text-white shadow-md hover:bg-cyan-400 transition-colors cursor-pointer"
                  title="Cambiar foto de perfil"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            <div className="flex items-center gap-2">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] hover:scale-102 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Guardar Cambios</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-cyan-300 bg-slate-800 border border-slate-700 hover:border-cyan-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Edit2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Editar Perfil</span>
                </button>
              )}

              <button
                onClick={onLogout}
                className="px-3 py-1.5 rounded-xl text-xs font-bold text-red-300 bg-red-950/50 border border-red-500/40 hover:bg-red-900/60 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Cerrar sesión"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Salir</span>
              </button>
            </div>
          </div>

          {/* User Basic Info */}
          {!isEditing ? (
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-black text-white">{user.username}</h3>
                <span className="text-lg" title={user.country}>{user.countryFlag}</span>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-cyan-950 border border-cyan-400/60 text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                  {user.role}
                </span>
              </div>

              {/* Country, Age and Platform pills */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-2">
                <div className="flex items-center gap-1 bg-slate-950/70 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{user.country}</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-950/70 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{user.age} Años</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-950/70 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                  <Gamepad2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>{user.favoritePlatform}</span>
                </div>
              </div>

              {/* Bio */}
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                "{user.bio}"
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-3 gap-2 mt-4 p-3 rounded-2xl bg-slate-950/80 border border-cyan-500/20 text-center">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Reputación</span>
                  <span className="text-sm font-black text-amber-400 font-mono">+{user.reputationPoints} pts</span>
                </div>
                <div className="border-x border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase">Aportes</span>
                  <span className="text-sm font-black text-cyan-300 font-mono">{user.gamesUploadedCount}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Miembro Desde</span>
                  <span className="text-xs font-bold text-slate-300">{user.registeredDate}</span>
                </div>
              </div>
            </div>
          ) : (
            /* Editing Mode */
            <div className="space-y-3.5 mt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Nick Gamer
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    País de Origen
                  </label>
                  <select
                    value={country}
                    onChange={handleCountryChange}
                    className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 cursor-pointer"
                  >
                    {COUNTRIES_LIST.map((c) => (
                      <option key={c.code} value={c.name} className="bg-slate-900 text-white">
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Edad (Años)
                  </label>
                  <input
                    type="number"
                    min={10}
                    max={99}
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value) || 18)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Plataforma Favorita
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['PC Gamer', 'Android', 'Ambas'] as const).map((plat) => (
                    <button
                      key={plat}
                      type="button"
                      onClick={() => setFavoritePlatform(plat)}
                      className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        favoritePlatform === plat
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      {plat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Biografía / Mensaje
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={2}
                  className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
