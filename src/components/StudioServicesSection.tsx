import React from 'react';
import { STUDIO_SERVICES } from '../data/studioData';
import { StudioServiceItem } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ApertureIcon } from './ApertureIcon';

interface StudioServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const StudioServicesSection: React.FC<StudioServicesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="studio-services" className="py-24 bg-[#FAF7F5] relative border-t border-[#211A24]/5">
      {/* Subtle Background Accent Lines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-[#6B4E9E]/10 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header - High Visual Weight */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[#6B4E9E] font-semibold inline-flex items-center gap-2">
            <ApertureIcon className="w-3.5 h-3.5 text-[#6B4E9E]" />
            <span>LAYANAN STUDIO</span>
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#211A24] leading-tight">
            Sesi Foto Studio
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#6B4E9E] to-[#C6237E] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-[#211A24]/75 font-sans leading-relaxed pt-2">
            Studio indoor profesional kami dilengkapi dengan sistem pencahayaan presisi, pilihan backdrop variatif, dan ruang ganti pribadi untuk setiap kebutuhan fotografi Anda.
          </p>
        </div>

        {/* 6 Studio Service Grid Items with Editorial Numbers & Pastel Palette Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDIO_SERVICES.map((service, index) => {
            const numString = String(index + 1).padStart(2, '0');

            // Harmonious pastel color palette gradient variants matching brand palette (#E8DFF2, #F5E3ED, #FAF7F5, #6B4E9E, #C6237E)
            const pastelGradients = [
              'bg-gradient-to-br from-[#E8DFF2]/70 via-[#FAF7F5] to-[#F5E3ED]/50',
              'bg-gradient-to-br from-[#F5E3ED]/70 via-[#FAF7F5] to-[#E8DFF2]/50',
              'bg-gradient-to-br from-[#FAF7F5] via-[#E8DFF2]/60 to-[#F5E3ED]/40',
              'bg-gradient-to-br from-[#E8DFF2]/50 via-[#F5E3ED]/60 to-[#FAF7F5]',
              'bg-gradient-to-br from-[#F5E3ED]/55 via-[#E8DFF2]/50 to-[#FAF7F5]',
              'bg-gradient-to-br from-[#FAF7F5] via-[#F5E3ED]/65 to-[#E8DFF2]/55',
            ];

            const gradientClass = pastelGradients[index % pastelGradients.length];

            return (
              <div
                key={service.id}
                className={`${gradientClass} p-8 border border-[#6B4E9E]/15 hover:border-[#6B4E9E] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Subtle Corner Gradient Highlight */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#C6237E]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Numbered Editorial Header + Price */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#211A24]/10">
                    <span className="font-serif italic text-4xl sm:text-5xl font-light text-[#6B4E9E]/40 group-hover:text-[#6B4E9E] transition-colors duration-300">
                      {numString}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B4E9E] bg-white/80 backdrop-blur-sm border border-[#6B4E9E]/15 px-3 py-1 shadow-2xs">
                      Mulai {service.startingPrice}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6237E] font-semibold block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#211A24] mb-3 group-hover:text-[#6B4E9E] transition-colors">
                    {service.title}
                  </h3>

                  {/* 1-sentence description required by prompt */}
                  <p className="text-xs sm:text-sm text-[#211A24]/80 font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Features list */}
                  <ul className="space-y-2 mb-8 border-t border-[#211A24]/10 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#211A24]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6B4E9E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inquire / Book CTA Button */}
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full py-3 bg-[#211A24] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#6B4E9E] transition-colors duration-300 flex items-center justify-center gap-2 mt-auto shadow-sm"
                >
                  <span>Jadwalkan {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Studio Amenities Banner with Pastel Gradient */}
        <div className="mt-16 bg-gradient-to-r from-[#E8DFF2]/80 via-[#FAF7F5] to-[#F5E3ED]/80 p-8 md:p-10 border border-[#6B4E9E]/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl text-[#211A24]">Butuh Konsep Studio atau Backdrop Custom?</h4>
            <p className="text-xs text-[#211A24]/80 font-sans">
              Kami menyediakan moodboard khusus, properti unik, dan pilihan warna backdrop untuk kebutuhan brand maupun konsep kreatif Anda.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Sesi Studio Custom')}
            className="px-6 py-3 bg-[#6B4E9E] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#211A24] transition-colors shrink-0 shadow-sm"
          >
            Konsultasi Konsep Custom
          </button>
        </div>

      </div>
    </section>
  );
};
