import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sky } from '@react-three/drei';
import * as THREE from 'three';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { hotspotsData } from '../../data/hotspots';
import { tourStopsData } from '../../data/tourStops';
import { TajMahalModel } from './Model';
import { LightingEnvironments } from './LightingEnvironments';
import { Hotspot3D } from './Hotspot3D';
import { TeleportManager } from './TeleportManager';
import { FirstPersonController } from './FirstPersonControls';
import { WebXRSceneManager } from './WebXRManager';
import { ViewerControls } from './ViewerControls';
import { MiniMap } from './MiniMap';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import { Sparkles, AlertTriangle, RefreshCw, Compass } from 'lucide-react';

// Camera transition controller for smooth cinematic guided tour lerping
function TourCameraRig() {
  const { viewMode, currentTourIndex, cameraResetTrigger, selectedHotspot, teleportTarget } = useExperience();
  const { camera } = useThree();

  const targetCamPos = useRef(new THREE.Vector3(0, 8, 26));
  const targetLookAt = useRef(new THREE.Vector3(0, 3, 0));

  // Reset Camera
  useEffect(() => {
    if (viewMode === 'orbit') {
      targetCamPos.current.set(0, 7, 24);
      targetLookAt.current.set(0, 3, 0);
    }
  }, [cameraResetTrigger, viewMode]);

  // Guided Tour Target update
  useEffect(() => {
    if (viewMode === 'tour') {
      const stop = tourStopsData[currentTourIndex];
      if (stop) {
        targetCamPos.current.set(stop.cameraPosition[0], stop.cameraPosition[1], stop.cameraPosition[2]);
        targetLookAt.current.set(stop.targetPosition[0], stop.targetPosition[1], stop.targetPosition[2]);
      }
    }
  }, [viewMode, currentTourIndex]);

  // Selected Hotspot Focus
  useEffect(() => {
    if (selectedHotspot && viewMode === 'orbit') {
      targetCamPos.current.set(selectedHotspot.cameraPosition[0], selectedHotspot.cameraPosition[1], selectedHotspot.cameraPosition[2]);
      targetLookAt.current.set(selectedHotspot.cameraLookAt[0], selectedHotspot.cameraLookAt[1], selectedHotspot.cameraLookAt[2]);
    }
  }, [selectedHotspot, viewMode]);

  // Teleportation in Orbit mode
  useEffect(() => {
    if (teleportTarget && viewMode === 'orbit') {
      targetCamPos.current.set(teleportTarget[0], teleportTarget[1] + 3, teleportTarget[2] + 6);
      targetLookAt.current.set(teleportTarget[0], teleportTarget[1] + 1, teleportTarget[2]);
    }
  }, [teleportTarget, viewMode]);

  useFrame((_, delta) => {
    if (viewMode === 'tour' || (selectedHotspot && viewMode === 'orbit')) {
      camera.position.lerp(targetCamPos.current, delta * 2.5);
      // Create smooth lookAt transition
      const currentLookAt = new THREE.Vector3();
      camera.getWorldDirection(currentLookAt);
      camera.lookAt(targetLookAt.current);
    }
  });

  return null;
}

// Loading UI Overlay
function CanvasLoader() {
  const { t } = useLanguage();
  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-charcoal-950/95 backdrop-blur-2xl text-center px-4">
      <ArchitecturalPattern opacity={0.15} />

      <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-gold-400/30 animate-ping" />
        <div className="w-16 h-16 rounded-full border-2 border-gold-400 border-t-transparent animate-spin" />
        <img src="/logo.png" alt="SmrutiVR" className="w-10 h-10 object-contain absolute rounded-md drop-shadow-[0_0_8px_rgba(229,193,88,0.5)]" />
      </div>

      <h3 className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 via-gold-200 to-gold-400 mb-2">
        {t.viewer.loadingTitle}
      </h3>

      <p className="text-sm text-slate-300 max-w-md font-sans leading-relaxed mb-6">
        {t.viewer.loadingSubtitle}
      </p>

      <div className="w-64 h-1.5 rounded-full bg-charcoal-800 overflow-hidden border border-gold-400/30">
        <div className="h-full bg-gradient-to-r from-gold-400 to-gold-300 w-full animate-pulse" />
      </div>

      <blockquote className="mt-8 max-w-lg text-xs italic text-gold-300/80 font-serif border-l-2 border-gold-400/50 pl-4 text-left">
        {t.viewer.culturalQuote}
      </blockquote>
    </div>
  );
}

