import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAudio } from '../../context/AudioContext';
import { useExperience } from '../../context/ExperienceContext';
import { findAIResponse } from '../../data/aiKnowledgeBase';
import { Language } from '../../types';
import { Button } from '../UI/Button';
import { ArchitecturalPattern } from '../UI/ArchitecturalPattern';
import {
  Sparkles,
  Send,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Bot,
  User,
  ShieldCheck,
  Key,
  HelpCircle,
  RefreshCw,
  BookOpen
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  sources?: string[];
  followUps?: string[];
  timestamp: string;
}

export const AIHeritageGuide: React.FC = () => {
  const { language, t } = useLanguage();
  const { isNarrating, speakText, stopNarration, playUiSound } = useAudio();

  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'ai',
      text: language === 'hi'
        ? "नमस्ते! मैं 'स्मृति AI' हूँ—आपका आधिकारिक हेरिटेज गाइड। आप मुझसे ताजमहल के इतिहास, वास्तुकला, 28 प्रकार के रत्नों की पच्चीकारी या संरक्षण तकनीकों के बारे में पूछ सकते हैं।"
        : language === 'mr'
        ? "नमस्कार! मी 'स्मृती AI' आहे—आपला अधिकृत वारसा मार्गदर्शक. आपण मला ताजमहालाचा इतिहास, स्थापत्य, नक्षीकाम किंवा संवर्धन तंत्रज्ञानाविषयी प्रश्न विचारू शकता."
        : "Namaste! I am 'Smruti AI'—your authenticated digital heritage guide. Ask me anything about the Taj Mahal's architectural secrets, 2.5-degree outward tilting minarets, Pietra Dura gemstones, or 3D digital preservation!",
      sources: ["Archaeological Survey of India (ASI) Official Records"],
      followUps: t.aiGuide.suggestedQuestions.slice(0, 3),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [customApiKey, setCustomApiKey] = useState('');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    playUiSound('click');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // Simulate AI thinking and knowledge retrieval
    setTimeout(() => {
      const result = findAIResponse(query, language);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: result.answer,
        sources: result.sources,
        followUps: result.followUps,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-400/40 shadow-2xl overflow-hidden flex flex-col h-[700px] text-slate-100">
      <ArchitecturalPattern opacity={0.06} />

      {/* Chat Header */}
      <div className="p-4 sm:p-5 border-b border-gold-400/20 bg-charcoal-950/80 backdrop-blur-xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-gold-400/50 flex items-center justify-center shadow-gold-glow">
            <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-bold text-base text-gold-300">
                {t.aiGuide.title}
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                ASI Grounded Demo
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {t.aiGuide.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Audio Speech Toggle */}
          <button
            onClick={() => {
              if (isNarrating) {
                stopNarration();
              } else {
                const lastAiMsg = [...messages].reverse().find(m => m.sender === 'ai');
                if (lastAiMsg) speakText(lastAiMsg.text, language);
              }
            }}
            title={isNarrating ? "Mute Speech" : "Speak Last Answer"}
            className={`p-2 rounded-lg border transition-all ${
              isNarrating ? 'bg-gold-500/20 border-gold-400 text-gold-300' : 'bg-charcoal-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
          >
            {isNarrating ? <Volume2 className="w-4 h-4 text-gold-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'ai' && (
              <div className="w-8 h-8 rounded-xl bg-charcoal-800 border border-gold-400/40 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                <Bot className="w-4 h-4 text-gold-400" />
              </div>
            )}

            <div
              className={`max-w-[85%] sm:max-w-xl p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 font-medium rounded-tr-none shadow-md'
                  : 'bg-charcoal-900/90 border border-gold-400/25 text-slate-200 rounded-tl-none shadow-dark-card'
              }`}
            >
              <p>{msg.text}</p>

              {/* Verified Sources if AI */}
              {msg.sources && (
                <div className="mt-3 pt-2.5 border-t border-gold-400/20 flex items-center gap-1.5 text-[11px] text-gold-300/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sources: {msg.sources.join(', ')}</span>
                </div>
              )}

              {/* Follow-up question chips */}
              {msg.followUps && msg.followUps.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-slate-800 space-y-1.5">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-gold-400 font-serif">
                    Recommended Questions:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.followUps.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(chip)}
                        className="text-left px-2.5 py-1 rounded-lg bg-charcoal-950 border border-gold-400/30 hover:border-gold-300 text-gold-300 hover:text-white text-[11px] transition-all"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-1 text-[9px] text-right opacity-60">
                {msg.timestamp}
              </div>
            </div>

            {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-xl bg-gold-500/20 border border-gold-400/50 flex items-center justify-center shrink-0 mt-1">
                <User className="w-4 h-4 text-gold-300" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-gold-300/80 italic p-2 bg-charcoal-900/50 rounded-xl max-w-xs border border-gold-400/20">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
            <span>Smruti AI is referencing historical archives...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions Pills (when chat is short) */}
      <div className="px-4 py-2 bg-charcoal-950/60 border-t border-slate-800/80 overflow-x-auto flex items-center gap-2 scrollbar-none">
        <span className="text-[11px] font-serif text-gold-400 shrink-0 font-bold">Try:</span>
        {t.aiGuide.suggestedQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="shrink-0 px-3 py-1 rounded-full bg-charcoal-900 border border-gold-400/30 hover:border-gold-300 text-slate-300 hover:text-gold-200 text-xs transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 sm:p-4 bg-charcoal-950 border-t border-gold-400/20 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder={t.aiGuide.inputPlaceholder}
          className="flex-1 bg-charcoal-900/90 border border-gold-400/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
        />

        <Button
          type="submit"
          variant="primary"
          size="md"
          icon={<Send className="w-4 h-4" />}
          disabled={!inputQuery.trim()}
          className="px-4 py-3 shrink-0"
        >
          {t.aiGuide.send}
        </Button>
      </form>
    </div>
  );
};

export const AIFloatingWidget: React.FC = () => {
  const { isAiModalOpen, setIsAiModalOpen } = useExperience();
  const { playUiSound } = useAudio();

  return (
    <>
      {/* Floating Bottom-Right Launcher */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            playUiSound('click');
            setIsAiModalOpen(!isAiModalOpen);
          }}
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold shadow-gold-glow-lg hover:scale-105 transition-all duration-300 border-2 border-gold-200"
          title="Open Smruti AI Heritage Guide"
        >
          <div className="absolute inset-0 rounded-full border-2 border-gold-300 animate-ping opacity-50 pointer-events-none" />
          <Sparkles className="w-6 h-6 fill-current animate-pulse" />
        </button>
      </div>

      {/* Floating Modal */}
      {isAiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsAiModalOpen(false)}
              className="absolute -top-12 right-0 px-3 py-1.5 rounded-full bg-charcoal-900 border border-gold-400 text-gold-300 text-xs font-bold hover:bg-gold-500 hover:text-charcoal-950 transition-colors z-50"
            >
              Close AI Guide ✕
            </button>
            <AIHeritageGuide />
          </div>
        </div>
      )}
    </>
  );
};
