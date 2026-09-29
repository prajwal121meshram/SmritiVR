import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { teleportWaypoints } from '../../data/tourStops';
import { useLanguage } from '../../context/LanguageContext';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import { MapPin, Navigation } from 'lucide-react';

export const TeleportManager: React.FC = () => {
  const { language } = useLanguage();
  const { triggerTeleport, viewMode } = useExperience();
  const { playUiSound } = useAudio();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Show teleport rings in explore or VR modes, or when explicitly exploring
  if (viewMode !== 'explore' && viewMode !== 'vr' && viewMode !== 'orbit') {
    return null;
  }

  return (
    <group>
      {teleportWaypoints.map((wp) => {
        const isHovered = hoveredId === wp.id;
        const [x, y, z] = wp.position;

        return (
          <group key={wp.id} position={[x, y + 0.05, z]}>
            {/* Ground glowing concentric rings */}
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredId(wp.id);
                playUiSound('hover');
              }}
              onPointerOut={() => setHoveredId(null)}
              onClick={(e) => {
                e.stopPropagation();
                playUiSound('teleport');
                triggerTeleport(wp.position);
              }}
            >
              <ringGeometry args={[0.6, 0.75, 32]} />
              <meshBasicMaterial
                color={isHovered ? "#FFF8DC" : "#D4AF37"}
                side={THREE.DoubleSide}
                transparent
                opacity={isHovered ? 0.9 : 0.4}
              />
            </mesh>

            {/* Inner disc */}
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 0.01, 0]}
              onClick={(e) => {
                e.stopPropagation();
                playUiSound('teleport');
                triggerTeleport(wp.position);
              }}
            >
              <circleGeometry args={[0.5, 32]} />
              <meshBasicMaterial
                color="#8C6B13"
                side={THREE.DoubleSide}
                transparent
                opacity={isHovered ? 0.4 : 0.15}
              />
            </mesh>

            {/* Vertical particle beam column */}
            <mesh position={[0, 0.8, 0]}>
              <cylinderGeometry args={[0.08, 0.25, 1.6, 16, 1, true]} />
              <meshBasicMaterial
                color="#D4AF37"
                transparent
                opacity={isHovered ? 0.35 : 0.1}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Waypoint Label */}
            <Html
              position={[0, 1.8, 0]}
              center
              distanceFactor={22}
              zIndexRange={[90, 0]}
              className="pointer-events-none select-none transition-all duration-300"
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  playUiSound('teleport');
                  triggerTeleport(wp.position);
                }}
                className={`pointer-events-auto cursor-pointer flex items-center gap-1.5 px-2.5 py-1 rounded-lg border backdrop-blur-md shadow-lg transition-all ${
                  isHovered
                    ? 'bg-charcoal-900/95 border-gold-300 text-white scale-110 shadow-gold-glow'
                    : 'bg-charcoal-950/80 border-slate-700/80 text-gold-300 hover:border-gold-400'
                }`}
              >
                <Navigation className="w-3 h-3 text-gold-400 shrink-0" />
                <span className="text-[11px] font-semibold font-sans whitespace-nowrap">
                  {wp.name[language]}
                </span>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};
