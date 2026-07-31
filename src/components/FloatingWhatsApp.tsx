import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/6285645405305?text=Halo%20aura%20PHOTO,%20saya%20ingin%20bertanya%20mengenai%20layanan%20fotografi.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        text-white
        flex
        items-center
        justify-center
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-2xl
      "
    >
      <FaWhatsapp size={34} />
    </a>
  );
};