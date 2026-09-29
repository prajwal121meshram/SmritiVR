import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAudio } from '../../context/AudioContext';
import { timelineEvents } from '../../data/timeline';
import { SectionHeading } from '../UI/SectionHeading';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import {
  Calendar,
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  Shield,
  FileText
} from 'lucide-react';

export const HistoricalTimeline: React.FC = () => {
  const { language } = useLanguage();
  const { playUiSound } = useAudio();
  const [selectedEventId, setSelectedEventId] = useState<string>(timelineEvents[0].id);

  const selectedEvent = timelineEvents.find(e => e.id === selectedEventId) || timelineEvents[0];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-900/50">
      <ArchitecturalPattern opacity={0.06} />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          badge="Verified Chronological Archive"
          title="The Immortal Timeline of the Taj Mahal"
          subtitle="From the 1631 imperial conception to modern 2026 digital twin conservation, grounded in Archaeological Survey of India (ASI) records."
        />

        {/* Horizontal Timeline Ribbon */}
        <div className="relative my-12 overflow-x-auto pb-6 scrollbar-thin">
          <div className="flex items-center gap-4 min-w-[750px] px-4 justify-between relative">
            {/* Connecting Gold Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500/20 via-gold-400 to-gold-500/20 -translate-y-1/2 z-0" />

            {timelineEvents.map((event) => {
              const isSelected = selectedEventId === event.id;
              return (
                <button
                  key={event.id}
                  onClick={() => {
                    playUiSound('click');
                    setSelectedEventId(event.id);
                  }}
                  className={`relative z-10 flex flex-col items-center group transition-all duration-300 ${
                    isSelected ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all shadow-xl ${
                      isSelected
                        ? 'bg-gold-500 text-charcoal-950 border-white shadow-gold-glow-lg font-black'
                        : 'bg-charcoal-950 border-gold-400/50 text-gold-300 group-hover:border-gold-300'
                    }`}
                  >
                    <span className="text-xs font-serif font-bold">{event.year.slice(0, 4)}</span>
                  </div>

                  <span
                    className={`mt-2 text-[11px] font-serif font-bold whitespace-nowrap px-2.5 py-0.5 rounded-full border ${
                      isSelected
                        ? 'bg-gold-500/20 border-gold-400 text-gold-300'
                        : 'bg-charcoal-900/80 border-slate-800 text-slate-400'
                    }`}
                  >
                    {event.period[language]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Event Featured Showcase Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-950 border border-gold-400/40 shadow-2xl p-6 sm:p-10 overflow-hidden">
          <ArchitecturalPattern variant="corners" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Event Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gold-500 text-charcoal-950 font-serif">
                  {selectedEvent.year}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/15 border border-gold-400/30 text-gold-300 font-serif">
                  {selectedEvent.period[language]}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 via-gold-200 to-gold-400">
                {selectedEvent.title[language]}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {selectedEvent.description[language]}
              </p>

              <div className="p-4 rounded-2xl bg-charcoal-950/60 border border-gold-400/20 space-y-1 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-gold-300 font-serif font-bold">
                  <BookOpen className="w-4 h-4 text-gold-400" />
                  <span>Historical & Architectural Context</span>
                </div>
                <p className="leading-relaxed">
                  {selectedEvent.historicalContext[language]}
                </p>
              </div>

              {/* Source Attribution (Requirement 10: Verified info) */}
              <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <Shield className="w-4 h-4 text-gold-400 shrink-0" />
                <span><strong>Primary Reference:</strong> {selectedEvent.source}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedEvent.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-md bg-charcoal-800 text-[10px] text-slate-400 border border-slate-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Archival Media */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gold-400/30 group shadow-2xl">
                <img
                  src={selectedEvent.imageUrl}
                  alt={selectedEvent.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-center px-3 py-1.5 rounded-lg bg-charcoal-900/90 border border-gold-400/40 text-[11px] font-serif text-gold-300 backdrop-blur-md">
                  Archival Historical Record • {selectedEvent.year}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
