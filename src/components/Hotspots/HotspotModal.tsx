import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import { Button } from '../UI/Button';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import {
  X,
  Volume2,
  VolumeX,
  ShieldCheck,
  BookOpen,
  Layers,
  Sparkles,
  Maximize2,
  CheckCircle2
} from 'lucide-react';

export const HotspotModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { selectedHotspot, setSelectedHotspot, triggerTeleport } = useExperience();
  const { isNarrating, speakText, stopNarration, playUiSound } = useAudio();

  if (!selectedHotspot) return null;

  const handleClose = () => {
    playUiSound('click');
    stopNarration();
    setSelectedHotspot(null);
  };

  const handleAudioToggle = () => {
    if (isNarrating) {
      stopNarration();
    } else {
      const textToRead = `${selectedHotspot.title[language]}. ${selectedHotspot.description[language]} ${selectedHotspot.historicalEvidence[language]}`;
      speakText(textToRead, language);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-400/50 shadow-2xl p-6 sm:p-8 text-slate-200">
        <ArchitecturalPattern opacity={0.08} />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-charcoal-800 border border-gold-400/30 text-slate-300 hover:text-gold-300 hover:border-gold-400 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/15 border border-gold-400/40 text-gold-300">
            {selectedHotspot.category[language]}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] bg-charcoal-800 border border-slate-700 text-slate-400">
            3D Vector: [{selectedHotspot.position.join(', ')}]
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 via-gold-200 to-gold-400 mb-1">
          {selectedHotspot.title[language]}
        </h2>
        <p className="text-sm font-medium text-gold-300/80 mb-6 font-serif">
          {selectedHotspot.subtitle[language]}
        </p>

        {/* Media Banner */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-gold-400/30 group">
          <img
            src={selectedHotspot.imageUrl}
            alt={selectedHotspot.title[language]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
          
          {/* Audio Floating Pill */}
          <button
            onClick={handleAudioToggle}
            className="absolute bottom-3 right-3 px-4 py-2 rounded-xl bg-charcoal-900/90 border border-gold-400/60 text-gold-300 hover:bg-gold-500 hover:text-charcoal-950 font-bold text-xs flex items-center gap-2 shadow-lg backdrop-blur-md transition-all"
          >
            {isNarrating ? <VolumeX className="w-4 h-4 text-red-400 animate-pulse" /> : <Volume2 className="w-4 h-4 text-gold-400" />}
            <span>{isNarrating ? t.hotspots.stopAudio : t.hotspots.audioListen}</span>
          </button>
        </div>

        {/* Main Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-sans">
          {selectedHotspot.description[language]}
        </p>

        {/* Key Architectural Details List */}
        <div className="mb-6 bg-charcoal-900/60 rounded-2xl p-4 sm:p-5 border border-gold-400/20">
          <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-gold-300 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Architectural & Structural Highlights</span>
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            {selectedHotspot.details[language].map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Grid Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          
          {/* Archaeological Evidence */}
          <div className="p-4 rounded-xl bg-charcoal-900/40 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-gold-300 mb-1.5 font-serif">
              <BookOpen className="w-4 h-4 text-gold-400" />
              <span>{t.hotspots.historicalEvidence}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {selectedHotspot.historicalEvidence[language]}
            </p>
          </div>

          {/* Preservation Telemetry */}
          <div className="p-4 rounded-xl bg-charcoal-900/40 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1.5 font-serif">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.hotspots.preservationStatus}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {selectedHotspot.preservationStatus[language]}
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gold-400/20">
          <div className="text-xs text-slate-400 flex items-center gap-3">
            {selectedHotspot.materials && (
              <span><strong className="text-gold-300">Materials:</strong> {selectedHotspot.materials.join(', ')}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              icon={<Maximize2 className="w-3.5 h-3.5" />}
              onClick={() => {
                triggerTeleport(selectedHotspot.position);
                handleClose();
              }}
            >
              {t.hotspots.viewIn3D}
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleClose}
            >
              {t.hotspots.close}
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
