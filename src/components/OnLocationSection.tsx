import React, { useState } from 'react';
import { ON_LOCATION_SERVICES } from '../data/studioData';
import { Heart, Camera, Calendar, ArrowRight, Check } from 'lucide-react';
import { ApertureIcon, ViewfinderCorners, PhotoGelOverlay } from './ApertureIcon';

interface OnLocationSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const OnLocationSection: React.FC<OnLocationSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeService = ON_LOCATION_SERVICES[activeTab] || ON_LOCATION_SERVICES[0];

  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#6B4E9E]" };
    switch (iconName) {
      case 'Heart': return <Heart {...props} />;
      case 'Camera': return <Camera {...props} />;
      case 'Calendar': return <Calendar {...props} />;
      default: return <Heart {...props} />;
    }
  };

  return (
    <section id="on-location" className="py-20 bg-[#FAF7F5] relative border-t border-[#211A24]/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header - Compact Secondary Scale */}
        <div className="mb-12 text-left space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-[#6B4E9E] font-medium flex items-center gap-2">
            <ApertureIcon className="w-3.5 h-3.5 text-[#6B4E9E]" />
            <span>LIPUTAN LUAR STUDIO</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211A24]">
            Wedding &amp; Momen Spesial
          </h2>
          <p className="text-xs sm:text-sm text-[#211A24]/70 max-w-2xl font-sans">
            Melengkapi keahlian studio indoor kami, aura PHOTO Studio menyediakan layanan liputan luar studio profesional untuk momen wedding, prewedding photoshoot, serta dokumentasi acara spesial Anda.
          </p>
        </div>

        {/* 3 Interactive Service Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Service Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {ON_LOCATION_SERVICES.map((service, index) => {
              const isSelected = activeTab === index;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`p-6 cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#E8DFF2]/80 via-[#FAF7F5] to-[#F5E3ED]/60 border-[#6B4E9E] shadow-sm'
                      : 'bg-gradient-to-r from-[#FAF7F5] to-[#E8DFF2]/30 border-[#211A24]/10 hover:border-[#6B4E9E]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#FAF7F5] border border-[#211A24]/5">
                        {renderIcon(service.iconName)}
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-normal text-[#211A24]">
                          {service.title}
                        </h3>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B4E9E] font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#211A24]/70">
                      Mulai {service.startingPrice}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Selected Service Feature Banner (7 cols) with Pastel Gradient */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#E8DFF2]/60 via-[#FAF7F5] to-[#F5E3ED]/50 border border-[#6B4E9E]/20 p-8 flex flex-col md:flex-row gap-8 items-center justify-between shadow-sm">
            {/* Image Preview */}
            <div className="w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden relative shadow-sm shrink-0 group">
              <ViewfinderCorners color="border-[#6B4E9E]" />
              <PhotoGelOverlay />
              <img
                src={activeService.imageUrl}
                alt={activeService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center contrast-[1.05] saturate-[0.95]"
              />
              <div className="absolute top-3 left-3 z-20 bg-[#211A24] text-white px-3 py-1 text-[9px] uppercase tracking-[0.2em]">
                Luar Studio
              </div>
            </div>

            {/* Service Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6237E] font-semibold block">
                  {activeService.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-[#211A24] mt-1">
                  {activeService.title}
                </h3>
                <p className="text-xs text-[#211A24]/80 mt-2 leading-relaxed font-sans">
                  {activeService.description}
                </p>

                <ul className="mt-4 space-y-1.5 border-t border-[#211A24]/10 pt-3">
                  {activeService.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] text-[#211A24]/75">
                      <Check className="w-3.5 h-3.5 text-[#6B4E9E]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenBooking(activeService.title)}
                className="w-full py-3 bg-[#211A24] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#6B4E9E] transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <span>Jadwalkan Liputan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
