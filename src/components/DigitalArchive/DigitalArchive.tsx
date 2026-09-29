import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAudio } from '../../context/AudioContext';
import { archiveItemsData } from '../../data/archiveItems';
import { ArchiveItem } from '../../types';
import { SectionHeading } from '../UI/SectionHeading';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import { Button } from '../UI/Button';
import {
  BookOpen,
  Box,
  Image,
  FileText,
  Volume2,
  Grid,
  Download,
  Info,
  Layers,
  Shield,
  X
} from 'lucide-react';

export const DigitalArchive: React.FC = () => {
  const { language } = useLanguage();
  const { playUiSound } = useAudio();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<ArchiveItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Artifacts (6)', icon: Layers },
    { id: '3d_model', label: '3D LiDAR Twins', icon: Box },
    { id: 'photo', label: 'Historic Photos', icon: Image },
    { id: 'document', label: 'Royal Firmans & Manuscripts', icon: FileText },
    { id: 'blueprint', label: 'Architectural Blueprints', icon: Grid },
    { id: 'preservation_scan', label: 'Conservation Scans', icon: Shield },
    { id: 'audio', label: 'Acoustic Records', icon: Volume2 },
  ];

  const filteredItems = archiveItemsData.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-950">
      <ArchitecturalPattern opacity={0.06} />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          badge="Permanent Virtual Museum"
          title="Digital Heritage Archive"
          subtitle="Explore high-density photogrammetric 3D meshes, 19th-century glass plates, imperial firmans, and scientific micro-topography scans."
        />

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playUiSound('click');
                  setSelectedCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-gold-500 text-charcoal-950 font-bold shadow-gold-glow'
                    : 'bg-charcoal-900/80 text-slate-300 border border-slate-800 hover:border-gold-400/40 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Museum Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-950 border border-gold-400/30 hover:border-gold-400/70 shadow-dark-card hover:shadow-gold-glow transition-all duration-300 group flex flex-col justify-between"
            >
              <ArchitecturalPattern variant="corners" />

              <div>
                {/* Media Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-90" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-charcoal-950/85 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {item.category.replace('_', ' ')}
                  </span>

                  <span className="absolute bottom-3 right-3 text-[10px] text-slate-300 bg-charcoal-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    {item.resolution}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-gold-400/90 font-serif mb-1">
                    {item.date} • {item.source}
                  </div>

                  <h3 className="text-lg font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 to-gold-300 mb-2.5 line-clamp-2">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {item.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-charcoal-950 text-[10px] text-slate-400 border border-slate-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/60">
                <span className="text-[11px] text-slate-400">
                  Size: {item.fileSize}
                </span>

                <Button
                  variant="secondary"
                  size="sm"
                  icon={<Info className="w-3.5 h-3.5 text-gold-400" />}
                  onClick={() => {
                    playUiSound('click');
                    setActiveItem(item);
                  }}
                >
                  Inspect Archive
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Item Detail Inspector Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-400/50 shadow-2xl p-6 sm:p-8 text-slate-200">
            <ArchitecturalPattern opacity={0.08} />

            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-charcoal-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/15 border border-gold-400/40 text-gold-300 mb-3 inline-block">
              {activeItem.category.replace('_', ' ')}
            </span>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 via-gold-200 to-gold-400 mb-1">
              {activeItem.title[language]}
            </h3>
            <p className="text-xs text-gold-300/80 font-serif mb-4">
              Date: {activeItem.date} • Source: {activeItem.source}
            </p>

            <div className="h-60 rounded-2xl overflow-hidden mb-5 border border-gold-400/30">
              <img src={activeItem.thumbnailUrl} alt="Archive preview" className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
              {activeItem.description[language]}
            </p>

            {/* Metadata Box */}
            <div className="p-4 rounded-xl bg-charcoal-950/80 border border-gold-400/20 text-xs text-slate-300 space-y-1.5 mb-6">
              <div className="font-serif font-bold text-gold-300 mb-1">Archival Provenance & License</div>
              <p>• <strong>Provenance:</strong> {activeItem.metadata.provenance}</p>
              <p>• <strong>Rights & Access:</strong> {activeItem.metadata.rights}</p>
              <p>• <strong>Format & Encoding:</strong> {activeItem.metadata.format} ({activeItem.fileSize})</p>
              {activeItem.metadata.coordinates && (
                <p>• <strong>Spatial Coordinates:</strong> {activeItem.metadata.coordinates}</p>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-gold-400/20">
              <Button
                variant="primary"
                size="sm"
                icon={<Download className="w-3.5 h-3.5" />}
                onClick={() => {
                  playUiSound('click');
                  alert(`Downloading open-access archival package: ${activeItem.title[language]} (${activeItem.fileSize})`);
                }}
              >
                Download Research Metadata
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setActiveItem(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
