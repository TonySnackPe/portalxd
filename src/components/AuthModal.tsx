import React, { useState, useRef } from 'react';
import { X, User, Mail, Lock, Globe, Calendar, Upload, Camera, Check, ShieldCheck, Sparkles, Gamepad2, ArrowRight } from 'lucide-react';
import { UserProfile, Theme } from '../types';
import { COUNTRIES_LIST, PRESET_AVATARS } from '../data/countries';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (profile: UserProfile) => void;
  theme?: Theme;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [mode, setMode] = useState<'register' | 'login'>('register');

  // Form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('México');
  const [countryFlag, setCountryFlag] = useState('🇲🇽');
  const [age, setAge] = useState<number>(18);
  const [bio, setBio] = useState('Gamer de corazón en PortalxD');
  const [favoritePlatform, setFavoritePlatform] = useState<'PC Gamer' | 'Android' | 'Ambas'>('PC Gamer');
  const [avatar, setAvatar] = useState(PRESET_AVATARS[0]);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

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

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Por favor selecciona una imagen válida (JPG, PNG, WEBP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('La foto no debe superar los 5MB.');
      return;
    }

    setErrorMessage('');
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setAvatar(result);
      setAvatarPreview(result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (mode === 'register') {
      if (!username.trim() || username.length < 3) {
        setErrorMessage('El nombre de usuario debe tener al menos 3 caracteres.');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        setErrorMessage('Introduce un correo electrónico válido.');
        return;
      }
      if (!password || password.length < 4) {
        setErrorMessage('La contraseña debe tener al menos 4 caracteres.');
        return;
      }
      if (!age || age < 10 || age > 99) {
        setErrorMessage('Por favor ingresa una edad válida (entre 10 y 99 años).');
        return;
      }

      const now = new Date();
      const dateFormatted = `${now.getDate()} de ${now.toLocaleString('es-ES', { month: 'short' })} ${now.getFullYear()}`;

      const newProfile: UserProfile = {
        id: `user-${Date.now()}`,
        username: username.trim(),
        email: email.trim(),
        avatar: avatarPreview || avatar,
        country,
        countryFlag,
        age: Number(age),
        bio: bio.trim() || 'Miembro de la comunidad gamer PortalxD.com',
        favoritePlatform,
        role: 'Gamer VIP',
        reputationPoints: 100, // Bono de bienvenida
        registeredDate: dateFormatted,
        gamesUploadedCount: 0,
        commentsCount: 0,
      };

      onLoginSuccess(newProfile);
      onClose();
    } else {
      // Login mode
      if (!email.trim()) {
        setErrorMessage('Introduce tu correo o nick para iniciar sesión.');
        return;
      }
      if (!password) {
        setErrorMessage('Introduce tu contraseña.');
        return;
      }

      // Check if user was previously saved, or create mock session
      const savedUserStr = localStorage.getItem('portalxd_user_profile');
      if (savedUserStr) {
        try {
          const saved = JSON.parse(savedUserStr);
          onLoginSuccess(saved);
          onClose();
          return;
        } catch {
          // fallback
        }
      }

      // Mock user login
      const fallbackProfile: UserProfile = {
        id: `user-${Date.now()}`,
        username: email.split('@')[0] || 'GamerPro',
        email: email.includes('@') ? email : `${email}@portalxd.com`,
        avatar: PRESET_AVATARS[0],
        country: 'México',
        countryFlag: '🇲🇽',
        age: 21,
        bio: 'Gamer apasionado en PortalxD.com',
        favoritePlatform: 'PC Gamer',
        role: 'Gamer VIP',
        reputationPoints: 150,
        registeredDate: 'Hoy',
        gamesUploadedCount: 0,
        commentsCount: 0,
      };

      onLoginSuccess(fallbackProfile);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className={`relative w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden my-6 transition-all ${
          isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)]'
        }`}
      >
        {/* Neon Glow Header */}
        <div className="relative p-6 bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border-b border-cyan-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <Sparkles className="w-5 h-5 animate-spin" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white tracking-wide">
                  {mode === 'register' ? 'Crear Perfil Gamer' : 'Iniciar Sesión'}
                </h2>
                <p className="text-xs text-cyan-300/80">
                  Portal Oficial de Descargas · PortalxD.com
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Toggle Tabs (Registrarse vs Iniciar Sesión) */}
          <div className="mt-4 flex rounded-xl bg-slate-950/70 p-1 border border-slate-800">
            <button
              type="button"
              onClick={() => { setMode('register'); setErrorMessage(''); }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                mode === 'register'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Registrarse (Nuevo Gamer)
            </button>
            <button
              type="button"
              onClick={() => { setMode('login'); setErrorMessage(''); }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ya tengo cuenta
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/60 text-red-200 text-xs font-semibold">
              ⚠️ {errorMessage}
            </div>
          )}

          {mode === 'register' ? (
            <>
              {/* 1. Photo / Avatar Upload Section */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-cyan-500/20">
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
                  Foto de Perfil / Avatar Gamer *
                </label>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Avatar Preview */}
                  <div className="relative group">
                    <img
                      src={avatarPreview || avatar}
                      alt="Preview Avatar"
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-slate-950/70 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-cyan-300 text-[10px] font-bold"
                    >
                      <Camera className="w-5 h-5 mb-0.5" />
                      <span>Cambiar</span>
                    </button>
                  </div>

                  {/* Actions for Photo */}
                  <div className="flex-1 w-full space-y-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-2 px-3 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Subir foto desde mi computadora</span>
                    </button>

                    {/* Presets */}
                    <div>
                      <span className="text-[10px] text-slate-400 block mb-1">O elige un avatar gamer:</span>
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                        {PRESET_AVATARS.map((pImg, idx) => (
                          <img
                            key={idx}
                            src={pImg}
                            alt="Preset"
                            onClick={() => { setAvatar(pImg); setAvatarPreview(null); }}
                            className={`w-8 h-8 rounded-lg object-cover cursor-pointer border transition-all ${
                              avatar === pImg && !avatarPreview
                                ? 'border-cyan-400 scale-110 shadow-[0_0_8px_#00f0ff]'
                                : 'border-slate-700 opacity-60 hover:opacity-100'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Username and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Nick Gamer *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Ej. KratosGamer99"
                      className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 font-semibold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="gamer@portalxd.com"
                      className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* 3. Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Contraseña *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>
              </div>

              {/* 4. Country of Origin & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Country */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    País de Origen *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-base">{countryFlag}</span>
                    <select
                      value={country}
                      onChange={handleCountryChange}
                      className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 cursor-pointer"
                    >
                      {COUNTRIES_LIST.map((c) => (
                        <option key={c.code} value={c.name} className="bg-slate-900 text-white">
                          {c.flag} {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Age */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Edad (Años) *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="number"
                      min={10}
                      max={99}
                      value={age}
                      onChange={(e) => setAge(parseInt(e.target.value) || 18)}
                      className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 font-bold"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* 5. Favorite Platform */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  ¿Qué juegas principalmente?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['PC Gamer', 'Android', 'Ambas'] as const).map((plat) => (
                    <button
                      key={plat}
                      type="button"
                      onClick={() => setFavoritePlatform(plat)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        favoritePlatform === plat
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Gamepad2 className="w-3.5 h-3.5" />
                      <span>{plat}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 6. Bio */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Biografía / Estado Gamer
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={2}
                  placeholder="Escribe tus juegos favoritos, tu Discord o un saludo a la comunidad..."
                  className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              {/* Community Perks Note */}
              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-[11px] text-cyan-200/90 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Al registrarte recibirás <strong>+100 Puntos de Reputación</strong> y tu bandera visible en comentarios y aportes.</span>
              </div>
            </>
          ) : (
            /* Login Mode */
            <>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Correo Electrónico o Nick Gamer
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu_correo@ejemplo.com o tu Nick"
                    className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400">
                Inicia sesión para sincronizar tus descargas, dar likes y comentar con tu avatar y país en PortalxD.com.
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-sm font-black text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>{mode === 'register' ? '¡Completar Registro Neón!' : 'Entrar a PortalxD'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
