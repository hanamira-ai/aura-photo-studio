import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { StudioServicesSection } from './components/StudioServicesSection';
import { OnLocationSection } from './components/OnLocationSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [inquiryService, setInquiryService] = useState<string>('');
  const [variant, setVariant] = useState<'photo' | 'pastel'>('photo');

  const handleOpenContactWithService = (serviceTitle: string = '') => {
    setInquiryService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPortfolio = () => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-[#211A24] font-sans antialiased overflow-x-hidden selection:bg-[#6B4E9E] selection:text-white">
      {/* 1. Header / Navigation */}
      <Navbar
  onOpenContact={() => handleOpenContactWithService()}
  heroVariant={variant}
/>

      {/* Main Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero
  variant={variant}
  setVariant={setVariant}
  onViewPortfolio={handleViewPortfolio}
  onOpenContact={() => handleOpenContactWithService('Studio Session')}
/>

        {/* 3. About Section */}
        <AboutSection onOpenContact={() => handleOpenContactWithService()} />

        {/* 4. Featured Work */}
        <PortfolioSection />

        {/* 5. Studio Services (OUR STUDIO - Studio Sessions) */}
        <StudioServicesSection
          onOpenBooking={(serviceName) => handleOpenContactWithService(serviceName)}
        />

        {/* 6. On Location & Special Events (BEYOND THE STUDIO - Weddings & Special Moments) */}
        <OnLocationSection
          onOpenBooking={(serviceName) => handleOpenContactWithService(serviceName)}
        />

        {/* 7. CTA Banner */}
        <CtaBanner onOpenContact={() => handleOpenContactWithService()} />

        {/* Contact / Reservation Form */}
        <ContactSection initialService={inquiryService} />
      </main>
<FloatingWhatsApp />
      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
