import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AudioProvider } from './context/AudioContext';
import { ExperienceProvider, useExperience } from './context/ExperienceContext';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { TajMahalPage } from './pages/TajMahalPage';
import { ExplorePage } from './pages/ExplorePage';
import { HistoryPage } from './pages/HistoryPage';
import { ArchivePage } from './pages/ArchivePage';
import { PreservationPage } from './pages/PreservationPage';
import { HotspotModal } from './components/Hotspots/HotspotModal';
import { GuidedTourHUD } from './components/GuidedTour/GuidedTourHUD';
import { VRFallbackModal } from './components/TajMahalViewer/VRFallbackModal';
import { AIFloatingWidget } from './components/AIHeritageGuide/AIHeritageGuide';

const MainContent: React.FC = () => {
  const { activePage } = useExperience();

  const renderPage = () => {
    switch (activePage) {
      case 'viewer':
        return <TajMahalPage />;
      case 'explore':
        return <ExplorePage />;
      case 'history':
        return <HistoryPage />;
      case 'archive':
        return <ArchivePage />;
      case 'preservation':
        return <PreservationPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-charcoal-950 text-slate-100 selection:bg-gold-500 selection:text-charcoal-950">
      <Navbar />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer />

      {/* Global Floating Controls & Modals */}
      <HotspotModal />
      <GuidedTourHUD />
      <VRFallbackModal />
      <AIFloatingWidget />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <AudioProvider>
        <ExperienceProvider>
          <MainContent />
        </ExperienceProvider>
      </AudioProvider>
    </LanguageProvider>
  );
}

export default App;
