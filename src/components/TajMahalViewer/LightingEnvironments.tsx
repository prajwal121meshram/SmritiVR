import React from 'react';
import { LightingMode } from '../../types';

interface LightingProps {
  mode: LightingMode;
}

export const LightingEnvironments: React.FC<LightingProps> = ({ mode }) => {
  if (mode === 'wireframe' || mode === 'restoration') {
    return (
      <>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} color="#4FD1C5" />
        <directionalLight position={[-10, 10, -10]} intensity={0.8} color="#9F7AEA" />
        <pointLight position={[0, 10, 0]} intensity={2.0} color="#D4AF37" distance={40} />
      </>
    );
  }

  if (mode === 'sunset') {
    return (
      <>
        <ambientLight intensity={0.4} color="#FFA07A" />
        {/* Golden Hour warm sun */}
        <directionalLight
          position={[30, 12, -20]}
          intensity={2.8}
          color="#FFB347"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
        />
        {/* Sky fill light */}
        <directionalLight position={[-20, 15, 20]} intensity={0.6} color="#9370DB" />
        <hemisphereLight args={['#FF7F50', '#2E1A47', 0.5]} />
      </>
    );
  }

  if (mode === 'night') {
    return (
      <>
        {/* Chamki: Full Moonlit Night viewing */}
        <ambientLight intensity={0.25} color="#B0C4DE" />
        <directionalLight
          position={[-15, 30, 20]}
          intensity={1.2}
          color="#E6F2FF"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[15, 10, -15]} intensity={0.3} color="#4B0082" />
        <hemisphereLight args={['#1E293B', '#020617', 0.4]} />
        {/* Soft ground warm lantern glow near entrance */}
        <pointLight position={[0, 2, 20]} intensity={1.5} color="#FFA500" distance={15} />
      </>
    );
  }

  // Default: Day Light
  return (
    <>
      <ambientLight intensity={0.6} color="#FFFDF7" />
      <directionalLight
        position={[25, 35, 25]}
        intensity={2.2}
        color="#FFF9E6"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={100}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-bias={-0.0001}
      />
      <directionalLight position={[-20, 15, -20]} intensity={0.5} color="#DCE6F2" />
      <hemisphereLight args={['#F0F8FF', '#3D3425', 0.5]} />
    </>
  );
};
