import React from 'react';

interface PatternProps {
  className?: string;
  variant?: 'jaali' | 'arch' | 'divider' | 'dome' | 'corners';
  opacity?: number;
}

export const ArchitecturalPattern: React.FC<PatternProps> = ({
  className = "",
  variant = 'jaali',
  opacity = 0.15
}) => {
  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-400/50 to-gold-400" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold-400">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" fillOpacity="0.8" />
          <circle cx="12" cy="12" r="2" fill="#0B0F17" />
        </svg>
        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-gold-400/50 to-gold-400" />
      </div>
    );
  }

  if (variant === 'corners') {
    return (
      <>
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold-400/40 rounded-tl pointer-events-none" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold-400/40 rounded-tr pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold-400/40 rounded-bl pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold-400/40 rounded-br pointer-events-none" />
      </>
    );
  }

  if (variant === 'arch') {
    return (
      <svg
        className={`pointer-events-none select-none ${className}`}
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <path
          d="M10 60 V30 C10 15 30 5 50 5 C70 5 90 15 90 30 V60"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gold-400"
        />
        <path
          d="M20 60 V32 C20 20 35 12 50 12 C65 12 80 20 80 32 V60"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 2"
          className="text-gold-300"
        />
        <circle cx="50" cy="5" r="2.5" fill="currentColor" className="text-gold-400" />
      </svg>
    );
  }

  // Default: Mughal geometric Jaali lattice pattern
  return (
    <div
      className={`absolute inset-0 pointer-events-none bg-repeat ${className}`}
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle at 12px 12px, rgba(212, 175, 55, 0.4) 1.5px, transparent 1.5px),
                          linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.15) 50%, transparent 52%),
                          linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.15) 50%, transparent 52%)`,
        backgroundSize: '24px 24px'
      }}
    />
  );
};
