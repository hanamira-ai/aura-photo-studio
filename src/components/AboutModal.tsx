import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { X, Camera, Heart, ArrowRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#211A24]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
      <div className="bg-[#FAF7F5] max-w-4xl w-full border border-[#211A24]/20 shadow-2xl relative overflow-hidden max-h-[92vh] overflow-y-auto p-8 sm:p-12 space-y-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#211A24] hover:text-[#6B4E9E] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#6B4E9E] font-medium block">
            STUDIO BIOGRAPHY &amp; PHILOSOPHY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#211A24] font-normal">
            About {STUDIO_INFO.name}
          </h2>
          <p className="font-serif italic text-lg text-[#6B4E9E]">
            {STUDIO_INFO.tagline}
          </p>
        </div>

        {/* Split Grid: Photo & Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 aspect-[3/4] bg-[#EFECE8] overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000"
              alt={STUDIO_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-7 space-y-4 text-sm text-[#211A24]/85 font-sans leading-relaxed whitespace-pre-line">
            <p>{STUDIO_INFO.fullBio}</p>
          </div>
        </div>

        {/* Philosophy & Studio Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#211A24]/10">
          <div className="bg-white p-6 border border-[#211A24]/10 space-y-3">
            <div className="flex items-center gap-2 text-[#6B4E9E]">
              <Heart className="w-5 h-5" />
              <h4 className="font-serif text-xl text-[#211A24]">Creative Philosophy</h4>
            </div>
            <p className="text-xs text-[#211A24]/75 leading-relaxed">
              We focus on comfort and precision — ensuring every client feels relaxed whether taking a quick document photo or posing for a large multi-generational family portrait.
            </p>
          </div>

          <div className="bg-white p-6 border border-[#211A24]/10 space-y-3">
            <div className="flex items-center gap-2 text-[#6B4E9E]">
              <Camera className="w-5 h-5" />
              <h4 className="font-serif text-xl text-[#211A24]">Studio Equipment</h4>
            </div>
            <p className="text-xs text-[#211A24]/75 leading-relaxed">
              Equipped with high-end strobe lights, softboxes, custom physical backdrops, and dedicated color calibration for ultra-precise prints and digital files.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-[#211A24]/10">
          <span className="text-xs text-[#211A24]/70">
            aura PHOTO Studio • Indoor Studio &amp; On-Location Coverage
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-8 py-4 bg-[#211A24] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#6B4E9E] transition-colors flex items-center gap-2"
          >
            <span>Book A Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
