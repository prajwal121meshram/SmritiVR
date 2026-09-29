import React, { useMemo, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useExperience } from '../../context/ExperienceContext';

interface ModelProps {
  onLoaded?: () => void;
}

export const TajMahalModel: React.FC<ModelProps> = ({ onLoaded }) => {
  const { lightingMode } = useExperience();

  // Load the primary GLB model
  const gltf = useGLTF('/models/taj-mahal.glb');

  // Clone scene so we can adjust materials safely per mode
  const scene = useMemo(() => {
    const cloned = gltf.scene.clone(true);

    // Compute bounding box to ensure proper positioning and scale
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Center model at ground level (y=0)
    cloned.position.x = -center.x;
    cloned.position.y = -box.min.y;
    cloned.position.z = -center.z;

    // Normalize scale if needed
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 100 || maxDim < 5) {
      const targetScale = 20 / maxDim;
      cloned.scale.set(targetScale, targetScale, targetScale);
    }

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => {
              const stdMat = mat as THREE.MeshStandardMaterial;
              if (stdMat.roughness !== undefined) stdMat.roughness = 0.35;
              if (stdMat.metalness !== undefined) stdMat.metalness = 0.1;
            });
          } else {
            const stdMat = mesh.material as THREE.MeshStandardMaterial;
            if (stdMat.roughness !== undefined) stdMat.roughness = 0.35;
            if (stdMat.metalness !== undefined) stdMat.metalness = 0.1;
          }
        }
      }
    });

    return cloned;
  }, [gltf]);

  // Update wireframe / restoration mode dynamically
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const isWireframe = lightingMode === 'wireframe';
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(mat => {
              const stdMat = mat as THREE.MeshStandardMaterial;
              if (stdMat.wireframe !== undefined) {
                stdMat.wireframe = isWireframe;
                if (isWireframe) {
                  stdMat.color = new THREE.Color("#00FFCC");
                }
              }
            });
          } else {
            const stdMat = mesh.material as THREE.MeshStandardMaterial;
            if (stdMat.wireframe !== undefined) {
              stdMat.wireframe = isWireframe;
              if (isWireframe) {
                stdMat.color = new THREE.Color("#00FFCC");
              }
            }
          }
        }
      }
    });
  }, [scene, lightingMode]);

  useEffect(() => {
    if (onLoaded) onLoaded();
  }, [onLoaded]);

  return (
    <group>
      {/* The Taj Mahal 3D Monument */}
      <primitive object={scene} />

      {/* Surrounding Charbagh Grounds & Water Reflecting Pools */}
      {lightingMode !== 'wireframe' && (
        <>
          {/* Main Stone Plinth Base */}
          <mesh position={[0, -0.05, 0]} receiveShadow>
            <cylinderGeometry args={[45, 45, 0.1, 64]} />
            <meshStandardMaterial
              color={lightingMode === 'sunset' ? "#7A4328" : lightingMode === 'night' ? "#141B2D" : "#4A3525"}
              roughness={0.9}
            />
          </mesh>

          {/* Central Reflecting Lotus Water Basin */}
          <mesh position={[0, 0.02, 12]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[4, 18]} />
            <meshStandardMaterial
              color={lightingMode === 'sunset' ? "#D97736" : lightingMode === 'night' ? "#0A192F" : "#1B4D5C"}
              roughness={0.05}
              metalness={0.85}
            />
          </mesh>

          {/* Cross Water Basin (East-West) */}
          <mesh position={[0, 0.02, 12]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[18, 4]} />
            <meshStandardMaterial
              color={lightingMode === 'sunset' ? "#D97736" : lightingMode === 'night' ? "#0A192F" : "#1B4D5C"}
              roughness={0.05}
              metalness={0.85}
            />
          </mesh>

          {/* Outer Grass Gardens Quadrants */}
          <mesh position={[0, -0.02, 12]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[36, 36]} />
            <meshStandardMaterial
              color={lightingMode === 'sunset' ? "#3B421E" : lightingMode === 'night' ? "#07120B" : "#243E1E"}
              roughness={0.95}
            />
          </mesh>

          {/* River Yamuna (North side) */}
          <mesh position={[0, -0.4, -25]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[120, 20]} />
            <meshStandardMaterial
              color={lightingMode === 'sunset' ? "#6B3B28" : lightingMode === 'night' ? "#050E1A" : "#1A3644"}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </>
      )}
    </group>
  );
};

// Pre-load the GLB model for instant fast rendering
useGLTF.preload('/models/taj-mahal.glb');
