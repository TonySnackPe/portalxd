import React, { useState } from 'react';
import { X, ShieldAlert, FileText, Lock, Scale, Send, CheckCircle2 } from 'lucide-react';
import { Theme } from '../types';

interface LegalTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'dmca' | 'terminos' | 'privacidad';
  theme?: Theme;
}

export const LegalTermsModal: React.FC<LegalTermsModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'terminos',
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';
  const [activeTab, setActiveTab] = useState<'dmca' | 'terminos' | 'privacidad'>(initialTab);

  // DMCA Takedown Notice Form
  const [claimantName, setClaimantName] = useState('');
  const [claimantEmail, setClaimantEmail] = useState('');
  const [gameUrl, setGameUrl] = useState('');
  const [details, setDetails] = useState('');
  const [dmcaSent, setDmcaSent] = useState(false);

  if (!isOpen) return null;

  const handleDmcaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDmcaSent(true);
    setTimeout(() => {
      setDmcaSent(false);
      setClaimantName('');
      setClaimantEmail('');
      setGameUrl('');
      setDetails('');
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div 
        className={`relative w-full max-w-3xl border-2 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.35)] overflow-hidden p-6 sm:p-8 ${
          isLight ? 'bg-white border-cyan-400 text-slate-800' : 'bg-[#090e24] border-cyan-500/50 text-slate-200'
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
          <Scale className="w-6 h-6 text-cyan-400" />
          <h2 className={`text-xl sm:text-2xl font-black tracking-wide ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Términos Reservados y Aviso Legal · PortalxD.com
          </h2>
        </div>
        <p className={`text-xs sm:text-sm mb-6 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          Todos los derechos reservados © 2026 PortalxD.com. Conoce las condiciones de uso, derechos de propiedad intelectual y política DMCA.
        </p>

        {/* Tab Buttons */}
        <div className={`flex items-center gap-2 border-b pb-3 mb-6 overflow-x-auto ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
          <button
            onClick={() => setActiveTab('terminos')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border whitespace-nowrap ${
              activeTab === 'terminos'
                ? isLight ? 'bg-cyan-100 text-cyan-900 border-cyan-400 font-bold' : 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                : isLight ? 'bg-slate-50 text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Términos y Derechos Reservados</span>
          </button>

          <button
            onClick={() => setActiveTab('dmca')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border whitespace-nowrap ${
              activeTab === 'dmca'
                ? isLight ? 'bg-pink-100 text-pink-900 border-pink-400 font-bold' : 'bg-pink-500/20 text-pink-300 border-pink-400'
                : isLight ? 'bg-slate-50 text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Aviso Legal DMCA & Retiro</span>
          </button>

          <button
            onClick={() => setActiveTab('privacidad')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border whitespace-nowrap ${
              activeTab === 'privacidad'
                ? isLight ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold' : 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                : isLight ? 'bg-slate-50 text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacidad y Antivirus</span>
          </button>
        </div>

        {/* Tab 1: Términos y Derechos Reservados */}
        {activeTab === 'terminos' && (
          <div className="space-y-4 text-xs sm:text-sm max-h-[60vh] overflow-y-auto pr-2">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'}`}>
              <h3 className={`font-bold text-base mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                1. Declaración de Derechos Reservados
              </h3>
              <p className={`leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                El diseño, identidad visual, logotipos de marca, código fuente y compilaciones técnicas de la plataforma web pertenecen con <strong>todos los derechos reservados © 2026 PortalxD.com</strong>.
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'}`}>
              <h3 className={`font-bold text-base mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                2. Marcas Registradas y Propiedad de Terceros
              </h3>
              <p className={`leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Todos los títulos de videojuegos, nombres comerciales, carátulas, capturas de pantalla, audios y marcas registradas citadas en este sitio (incluyendo a modo de ejemplo: <em>Rockstar Games, Capcom, Nintendo, Sony Interactive Entertainment, CD Projekt Red, Mojang</em>, entre otros) son propiedad exclusiva de sus respectivos autores y empresas productoras. <strong>PortalxD.com no se atribuye la autoría de dichos juegos</strong>.
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'}`}>
              <h3 className={`font-bold text-base mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                3. Finalidad del Servicio y Condiciones de Uso
              </h3>
              <p className={`leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                PortalxD.com actúa como un directorio comunitario con fines de preservación digital, divulgación técnica y pruebas de compatibilidad en equipos de bajos recursos y dispositivos móviles. Al descargar un juego, el usuario reconoce su responsabilidad de adquirir una copia legal del título en tiendas autorizadas (Steam, Epic Games Store, Google Play Store, etc.) para respaldar a los desarrolladores de la industria.
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'}`}>
              <h3 className={`font-bold text-base mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                4. Normas de Subida para la Comunidad
              </h3>
              <p className={`leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Los usuarios que utilicen el formulario de <em>Subir Juego</em> se comprometen estrictamente a no subir archivos infectados con troyanos, mineros, spyware o malware. Los uploaders que incumplan esta norma serán bloqueados permanentemente de los servidores de PortalxD.com.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: DMCA Takedown & Reclamos */}
        {activeTab === 'dmca' && (
          <div className="space-y-4 text-xs sm:text-sm max-h-[60vh] overflow-y-auto pr-2">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-pink-50 border-pink-200 text-pink-900' : 'bg-pink-950/40 border-pink-500/40 text-pink-200'}`}>
              <h3 className="font-bold text-base mb-1">
                Política de Cumplimiento DMCA (Digital Millennium Copyright Act)
              </h3>
              <p className="leading-relaxed">
                En PortalxD.com respetamos plenamente los derechos de autor. Si eres el propietario legal o representante autorizado de una obra intelectual y deseas solicitar el retiro inmediato de cualquier enlace de descarga publicado en este sitio, atenderemos tu solicitud en menos de <strong>24 horas hábiles</strong>.
              </p>
            </div>

            {dmcaSent ? (
              <div className="p-6 text-center bg-emerald-950/50 rounded-xl border border-emerald-400 text-emerald-300 space-y-2">
                <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400 animate-bounce" />
                <h4 className="font-bold text-base text-white">Solicitud DMCA Registrada</h4>
                <p className="text-xs">
                  Hemos recibido tu notificación. Un administrador verificará la información y procederá con la desindexación de los enlaces reportados.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDmcaSubmit} className="space-y-3 p-4 rounded-xl border border-slate-700 bg-slate-900/50">
                <h4 className={`font-bold text-xs uppercase tracking-wider ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Formulario de Retiro Inmediato de Contenido:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block mb-1 font-semibold text-slate-300">Tu Nombre / Representante Legal *</label>
                    <input
                      type="text"
                      required
                      value={claimantName}
                      onChange={(e) => setClaimantName(e.target.value)}
                      placeholder="Ej: John Doe (Legal Counsel)"
                      className="w-full py-2 px-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-pink-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-semibold text-slate-300">Correo Electrónico de Contacto *</label>
                    <input
                      type="email"
                      required
                      value={claimantEmail}
                      onChange={(e) => setClaimantEmail(e.target.value)}
                      placeholder="dmca@tudominio.com"
                      className="w-full py-2 px-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-pink-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block mb-1 font-semibold text-slate-300">URL del Juego o Publicación en PortalxD.com *</label>
                    <input
                      type="text"
                      required
                      value={gameUrl}
                      onChange={(e) => setGameUrl(e.target.value)}
                      placeholder="Ej: https://portalxd.com/#game-id o nombre del juego"
                      className="w-full py-2 px-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-pink-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block mb-1 font-semibold text-slate-300">Declaración o Comprobante de Titularidad</label>
                    <textarea
                      rows={2}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Describe la titularidad del material protegido."
                      className="w-full py-2 px-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-pink-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400">
                    O envía un correo a: <strong className="text-cyan-400 font-mono">dmca@portalxd.com</strong>
                  </span>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-pink-600 hover:bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Solicitud DMCA</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Tab 3: Privacidad y Antivirus */}
        {activeTab === 'privacidad' && (
          <div className="space-y-4 text-xs sm:text-sm max-h-[60vh] overflow-y-auto pr-2">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'}`}>
              <h3 className={`font-bold text-base mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                1. Privacidad de los Usuarios
              </h3>
              <p className={`leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                En PortalxD.com <strong>no solicitamos ni almacenamos datos bancarios, contraseñas ni números de tarjeta</strong>. La navegación y las descargas son de acceso libre y gratuito. Las preferencias del usuario (como modo de tema claro/oscuro y likes) se almacenan localmente en el dispositivo del visitante (`localStorage`).
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'}`}>
              <h3 className={`font-bold text-base mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                2. Garantía de Seguridad Antivirus
              </h3>
              <p className={`leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Cada enlace y archivo antes de publicarse en los servidores oficiales de PortalxD es analizado mediante <strong>VirusTotal (68 motores antivirus integrados)</strong>. Garantizamos la ausencia de ransomware, troyanos bancarios y mineros de criptomonedas.
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'}`}>
              <h3 className={`font-bold text-base mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                3. Uso de Cookies
              </h3>
              <p className={`leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Únicamente se emplean cookies técnicas de sesión para el funcionamiento del reproductor de radio en vivo y la sincronización del widget de comentarios. No vendemos información a terceros.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
