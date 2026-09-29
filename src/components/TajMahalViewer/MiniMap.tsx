import React from 'react';
import { hotspotsData } from '../../data/hotspots';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';
import { Compass, Maximize2 } from 'lucide-react';

interface MiniMapProps {
  playerPos?: [number, number]; // [x, z] in world coords
  playerAngle?: number; // radians
}

export const MiniMap: React.FC<MiniMapProps> = ({
  playerPos = [0, 18],
  playerAngle = 0
}) => {
  const { triggerTeleport, setSelectedHotspot } = useExperience();
  const { playUiSound } = useAudio();

  // Map coordinate conversion: world coordinates x: [-30, 30], z: [-20, 35] -> SVG (160x160)
  const mapSize = 140;
  const worldToSvg = (x: number, z: number) => {
    const svgX = ((x + 25) / 50) * mapSize;
    const svgY = ((35 - z) / 55) * mapSize;
    return { x: svgX, y: svgY };
  };

  const pSvg = worldToSvg(playerPos[0], playerPos[1]);

  return (
    <div className="relative p-2 rounded-2xl bg-charcoal-950/85 border border-gold-400/40 backdrop-blur-xl shadow-2xl overflow-hidden select-none group">
      {/* Header */}
      <div className="flex items-center justify-between px-1.5 pb-1 mb-1 border-b border-gold-400/20 text-[10px] font-semibold text-gold-300">
        <span className="flex items-center gap-1 font-serif">
          <Compass className="w-3 h-3 text-gold-400 animate-spin-slow" />
          <span>Taj Grounds Map</span>
        </span>
        <span className="text-slate-400 text-[9px]">Click to Warp</span>
      </div>

      {/* SVG Map Canvas */}
      <svg
        width={mapSize}
        height={mapSize}
        className="rounded-lg bg-charcoal-900 border border-slate-800 cursor-crosshair"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const clickY = e.clientY - rect.top;
          // Reverse conversion
          const worldX = (clickX / mapSize) * 50 - 25;
          const worldZ = 35 - (clickY / mapSize) * 55;
          playUiSound('teleport');
          triggerTeleport([worldX, 0.5, worldZ]);
        }}
      >
        {/* Yamuna River (North) */}
        <rect x="0" y="0" width={mapSize} height="20" fill="#1A3644" opacity="0.8" />
        <text x="70" y="13" textAnchor="middle" fill="#6EE7B7" fontSize="8" fontFamily="sans-serif">
          Yamuna River
        </text>

        {/* Main Plinth Terrace */}
        <rect x="35" y="24" width="70" height="40" fill="#2A3548" stroke="#D4AF37" strokeWidth="0.8" rx="2" />
        
        {/* Main Tomb Dome Center */}
        <circle cx="70" cy="44" r="14" fill="#3D4B63" stroke="#F3E5AB" strokeWidth="1" />
        <circle cx="70" cy="44" r="6" fill="#D4AF37" />

        {/* Four Minaret Corners */}
        <circle cx="39" cy="28" r="3" fill="#ECDDA0" />
        <circle cx="101" cy="28" r="3" fill="#ECDDA0" />
        <circle cx="39" cy="60" r="3" fill="#ECDDA0" />
        <circle cx="101" cy="60" r="3" fill="#ECDDA0" />

        {/* Charbagh Water Channels */}
        <rect x="67" y="66" width="6" height="54" fill="#1B4D5C" />
        <rect x="25" y="90" width="90" height="6" fill="#1B4D5C" />
        
        {/* Central Reflecting Lotus Cistern */}
        <rect x="63" y="86" width="14" height="14" fill="#0E7490" stroke="#D4AF37" strokeWidth="0.8" />

        {/* Southern Gateway (Darwaza-i-Rauza) */}
        <rect x="50" y="122" width="40" height="14" fill="#5F2712" stroke="#E08A68" strokeWidth="0.8" rx="1" />
        <text x="70" y="132" textAnchor="middle" fill="#FFD700" fontSize="7" fontWeight="bold">
          South Gate
        </text>

        {/* Hotspot Markers on Map */}
        {hotspotsData.map((hs) => {
          const hSvg = worldToSvg(hs.position[0], hs.position[2]);
          return (
            <g
              key={hs.id}
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                playUiSound('click');
                setSelectedHotspot(hs);
                triggerTeleport(hs.position);
              }}
            >
              <circle cx={hSvg.x} cy={hSvg.y} r="4" fill="#D4AF37" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx={hSvg.x} cy={hSvg.y} r="7" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="1 1" />
            </g>
          );
        })}

        {/* Player Current Location Indicator & Viewing Cone */}
        <g transform={`translate(${pSvg.x}, ${pSvg.y}) rotate(${(playerAngle * 180) / Math.PI})`}>
          {/* FOV cone */}
          <path d="M0,0 L-10,-18 L10,-18 Z" fill="rgba(212, 175, 55, 0.35)" />
          {/* Player dot */}
          <circle cx="0" cy="0" r="4.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
};
