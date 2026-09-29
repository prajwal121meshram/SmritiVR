import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HeritageSite } from '../../types';
import { Button } from '../UI/Button';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import {
  X,
  MapPin,
  Calendar,
  Layers,
  Shield,
  FileText,
  Volume2,
  Box,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface ModalProps {
  site: HeritageSite | null;
  onClose: () => void;
  onExploreTaj?: () => void;
}

export const HeritageDetailModal: React.FC<ModalProps> = ({ site, onClose, onExploreTaj }) => {
  const { language } = useLanguage();

  if (!site) return null;

  const isAvailable = site.status === 'available';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-400/50 shadow-2xl p-6 sm:p-8 text-slate-200">
        <ArchitecturalPattern opacity={0.08} />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-charcoal-800 text-slate-300 hover:text-gold-300 hover:border-gold-400 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Status Badge & Location */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
            isAvailable
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
              : 'bg-gold-500/15 text-gold-300 border-gold-400/40'
          }`}>
            {site.badgeText[language]}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400 bg-charcoal-800 px-2.5 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>{site.location[language]}</span>
          </span>
          {site.unescoYear && (
            <span className="flex items-center gap-1 text-xs text-gold-300/90 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-400/20">
              <Shield className="w-3.5 h-3.5" />
              <span>UNESCO ({site.unescoYear})</span>
            </span>
          )}
        </div>

        {/* Title & Period */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 via-gold-200 to-gold-400 mb-1">
          {site.name[language]}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-gold-300/80 mb-6 font-serif">
          {site.period[language]} • Built: {site.yearBuilt} {site.architect && `• Master Architect: ${site.architect}`}
        </p>

        {/* Image */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-gold-400/30">
          <img
            src={site.imageUrl}
            alt={site.name[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-sans">
          {site.fullDescription[language]}
        </p>

        {/* Digital Asset Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-charcoal-900/60 border border-gold-400/20">
          <div className="text-center p-2">
            <div className="text-lg font-serif font-bold text-gold-300">{site.digitalAssetsCount.scans3D}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">3D Digital Twins</div>
          </div>
          <div className="text-center p-2">
            <div className="text-lg font-serif font-bold text-gold-300">{site.digitalAssetsCount.photos}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Archival Photos</div>
          </div>
          <div className="text-center p-2">
            <div className="text-lg font-serif font-bold text-gold-300">{site.digitalAssetsCount.audioGuides}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Audio Stories</div>
          </div>
          <div className="text-center p-2">
            <div className="text-lg font-serif font-bold text-gold-300">{site.digitalAssetsCount.historicalDocs}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Verified Docs</div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-gold-400/20">
          <div className="text-xs text-slate-400">
            Preservation Integrity Score: <strong className="text-emerald-400">{site.preservationScore}%</strong>
          </div>

          <div className="flex items-center gap-3">
            {isAvailable ? (
              <Button
                variant="primary"
                size="md"
                icon={<Box className="w-4 h-4" />}
                onClick={() => {
                  onClose();
                  if (onExploreTaj) onExploreTaj();
                }}
                glow
              >
                Launch 3D & VR Experience
              </Button>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-charcoal-800 border border-gold-400/30 text-gold-300 text-xs font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>Preservation Scanning in Progress</span>
              </div>
            )}
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
