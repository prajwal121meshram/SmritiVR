import React from 'react';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import {
  Glasses,
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Mail
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActivePage, enterVR } = useExperience();
  const { playUiSound } = useAudio();

  const handleNav = (page: string) => {
    playUiSound('click');
    setActivePage(page);
  };

  const handleEnterVR = () => {
    playUiSound('click');
    setActivePage('viewer');
    enterVR();
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore' },
    { id: 'viewer', label: 'Taj Mahal' },
    { id: 'history', label: 'History' },
    { id: 'archive', label: 'Archive' },
    { id: 'preservation', label: 'About' },
  ];

  return (
    <footer className="relative bg-[#06080D] border-t border-[#E5C158]/20 text-slate-300 overflow-hidden select-none">
      
      {/* Subtle Background Architectural Blueprint Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5C158 1px, transparent 1px),
            linear-gradient(to bottom, #E5C158 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px'
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse_at_top,_rgba(229,193,88,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-8">
        
        {/* Main 4-Column Layout on Desktop: [Logo + Tagline] | [Explore] | [Connect] | [ENTER VR] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start pb-10">
          
          {/* 1. Brand Section (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-3">
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="relative shrink-0 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="SmrutiVR Logo" 
                  className="h-10 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(229,193,88,0.45)] group-hover:brightness-110 group-hover:scale-105 transition-all duration-300" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl sm:text-2xl tracking-[0.08em] [word-spacing:0.12em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D6] via-[#E5C158] to-[#C99E2A] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  SmrutiVR
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#DCD7CC]/80 font-serif tracking-[0.04em] [word-spacing:0.08em] mt-1 font-normal">
                  Experience the Past. Preserve the Future.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm pt-1">
              Explore and preserve India's heritage through immersive 3D and VR.
            </p>
          </div>

          {/* 2. Simple Navigation: EXPLORE (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs font-bold tracking-[0.18em] text-[#E5C158] uppercase">
              EXPLORE
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-[13px]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-slate-300 hover:text-[#E5C158] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONNECT Section (Cols 9-10) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-xs font-bold tracking-[0.18em] text-[#E5C158] uppercase">
              CONNECT
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-8 h-8 rounded-lg bg-[#0E121B] border border-[#E5C158]/30 hover:border-[#E5C158] text-slate-300 hover:text-[#E5C158] flex items-center justify-center transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-8 h-8 rounded-lg bg-[#0E121B] border border-[#E5C158]/30 hover:border-[#E5C158] text-slate-300 hover:text-[#E5C158] flex items-center justify-center transition-all hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#0E121B] border border-[#E5C158]/30 hover:border-[#E5C158] text-slate-300 hover:text-[#E5C158] flex items-center justify-center transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@smrutivr.org"
                title="Email"
                className="w-8 h-8 rounded-lg bg-[#0E121B] border border-[#E5C158]/30 hover:border-[#E5C158] text-slate-300 hover:text-[#E5C158] flex items-center justify-center transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4. Main CTA (Cols 11-12) */}
          <div className="lg:col-span-2 flex lg:justify-end">
            <button
              onClick={handleEnterVR}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F3D37A] via-[#E5C158] to-[#D4AF37] text-charcoal-950 font-serif font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_20px_rgba(229,193,88,0.3)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Glasses className="w-4 h-4 stroke-[2.2]" />
              <span>ENTER VR</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Thin Gold Divider */}
        <div className="pt-6 border-t border-[#E5C158]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            &copy; 2026 SmrutiVR
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="hover:text-[#E5C158] transition-colors cursor-pointer">Privacy</span>
            <span>&bull;</span>
            <span className="hover:text-[#E5C158] transition-colors cursor-pointer">Terms</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
