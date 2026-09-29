import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Language } from '../types';

interface AudioContextType {
  isAmbientPlaying: boolean;
  toggleAmbient: () => void;
  isNarrating: boolean;
  speakText: (text: string, lang: Language) => void;
  stopNarration: () => void;
  playUiSound: (type: 'click' | 'stamp' | 'teleport' | 'hover') => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambientNodesRef = useRef<{ masterGain: GainNode; oscillators: OscillatorNode[]; noiseNode: AudioNode } | null>(null);

  // Initialize Web Audio API Context
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Atmospheric ambient drone synthesis (Tanpura/Breeze harmony: Root D2 (73.4Hz), A2 (110Hz), D3 (146.8Hz), F#3 (185Hz))
  const startAmbientSynth = () => {
    try {
      const ctx = getAudioContext();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);

      const frequencies = [73.42, 110.0, 146.83, 185.0, 220.0];
      const oscillators: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle lfo modulation for authentic acoustic shimmer
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.2 / (idx + 1), ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscillators.push(osc);
      });

      // Gentle breeze pink noise simulation
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.05;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.04, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(masterGain);
      whiteNoise.start();

      ambientNodesRef.current = {
        masterGain,
        oscillators,
        noiseNode: whiteNoise
      };
      setIsAmbientPlaying(true);
    } catch (e) {
      console.warn("Audio synthesis initialization note:", e);
    }
  };

  const stopAmbientSynth = () => {
    if (ambientNodesRef.current && audioCtxRef.current) {
      const { masterGain, oscillators } = ambientNodesRef.current;
      const ctx = audioCtxRef.current;
      masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
      setTimeout(() => {
        oscillators.forEach(osc => {
          try { osc.stop(); } catch {}
        });
        ambientNodesRef.current = null;
        setIsAmbientPlaying(false);
      }, 1600);
    } else {
      setIsAmbientPlaying(false);
    }
  };

  const toggleAmbient = () => {
    if (isAmbientPlaying) {
      stopAmbientSynth();
    } else {
      startAmbientSynth();
    }
  };

  // UI Sound Effects
  const playUiSound = (type: 'click' | 'stamp' | 'teleport' | 'hover') => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'stamp') {
        // Grand ceremonial resonance
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.15);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        osc.start(now);
        osc.stop(now + 0.8);
      } else if (type === 'teleport') {
        // Ethereal sweep
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.35);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      }
    } catch {}
  };

  // Text-to-Speech Narration
  const speakText = (text: string, lang: Language) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const langCodeMap = {
      en: 'en-IN',
      hi: 'hi-IN',
      mr: 'mr-IN'
    };
    utterance.lang = langCodeMap[lang] || 'en-IN';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(v => v.lang.startsWith(lang) || v.lang.includes(lang.toUpperCase()));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onstart = () => setIsNarrating(true);
    utterance.onend = () => setIsNarrating(false);
    utterance.onerror = () => setIsNarrating(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopNarration = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsNarrating(false);
  };

  useEffect(() => {
    return () => {
      stopNarration();
      if (ambientNodesRef.current && audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch {}
      }
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isAmbientPlaying,
        toggleAmbient,
        isNarrating,
        speakText,
        stopNarration,
        playUiSound
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
