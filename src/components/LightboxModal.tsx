import React from 'react';
import { PortfolioItem } from '../types';
import { X, MapPin, Calendar, ArrowRight, Share2, Heart } from 'lucide-react';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquireItem: (title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onInquireItem }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#211A24]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
      <div className="bg-[#FAF7F5] max-w-5xl w-full border border-[#211A24]/20 shadow-2xl relative overflow-hidden max-h-[92vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 bg-white/90 backdrop-blur-md rounded-full text-[#211A24] hover:text-[#6B4E9E] transition-colors shadow-md"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Container (Left/Top) */}
        <div className="md:w-3/5 bg-[#120E14] relative flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        {/* Info Sidebar (Right/Bottom) */}
        <div className="md:w-2/5 p-8 sm:p-10 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white bg-[#6B4E9E] px-3 py-1 font-semibold">
                {item.category}
              </span>
              <span className="text-xs text-[#211A24]/60 font-sans flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {item.year || '2025'}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#211A24] leading-tight">
              {item.title}
            </h3>

            {item.location && (
              <div className="flex items-center gap-1.5 text-xs text-[#6B4E9E] font-medium uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{item.location}</span>
              </div>
            )}

            <p className="text-sm text-[#211A24]/80 font-sans leading-relaxed pt-2 border-t border-[#211A24]/10">
              {item.description || 'Captured with natural lighting and an organic, unscripted approach.'}
            </p>
          </div>

          <div className="pt-6 border-t border-[#211A24]/10 space-y-3">
            <button
              onClick={() => {
                const title = item.title;
                onClose();
                onInquireItem(`Inquiry regarding "${title}" portfolio piece`);
              }}
              className="w-full py-4 bg-[#211A24] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#6B4E9E] transition-colors flex items-center justify-center gap-2"
            >
              <span>Inquire About Similar Shoot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
