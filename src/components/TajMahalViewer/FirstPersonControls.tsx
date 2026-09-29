import React, { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import * as THREE from 'three';
import { useExperience } from '../../context/ExperienceContext';

interface FPSControlsProps {
  speedMultiplier?: number;
}

export const FirstPersonController: React.FC<FPSControlsProps> = ({ speedMultiplier = 1.0 }) => {
  const { camera } = useThree();
  const { viewMode, teleportTarget } = useExperience();

  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const isSprinting = useRef(false);

  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());

  // Handle Teleportation updates
  useEffect(() => {
    if (teleportTarget) {
      camera.position.set(teleportTarget[0], teleportTarget[1] + 1.6, teleportTarget[2]);
      velocity.current.set(0, 0, 0);
    }
  }, [teleportTarget, camera]);

  // Initial setup when entering explore mode
  useEffect(() => {
    if (viewMode === 'explore') {
      camera.position.set(0, 1.6, 22); // Start at southern entrance looking north
      camera.lookAt(0, 2.5, 0);
    }
  }, [viewMode, camera]);

  // Keyboard controls listener
  useEffect(() => {
    if (viewMode !== 'explore') return;

    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward.current = true;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft.current = true;
          break;
        case 'ArrowDown':
        case 'KeyS':
          moveBackward.current = true;
          break;
        case 'ArrowRight':
        case 'KeyD':
          moveRight.current = true;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          isSprinting.current = true;
          break;
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward.current = false;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft.current = false;
          break;
        case 'ArrowDown':
        case 'KeyS':
          moveBackward.current = false;
          break;
        case 'ArrowRight':
        case 'KeyD':
          moveRight.current = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          isSprinting.current = false;
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [viewMode]);

  // Physics and Boundary updates per frame
  useFrame((_, delta) => {
    if (viewMode !== 'explore') return;

    const friction = 10.0;
    velocity.current.x -= velocity.current.x * friction * delta;
    velocity.current.z -= velocity.current.z * friction * delta;

    direction.current.z = Number(moveForward.current) - Number(moveBackward.current);
    direction.current.x = Number(moveRight.current) - Number(moveLeft.current);
    direction.current.normalize();

    const speed = (isSprinting.current ? 12.0 : 5.0) * speedMultiplier;

    if (moveForward.current || moveBackward.current) {
      velocity.current.z -= direction.current.z * speed * delta;
    }
    if (moveLeft.current || moveRight.current) {
      velocity.current.x -= direction.current.x * speed * delta;
    }

    // Camera local translation
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(camera.up, forward).normalize();

    camera.position.addScaledVector(forward, -velocity.current.z * delta * 5);
    camera.position.addScaledVector(right, -velocity.current.x * delta * 5);

    // Keep human eye-height level
    camera.position.y = 1.6;

    // Bounding Box Boundaries (keep user within monument grounds)
    const minX = -24, maxX = 24;
    const minZ = -14, maxZ = 32;

    camera.position.x = Math.max(minX, Math.min(maxX, camera.position.x));
    camera.position.z = Math.max(minZ, Math.min(maxZ, camera.position.z));
  });

  if (viewMode !== 'explore') return null;

  return <PointerLockControls />;
};
