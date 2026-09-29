import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../UI/SectionHeading';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import { Play, Film, BookOpen, ExternalLink, Sparkles } from 'lucide-react';

export const HeritageVideo: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-900/60">
      <ArchitecturalPattern opacity={0.07} />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          badge="Cinematic Documentary"
          title={t.video.title}
          subtitle={t.video.subtitle}
        />

        {/* 16:9 Cinematic Video Container */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-gold-400/40 via-gold-500/10 to-transparent shadow-2xl overflow-hidden">
          <div className="relative aspect-video w-full rounded-[22px] overflow-hidden bg-charcoal-950 border border-gold-400/30">
            
            {!isPlaying ? (
              /* Custom Luxury Video Thumbnail & Play Trigger */
              <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                <img
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=85"
                  alt="Taj Mahal Documentary Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-charcoal-950/20 transition-colors" />

                {/* Center Animated Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-500 text-charcoal-950 flex items-center justify-center shadow-gold-glow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full border-2 border-gold-300 animate-ping opacity-60" />
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                  </div>
                  <span className="mt-4 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-gold-400/50 text-gold-300 text-xs font-serif font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
                    Watch Official Heritage Story
                  </span>
                </div>
              </div>
            ) : (
              /* Official YouTube Player Embed */
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/_kozIki2yCE?autoplay=1&rel=0&modestbranding=1"
                title="Discover the Story of the Taj Mahal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

          </div>
        </div>

        {/* Documentary Notes & Insights */}
        <div className="mt-8 p-6 rounded-2xl bg-charcoal-900/80 border border-gold-400/30 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-400/40 text-gold-400 shrink-0 mt-0.5">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-gold-300 mb-1">
                {t.video.youtubePlayer}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-3xl">
                {t.video.notes}
              </p>
            </div>
          </div>

          <a
            href="https://youtu.be/_kozIki2yCE"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-charcoal-800 border border-slate-700 hover:border-gold-400 text-gold-300 hover:text-white text-xs font-semibold transition-all"
          >
            <span>Open in YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
