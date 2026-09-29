import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Hotspot, Language } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import { Sparkles, Info } from 'lucide-react';

interface Hotspot3DProps {
  hotspot: Hotspot;
}

export const Hotspot3D: React.FC<Hotspot3DProps> = ({ hotspot }) => {
  const { language } = useLanguage();
  const { setSelectedHotspot, markHotspotVisited, visitedHotspots } = useExperience();
  const { playUiSound } = useAudio();
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const isVisited = visitedHotspots.includes(hotspot.id);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating oscillation
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = hotspot.position[1] + Math.sin(t * 2 + hotspot.position[0]) * 0.15;
    }
    if (ringRef.current) {
      // Slow rotation for the heritage ring
      ringRef.current.rotation.z += 0.02;
    }
  });

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    playUiSound('click');
    markHotspotVisited(hotspot.id);
    setSelectedHotspot(hotspot);
  };

  return (
    <group ref={meshRef} position={hotspot.position}>
      {/* Outer pulsing ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.35, 0.42, 32]} />
        <meshBasicMaterial
          color={isVisited ? "#F3E5AB" : "#D4AF37"}
          side={THREE.DoubleSide}
          transparent
          opacity={hovered ? 0.9 : 0.6}
        />
      </mesh>

      {/* Center glowing gem sphere */}
      <mesh
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          playUiSound('hover');
        }}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial
          color={hovered ? "#FFF8DC" : isVisited ? "#DFB748" : "#D4AF37"}
          emissive={hovered ? "#D4AF37" : "#8C6B13"}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Floating 2D Html Tag */}
      <Html
        position={[0, 0.55, 0]}
        center
        distanceFactor={18}
        zIndexRange={[100, 0]}
        className="pointer-events-none select-none transition-all duration-300"
      >
        <div
          onClick={handleClick}
          className={`pointer-events-auto cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-md shadow-xl transition-all transform duration-300 ${
            hovered
              ? 'scale-110 bg-charcoal-900/95 border-gold-300 text-white shadow-gold-glow'
              : isVisited
              ? 'bg-charcoal-950/85 border-gold-400/40 text-gold-200'
              : 'bg-charcoal-950/90 border-gold-400/60 text-gold-300'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping shrink-0" />
          <span className="text-xs font-serif font-bold whitespace-nowrap tracking-wide">
            {hotspot.title[language as Language]}
          </span>
          <Info className="w-3 h-3 text-gold-400 shrink-0 ml-0.5" />
        </div>
      </Html>
    </group>
  );
};
