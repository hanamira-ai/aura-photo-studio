import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  heroVariant?: 'photo' | 'pastel';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  heroVariant = 'photo',
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'studio-services', 'on-location', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home', id: 'home' },
    { name: 'Tentang Kami', href: '#about', id: 'about' },
    { name: 'Layanan Studio', href: '#studio-services', id: 'studio-services' },
    { name: 'Liputan Luar Studio', href: '#on-location', id: 'on-location' },
    { name: 'Portofolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (id === 'contact') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onOpenContact();
      }
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
    ? 'bg-[#211A24]/75 backdrop-blur-xl backdrop-saturate-150 py-4 shadow-xl border-b border-white/10'
    : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Logo Left */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home', 'home')}>
          <Logo size={scrolled ? 'sm' : 'md'} />
        </a>

        {/* Desktop Nav Links Right */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 ${
  isActive
    ? 'text-[#6B4E9E] font-semibold'
    : scrolled
      ? 'text-white hover:text-[#D8B4FE]'
      : heroVariant === 'pastel'
        ? 'text-[#211A24] hover:text-[#6B4E9E]'
        : 'text-white hover:text-[#D8B4FE]'
}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-[#6B4E9E] to-[#C6237E]" />
                )}
              </a>
            );
          })}

          {/* Quick Inquiry CTA */}
          <button
            onClick={onOpenContact}
            className="text-xs uppercase tracking-[0.2em] px-5 py-2.5 bg-[#211A24] text-white font-medium hover:bg-[#6B4E9E] transition-colors duration-300 flex items-center gap-1.5 shadow-sm"
          >
            Booking Sesi
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FAF7F5]" />
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#211A24] p-2 hover:text-[#6B4E9E] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-[#FAF7F5] border-b border-[#211A24]/10 shadow-xl px-8 py-8 flex flex-col space-y-5 transition-all animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.id)}
              className="text-sm uppercase tracking-[0.2em] font-medium text-[#211A24] hover:text-[#6B4E9E] py-2 border-b border-[#211A24]/5 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-[#6B4E9E] text-xs">→</span>
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-3 bg-[#211A24] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#6B4E9E] transition-colors flex items-center justify-center gap-2 mt-2"
          >
            Booking Sesi
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
