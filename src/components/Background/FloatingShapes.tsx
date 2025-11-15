import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'; // Import the full THREE library

// --- Component 1: The Plexus (Neural Network) ---
// (This component is unchanged. It's still Layer 2)
const Plexus = () => {
  const groupRef = useRef<THREE.Group>(null);

  const particleCount = 200;
  const spread = 8;
  const connectionThreshold = 1.5;

  const [pointGeometry, lineGeometry] = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const lineVertices: number[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      points.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread
        )
      );
    }

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const p1 = points[i];
        const p2 = points[j];
        const distance = p1.distanceTo(p2);
        
        if (distance < connectionThreshold) {
          lineVertices.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
        }
      }
    }

    const pGeo = new THREE.BufferGeometry().setFromPoints(points);
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
    
    return [pGeo, lGeo];
  }, [particleCount, spread, connectionThreshold]);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.03;
      groupRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -3]}>
      <points geometry={pointGeometry}>
        <pointsMaterial 
          size={0.05} 
          color="#00b8d4" // Cyan nodes
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial 
          color="#a955f7" // Purple connections
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </group>
  );
};

// --- Component 2: The Cosmic Dust (New Layer 1) ---
const CosmicDust = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 7000;
  const spread = 20;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * spread;
      positions[i3 + 1] = (Math.random() - 0.5) * spread;
      positions[i3 + 2] = (Math.random() - 0.5) * spread;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [particleCount, spread]);

  // Animation for the dust
  useFrame((delta) => {
    if (pointsRef.current) {
      // We'll rotate it very slowly for a gentle drift
      pointsRef.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial 
        size={0.008} // Even smaller particles
        color="#ffffff" // White dust
        transparent
        opacity={0.2} // Fainter
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

// --- Main Component: Combine Both Effects ---
export const FloatingShapes = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight color="#ffffff" position={[1, 1, 5]} intensity={1} />
      
      {/* Layer 1: The slow, subtle cosmic dust */}
      <CosmicDust />
      
      {/* Layer 2: The complex plexus in the foreground */}
      <Plexus />
    </>
  );
};
