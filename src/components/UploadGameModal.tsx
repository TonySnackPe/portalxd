import React, { useState } from 'react';
import { X, Upload, Sparkles, CheckCircle2, Monitor, Smartphone, Image as ImageIcon, Link as LinkIcon, HardDrive, FileText, Check } from 'lucide-react';
import { Game, Platform, Category, Theme } from '../types';
import { CATEGORIES } from '../data/games';

interface UploadGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGameUploaded: (newGame: Game) => void;
  theme?: Theme;
}

export const UploadGameModal: React.FC<UploadGameModalProps> = ({
  isOpen,
  onClose,
  onGameUploaded,
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';

  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState<Platform>('PC');
  const [category, setCategory] = useState<Category>('Acción');
  const [fileSize, setFileSize] = useState('');
  const [version, setVersion] = useState('v1.0 Full Español');
  const [uploaderName, setUploaderName] = useState('');
  const [downloadServer, setDownloadServer] = useState<'MediaFire' | 'Mega.nz' | 'Google Drive' | 'APK Direct'>('MediaFire');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Preset neon gaming cover samples if user doesn't have an image URL
  const sampleImages = [
    { label: 'Cyber Action', url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80' },
    { label: 'Sci-Fi Mech', url: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&auto=format&fit=crop&q=80' },
    { label: 'Neon Drift', url: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80' },
    { label: 'Anime Beat', url: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80' },
  ];

  if (!isOpen) return null;

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !downloadUrl.trim()) return;

    const finalImage = imageUrl.trim() || sampleImages[0].url;

    const newGame: Game = {
      id: `user-upload-${Date.now()}`,
      title: title.trim(),
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      platform,
      category: category === 'Todos' ? 'Acción' : category,
      image: finalImage,
      rating: 5.0,
      votesCount: 1,
      downloadsCount: 1,
      likesCount: 1,
      fileSize: fileSize.trim() || (platform === 'Android' ? '450 MB' : '4.5 GB'),
      version: version.trim() || 'v1.0 Final',
      developer: uploaderName.trim() ? `Subido por ${uploaderName.trim()}` : 'Comunidad PortalxD',
      releaseYear: '2026',
      shortDescription: shortDescription.trim() || `Juego completo para ${platform} verificado y subido por la comunidad de PortalxD.com.`,
      description: shortDescription.trim() || `Excelente juego para disfrutar en ${platform}. Enlaces directos y libres de virus para toda la comunidad gamer.`,
      features: [
        '100% Funcional y Testeado',
        `Subido por usuario de la comunidad`,
        'Sin publicidad invasiva',
        'Directo de servidor verificado'
      ],
      downloadLinks: [
        {
          server: downloadServer,
          url: downloadUrl.trim(),
          speed: 'Ultra Rápida',
          size: fileSize.trim() || '1.5 GB',
          isRecommended: true,
        },
        {
          server: 'Mega.nz',
          url: downloadUrl.trim(),
          speed: 'Alta',
          size: fileSize.trim() || '1.5 GB',
        }
      ],
      installSteps: [
        'Descarga el archivo desde el enlace de arriba.',
        platform === 'Android' 
          ? 'Habilita fuentes desconocidas e instala el APK en tu celular.'
          : 'Descomprime el archivo y ejecuta el instalador como Administrador.',
        '¡Listo para jugar sin problemas!'
      ],
      isNew: true,
      neonColor: platform === 'Android' ? 'green' : 'cyan',
    };

    onGameUploaded(newGame);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      // Reset form
      setTitle('');
      setDownloadUrl('');
      setShortDescription('');
      setImageUrl('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div 
        className={`relative w-full max-w-3xl border-2 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.35)] overflow-hidden p-6 sm:p-8 ${
          isLight ? 'bg-white border-emerald-400 text-slate-800' : 'bg-[#0a1124] border-emerald-500/60 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
            isLight ? 'bg-slate-100 border-slate-300 text-slate-700 hover:text-black' : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <Upload className="w-6 h-6 text-emerald-400" />
          <h2 className={`text-xl sm:text-2xl font-black tracking-wide ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Subir Juego a PortalxD.com
          </h2>
        </div>
        <p className={`text-xs sm:text-sm mb-6 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          Comparte tus juegos, repacks o APKs favoritos con la comunidad. Tu publicación aparecerá de inmediato en la galería con enlaces directos.
        </p>

        {isSuccess ? (
          <div className="p-8 text-center bg-emerald-950/40 rounded-xl border border-emerald-400/60 space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
            <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
              ¡Juego Publicado con Éxito!
            </h3>
            <p className="text-xs text-emerald-300">
              Tu juego ya está disponible en el catálogo de PortalxD.com para que todos puedan descargarlo y darle Me Gusta.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Título */}
              <div className="sm:col-span-2">
                <label className={`block font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Título del Juego *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ej: Need for Speed Underground 2 Remastered, FNF Indie Cross..."
                  className={`w-full py-2.5 px-3.5 rounded-lg text-sm border focus:outline-none ${
                    isLight 
                      ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-emerald-500' 
                      : 'bg-slate-900 border-slate-700 text-white focus:border-emerald-400'
                  }`}
                />
              </div>

              {/* Plataforma */}
              <div>
                <label className={`block font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Plataforma *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['PC', 'Android', 'Ambos'] as Platform[]).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPlatform(p)}
                      className={`py-2 px-2 rounded-lg font-bold border flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        platform === p
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                          : isLight ? 'bg-slate-50 text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-700'
                      }`}
                    >
                      {p === 'PC' ? <Monitor className="w-3.5 h-3.5" /> : p === 'Android' ? <Smartphone className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                      <span>{p}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Categoría */}
              <div>
                <label className={`block font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Género / Categoría *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                  className={`w-full py-2.5 px-3 rounded-lg font-medium border focus:outline-none cursor-pointer ${
                    isLight 
                      ? 'bg-slate-50 border-slate-300 text-slate-800 focus:border-emerald-500' 
                      : 'bg-slate-900 border-slate-700 text-slate-200 focus:border-emerald-400'
                  }`}
                >
                  {CATEGORIES.filter(c => c !== 'Todos').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Servidor y Enlace */}
              <div>
                <label className={`block font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Servidor de Descarga *
                </label>
                <select
                  value={downloadServer}
                  onChange={(e) => setDownloadServer(e.target.value as any)}
                  className={`w-full py-2.5 px-3 rounded-lg font-medium border focus:outline-none cursor-pointer ${
                    isLight 
                      ? 'bg-slate-50 border-slate-300 text-slate-800' 
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  <option value="MediaFire">MediaFire (Recomendado)</option>
                  <option value="Mega.nz">Mega.nz</option>
                  <option value="Google Drive">Google Drive</option>
                  <option value="APK Direct">Descarga Directa APK</option>
                </select>
              </div>

              <div>
                <label className={`block font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Enlace de Descarga (Link) *
                </label>
                <div className="relative">
                  <input
                    type="url"
                    required
                    value={downloadUrl}
                    onChange={(e) => setDownloadUrl(e.target.value)}
                    placeholder="https://mediafire.com/file/... o enlace de descarga"
                    className={`w-full py-2.5 pl-9 pr-3 rounded-lg border focus:outline-none ${
                      isLight 
                        ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-emerald-500' 
                        : 'bg-slate-900 border-slate-700 text-white focus:border-emerald-400'
                    }`}
                  />
                  <LinkIcon className="absolute left-3 top-3 w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Tamaño y Versión */}
              <div>
                <label className={`block font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Tamaño del Archivo
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={fileSize}
                    onChange={(e) => setFileSize(e.target.value)}
                    placeholder="Ej: 2.4 GB o 150 MB"
                    className={`w-full py-2.5 pl-9 pr-3 rounded-lg border focus:outline-none ${
                      isLight 
                        ? 'bg-slate-50 border-slate-300 text-slate-900' 
                        : 'bg-slate-900 border-slate-700 text-white'
                    }`}
                  />
                  <HardDrive className="absolute left-3 top-3 w-4 h-4 text-cyan-400" />
                </div>
              </div>

              <div>
                <label className={`block font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Tu Nombre o Nickname
                </label>
                <input
                  type="text"
                  value={uploaderName}
                  onChange={(e) => setUploaderName(e.target.value)}
                  placeholder="Tu alias de gamer o modder"
                  className={`w-full py-2.5 px-3 rounded-lg border focus:outline-none ${
                    isLight 
                      ? 'bg-slate-50 border-slate-300 text-slate-900' 
                      : 'bg-slate-900 border-slate-700 text-white'
                  }`}
                />
              </div>

              {/* Imagen de Portada */}
              <div className="sm:col-span-2">
                <label className={`block font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Imagen de Portada (URL o Subir archivo)
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative flex-grow w-full">
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://ejemplo.com/portada_juego.jpg"
                      className={`w-full py-2.5 pl-9 pr-3 rounded-lg border focus:outline-none ${
                        isLight 
                          ? 'bg-slate-50 border-slate-300 text-slate-900' 
                          : 'bg-slate-900 border-slate-700 text-white'
                      }`}
                    />
                    <ImageIcon className="absolute left-3 top-3 w-4 h-4 text-pink-400" />
                  </div>

                  <label className="w-full sm:w-auto px-4 py-2.5 rounded-lg font-bold text-center border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer flex-shrink-0 transition-colors">
                    Examinar archivo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Quick Presets */}
                <div className="mt-2 flex items-center gap-2 overflow-x-auto pb-1 text-[11px] text-slate-400">
                  <span>Presets rápidos:</span>
                  {sampleImages.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setImageUrl(s.url)}
                      className={`px-2 py-0.5 rounded border transition-colors cursor-pointer whitespace-nowrap ${
                        imageUrl === s.url
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* Image Preview */}
                {imageUrl && (
                  <div className="mt-3 relative w-36 h-24 rounded-lg overflow-hidden border border-emerald-500/50 shadow-md">
                    <img
                      src={imageUrl}
                      alt="Previsualización"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-1 right-1 px-1 rounded bg-black/70 text-[9px] text-emerald-400 font-bold">
                      Vista previa
                    </span>
                  </div>
                )}
              </div>

              {/* Descripción */}
              <div className="sm:col-span-2">
                <label className={`block font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Descripción o Instrucciones Breves
                </label>
                <textarea
                  rows={2}
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  placeholder="Detalles sobre el juego, idioma, si incluye mods o requisitos especiales."
                  className={`w-full py-2 px-3 rounded-lg border focus:outline-none ${
                    isLight 
                      ? 'bg-slate-50 border-slate-300 text-slate-900' 
                      : 'bg-slate-900 border-slate-700 text-white'
                  }`}
                />
              </div>

            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white neon-glow-btn-green flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-98"
              >
                <Upload className="w-4 h-4" />
                <span>Publicar Juego en PortalxD.com</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
