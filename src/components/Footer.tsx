import React from 'react';
import { Logo } from './Logo';
import { Instagram, Facebook, Pin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F5] border-t border-[#211A24]/10 py-16 text-[#211A24]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
        
        {/* Centered Logo Header */}
        <div className="flex flex-col items-center justify-center space-y-4 border-b border-[#211A24]/5 pb-10">
          <a href="#home" onClick={scrollToTop} className="hover:opacity-90 transition-opacity">
            <Logo size="lg" />
          </a>
          <p className="font-serif italic text-sm text-[#211A24]/70">
            "Setiap cerita layak punya bingkai yang indah."
          </p>
        </div>

        {/* 3-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Copyright Text Left */}
          <div className="order-2 md:order-1 text-xs text-[#211A24]/70 font-sans space-y-1">
            <p>© {new Date().getFullYear()} aura PHOTO Studio. Hak cipta dilindungi undang-undang.</p>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B4E9E]">
              Studio Foto Layanan Lengkap &amp; Dokumentasi Luar Studio
            </p>
          </div>

          {/* Social Icons Center (Instagram, Facebook, Pinterest) */}
          <div className="order-1 md:order-2 flex items-center justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-[#211A24]/10 rounded-full text-[#211A24] hover:text-[#C6237E] hover:border-[#C6237E] transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-[#211A24]/10 rounded-full text-[#211A24] hover:text-[#6B4E9E] hover:border-[#6B4E9E] transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-[#211A24]/10 rounded-full text-[#211A24] hover:text-[#C6237E] hover:border-[#C6237E] transition-all hover:scale-110"
              aria-label="Pinterest"
            >
              <Pin className="w-5 h-5" />
            </a>
          </div>

          {/* Tagline Right + Back to Top */}
          <div className="order-3 flex flex-col md:items-end justify-center space-y-2">
            <span className="text-xs font-serif text-[#211A24] tracking-wide">
              Sesi Foto Studio &amp; Liputan Luar Studio
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#6B4E9E] hover:text-[#C6237E] transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
