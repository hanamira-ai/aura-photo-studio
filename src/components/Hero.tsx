import React from 'react';
import { ArrowDown, Camera, ChevronDown, Sparkles, Building2, MapPin, Clock, Sliders } from 'lucide-react';
import { ApertureIcon, ViewfinderCorners, PhotoGelOverlay } from './ApertureIcon';

interface HeroProps {
  variant: 'photo' | 'pastel';
  setVariant: React.Dispatch<React.SetStateAction<'photo' | 'pastel'>>;
  onViewPortfolio: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  variant,
  setVariant,
  onViewPortfolio,
  onOpenContact,
}) => {
  // Switchable hero layout variant state for live comparison
  

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about') || document.getElementById('studio-services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen min-h-[650px] max-h-[1080px] overflow-hidden flex items-center justify-center">
      
      {/* ------------------------------------------------------------- */}
      {/* VARIANT SWITCHER TOGGLE BADGE (Top-Right / Floating UI)      */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute top-24 right-6 sm:right-10 z-30 bg-[#FAF7F5]/90 backdrop-blur-md border border-[#211A24]/15 p-1.5 shadow-lg flex items-center gap-1">
        <div className="px-2 py-1 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] font-bold text-[#6B4E9E]">
          <Sliders className="w-3 h-3 text-[#C6237E]" />
          <span className="hidden sm:inline">TAMPILAN HERO:</span>
        </div>
        <button
          onClick={() => setVariant('photo')}
          className={`px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold transition-all ${
            variant === 'photo'
              ? 'bg-[#211A24] text-white shadow-sm'
              : 'text-[#211A24]/70 hover:text-[#211A24]'
          }`}
          title="Varian 1: Foto Latar Penuh"
        >
          01. Photo Bleed Preview
        </button>
        <button
          onClick={() => setVariant('pastel')}
          className={`px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold transition-all ${
            variant === 'pastel'
              ? 'bg-[#211A24] text-white shadow-sm'
              : 'text-[#211A24]/70 hover:text-[#211A24]'
          }`}
          title="Varian 2: Latar Gradasi Pastel & Kartu Foto Floating"
        >
          02. Pastel Card
        </button>
      </div>

      {/* ============================================================= */}
      {/* VARIANT 1: FULL-BLEED PHOTO HERO                              */}
      {/* ============================================================= */}
      {variant === 'photo' && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center animate-fadeIn">
          {/* Background Full-Bleed Image */}
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=2000"
            alt="aura PHOTO Studio Full Bleed Portrait"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 contrast-[1.08] saturate-[0.95]"
          />

          {/* Signature Gel Color Grade Layer */}
          <PhotoGelOverlay />

          {/* Subtle Dark Gradient Overlay behind text area for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#211A24]/90 via-[#211A24]/60 to-[#211A24]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#211A24]/80 via-[#211A24]/40 to-transparent pointer-events-none" />

          {/* Viewfinder Decorative Frame Lines in Corners */}
          <ViewfinderCorners color="border-white/40" />

          {/* Content Container (Lower-Left / Center-Left Positioned) */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full pt-16 sm:pt-20">
            <div className="max-w-2xl space-y-6 text-left">
              
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.3em] text-[#E8DFF2] font-medium bg-white/10 backdrop-blur-md px-3.5 py-1.5 border border-white/20">
                <ApertureIcon className="w-4 h-4 text-[#C6237E] shrink-0" />
                <span className="w-4 h-[1px] bg-white/40" />
                <span>AURA PHOTO STUDIO &amp; LIPUTAN</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-white leading-[1.12] drop-shadow-sm">
                Setiap Cerita Layak Punya <br />
                <span className="italic font-light text-[#E8DFF2]">Bingkai yang Indah.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-white/90 max-w-xl font-sans leading-relaxed drop-shadow-sm">
                Dari sesi foto studio hingga momen istimewa Anda, kami mengabadikan semuanya. Layanan studio indoor profesional untuk keluarga, pas foto &amp; produk, serta liputan acara &amp; wedding di lokasi pilihan Anda.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onViewPortfolio}
                  className="px-8 py-4 bg-white text-[#211A24] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#6B4E9E] hover:text-white transition-all duration-300 shadow-lg flex items-center gap-3 group"
                >
                  <span>Lihat Portofolio</span>
                  <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                </button>

                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 bg-[#211A24]/60 backdrop-blur-md border border-white/30 text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-white hover:text-[#211A24] transition-all duration-300"
                >
                  Jadwalkan Sesi Studio
                </button>
              </div>

              {/* Bottom Quick Feature Strip */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/20 max-w-md text-white/90">
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-medium text-white">Studio Indoor</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#E8DFF2]">FASILITAS STUDIO</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-medium text-white">Luar Studio</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#E8DFF2]">WEDDING &amp; ACARA</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-medium text-white">Proses Cepat</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#E8DFF2]">PENGERJAAN KILAT</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* VARIANT 2: FULL-BLEED PASTEL COLOR HERO WITH FLOATING CARD   */}
      {/* ============================================================= */}
      {variant === 'pastel' && (
        <div 
          className="absolute inset-0 w-full h-full flex items-center justify-center animate-fadeIn"
          style={{
            background: 'linear-gradient(135deg, #E8DFF2 0%, #FAF7F5 50%, #F5E3ED 100%)'
          }}
        >
          {/* Subtle Background Glow Spheres */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#6B4E9E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C6237E]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Content Container (2-Column Asymmetrical Flex) */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full pt-16 sm:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Dark High-Contrast Typography (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Upper Tagline */}
                <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.3em] text-[#6B4E9E] font-medium">
                  <ApertureIcon className="w-4 h-4 text-[#6B4E9E] shrink-0" />
                  <span className="w-6 h-[1px] bg-[#6B4E9E]/50" />
                  <span>AURA PHOTO STUDIO &amp; LIPUTAN</span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-[#211A24] leading-[1.12]">
                  Setiap Cerita Layak Punya <br />
                  <span className="italic font-light text-[#6B4E9E]">Bingkai yang Indah.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg text-[#211A24]/80 max-w-xl font-sans leading-relaxed">
                  Dari sesi foto studio hingga momen istimewa Anda, kami mengabadikan semuanya. Layanan studio indoor profesional untuk keluarga, pas foto &amp; produk, serta liputan acara &amp; wedding di lokasi pilihan Anda.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onViewPortfolio}
                    className="px-8 py-4 bg-[#211A24] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#6B4E9E] transition-all duration-300 shadow-md flex items-center gap-3 group"
                  >
                    <span>Lihat Portofolio</span>
                    <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="px-8 py-4 border border-[#211A24]/25 text-[#211A24] text-xs uppercase tracking-[0.25em] font-medium hover:border-[#6B4E9E] hover:text-[#6B4E9E] transition-all duration-300"
                  >
                    Jadwalkan Sesi Studio
                  </button>
                </div>

                {/* Stat Bar */}
                <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#211A24]/10 max-w-md">
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-medium text-[#211A24]">Studio Indoor</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#6B4E9E] font-semibold">FASILITAS STUDIO</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-medium text-[#211A24]">Luar Studio</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#6B4E9E] font-semibold">WEDDING &amp; ACARA</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-medium text-[#211A24]">Proses Cepat</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#6B4E9E] font-semibold">PENGERJAAN KILAT</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Floating Photo Card (5 cols / ~45% width) */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-white border border-white/60 group">
                  
                  {/* Gel Light & Viewfinder Corner Details */}
                  <ViewfinderCorners color="border-[#6B4E9E]" />
                  <PhotoGelOverlay />

                  {/* Main Portrait Image */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200"
                      alt="aura PHOTO Studio Portrait"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 contrast-[1.05] saturate-[0.95]"
                    />

                    {/* Floating Overlay Badge */}
                    <div className="absolute bottom-5 left-5 right-5 z-20 bg-[#FAF7F5]/90 backdrop-blur-md p-4 border-l-2 border-[#6B4E9E] shadow-sm">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#6B4E9E] font-medium flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-[#C6237E]" />
                        <span>AURA PHOTO STUDIO</span>
                      </p>
                      <p className="font-serif italic text-xs text-[#211A24] mt-0.5">
                        "Pencahayaan presisi &amp; fotografi portrait studio."
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SCROLL DOWN INDICATOR ICON AT BOTTOM CENTER                  */}
      {/* ------------------------------------------------------------- */}
      <button
        onClick={scrollToNextSection}
        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-1 group cursor-pointer transition-colors ${
          variant === 'photo' ? 'text-white/80 hover:text-white' : 'text-[#211A24]/70 hover:text-[#6B4E9E]'
        }`}
        aria-label="Scroll ke bawah"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-medium">GULIR KE BAWAH</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>

    </section>
  );
};

