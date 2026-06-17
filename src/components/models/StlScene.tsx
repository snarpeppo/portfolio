"use client";

import { useEffect, useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import * as THREE from "three";

interface StlSceneProps {
  url: string;
  onDimensions?: (dimensions: { width: number; depth: number; height: number }) => void;
}

export function StlScene({ url, onDimensions }: StlSceneProps) {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);
  const dimsReported = useRef(false);
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (!geometry || dimsReported.current) return;
    dimsReported.current = true;

    // STL files from CAD (Z-up) need rotation for Three.js (Y-up)
    geometry.rotateX(-Math.PI / 2);

    geometry.computeBoundingBox();
    const bb = geometry.boundingBox;
    let maxDim = 1;
    if (bb) {
      const size = new THREE.Vector3().copy(bb.max).sub(bb.min);
      maxDim = Math.max(size.x, size.y, size.z);

      if (onDimensions) {
        onDimensions({
          width: Math.round(size.x * 10) / 10,
          depth: Math.round(size.y * 10) / 10,
          height: Math.round(size.z * 10) / 10,
        });
      }
    }

    geometry.center();

    // Dynamically position camera based on model size
    const dist = Math.max(maxDim * 1.8, 3);
    (camera as THREE.PerspectiveCamera).position.set(dist * 0.6, dist * 0.3, dist);
    camera.lookAt(0, 0, 0);
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
  }, [geometry, onDimensions, camera]);

  return (
    <>
      <mesh
        ref={meshRef}
        geometry={geometry}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color="#2d7dd2"
          metalness={0.3}
          roughness={0.6}
          flatShading={false}
        />
      </mesh>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <OrbitControls
        ref={controlsRef}
        autoRotate
        autoRotateSpeed={4}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}
