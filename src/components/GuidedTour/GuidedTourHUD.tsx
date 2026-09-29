import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import { tourStopsData } from '../../data/tourStops';
import { Button } from '../UI/Button';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  X,
  Volume2,
  VolumeX,
  Award,
  Sparkles,
  Compass
} from 'lucide-react';

export const GuidedTourHUD: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    viewMode,
    currentTourIndex,
    isTourPlaying,
    nextTourStop,
    prevTourStop,
    toggleTourPlay,
    exitGuidedTour
  } = useExperience();
  const { isNarrating, speakText, stopNarration, playUiSound } = useAudio();

  const currentStop = tourStopsData[currentTourIndex];
  const totalStops = tourStopsData.length;
  const isLastStop = currentTourIndex === totalStops - 1;

  // Auto-play narration on stop change if tour is active
  useEffect(() => {
    if (viewMode === 'tour' && currentStop) {
      stopNarration();
      const textToSpeak = `${currentStop.title[language]}. ${currentStop.narration[language]}`;
      speakText(textToSpeak, language);
    }
    return () => {
      stopNarration();
    };
  }, [viewMode, currentTourIndex, language]);

  // Auto-advance timer when tour is playing
  useEffect(() => {
    if (viewMode !== 'tour' || !isTourPlaying) return;

    const timer = setTimeout(() => {
      if (currentTourIndex < totalStops - 1) {
        nextTourStop();
      } else {
        exitGuidedTour();
      }
    }, (currentStop?.durationSec || 15) * 1000);

    return () => clearTimeout(timer);
  }, [viewMode, isTourPlaying, currentTourIndex, currentStop, totalStops]);

  if (viewMode !== 'tour') return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 z-40 max-w-4xl mx-auto pointer-events-auto">
      <div className="relative p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-charcoal-950/95 via-charcoal-900/95 to-charcoal-950/95 border border-gold-400/50 backdrop-blur-2xl shadow-2xl text-slate-100">
        
        {/* Progress Bar & Header */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-gold-500/20 text-gold-300 border border-gold-400/40 font-serif">
              {t.guidedTour.step} {currentTourIndex + 1} {t.guidedTour.of} {totalStops}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Taj Mahal Official Heritage Tour
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Speech Toggle */}
            <button
              onClick={() => {
                if (isNarrating) {
                  stopNarration();
                } else {
                  speakText(`${currentStop.title[language]}. ${currentStop.narration[language]}`, language);
                }
              }}
              title={isNarrating ? "Mute Voice Narration" : "Play Voice Narration"}
              className={`p-2 rounded-lg border transition-all text-xs font-semibold ${
                isNarrating
                  ? 'bg-gold-500/20 border-gold-400 text-gold-300 animate-pulse'
                  : 'bg-charcoal-800 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {isNarrating ? <Volume2 className="w-4 h-4 text-gold-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Exit Tour */}
            <button
              onClick={() => {
                playUiSound('click');
                exitGuidedTour();
              }}
              className="p-2 rounded-lg bg-charcoal-800 border border-slate-700 hover:border-gold-400 text-slate-400 hover:text-white transition-all"
              title={t.guidedTour.exitTour}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Progress Indicators */}
        <div className="grid grid-cols-8 gap-1.5 mb-4">
          {tourStopsData.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentTourIndex
                  ? 'bg-gold-400 shadow-gold-glow'
                  : idx < currentTourIndex
                  ? 'bg-gold-600/60'
                  : 'bg-charcoal-800'
              }`}
            />
          ))}
        </div>

        {/* Tour Stop Title & Narration */}
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 via-gold-200 to-gold-400">
            {currentStop.title[language]}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3 sm:line-clamp-none">
            {currentStop.narration[language]}
          </p>
        </div>

        {/* Footer Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gold-400/20">
          <div className="flex items-center gap-2">
            {/* Prev Button */}
            <button
              onClick={() => {
                playUiSound('click');
                prevTourStop();
              }}
              disabled={currentTourIndex === 0}
              className="px-3 py-1.5 rounded-lg bg-charcoal-800 border border-slate-700 hover:border-gold-400 text-slate-300 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold flex items-center gap-1 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t.guidedTour.prev}</span>
            </button>

            {/* Play/Pause Auto-Advance */}
            <button
              onClick={() => {
                playUiSound('click');
                toggleTourPlay();
              }}
              className="px-3 py-1.5 rounded-lg bg-charcoal-800 border border-slate-700 hover:border-gold-400 text-gold-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              {isTourPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTourPlaying ? t.guidedTour.pause : t.guidedTour.resume}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {isLastStop ? (
              <Button
                variant="primary"
                size="sm"
                icon={<Award className="w-4 h-4" />}
                onClick={() => {
                  playUiSound('click');
                  exitGuidedTour();
                }}
                glow
              >
                Complete Tour
              </Button>
            ) : (
              <Button
                variant="primary"
                size="sm"
                icon={<ChevronRight className="w-4 h-4" />}
                iconPosition="right"
                onClick={() => {
                  playUiSound('click');
                  nextTourStop();
                }}
              >
                {t.guidedTour.next}
              </Button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
