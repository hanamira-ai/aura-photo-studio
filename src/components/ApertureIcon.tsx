import React from 'react';

interface ApertureIconProps {
  className?: string;
}

export const ApertureIcon: React.FC<ApertureIconProps> = ({ className = "w-4 h-4 text-[#6B4E9E]" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="3.5" strokeWidth="1" strokeDasharray="1 1" />
      <path d="M14.3 3.6L9.7 20.4" strokeWidth="1" strokeOpacity="0.8" />
      <path d="M4.5 8.1L19.5 15.9" strokeWidth="1" strokeOpacity="0.8" />
      <path d="M3.6 15.3L20.4 9.7" strokeWidth="1" strokeOpacity="0.8" />
      <path d="M9.5 3.6L14.5 20.4" strokeWidth="1" strokeOpacity="0.8" />
    </svg>
  );
};

export const ViewfinderCorners: React.FC<{ color?: string }> = ({ color = "border-[#6B4E9E]" }) => {
  return (
    <div className="absolute inset-3 pointer-events-none z-20 transition-opacity duration-300">
      {/* Top Left */}
      <div className={`absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 ${color}`} />
      {/* Top Right */}
      <div className={`absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 ${color}`} />
      {/* Bottom Left */}
      <div className={`absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 ${color}`} />
      {/* Bottom Right */}
      <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 ${color}`} />
      {/* Center crosshair small mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 border border-[#6B4E9E]/40 rounded-full" />
    </div>
  );
};

/**
 * Editorial Image Gel Overlay:
 * Applies the signature cool blue-to-violet gel lighting tone & soft contrast
 */
export const PhotoGelOverlay: React.FC = () => {
  return (
    <>
      {/* Cool violet-blue gradient color grade layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#321350]/30 via-[#6B4E9E]/10 to-[#C6237E]/20 mix-blend-color pointer-events-none z-10" />
      {/* Soft vignette & contrast balance */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#211A24]/30 pointer-events-none z-10" />
    </>
  );
};
