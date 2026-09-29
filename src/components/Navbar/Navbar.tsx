import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import { Language } from '../../types';
import {
  Glasses,
  Volume2,
  VolumeX,
  Menu,
  X,
  Globe,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { activePage, setActivePage, enterVR, setIsAiModalOpen } = useExperience();
  const { isAmbientPlaying, toggleAmbient, playUiSound } = useAudio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore' },
    { id: 'viewer', label: 'Taj Mahal' },
    { id: 'history', label: 'History' },
    { id: 'archive', label: 'Archive' },
    { id: 'preservation', label: 'About' },
  ];

  const handleNavClick = (id: string) => {
    playUiSound('click');
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  const handleEnterVR = () => {
    playUiSound('click');
    setActivePage('viewer');
    enterVR();
    setMobileMenuOpen(false);
  };

  const handleOpenAi = () => {
    playUiSound('click');
    setIsAiModalOpen(true);
    setMobileMenuOpen(false);
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'hi', label: 'हिन्दी', flag: 'HI' },
    { code: 'mr', label: 'मराठी', flag: 'MR' },
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090E]/92 backdrop-blur-xl border-b border-[#E5C158]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#06080D]/95 via-[#06080D]/60 to-transparent border-b border-[#E5C158]/10 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        
        {/* ========================================================================= */}
        {/* BRAND SECTION: [NEW LOGO] SmrutiVR + Tagline */}
        {/* ========================================================================= */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 sm:gap-3.5 cursor-pointer group select-none transition-transform active:scale-[0.99]"
        >
          {/* Logo: Transparent PNG at 45-50px on desktop, responsive on mobile */}
          <div className="relative shrink-0 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="SmrutiVR Logo"
              className="h-10 sm:h-[46px] lg:h-[48px] w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(229,193,88,0.45)] group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Typography: Brand Name + Tagline */}
          <div className="flex flex-col justify-center">
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-[0.08em] [word-spacing:0.12em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D6] via-[#E5C158] to-[#C99E2A] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              SmrutiVR
            </span>
            <span className="text-[10px] sm:text-[11.5px] text-[#DCD7CC]/85 font-serif tracking-[0.04em] [word-spacing:0.08em] mt-1 font-normal hidden xs:block">
              Experience the Past. Preserve the Future.
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* NAVIGATION LINKS (Center - Desktop) */}
        {/* ========================================================================= */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1.5 text-xs sm:text-[13.5px] font-medium tracking-wider [word-spacing:0.06em] font-sans transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#FDFBF7] font-semibold'
                    : 'text-slate-300/85 hover:text-[#E5C158]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5D77F] via-[#E5C158] to-[#C99E2A] rounded-full shadow-[0_0_8px_rgba(229,193,88,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* ========================================================================= */}
        {/* RIGHT CONTROLS: Sound | Lang | AI | ENTER VR (Desktop) */}
        {/* ========================================================================= */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
          
          {/* 1. Ambient Soundtrack Toggle */}
          <button
            onClick={toggleAmbient}
            title={isAmbientPlaying ? 'Mute Ambient Heritage Tanpura' : 'Play Ambient Heritage Tanpura'}
            className={`h-9 w-9 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
              isAmbientPlaying
                ? 'bg-[#E5C158]/15 border-[#E5C158] text-[#E5C158] shadow-[0_0_12px_rgba(229,193,88,0.25)]'
                : 'bg-[#0B0F17]/80 hover:bg-[#0E131F] border-[#E5C158]/25 hover:border-[#E5C158]/60 text-slate-400 hover:text-[#E5C158]'
            }`}
          >
            {isAmbientPlaying ? (
              <Volume2 className="w-4 h-4 text-[#E5C158]" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* 2. Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="h-9 px-3 rounded-xl bg-[#0B0F17]/80 hover:bg-[#0E131F] border border-[#E5C158]/25 hover:border-[#E5C158]/60 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>{currentLangObj.flag}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180 text-[#E5C158]' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#090D15]/95 border border-[#E5C158]/35 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] p-1.5 z-50 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
                <div className="text-[10px] font-serif font-bold text-[#E5C158]/80 uppercase tracking-widest px-2.5 py-1">
                  Language
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      playUiSound('click');
                      setLanguage(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      language === l.code
                        ? 'bg-[#E5C158]/20 text-[#E5C158] font-bold border border-[#E5C158]/30'
                        : 'text-slate-300 hover:bg-[#131A28] hover:text-[#FDFBF7]'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-[10px] font-mono text-[#E5C158]/70">{l.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. Smruti AI Assistant Trigger */}
          <button
            onClick={handleOpenAi}
            className="h-9 w-9 rounded-xl bg-[#0B0F17]/80 hover:bg-[#0E131F] border border-[#E5C158]/25 hover:border-[#E5C158]/60 text-[#E5C158] hover:shadow-[0_0_12px_rgba(229,193,88,0.3)] transition-all flex items-center justify-center cursor-pointer"
            title="Smruti AI — Heritage Guide"
          >
            <Sparkles className="w-4 h-4 text-[#E5C158]" />
          </button>

          {/* 4. Primary ENTER VR Button */}
          <button
            onClick={handleEnterVR}
            className="group h-9 sm:h-10 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-[#F7DA7F] via-[#E5C158] to-[#C89F2A] text-charcoal-950 font-serif font-bold text-xs sm:text-sm tracking-wider [word-spacing:0.08em] shadow-[0_0_20px_rgba(229,193,88,0.35)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border border-[#FFF0B3]/50"
          >
            <Glasses className="w-4 h-4 stroke-[2.4] text-charcoal-950 group-hover:scale-105 transition-transform" />
            <span>ENTER VR</span>
          </button>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE CONTROLS & HAMBURGER */}
        {/* ========================================================================= */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick Mobile VR CTA */}
          <button
            onClick={handleEnterVR}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#E5C158] to-[#C99E2A] text-charcoal-950 font-serif font-bold text-xs flex items-center gap-1.5 shadow-[0_0_12px_rgba(229,193,88,0.3)]"
          >
            <Glasses className="w-3.5 h-3.5 text-charcoal-950 stroke-[2.4]" />
            <span>VR</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#0B0F17] text-[#E5C158] border border-[#E5C158]/30 hover:border-[#E5C158]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE MENU ACCORDION / DRAWER */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090E]/98 border-b border-[#E5C158]/25 px-5 pt-4 pb-6 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                    isActive
                      ? 'bg-[#E5C158]/15 text-[#E5C158] border-[#E5C158]/60 font-bold shadow-[0_0_10px_rgba(229,193,88,0.2)]'
                      : 'bg-[#0B0F17]/90 text-slate-300 border-slate-800/80 hover:border-[#E5C158]/30'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E5C158]/15 flex items-center justify-between gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={toggleAmbient}
              className={`flex-1 py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                isAmbientPlaying
                  ? 'bg-[#E5C158]/15 border-[#E5C158] text-[#E5C158]'
                  : 'bg-[#0B0F17] border-slate-800 text-slate-300'
              }`}
            >
              {isAmbientPlaying ? <Volume2 className="w-4 h-4 text-[#E5C158]" /> : <VolumeX className="w-4 h-4" />}
              <span>{isAmbientPlaying ? 'Audio ON' : 'Audio OFF'}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => {
                const next: Record<Language, Language> = { en: 'hi', hi: 'mr', mr: 'en' };
                playUiSound('click');
                setLanguage(next[language]);
              }}
              className="px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-[#E5C158]/35 text-[#E5C158] text-xs font-bold flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* AI Guide Trigger */}
            <button
              onClick={handleOpenAi}
              className="p-2 rounded-xl bg-[#0B0F17] border border-[#E5C158]/35 text-[#E5C158]"
              title="Smruti AI"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
