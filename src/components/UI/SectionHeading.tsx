import React from 'react';
import { ArchitecturalPattern } from './ArchitecturalPattern';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = ""
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gold-500/10 border border-gold-400/30 text-gold-300 mb-4 shadow-sm backdrop-blur-md`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 via-gold-200 to-gold-400 tracking-tight leading-tight">
        {title}
      </h2>

      {centered && <ArchitecturalPattern variant="divider" />}

      {subtitle && (
        <p className="mt-3 text-slate-300/90 text-base md:text-lg leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
