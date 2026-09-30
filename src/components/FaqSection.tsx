import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, HardDrive, Smartphone, Monitor } from 'lucide-react';
import { Theme } from '../types';

interface FaqSectionProps {
  theme?: Theme;
  onOpenUploadModal?: () => void;
  onOpenGuideModal?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  theme = 'neon-dark',
  onOpenUploadModal,
  onOpenGuideModal,
}) => {
  const isLight = theme === 'neon-light';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Las descargas en PortalxD.com son 100% gratuitas y sin virus?',
      answer: 'Sí, todas las descargas son directas y gratuitas desde servidores de alta velocidad como MediaFire, Mega.nz y Google Drive. Cada archivo es escaneado meticulosamente con VirusTotal (0/68 detecciones) para certificar que está limpio de troyanos, ransomware o malware.',
      icon: ShieldCheck,
      iconColor: 'text-emerald-400',
    },
    {
      question: '¿Cuál es la contraseña para descomprimir los archivos RAR o ZIP?',
      answer: 'La contraseña universal de descompresión para todos los juegos de la web es: PortalxD.com (respetando mayúsculas y minúsculas). Recomendamos utilizar la versión más reciente de WinRAR o 7-Zip.',
      icon: HardDrive,
      iconColor: 'text-cyan-400',
    },
    {
      question: '¿Cómo instalo juegos con datos OBB en Android 13, 14 y 15?',
      answer: 'En versiones recientes de Android, el sistema protege la carpeta Android/obb. Para copiar los datos sin error, utiliza la aplicación gratuita ZArchiver o conecta tu teléfono a la computadora mediante cable USB para transferir la carpeta del juego a "Memoria Interna > Android > obb". Luego instala el archivo APK.',
      icon: Smartphone,
      iconColor: 'text-emerald-400',
    },
    {
      question: '¿Qué hago si Windows Defender bloquea el crack o activador del juego en PC?',
      answer: 'Los activadores y cracks modifican las instrucciones del ejecutable para omitir el DRM de la tienda, lo cual genera un falso positivo en algunos antivirus. Ve a "Seguridad de Windows > Protección contra virus y amenazas > Administrar la configuración > Exclusiones" y añade la carpeta donde instalaste el juego.',
      icon: Monitor,
      iconColor: 'text-cyan-400',
    },
    {
      question: '¿Cualquier usuario puede subir juegos o mods a PortalxD.com?',
      answer: '¡Por supuesto! PortalxD es una plataforma comunitaria. Puedes hacer clic en el botón "+ Subir Juego" en la barra superior o en el banner principal para compartir cualquier juego de PC o Android con enlace directo.',
      icon: HelpCircle,
      iconColor: 'text-pink-400',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t ${
      isLight ? 'border-slate-200' : 'border-slate-800'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            <h2 className={`text-xl sm:text-2xl font-black tracking-wide ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Preguntas Frecuentes (FAQ) ·{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                PortalxD.com
              </span>
            </h2>
          </div>
          <p className={`mt-1 text-xs sm:text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Respuestas a las dudas más comunes sobre descargas, descompresión, emuladores y seguridad
          </p>
        </div>

        {onOpenGuideModal && (
          <button
            onClick={onOpenGuideModal}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              isLight
                ? 'bg-cyan-50 border-cyan-300 text-cyan-800 hover:bg-cyan-100'
                : 'bg-slate-900 border-cyan-500/40 text-cyan-300 hover:bg-slate-800'
            }`}
          >
            Ver Guías Detalladas
          </button>
        )}
      </div>

      <div className="space-y-3 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const Icon = faq.icon;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? isLight
                    ? 'bg-white border-cyan-400 shadow-sm'
                    : 'bg-slate-900/90 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                  : isLight
                  ? 'bg-white/80 border-slate-200 hover:border-slate-300'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                    isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-800 border-slate-700'
                  }`}>
                    <Icon className={`w-4 h-4 ${faq.iconColor}`} />
                  </div>
                  <h3 className={`text-sm sm:text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {faq.question}
                  </h3>
                </div>

                <div className={`p-1 rounded-full text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-cyan-400" />
                </div>
              </button>

              {isOpen && (
                <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                  isLight ? 'border-slate-100 text-slate-600' : 'border-slate-800/80 text-slate-300'
                }`}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
