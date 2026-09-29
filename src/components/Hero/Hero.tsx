import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import {
  Box,
  Glasses,
  Brain,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { setActivePage, setViewMode, enterVR, setIsAiModalOpen } = useExperience();
  const { playUiSound } = useAudio();

  const handleExplore3D = () => {
    playUiSound('click');
    setActivePage('viewer');
    setViewMode('orbit');
  };

  const handleEnterVR = () => {
    playUiSound('click');
    setActivePage('viewer');
    enterVR();
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#07090E]">
      
      {/* Background Image: Majestic Taj Mahal at sunset with reflecting pool & dusk sky */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2600&q=90"
          alt="Taj Mahal Sunset Background"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.88] contrast-[1.05]"
        />

        {/* Gradients and vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080D]/95 via-[#06080D]/75 sm:via-[#06080D]/55 to-transparent w-full lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080D]/90 via-transparent to-[#06080D]/90 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(229,193,88,0.12)_0%,_transparent_70%)] pointer-events-none" />
      </div>

      {/* Main Hero Body */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-3">
          
          {/* Top-Left Badge: INDIA'S HERITAGE • DIGITALLY PRESERVED */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E121B]/80 border border-[#E5C158]/40 text-[#E5C158] text-[11px] sm:text-xs font-serif font-semibold tracking-[0.18em] [word-spacing:0.15em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(229,193,88,0.15)] self-start">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E5C158]">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            <span>INDIA'S HERITAGE &bull; DIGITALLY PRESERVED</span>
          </div>

          {/* Top-Right Poetic Quote */}
          <div className="hidden lg:block text-right pr-4">
            <p className="font-serif italic text-base sm:text-lg text-[#EAE6DC]/90 tracking-wider [word-spacing:0.1em] font-normal">
              &mdash; Not just a monument,
            </p>
            <p className="font-serif italic text-base sm:text-lg text-[#E5C158] tracking-wider [word-spacing:0.1em] font-normal">
              &mdash; but a legacy.
            </p>
          </div>

        </div>

        {/* Master Branding Heading: SmrutiVR */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-black tracking-[0.08em] [word-spacing:0.15em] text-transparent bg-clip-text bg-gradient-to-r from-[#FBF8EE] via-[#E5C158] to-[#C29B27] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] mt-2">
          SmrutiVR
        </h1>

        {/* Taglines: Experience the Past. / Preserve the Future. with true lower-case typography */}
        <div className="mt-4 sm:mt-5 space-y-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F8F9FA] tracking-wide [word-spacing:0.14em] drop-shadow-md">
            Experience the Past.
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F8F9FA] tracking-wide [word-spacing:0.14em] drop-shadow-md">
            Preserve the Future.
          </h2>
        </div>

        {/* Subheading text */}
        <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 font-sans max-w-xl leading-relaxed tracking-normal [word-spacing:0.06em]">
          Explore India's heritage through immersive 3D, Virtual Reality and AI-powered storytelling.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          
          {/* Button 1: Explore Taj Mahal in 3D */}
          <button
            onClick={handleExplore3D}
            className="group flex items-center gap-3 px-6 sm:px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#F3D37A] via-[#E5C158] to-[#D4AF37] text-charcoal-950 font-sans font-bold text-sm sm:text-base tracking-wide [word-spacing:0.08em] shadow-[0_0_25px_rgba(229,193,88,0.4)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
          >
            <Box className="w-5 h-5 text-charcoal-950 stroke-[2.2]" />
            <span>Explore Taj Mahal in 3D</span>
            <ArrowRight className="w-4 h-4 text-charcoal-950 stroke-[2.2] group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Button 2: Enter VR */}
          <button
            onClick={handleEnterVR}
            className="group flex items-center gap-3 px-6 sm:px-7 py-3.5 rounded-2xl bg-[#0B0F17]/80 hover:bg-[#0B0F17] text-[#E5C158] hover:text-[#F3D37A] border border-[#E5C158]/50 hover:border-[#E5C158] font-sans font-bold text-sm sm:text-base tracking-wide [word-spacing:0.08em] backdrop-blur-xl shadow-lg active:scale-[0.98] transition-all cursor-pointer"
          >
            <Glasses className="w-5 h-5 text-[#E5C158] stroke-[2.2]" />
            <span>Enter VR</span>
            <ArrowRight className="w-4 h-4 text-[#E5C158] stroke-[2.2] group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

      </div>

      {/* Bottom Floating Feature Bar (The 4-Column Card Bar) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-12 sm:mt-16">
        <div className="p-4 sm:p-6 lg:p-7 rounded-3xl bg-[#0A0D15]/80 border border-[#E5C158]/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E5C158]/15">
          
          {/* Col 1: 3D Exploration */}
          <div
            onClick={handleExplore3D}
            className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-[#E5C158]/30 flex items-center justify-center shrink-0 group-hover:border-[#E5C158] group-hover:shadow-[0_0_12px_rgba(229,193,88,0.3)] transition-all">
              <Box className="w-5 h-5 text-[#E5C158]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-[#FDFBF7] group-hover:text-[#E5C158] transition-colors">
                3D Exploration
              </h4>
              <p className="mt-1 text-xs text-slate-400 font-sans leading-relaxed">
                Walk through iconic heritage sites in stunning detail.
              </p>
            </div>
          </div>

          {/* Col 2: VR Experience */}
          <div
            onClick={handleEnterVR}
            className="flex items-start gap-4 pt-4 sm:pt-0 sm:pl-6 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-[#E5C158]/30 flex items-center justify-center shrink-0 group-hover:border-[#E5C158] group-hover:shadow-[0_0_12px_rgba(229,193,88,0.3)] transition-all">
              <Glasses className="w-5 h-5 text-[#E5C158]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-[#FDFBF7] group-hover:text-[#E5C158] transition-colors">
                VR Experience
              </h4>
              <p className="mt-1 text-xs text-slate-400 font-sans leading-relaxed">
                Step into history with immersive VR.
              </p>
            </div>
          </div>

          {/* Col 3: AI Heritage Guide */}
          <div
            onClick={() => setIsAiModalOpen(true)}
            className="flex items-start gap-4 pt-4 sm:pt-0 sm:pl-6 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-[#E5C158]/30 flex items-center justify-center shrink-0 group-hover:border-[#E5C158] group-hover:shadow-[0_0_12px_rgba(229,193,88,0.3)] transition-all">
              <Brain className="w-5 h-5 text-[#E5C158]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-[#FDFBF7] group-hover:text-[#E5C158] transition-colors">
                AI Heritage Guide
              </h4>
              <p className="mt-1 text-xs text-slate-400 font-sans leading-relaxed">
                Ask, learn, discover in your language.
              </p>
            </div>
          </div>

          {/* Col 4: Digital Preservation */}
          <div
            onClick={() => setActivePage('preservation')}
            className="flex items-start gap-4 pt-4 sm:pt-0 sm:pl-6 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-[#E5C158]/30 flex items-center justify-center shrink-0 group-hover:border-[#E5C158] group-hover:shadow-[0_0_12px_rgba(229,193,88,0.3)] transition-all">
              <ShieldCheck className="w-5 h-5 text-[#E5C158]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-[#FDFBF7] group-hover:text-[#E5C158] transition-colors">
                Digital Preservation
              </h4>
              <p className="mt-1 text-xs text-slate-400 font-sans leading-relaxed">
                Protecting heritage for future generations.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
