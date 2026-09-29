import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { telemetryStats, preservationProjectsData } from '../../data/preservationData';
import { SectionHeading } from '../UI/SectionHeading';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import { Button } from '../UI/Button';
import {
  Activity,
  Shield,
  Wind,
  Droplets,
  HardDrive,
  Users,
  Eye,
  CheckCircle,
  TrendingUp,
  Radio,
  Layers,
  Sparkles
} from 'lucide-react';

export const PreservationDashboard: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-950">
      <ArchitecturalPattern opacity={0.06} />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          badge="Scientific Telemetry Network"
          title={t.preservation.title}
          subtitle={t.preservation.subtitle}
        />

        {/* Real-time Telemetry Sensor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Air Quality Index (AQI) */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-400/30 shadow-dark-card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <Wind className="w-5 h-5" />
              </div>
              <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Sensor
              </span>
            </div>
            <div className="text-3xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-marble-100 to-emerald-300">
              AQI {telemetryStats.agraAQI}
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1 font-serif">
              {t.preservation.metrics.airQuality}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Taj Trapezium Zone (TTZ) particulate monitoring station: Moderate particulate load.
            </p>
          </div>

          {/* Card 2: Marble Health Index */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-400/30 shadow-dark-card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-400/40 flex items-center justify-center text-gold-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-gold-300 font-bold uppercase tracking-wider bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-400/30">
                Micro-Scan
              </span>
            </div>
            <div className="text-3xl font-serif font-black text-gold-300">
              {telemetryStats.marbleHealthIndex}%
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1 font-serif">
              {t.preservation.metrics.marbleHealthIndex}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Makrana crystalline density & Pietra Dura bond stability score.
            </p>
          </div>

          {/* Card 3: Yamuna Riverbed Moisture Sensor */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-400/30 shadow-dark-card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Droplets className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-400/30">
                Hydro-Log
              </span>
            </div>
            <div className="text-3xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-marble-100 to-cyan-300">
              {telemetryStats.yamunaWaterLevelMeters} m
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1 font-serif">
              Subterranean Well Moisture Level
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Sal wood caissons saturated at optimal compressive hardness.
            </p>
          </div>

          {/* Card 4: Total Archival Digital Twin Storage */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-400/30 shadow-dark-card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
                <HardDrive className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-purple-300 font-bold uppercase tracking-wider bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-400/30">
                Open Archive
              </span>
            </div>
            <div className="text-3xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-marble-100 to-purple-300">
              {telemetryStats.dataArchivedTB}
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1 font-serif">
              {t.preservation.metrics.dataArchived}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              14.8M point clouds, 3D glTF models, and multi-spectral manuscripts.
            </p>
          </div>

        </div>

        {/* Active Preservation Projects (Requirement 16) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 via-gold-200 to-gold-400">
              {t.preservation.projectsTitle}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {t.preservation.projectsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preservationProjectsData.map((project) => (
              <div
                key={project.id}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-950 border border-gold-400/30 shadow-dark-card hover:shadow-gold-glow transition-all duration-300 group flex flex-col justify-between"
              >
                <ArchitecturalPattern variant="corners" />

                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-90" />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-500 text-charcoal-950 font-serif shadow-md">
                      {project.status}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="text-xs text-gold-400 font-serif mb-1">
                      {project.category[language]} • {project.leadInstitution}
                    </div>

                    <h4 className="text-lg font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-marble-100 to-gold-300 mb-2 line-clamp-2">
                      {project.title[language]}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3 mb-4">
                      {project.description[language]}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 mb-4">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-400">Preservation Progress</span>
                        <span className="text-gold-300">{project.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-charcoal-950 border border-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Objectives */}
                    <ul className="space-y-1 text-[11px] text-slate-400">
                      {project.keyObjectives[language].slice(0, 2).map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-gold-400 font-bold">•</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-800/60 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400">
                    Raised: <strong className="text-gold-300 font-serif">₹{(project.raisedFund / 100000).toFixed(1)}L</strong> / ₹{(project.targetFund / 100000).toFixed(1)}L
                  </div>

                  <span className="px-3 py-1 rounded-lg bg-charcoal-800 text-gold-300 text-xs font-semibold border border-gold-400/30">
                    Active Initiative
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
