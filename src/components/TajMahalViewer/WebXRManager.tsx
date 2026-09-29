import React, { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useExperience } from '../../context/ExperienceContext';
import { useAudio } from '../../context/AudioContext';

export const WebXRSceneManager: React.FC = () => {
  const { gl, camera } = useThree();
  const { isVrActive, setIsVrActive, triggerTeleport, setSelectedHotspot } = useExperience();
  const { playUiSound } = useAudio();

  const controller1Ref = useRef<THREE.XRTargetRaySpace | null>(null);
  const controller2Ref = useRef<THREE.XRTargetRaySpace | null>(null);

  useEffect(() => {
    // Enable WebXR on WebGLRenderer
    gl.xr.enabled = true;

    // Setup VR Controllers
    const controller1 = gl.xr.getController(0);
    const controller2 = gl.xr.getController(1);

    const onSelect = (e: THREE.Event) => {
      playUiSound('teleport');
      const controller = e.target as THREE.XRTargetRaySpace;
      const raycaster = new THREE.Raycaster();
      const tempMatrix = new THREE.Matrix4();
      tempMatrix.identity().extractRotation(controller.matrixWorld);

      raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
      raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

      // Trigger teleport forward along ray
      const forwardPos: [number, number, number] = [
        camera.position.x + raycaster.ray.direction.x * 5,
        1.6,
        camera.position.z + raycaster.ray.direction.z * 5
      ];
      triggerTeleport(forwardPos);
    };

    controller1.addEventListener('select', onSelect);
    controller2.addEventListener('select', onSelect);

    // Controller Ray Lines
    const lineGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -5)
    ]);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xD4AF37, linewidth: 2 });
    const rayLine1 = new THREE.Line(lineGeom, lineMat);
    const rayLine2 = new THREE.Line(lineGeom, lineMat);
    controller1.add(rayLine1);
    controller2.add(rayLine2);

    controller1Ref.current = controller1;
    controller2Ref.current = controller2;

    const onSessionEnd = () => {
      setIsVrActive(false);
    };

    gl.xr.addEventListener('sessionend', onSessionEnd);

    return () => {
      controller1.removeEventListener('select', onSelect);
      controller2.removeEventListener('select', onSelect);
      gl.xr.removeEventListener('sessionend', onSessionEnd);
    };
  }, [gl, camera, triggerTeleport, setIsVrActive, playUiSound]);

  useFrame(() => {
    if (gl.xr.isPresenting) {
      // In VR presentation mode
    }
  });

  return null;
};
