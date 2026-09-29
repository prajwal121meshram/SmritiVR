import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { WhyDigitalHeritage } from '../components/Hero/WhyDigitalHeritage';
import { TajMahalCanvas } from '../components/TajMahalViewer/TajMahalCanvas';
import { SectionHeading } from '../components/UI/SectionHeading';
import { ThenVsNowSlider } from '../components/ThenVsNow/ThenVsNowSlider';
import { ArchitecturalPattern } from '../components/UI/ArchitecturalPattern';
import { Button } from '../components/UI/Button';
import { useExperience } from '../context/ExperienceContext';
import { Glasses, Play } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { enterVR, startGuidedTour } = useExperience();

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section (Includes Navbar on layout, Taj Mahal, 3D & VR CTAs, 4 Key Features Bar) */}
      <Hero />

      {/* 2. Short Why SmrutiVR? / Preservation Story & 4 Pillars Section */}
      <WhyDigitalHeritage />

      {/* 3. Featured Taj Mahal 3D/VR Experience (Embedded Interactive 3D Showcase) */}
      <section id="viewer-section" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-950">
        <ArchitecturalPattern opacity={0.06} />
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Interactive 3D Engine"
            title="The Taj Mahal in High-Fidelity 3D"
            subtitle="Rotate, zoom, explore in first-person, or enter WebXR VR. Click any 3D golden marker to inspect architectural secrets."
          />

          <TajMahalCanvas />
        </div>
      </section>

      {/* 4. VR Experience Callout */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-charcoal-950 border-y border-gold-400/20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-400/40 flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
            <Glasses className="w-8 h-8 text-gold-400 animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 via-gold-200 to-gold-400 mb-3">
            Step Inside with True WebXR Virtual Reality
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Experience the monumental scale of the 73-meter marble dome on your Meta Quest, Apple Vision Pro, or PC VR headset. Teleport across 6 viewpoints with real controller ray interaction.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              icon={<Glasses className="w-5 h-5" />}
              onClick={enterVR}
              glow
              className="font-serif"
            >
              Launch WebXR VR
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
              onClick={() => {
                const elem = document.getElementById('viewer-section');
                elem?.scrollIntoView({ behavior: 'smooth' });
                startGuidedTour();
              }}
              className="font-serif"
            >
              Start Guided Tour
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Then vs Now Digital Preservation Twin Comparison */}
      <ThenVsNowSlider />

    </div>
  );
};
