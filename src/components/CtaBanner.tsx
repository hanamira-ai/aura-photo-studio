import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ApertureIcon } from './ApertureIcon';

interface CtaBannerProps {
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#211A24]">
      {/* Full-width background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
          alt="aura PHOTO Studio & On Location Coverage"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211A24] via-[#211A24]/90 to-[#211A24]/80" />
      </div>

      {/* Fine-Grain Film Noise Texture Overlay (5-8% opacity) */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.3em] text-[#C6237E] font-medium">
          <ApertureIcon className="w-4 h-4 text-[#C6237E]" />
          <span className="w-6 h-[1px] bg-[#C6237E]/50" />
          <span>RESERVASI SESI STUDIO ATAU EVENT</span>
          <span className="w-6 h-[1px] bg-[#C6237E]/50" />
        </div>

        {/* Headline + short text */}
        <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight leading-tight max-w-3xl mx-auto">
          Siap Mengabadikan <span className="italic font-light text-[#6B4E9E]">Momen Berharga Anda?</span>
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-sans leading-relaxed">
          Pesan sesi studio indoor untuk foto keluarga, pas foto, atau foto produk, atau jadwalkan liputan luar studio untuk wedding &amp; acara Anda.
        </p>

        {/* CTA Button "Book a Session" */}
        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenContact}
            className="px-10 py-5 bg-gradient-to-r from-[#6B4E9E] to-[#C6237E] text-white text-xs uppercase tracking-[0.25em] font-medium hover:opacity-95 transition-all duration-300 shadow-xl inline-flex items-center gap-3 group"
          >
            <span>Jadwalkan Sesi Foto</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