// Error Boundary for WebGL/3D Canvas
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class CanvasErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full min-h-[550px] flex flex-col items-center justify-center bg-charcoal-900 border border-red-500/30 rounded-2xl p-8 text-center text-slate-200">
          <AlertTriangle className="w-12 h-12 text-red-400 mb-4 animate-bounce" />
          <h3 className="font-serif text-xl font-bold text-gold-300 mb-2">
            3D Viewer Initialization Notice
          </h3>
          <p className="text-sm text-slate-400 max-w-md mb-6">
            WebGL acceleration encountered a device rendering limitation. You can reload the 3D canvas or explore through the 2D Digital Heritage Archive.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-lg bg-gold-500 text-charcoal-950 font-bold hover:bg-gold-400 flex items-center gap-2 transition-all shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload 3D Experience</span>
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export const TajMahalCanvas: React.FC = () => {
  const { t } = useLanguage();
  const { viewMode, lightingMode, autoRotate, showHotspots } = useExperience();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] lg:h-[750px] rounded-3xl overflow-hidden bg-charcoal-950 border border-gold-400/30 shadow-2xl select-none"
    >
      {/* 3D Canvas Controls Header */}
      <ViewerControls containerRef={containerRef} />

      {/* 3D Canvas with WebGL Renderer */}
      <CanvasErrorBoundary>
        <Suspense fallback={<CanvasLoader />}>
          <Canvas
            shadows
            camera={{ position: [0, 7, 24], fov: 45, near: 0.1, far: 1000 }}
            gl={{
              antialias: true,
              powerPreference: 'high-performance',
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.1,
            }}
            onCreated={() => setIsLoaded(true)}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Dynamic Sky & Atmosphere */}
            {lightingMode === 'night' ? (
              <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            ) : lightingMode === 'sunset' ? (
              <Sky distance={450000} sunPosition={[30, 8, -20]} turbidity={8} rayleigh={4} mieCoefficient={0.05} />
            ) : lightingMode !== 'wireframe' ? (
              <Sky distance={450000} sunPosition={[25, 35, 25]} turbidity={4} rayleigh={1.2} />
            ) : null}

            {/* Environmental Lighting */}
            <LightingEnvironments mode={lightingMode} />

            {/* Camera Rig Transitions */}
            <TourCameraRig />

            {/* Orbit Controls (when in orbit mode) */}
            {viewMode === 'orbit' && (
              <OrbitControls
                makeDefault
                autoRotate={autoRotate}
                autoRotateSpeed={0.8}
                enableDamping
                dampingFactor={0.05}
                minDistance={3}
                maxDistance={50}
                maxPolarAngle={Math.PI / 2 - 0.02} // Prevent camera going beneath ground
                target={[0, 3, 0]}
              />
            )}

            {/* First Person Controls (when in explore mode) */}
            {viewMode === 'explore' && <FirstPersonController speedMultiplier={1.0} />}

            {/* WebXR VR Manager */}
            <WebXRSceneManager />

            {/* The 3D Taj Mahal Model */}
            <TajMahalModel />

            {/* 3D Interactive Hotspots */}
            {showHotspots && hotspotsData.map((hs) => (
              <Hotspot3D key={hs.id} hotspot={hs} />
            ))}

            {/* Teleport Waypoint Discs */}
            <TeleportManager />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>

      {/* Floating Bottom HUD: Instructions & MiniMap */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between gap-4 pointer-events-none">
        
        {/* Navigation Key Hint Card */}
        <div className="p-3 rounded-2xl bg-charcoal-950/85 border border-gold-400/30 backdrop-blur-xl shadow-2xl max-w-sm pointer-events-auto hidden sm:block">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs font-serif font-bold text-gold-300">
              {viewMode === 'explore' ? t.viewer.controls.explore : viewMode === 'tour' ? t.viewer.controls.guidedTour : t.viewer.controls.orbit}
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            {viewMode === 'explore' ? t.viewer.instructionsDesktop : "Drag to orbit • Scroll to zoom • Click markers or waypoints to warp."}
          </p>
        </div>

        {/* Real-Time Interactive MiniMap */}
        <div className="pointer-events-auto">
          <MiniMap playerPos={[0, 18]} />
        </div>

      </div>

    </div>
  );
};
