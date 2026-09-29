import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import { heritageSitesData } from '../../data/heritageSites';
import { HeritageSite } from '../../types';
import { SectionHeading } from '../UI/SectionHeading';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import { Button } from '../UI/Button';
import { HeritageDetailModal } from './HeritageDetailModal';
import {
  MapPin,
  Calendar,
  Box,
  Glasses,
  Lock,
  ArrowRight,
  Shield,
  Sparkles
} from 'lucide-react';

export const HeritageExplorer: React.FC = () => {
  const { language, t } = useLanguage();
  const { setActivePage, setViewMode } = useExperience();
  const { playUiSound } = useAudio();
  const [filter, setFilter] = useState<'all' | 'available' | 'scanning'>('all');
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);

  const filteredSites = heritageSitesData.filter((site) => {
    if (filter === 'available') return site.status === 'available';
    if (filter === 'scanning') return site.status !== 'available';
    return true;
  });

  const handleExploreSite = (site: HeritageSite) => {
    playUiSound('click');
    if (site.id === 'taj-mahal') {
      setActivePage('viewer');
      setViewMode('orbit');
    } else {
      setSelectedSite(site);
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-950">
      <ArchitecturalPattern opacity={0.06} />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          badge="National Digital Repository"
          title="Explore India's Sacred Heritage"
          subtitle="Explore live interactive 3D digital twins and track our active LiDAR preservation pipeline across historic Indian monuments."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Monuments (5)' },
            { id: 'available', label: 'Live 3D & VR Available (1)' },
            { id: 'scanning', label: 'In Preservation Pipeline (4)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                playUiSound('click');
                setFilter(tab.id as 'all' | 'available' | 'scanning');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === tab.id
                  ? 'bg-gold-500 text-charcoal-950 font-bold shadow-gold-glow'
                  : 'bg-charcoal-900/80 text-slate-300 border border-slate-800 hover:border-gold-400/40 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Heritage Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site) => {
            const isAvailable = site.status === 'available';

            return (
              <div
                key={site.id}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-950 border border-gold-400/30 hover:border-gold-400/80 shadow-dark-card hover:shadow-gold-glow transition-all duration-500 group flex flex-col justify-between"
              >
                <ArchitecturalPattern variant="corners" />

                {/* Card Top Image & Badges */}
                <div>
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={site.imageUrl}
                      alt={site.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-90" />

                    {/* Status Pill */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md border shadow-md ${
                        isAvailable
                          ? 'bg-emerald-500/25 text-emerald-200 border-emerald-400/60'
                          : 'bg-gold-500/20 text-gold-300 border-gold-400/50'
                      }`}>
                        {site.badgeText[language]}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-slate-700/80 text-slate-300 text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      <span>{site.location[language]}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-gold-300/80 font-serif mb-1">
                      <span>{site.period[language]}</span>
                      {site.unescoYear && <span>UNESCO {site.unescoYear}</span>}
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 to-gold-300 mb-2.5">
                      {site.name[language]}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                      {site.shortDescription[language]}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/60">
                  <div className="text-[11px] text-slate-400 font-sans">
                    {isAvailable ? "Full 3D / WebXR Mode" : "Scanning Phase"}
                  </div>

                  <Button
                    variant={isAvailable ? "primary" : "secondary"}
                    size="sm"
                    icon={isAvailable ? <Box className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                    onClick={() => handleExploreSite(site)}
                    glow={isAvailable}
                    className="font-serif"
                  >
                    {isAvailable ? "Explore in 3D" : "Inspect Details"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <HeritageDetailModal
        site={selectedSite}
        onClose={() => setSelectedSite(null)}
        onExploreTaj={() => {
          setActivePage('viewer');
          setViewMode('orbit');
        }}
      />
    </section>
  );
};
