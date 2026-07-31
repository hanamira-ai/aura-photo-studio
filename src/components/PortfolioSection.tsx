import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/studioData';
import { PortfolioItem } from '../types';
import { ArrowUpRight, Maximize2, X, Sparkles } from 'lucide-react';
import { ApertureIcon, ViewfinderCorners, PhotoGelOverlay } from './ApertureIcon';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const categoryLabels: Record<string, string> = {
    All: 'Semua',
    Studio: 'Studio',
    Family: 'Keluarga',
    Product: 'Produk',
    Newborn: 'Newborn',
    Weddings: 'Wedding',
    Events: 'Acara',
  };

  const categories = ['All', 'Studio', 'Family', 'Product', 'Newborn', 'Weddings', 'Events'];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#FAF7F5] relative border-t border-[#211A24]/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#6B4E9E] font-medium flex items-center gap-2 mb-2">
              <ApertureIcon className="w-3.5 h-3.5 text-[#6B4E9E]" />
              <span>GALERI PORTOFOLIO</span>
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#211A24]">
              Karya Terpilih
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#211A24] text-white shadow-sm'
                    : 'bg-[#EFECE8] text-[#211A24]/70 hover:text-[#211A24] hover:bg-[#6B4E9E]/10'
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Photo Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => {
            let colSpan = 'lg:col-span-4'; // default
            if (index === 0) colSpan = 'lg:col-span-7'; // wide studio family shot
            else if (index === 1) colSpan = 'lg:col-span-5'; // product portrait
            else if (index === 2) colSpan = 'lg:col-span-5'; // newborn portrait
            else if (index === 3) colSpan = 'lg:col-span-7'; // studio ID & executive
            else if (index === 4) colSpan = 'lg:col-span-7'; // wedding on location
            else if (index === 5) colSpan = 'lg:col-span-5'; // prewedding/event

            // Add viewfinder corner brackets to featured cards (0 and 3)
            const showCorners = index === 0 || index === 3;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden bg-[#EFECE8] cursor-pointer shadow-sm ${colSpan}`}
              >
                <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-auto h-80 lg:h-[380px] w-full overflow-hidden relative">
                  {showCorners && <ViewfinderCorners color="border-[#6B4E9E]" />}
                  <PhotoGelOverlay />

                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 contrast-[1.05] saturate-[0.95]"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#211A24]/90 via-[#211A24]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6237E] font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>{categoryLabels[item.category] || item.category} • {item.location}</span>
                    </span>
                    <h3 className="font-serif text-2xl text-white mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2 mt-1 font-sans">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#FAF7F5] font-medium">
                      <span>Lihat Foto</span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#C6237E]" />
                    </div>
                  </div>

                  {/* Top Category Tag Always Visible */}
                  <div className="absolute top-4 left-4 z-20 bg-[#FAF7F5]/90 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[#211A24] border border-[#211A24]/10 shadow-sm">
                    {categoryLabels[item.category] || item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setSelectedCategory('All')}
            className="px-10 py-4 bg-[#211A24] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#6B4E9E] transition-all duration-300 inline-flex items-center gap-2 shadow-sm"
          >
            <span>Lihat Seluruh Galeri</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-[#211A24]/90 backdrop-blur-md p-6 flex items-center justify-center animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#FAF7F5] overflow-hidden shadow-2xl border border-[#FAF7F5]/20 flex flex-col md:flex-row">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-30 p-2 bg-[#211A24] text-white hover:bg-[#6B4E9E] transition-colors"
              aria-label="Tutup Modul"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-3/5 bg-black relative overflow-hidden">
              <ViewfinderCorners color="border-[#6B4E9E]" />
              <PhotoGelOverlay />
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover max-h-[70vh] contrast-[1.05] saturate-[0.95]"
              />
            </div>

            <div className="md:w-2/5 p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B4E9E] font-medium">
                  {categoryLabels[selectedImage.category] || selectedImage.category} • {selectedImage.year}
                </span>
                <h3 className="font-serif text-3xl text-[#211A24] mt-2">
                  {selectedImage.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C6237E] font-medium mt-1">
                  Lokasi: {selectedImage.location}
                </p>
                <p className="text-sm text-[#211A24]/80 mt-4 leading-relaxed font-sans">
                  {selectedImage.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#211A24]/10 mt-6 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest text-[#211A24]/60">aura PHOTO Studio</span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-xs uppercase tracking-widest font-semibold text-[#6B4E9E] hover:underline"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
