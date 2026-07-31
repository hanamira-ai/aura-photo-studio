import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ApertureIcon, ViewfinderCorners, PhotoGelOverlay } from './ApertureIcon';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <section id="about" className="py-24 bg-[#FAF7F5] relative overflow-hidden border-t border-[#211A24]/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Left (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              {/* Outer Decorative Line */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#6B4E9E]/30 pointer-events-none" />
              
              <div className="aspect-[4/5] overflow-hidden shadow-md bg-[#EFECE8] relative group">
                <ViewfinderCorners color="border-[#6B4E9E]" />
                <PhotoGelOverlay />

                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000"
                  alt="Aura Photo Studio Space & Team"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 contrast-[1.05] saturate-[0.95]"
                />
                
                {/* Accent Badge */}
                <div className="absolute top-6 left-6 z-20 bg-[#211A24] text-white px-4 py-2 text-[10px] uppercase tracking-[0.25em] font-medium flex items-center gap-2 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6237E]" />
                  <span>Studio Layanan Lengkap</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Right (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#6B4E9E] font-medium flex items-center gap-2">
                <ApertureIcon className="w-3.5 h-3.5 text-[#6B4E9E]" />
                <span>TENTANG STUDIO KAMI</span>
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#211A24] leading-tight">
                {STUDIO_INFO.name}
              </h2>
              <p className="text-sm uppercase tracking-[0.2em] text-[#C6237E] font-medium">
                {STUDIO_INFO.tagline}
              </p>
            </div>

            {/* 2-3 sentence bio emphasizing full-service studio + on-location capability */}
            <p className="text-base text-[#211A24]/85 leading-relaxed font-sans">
              aura PHOTO Studio adalah studio foto profesional yang menyediakan sesi studio indoor — termasuk pas foto resmi, foto keluarga, foto grup instansi, foto produk e-commerce, dan foto newborn — sebagai keahlian utama kami. Kami juga menyediakan layanan liputan luar studio untuk wedding dan dokumentasi acara spesial Anda.
            </p>

            {showFullBio && (
              <div className="pt-2 text-sm text-[#211A24]/75 leading-relaxed space-y-3 border-t border-[#6B4E9E]/10 animate-fadeIn">
                <p>
                  Dilengkapi pencahayaan studio profesional, pilihan backdrop variatif, dan ruang ganti pribadi, studio kami memberikan suasana yang tenang, nyaman, dan profesional untuk setiap klien.
                </p>
                <p>
                  Baik Anda membutuhkan pas foto dokumen kilat teredit maupun liputan wedding seharian penuh, tim kreatif kami siap memastikan setiap momen diabadikan dengan indah dan berkualitas tinggi.
                </p>
              </div>
            )}

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6B4E9E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#211A24]">Fasilitas Studio Indoor</h3>
                  <p className="text-xs text-[#211A24]/70 mt-0.5">Pilihan backdrop custom, lighting profesional &amp; pengerjaan digital cepat.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6B4E9E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#211A24]">Tim Liputan Luar Studio</h3>
                  <p className="text-xs text-[#211A24]/70 mt-0.5">Dokumentasi wedding, prewedding photoshoot &amp; acara gala.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="px-7 py-3.5 bg-[#211A24] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#6B4E9E] transition-colors duration-300 flex items-center gap-2"
              >
                <span>{showFullBio ? 'Tutup Detail' : 'Selengkapnya Tentang Kami'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 border border-[#6B4E9E] text-[#6B4E9E] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#6B4E9E]/10 transition-colors duration-300"
              >
                Hubungi Kami
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
