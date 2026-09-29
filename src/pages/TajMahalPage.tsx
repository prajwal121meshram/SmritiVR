import React from 'react';
import { TajMahalCanvas } from '../components/TajMahalViewer/TajMahalCanvas';
import { HotspotModal } from '../components/Hotspots/HotspotModal';
import { GuidedTourHUD } from '../components/GuidedTour/GuidedTourHUD';
import { VRFallbackModal } from '../components/TajMahalViewer/VRFallbackModal';
import { SectionHeading } from '../components/UI/SectionHeading';
import { ArchitecturalPattern } from '../components/UI/ArchitecturalPattern';
import { useLanguage } from '../context/LanguageContext';

export const TajMahalPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      <SectionHeading
        badge="Live 3D & WebXR Experience"
        title={t.viewer.title}
        subtitle={t.viewer.subtitle}
      />

      <TajMahalCanvas />

      {/* Interactive Modals and HUDs */}
      <HotspotModal />
      <GuidedTourHUD />
      <VRFallbackModal />
    </div>
  );
};
