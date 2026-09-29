import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import { LightingMode, ViewMode } from '../../types';
import { Button } from '../UI/Button';
import {
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  Glasses,
  Footprints,
  Orbit,
  Compass,
  Sun,
  Sunset,
  Moon,
  Grid,
  MapPin,
  Play,
  Volume2,
  VolumeX,
  Sparkles,
  Info
} from 'lucide-react';

interface ControlsProps {
  containerRef?: React.RefObject<HTMLDivElement>;
}

export const ViewerControls: React.FC<ControlsProps> = ({ containerRef }) => {
  const { t } = useLanguage();
  const {
    viewMode,
    setViewMode,
    lightingMode,
    setLightingMode,
    autoRotate,
    setAutoRotate,
    showHotspots,
    setShowHotspots,
    resetCamera,
    startGuidedTour,
    enterVR
  } = useExperience();
  const { isAmbientPlaying, toggleAmbient, playUiSound } = useAudio();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    playUiSound('click');
    const elem = containerRef?.current || document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const lightingPresets: { id: LightingMode; label: string; icon: typeof Sun }[] = [
    { id: 'day', label: t.viewer.controls.dayMode, icon: Sun },
    { id: 'sunset', label: t.viewer.controls.sunsetMode, icon: Sunset },
    { id: 'night', label: t.viewer.controls.nightMode, icon: Moon },
    { id: 'wireframe', label: t.viewer.controls.scanMode, icon: Grid },
  ];

  return (
    <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
      
      {/* Top Left: Mode Selector Tabs */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-charcoal-950/85 border border-gold-400/40 backdrop-blur-xl shadow-2xl pointer-events-auto">
        
        {/* Orbit Mode */}
        <button
          onClick={() => {
            playUiSound('click');
            setViewMode('orbit');
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
            viewMode === 'orbit'
              ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 font-bold shadow-md shadow-gold-500/20'
              : 'text-slate-300 hover:text-gold-200 hover:bg-charcoal-800'
          }`}
        >
          <Orbit className="w-3.5 h-3.5" />
          <span>{t.viewer.controls.orbit}</span>
        </button>

        {/* 1st Person Explore Mode */}
        <button
          onClick={() => {
            playUiSound('click');
            setViewMode('explore');
            setAutoRotate(false);
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
            viewMode === 'explore'
              ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 font-bold shadow-md shadow-gold-500/20'
              : 'text-slate-300 hover:text-gold-200 hover:bg-charcoal-800'
          }`}
        >
          <Footprints className="w-3.5 h-3.5" />
          <span>{t.viewer.controls.explore}</span>
        </button>

        {/* Guided Tour Mode */}
        <button
          onClick={() => {
            playUiSound('click');
            startGuidedTour();
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
            viewMode === 'tour'
              ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 font-bold shadow-md shadow-gold-500/20'
              : 'text-slate-300 hover:text-gold-200 hover:bg-charcoal-800'
          }`}
        >
          <Play className="w-3.5 h-3.5" />
          <span>{t.viewer.controls.guidedTour}</span>
        </button>

        {/* VR Button */}
        <button
          onClick={() => {
            playUiSound('click');
            enterVR();
          }}
          className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gold-300 bg-gold-500/20 border border-gold-400/50 hover:bg-gold-500/30 flex items-center gap-1.5 shadow-gold-glow transition-all"
        >
          <Glasses className="w-4 h-4 text-gold-400" />
          <span className="font-serif">{t.viewer.controls.vrMode}</span>
        </button>
      </div>

      {/* Top Right: Lighting, Hotspots, Reset, Fullscreen */}
      <div className="flex items-center gap-2 pointer-events-auto">
        
        {/* Lighting Mode Selector */}
        <div className="flex items-center p-1 rounded-xl bg-charcoal-950/85 border border-gold-400/30 backdrop-blur-xl shadow-xl">
          {lightingPresets.map((preset) => {
            const Icon = preset.icon;
            const active = lightingMode === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => {
                  playUiSound('click');
                  setLightingMode(preset.id);
                }}
                title={preset.label}
                className={`p-2 rounded-lg text-xs transition-all ${
                  active
                    ? 'bg-gold-500/25 text-gold-300 border border-gold-400/50 shadow-sm'
                    : 'text-slate-400 hover:text-gold-200 hover:bg-charcoal-800'
                }`}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
        </div>

        {/* Hotspots Toggle */}
        <button
          onClick={() => {
            playUiSound('click');
            setShowHotspots(prev => !prev);
          }}
          title={showHotspots ? "Hide 3D Hotspots" : "Show 3D Hotspots"}
          className={`p-2.5 rounded-xl border backdrop-blur-xl shadow-xl transition-all ${
            showHotspots
              ? 'bg-gold-500/20 border-gold-400 text-gold-300'
              : 'bg-charcoal-950/85 border-slate-700/60 text-slate-400 hover:text-gold-200'
          }`}
        >
          <MapPin className="w-4 h-4" />
        </button>

        {/* Auto-Rotate Toggle (Orbit mode) */}
        {viewMode === 'orbit' && (
          <button
            onClick={() => {
              playUiSound('click');
              setAutoRotate(prev => !prev);
            }}
            title={autoRotate ? "Pause Auto-Rotation" : "Enable Auto-Rotation"}
            className={`p-2.5 rounded-xl border backdrop-blur-xl shadow-xl transition-all ${
              autoRotate
                ? 'bg-gold-500/20 border-gold-400 text-gold-300'
                : 'bg-charcoal-950/85 border-slate-700/60 text-slate-400 hover:text-gold-200'
            }`}
          >
            <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin-slow' : ''}`} />
          </button>
        )}

        {/* Reset Camera */}
        <button
          onClick={() => {
            playUiSound('click');
            resetCamera();
          }}
          title={t.viewer.controls.resetCamera}
          className="p-2.5 rounded-xl bg-charcoal-950/85 border border-slate-700/60 hover:border-gold-400 text-slate-300 hover:text-gold-300 backdrop-blur-xl shadow-xl transition-all"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Fullscreen */}
        <button
          onClick={toggleFullscreen}
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          className="p-2.5 rounded-xl bg-charcoal-950/85 border border-slate-700/60 hover:border-gold-400 text-slate-300 hover:text-gold-300 backdrop-blur-xl shadow-xl transition-all"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>

    </div>
  );
};
