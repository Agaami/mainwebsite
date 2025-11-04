import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const isMobile = window.innerWidth < 768;
const targetPosition = new Vector3();

export const InteractiveCameraRig = () => {
  useFrame((state) => {
    const { mouse, clock } = state;
    const elapsedTime = clock.getElapsedTime();
    
    if (isMobile) {
      targetPosition.set(
        Math.sin(elapsedTime * 0.1) * 2, 
        0.5, 
        Math.cos(elapsedTime * 0.1) * 2
      );
    } else {
      targetPosition.set(
        mouse.x * 2 + Math.sin(elapsedTime * 0.05) * 2,
        mouse.y * 2,
        3 + Math.cos(elapsedTime * 0.05) * 2
      );
    }

    // --- THIS IS THE FIX ---
    // Increased from 0.05 to 0.1 for a faster, more responsive feel
    state.camera.position.lerp(targetPosition, 0.1);
    // --- END OF FIX ---
    
    state.camera.lookAt(0, 0, 0);
  });

  return null; 
};