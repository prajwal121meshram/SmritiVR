import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAudio } from '../../context/AudioContext';
import { SectionHeading } from '../UI/SectionHeading';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import { Button } from '../UI/Button';
import {
  Ticket,
  Heart,
  QrCode,
  ShieldAlert,
  Sparkles,
  Download,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const SupportDonation: React.FC = () => {
  const { language, t } = useLanguage();
  const { playUiSound } = useAudio();

  const [selectedTier, setSelectedTier] = useState<string>('patron');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('Heritage Patron');
  const [donorEmail, setDonorEmail] = useState<string>('patron@smrutivr.org');
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  const activeTierObj = t.support.tiers.find(tr => tr.id === selectedTier) || t.support.tiers[1];
  const finalAmount = customAmount ? parseInt(customAmount) || 100 : activeTierObj.amount;

  const handleIssueTicket = (e: React.FormEvent) => {
    e.preventDefault();
    playUiSound('stamp');
    setIsGenerated(true);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-900/60">
      <ArchitecturalPattern opacity={0.06} />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          badge="Community Cultural Stewardship"
          title={t.support.title}
          subtitle={t.support.subtitle}
        />

        {/* Demo Notice Banner (Requirement 17) */}
        <div className="mb-10 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-3 backdrop-blur-md max-w-2xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <p>{t.support.demoNotice}</p>
        </div>

        {!isGenerated ? (
          /* Form to Generate Virtual Heritage Pass */
          <div className="rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-400/40 p-6 sm:p-10 shadow-2xl">
            <ArchitecturalPattern variant="corners" />

            <form onSubmit={handleIssueTicket} className="space-y-8">
              
              {/* Select Tier Cards */}
              <div>
                <label className="block text-xs font-serif font-bold uppercase tracking-widest text-gold-300 mb-4">
                  {t.support.selectTier}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {t.support.tiers.map((tier) => {
                    const isSelected = selectedTier === tier.id && !customAmount;
                    return (
                      <div
                        key={tier.id}
                        onClick={() => {
                          playUiSound('click');
                          setSelectedTier(tier.id);
                          setCustomAmount('');
                        }}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-gold-500/15 border-gold-400 shadow-gold-glow scale-[1.02]'
                            : 'bg-charcoal-950/80 border-slate-800 hover:border-gold-400/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-serif font-bold text-sm text-gold-300">{tier.name}</span>
                          {tier.popular && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gold-500 text-charcoal-950">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="text-2xl font-serif font-black text-white mb-2">
                          ₹{tier.amount}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          {tier.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Custom Amount & Donor Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                    {t.support.customAmount} (₹)
                  </label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="e.g. 250"
                    className="w-full bg-charcoal-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                    {t.support.donorName}
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-charcoal-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                    {t.support.donorEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full bg-charcoal-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Ticket className="w-5 h-5" />}
                  glow
                  className="w-full sm:w-auto font-serif"
                >
                  {t.support.generateTicket} (₹{finalAmount})
                </Button>
              </div>

            </form>
          </div>
        ) : (
          /* Issued Personalized Virtual Heritage Pass Card */
          <div className="relative max-w-2xl mx-auto rounded-3xl bg-charcoal-950 border-2 border-gold-400 p-8 shadow-2xl text-slate-100 overflow-hidden">
            <ArchitecturalPattern opacity={0.1} />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-gold-400/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-gold-400 flex items-center justify-center shadow-gold-glow overflow-hidden">
                  <img src="/logo.png" alt="SmrutiVR" className="w-10 h-10 object-contain rounded-md" />
                </div>
                <div>
                  <div className="font-serif font-bold text-lg text-gold-300">
                    SmrutiVR Virtual Pass
                  </div>
                  <div className="text-xs text-slate-400">
                    Taj Mahal Digital Conservation Trust
                  </div>
                </div>
              </div>

              <div className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-bold font-serif">
                ✓ PROTOTYPE ISSUED
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6 items-center">
              <div className="sm:col-span-2 space-y-2 text-xs">
                <div>
                  <span className="text-slate-400">Bearer:</span>
                  <div className="text-base font-serif font-bold text-gold-200">{donorName}</div>
                </div>
                <div>
                  <span className="text-slate-400">Pass Category:</span>
                  <div className="font-semibold text-slate-200">
                    {activeTierObj.name} (₹{finalAmount} Demo Contribution)
                  </div>
                </div>
                <div>
                  <span className="text-slate-400">Digital Pass Serial:</span>
                  <div className="font-mono text-gold-400">#TM-2026-VR-{Math.floor(Math.random() * 90000 + 10000)}</div>
                </div>
              </div>

              {/* Mock QR Code */}
              <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-charcoal-950 border border-gold-400 shadow-md">
                <QrCode className="w-20 h-20" />
                <span className="text-[9px] font-mono mt-1 font-bold">VERIFIED-SMRUTI</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-gold-400/30">
              <span className="text-[11px] text-slate-400 italic">
                Demonstration pass generated for hackathon review.
              </span>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsGenerated(false)}
              >
                Issue Another Pass
              </Button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
