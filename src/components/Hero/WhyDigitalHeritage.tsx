import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import {
  Scan,
  Globe,
  Glasses,
  Brain,
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  HardDrive,
  Ticket,
  ChevronRight,
  Database,
  Cpu
} from 'lucide-react';

export const WhyDigitalHeritage: React.FC = () => {
  const { language } = useLanguage();
  const { setActivePage, setViewMode, enterVR, setIsAiModalOpen } = useExperience();
  const { playUiSound } = useAudio();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pillars = [
    {
      num: "01",
      tag: "DIGITAL PRESERVATION",
      title: "Digital Preservation",
      desc: "Create high-fidelity digital twins of historical monuments using 3D scanning, photogrammetry and spatial data.",
      icon: Scan,
      action: () => {
        playUiSound('click');
        setActivePage('archive');
      }
    },
    {
      num: "02",
      tag: "UNIVERSAL ACCESS",
      title: "Universal Access",
      desc: "Let students, researchers and visitors explore heritage sites digitally from anywhere in the world.",
      icon: Globe,
      action: () => {
        playUiSound('click');
        setActivePage('explore');
      }
    },
    {
      num: "03",
      tag: "IMMERSIVE EXPLORATION",
      title: "Immersive Exploration",
      desc: "Experience historical sites through interactive 3D environments, VR tours, hotspots and guided exploration.",
      icon: Glasses,
      action: () => {
        playUiSound('click');
        setActivePage('viewer');
        setViewMode('orbit');
      }
    },
    {
      num: "04",
      tag: "AI HERITAGE GUIDE",
      title: "AI Heritage Guide",
      desc: "Transform historical information into interactive, multilingual and context-aware stories powered by AI.",
      icon: Brain,
      action: () => {
        playUiSound('click');
        setIsAiModalOpen(true);
      }
    }
  ];

  const pipelineSteps = [
    {
      num: "01",
      name: "Capture",
      desc: "3D scanning & photogrammetry",
      icon: Scan
    },
    {
      num: "02",
      name: "Digitize",
      desc: "High-fidelity 3D digital twin",
      icon: Layers
    },
    {
      num: "03",
      name: "Preserve",
      desc: "Secure digital heritage archive",
      icon: HardDrive
    },
    {
      num: "04",
      name: "Experience",
      desc: "Web 3D + immersive VR exploration",
      icon: Glasses
    },
    {
      num: "05",
      name: "Contribute",
      desc: "Donations, tickets & preservation support",
      icon: Ticket
    }
  ];

  const techBadges = [
    { name: "3D DIGITAL TWINS", icon: Layers },
    { name: "WEBXR", icon: Glasses },
    { name: "VR", icon: Cpu },
    { name: "AI STORYTELLING", icon: Brain },
    { name: "PHOTOGRAMMETRY", icon: Scan },
    { name: "DIGITAL ARCHIVE", icon: Database }
  ];

  return (
    <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] overflow-hidden border-t border-[#E5C158]/15">
      
      {/* Subtle Background Architectural Blueprint Grid & Laser Point Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5C158 1px, transparent 1px),
            linear-gradient(to bottom, #E5C158 1px, transparent 1px),
            radial-gradient(circle at 12px 12px, #E5C158 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 20px 20px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(229,193,88,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E121B] border border-[#E5C158]/40 text-[#E5C158] text-[11px] font-serif font-bold tracking-[0.22em] [word-spacing:0.15em] uppercase shadow-[0_0_15px_rgba(229,193,88,0.1)] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>PRESERVATION IMPERATIVE</span>
          </div>

          {/* Main Heading (Requirement 2: PRESERVING HISTORY. POWERING THE FUTURE.) */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-wide [word-spacing:0.14em] text-white leading-tight">
            PRESERVING HISTORY. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBF8EE] via-[#E5C158] to-[#D4AF37]">
              POWERING THE FUTURE.
            </span>
          </h2>

          {/* Heritage Storytelling Divider: ✦ ───────── ✦ ───────── ✦ */}
          <div className="flex items-center justify-center gap-3 my-5 select-none">
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#E5C158]/50 to-[#E5C158]" />
            <span className="text-[#E5C158] text-xs">✦</span>
            <div className="h-[1px] w-12 sm:w-20 bg-[#E5C158]/40" />
            <div className="w-5 h-5 rounded-full border border-[#E5C158]/50 flex items-center justify-center bg-[#07090E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
            </div>
            <div className="h-[1px] w-12 sm:w-20 bg-[#E5C158]/40" />
            <span className="text-[#E5C158] text-xs">✦</span>
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#E5C158]/50 to-[#E5C158]" />
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#CBD5E1] font-sans leading-relaxed tracking-normal [word-spacing:0.06em]">
            SmrutiVR digitally preserves India's heritage through immersive 3D, Virtual Reality, spatial computing and AI-powered storytelling.
          </p>
        </div>

        {/* 4 Premium Heritage Pillar Cards Grid (Requirement 3 & 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={pillar.num}
                onClick={pillar.action}
                onMouseEnter={() => {
                  setHoveredCard(idx);
                  playUiSound('hover');
                }}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-6 sm:p-7 rounded-2xl bg-[#0B0F17]/90 border transition-all duration-300 flex flex-col justify-between cursor-pointer group select-none ${
                  isHovered
                    ? 'border-[#E5C158] -translate-y-2 shadow-[0_15px_35px_rgba(229,193,88,0.2)] bg-[#0E1420]'
                    : 'border-[#E5C158]/25 hover:border-[#E5C158]/70 shadow-dark-card'
                }`}
              >
                {/* Architectural Corner Accents */}
                <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-[#E5C158]/40 rounded-tl" />
                <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-[#E5C158]/40 rounded-tr" />
                <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-[#E5C158]/40 rounded-bl" />
                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-[#E5C158]/40 rounded-br" />

                {/* Card Top: Large Numbered Label & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#07090E] border border-[#E5C158]/35 flex items-center justify-center text-[#E5C158] group-hover:border-[#E5C158] group-hover:shadow-[0_0_15px_rgba(229,193,88,0.3)] transition-all">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <span className="font-serif font-black text-2xl sm:text-3xl text-[#E5C158]/40 group-hover:text-[#E5C158] transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  {/* Card Title (Clear & High Contrast) */}
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#FDFBF7] group-hover:text-[#E5C158] transition-colors mb-2.5">
                    {pillar.title}
                  </h3>

                  {/* Description (Readable text) */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Card Bottom: EXPLORE → and HERITAGE PILLAR Label */}
                <div className="mt-8 pt-4 border-t border-[#E5C158]/15 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-serif font-bold tracking-widest text-[#E5C158]/70">
                    HERITAGE PILLAR
                  </span>

                  <span className="text-xs font-serif font-bold text-[#E5C158] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Digital Preservation Pipeline Section (Requirement 7) */}
        <div className="mt-16 pt-12 border-t border-[#E5C158]/20">
          
          <div className="text-center mb-10">
            <span className="text-[11px] font-serif font-bold tracking-[0.2em] text-[#E5C158] uppercase">
              PRESERVATION METHODOLOGY
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              Digital Preservation Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              From physical monument capture to immutable cultural heritage access.
            </p>
          </div>

          {/* 5-Step Process Nodes */}
          <div className="relative">
            
            {/* Connecting Golden Line across nodes (Desktop) */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-[#E5C158]/20 via-[#E5C158]/70 to-[#E5C158]/20 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {pipelineSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="p-4 rounded-xl bg-[#0B0F17]/80 border border-[#E5C158]/20 text-center flex flex-col items-center group hover:border-[#E5C158]/60 transition-all hover:bg-[#0E131E]"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#07090E] border-2 border-[#E5C158] flex items-center justify-center text-[#E5C158] font-serif font-bold text-xs shadow-[0_0_12px_rgba(229,193,88,0.25)] mb-3 group-hover:scale-110 transition-transform">
                      {step.num}
                    </div>

                    <h4 className="font-serif font-bold text-sm text-[#FDFBF7] group-hover:text-[#E5C158] transition-colors">
                      {step.name}
                    </h4>

                    <p className="text-[11px] text-slate-400 mt-1 font-sans leading-snug">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Technology Badges (Requirement 8) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {techBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-[#0E121B] border border-[#E5C158]/30 text-[#E5C158] text-[10px] sm:text-xs font-serif font-semibold tracking-wider flex items-center gap-2 shadow-sm hover:border-[#E5C158] transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>{badge.name}</span>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
};
