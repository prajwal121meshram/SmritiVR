import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ViewMode, LightingMode, Hotspot } from '../types';
import { hotspotsData } from '../data/hotspots';
import { tourStopsData } from '../data/tourStops';

interface ExperienceContextType {
  // Navigation & Page State
  activePage: string;
  setActivePage: (page: string) => void;

  // 3D Viewer Mode & Controls
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  lightingMode: LightingMode;
  setLightingMode: (mode: LightingMode) => void;
  autoRotate: boolean;
  setAutoRotate: (val: boolean | ((prev: boolean) => boolean)) => void;
  showHotspots: boolean;
  setShowHotspots: (val: boolean | ((prev: boolean) => boolean)) => void;
  cameraResetTrigger: number;
  resetCamera: () => void;

  // Hotspots
  selectedHotspot: Hotspot | null;
  setSelectedHotspot: (hotspot: Hotspot | null) => void;
  visitedHotspots: string[];
  markHotspotVisited: (id: string) => void;

  // Guided Tour
  currentTourIndex: number;
  isTourPlaying: boolean;
  startGuidedTour: () => void;
  exitGuidedTour: () => void;
  nextTourStop: () => void;
  prevTourStop: () => void;
  toggleTourPlay: () => void;

  // Teleportation Target
  teleportTarget: [number, number, number] | null;
  triggerTeleport: (pos: [number, number, number]) => void;

  // WebXR VR
  isVrSupported: boolean | null;
  isVrActive: boolean;
  setIsVrActive: (active: boolean) => void;
  vrFallbackModalOpen: boolean;
  setVrFallbackModalOpen: (open: boolean) => void;
  enterVR: () => void;

  // AI Modal
  isAiModalOpen: boolean;
  setIsAiModalOpen: (open: boolean) => void;
}

const ExperienceContext = createContext<ExperienceContextType | undefined>(undefined);

export const ExperienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePageState] = useState<string>('home');
  const [viewMode, setViewMode] = useState<ViewMode>('orbit');
  const [lightingMode, setLightingMode] = useState<LightingMode>('day');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [cameraResetTrigger, setCameraResetTrigger] = useState<number>(0);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [teleportTarget, setTeleportTarget] = useState<[number, number, number] | null>(null);

  // Guided Tour
  const [currentTourIndex, setCurrentTourIndex] = useState<number>(0);
  const [isTourPlaying, setIsTourPlaying] = useState<boolean>(false);

  // WebXR VR
  const [isVrSupported, setIsVrSupported] = useState<boolean | null>(null);
  const [isVrActive, setIsVrActive] = useState<boolean>(false);
  const [vrFallbackModalOpen, setVrFallbackModalOpen] = useState<boolean>(false);

  // AI Modal
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);

  // Visited Hotspots
  const [visitedHotspots, setVisitedHotspots] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('smrutivr_visited_hotspots');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Check WebXR Device Support
  useEffect(() => {
    if ('xr' in navigator && (navigator as unknown as { xr: { isSessionSupported: (mode: string) => Promise<boolean> } }).xr) {
      (navigator as unknown as { xr: { isSessionSupported: (mode: string) => Promise<boolean> } }).xr
        .isSessionSupported('immersive-vr')
        .then((supported: boolean) => setIsVrSupported(supported))
        .catch(() => setIsVrSupported(false));
    } else {
      setIsVrSupported(false);
    }
  }, []);

  const setActivePage = (page: string) => {
    setActivePageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetCamera = () => {
    setCameraResetTrigger(prev => prev + 1);
  };

  const markHotspotVisited = (id: string) => {
    setVisitedHotspots(prev => {
      if (!prev.includes(id)) {
        const updated = [...prev, id];
        try { localStorage.setItem('smrutivr_visited_hotspots', JSON.stringify(updated)); } catch {}
        return updated;
      }
      return prev;
    });
  };

  const triggerTeleport = (pos: [number, number, number]) => {
    setTeleportTarget(pos);
    setTimeout(() => setTeleportTarget(null), 800);
  };

  const startGuidedTour = () => {
    setViewMode('tour');
    setCurrentTourIndex(0);
    setIsTourPlaying(true);
    setAutoRotate(false);
  };

  const exitGuidedTour = () => {
    setIsTourPlaying(false);
    setViewMode('orbit');
  };

  const nextTourStop = () => {
    if (currentTourIndex < tourStopsData.length - 1) {
      setCurrentTourIndex(prev => prev + 1);
    } else {
      exitGuidedTour();
    }
  };

  const prevTourStop = () => {
    if (currentTourIndex > 0) {
      setCurrentTourIndex(prev => prev - 1);
    }
  };

  const toggleTourPlay = () => {
    setIsTourPlaying(prev => !prev);
  };

  const enterVR = () => {
    if (isVrSupported) {
      setIsVrActive(true);
      setViewMode('vr');
    } else {
      setVrFallbackModalOpen(true);
    }
  };

  return (
    <ExperienceContext.Provider
      value={{
        activePage,
        setActivePage,
        viewMode,
        setViewMode,
        lightingMode,
        setLightingMode,
        autoRotate,
        setAutoRotate,
        showHotspots,
        setShowHotspots,
        cameraResetTrigger,
        resetCamera,
        selectedHotspot,
        setSelectedHotspot,
        visitedHotspots,
        markHotspotVisited,
        currentTourIndex,
        isTourPlaying,
        startGuidedTour,
        exitGuidedTour,
        nextTourStop,
        prevTourStop,
        toggleTourPlay,
        teleportTarget,
        triggerTeleport,
        isVrSupported,
        isVrActive,
        setIsVrActive,
        vrFallbackModalOpen,
        setVrFallbackModalOpen,
        enterVR,
        isAiModalOpen,
        setIsAiModalOpen
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperience = () => {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error('useExperience must be used within an ExperienceProvider');
  }
  return context;
};
