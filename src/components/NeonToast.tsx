import React, { useEffect } from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';
import { Theme } from '../types';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'pink';
}

interface NeonToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
  theme?: Theme;
}

export const NeonToast: React.FC<NeonToastProps> = ({
  toast,
  onClose,
  theme = 'neon-dark',
}) => {
  const isLight = theme === 'neon-light';

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-bounce-in max-w-sm">
      <div className={`p-4 rounded-xl border flex items-start gap-3 shadow-2xl backdrop-blur-md transition-all ${
        toast.type === 'pink'
          ? 'bg-pink-950/90 border-pink-400 text-pink-100 shadow-[0_0_25px_rgba(236,72,153,0.5)]'
          : isLight
          ? 'bg-white border-cyan-400 text-slate-800 shadow-[0_4px_25px_rgba(6,182,212,0.3)]'
          : 'bg-[#090e24]/95 border-cyan-400 text-slate-100 shadow-[0_0_25px_rgba(6,182,212,0.4)]'
      }`}>
        <div className="mt-0.5 flex-shrink-0">
          {toast.type === 'pink' ? (
            <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          )}
        </div>

        <div className="flex-grow text-xs">
          <strong className="block font-bold text-sm mb-0.5 text-white">
            {toast.title}
          </strong>
          {toast.description && (
            <p className={isLight && toast.type !== 'pink' ? 'text-slate-600' : 'text-slate-300'}>
              {toast.description}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
