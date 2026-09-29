import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import { Button } from '../UI/Button';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import { Glasses, Footprints, X, AlertCircle } from 'lucide-react';

export const VRFallbackModal: React.FC = () => {
  const { t } = useLanguage();
  const { vrFallbackModalOpen, setVrFallbackModalOpen, setViewMode } = useExperience();
  const { playUiSound } = useAudio();

  if (!vrFallbackModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-400/50 shadow-2xl p-6 sm:p-8 text-slate-200 text-center">
        <ArchitecturalPattern opacity={0.1} />

        <button
          onClick={() => {
            playUiSound('click');
            setVrFallbackModalOpen(false);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-800 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold-500/10 border border-gold-400/40 flex items-center justify-center shadow-gold-glow">
          <Glasses className="w-8 h-8 text-gold-400" />
        </div>

        <h3 className="text-xl sm:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 via-gold-200 to-gold-400 mb-2">
          WebXR VR Compatibility
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
          {t.viewer.vrUnsupported}
        </p>

        <div className="p-4 rounded-xl bg-charcoal-900/60 border border-gold-400/20 text-xs text-slate-400 text-left mb-6 space-y-1.5">
          <div className="flex items-center gap-2 text-gold-300 font-semibold font-serif">
            <AlertCircle className="w-4 h-4 text-gold-400" />
            <span>Supported WebXR Hardware</span>
          </div>
          <p>• Meta Quest 2, Quest 3 & Quest Pro (Oculus Browser)</p>
          <p>• Apple Vision Pro (Safari WebXR feature flag)</p>
          <p>• HTC Vive / Pico Neo 3 / PC VR Headsets</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            icon={<Footprints className="w-4 h-4" />}
            onClick={() => {
              playUiSound('click');
              setViewMode('explore');
              setVrFallbackModalOpen(false);
            }}
            glow
          >
            Enter 3D Explore Mode
          </Button>

          <Button
            variant="ghost"
            size="md"
            onClick={() => {
              playUiSound('click');
              setVrFallbackModalOpen(false);
            }}
          >
            Close
          </Button>
        </div>

      </div>
    </div>
  );
};
