import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false, size = 'md' }) => {
  const [imgError, setImgError] = useState(false);

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-xl tracking-[0.25em]',
    lg: 'text-2xl tracking-[0.3em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer select-none ${className}`}>
      {!imgError ? (
        <img
    src="/logo-auraphoto.png"
    alt="aura PHOTO"
    className="h-12 w-auto object-contain"
    onError={() => setImgError(true)}
/>
      ) : null}

      {/* Fallback stylized logo if /logo.png fails to load */}
      {imgError && (
        <>
          {/* Purple-to-Magenta Gradient Aperture / Lens Icon */}
          <div className={`relative ${iconSizes[size]} rounded-full p-[2px] bg-gradient-to-br from-[#6B4E9E] via-[#9B328D] to-[#C6237E] shadow-sm transition-transform duration-500 group-hover:scale-105`}>
            <div className="w-full h-full bg-[#FAF7F5] rounded-full flex items-center justify-center p-1.5 overflow-hidden relative">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#6B4E9E]">
                <defs>
                  <linearGradient id="auraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6B4E9E" />
                    <stop offset="100%" stopColor="#C6237E" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="44" fill="none" stroke="url(#auraGrad)" strokeWidth="6" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="url(#auraGrad)" strokeWidth="4" strokeDasharray="6 4" />
                <polygon points="50,26 68,62 32,62" fill="url(#auraGrad)" opacity="0.85" />
                <circle cx="50" cy="50" r="8" fill="#211A24" />
              </svg>
            </div>
          </div>

          {!iconOnly && (
            <div className="flex flex-col">
              <span
                className={`font-serif font-bold uppercase ${textSizes[size]} bg-gradient-to-r from-[#1A1A1A] via-[#4A4A5A] to-[#8E8E9F] bg-clip-text text-transparent group-hover:from-[#6B4E9E] group-hover:to-[#C6237E] transition-all duration-300`}
                style={{
                  textShadow: '0 1px 1px rgba(255,255,255,0.8)',
                }}
              >
                AURA <span className="font-light text-[#6B4E9E]">PHOTO</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#6B4E9E] font-sans -mt-1 font-medium">
                STUDIO & EDITORIAL
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};
