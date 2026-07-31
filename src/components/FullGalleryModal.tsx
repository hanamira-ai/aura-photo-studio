import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/studioData';
import { PortfolioItem } from '../types';
import { X, Expand } from 'lucide-react';

interface FullGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: PortfolioItem) => void;
}

export const FullGalleryModal: React.FC<FullGalleryModalProps> = ({
  isOpen,
  onClose,
  onSelectItem,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!isOpen) return null;

  const categories = ['All', 'Portraits', 'Weddings', 'Editorial', 'Landscapes', 'Branding'];

  const filteredItems =
    selectedCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 bg-[#211A24]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
      <div className="bg-[#FAF7F5] max-w-6xl w-full border border-[#211A24]/20 shadow-2xl relative overflow-hidden max-h-[92vh] flex flex-col p-8 sm:p-12">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#211A24] hover:text-[#6B4E9E] transition-colors"
          aria-label="Close full gallery"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-8 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#6B4E9E] font-medium block">
            COMPLETE ARCHIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#211A24]">
            Full Studio Gallery
          </h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#211A24] text-white'
                    : 'bg-white border border-[#211A24]/10 text-[#211A24] hover:border-[#6B4E9E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="overflow-y-auto pr-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onSelectItem(item);
              }}
              className="group relative cursor-pointer overflow-hidden bg-[#EFECE8] aspect-[4/3] shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-[#211A24]/80 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#FAF7F5] bg-[#6B4E9E] px-2 py-0.5 inline-block self-start mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl">{item.title}</h4>
                <p className="text-xs text-white/80">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
