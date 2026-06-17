"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export function Logo3D({ size = 420 }: { size?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = size;
    const height = size;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Create a stylized 3D "Print" object using simple geometries
    const group = new THREE.Group();

    // Base cylinder
    const geometry1 = new THREE.CylinderGeometry(1.5, 1.5, 0.5, 32);
    const material1 = new THREE.MeshPhongMaterial({
      color: 0x2d7dd2,
      shininess: 100,
      transparent: false,
      opacity:1,
    });
    const base = new THREE.Mesh(geometry1, material1);
    group.add(base);

    // Middle rings
    const geometry2 = new THREE.TorusGeometry(1.2, 0.1, 16, 100);
    const material2 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const ring1 = new THREE.Mesh(geometry2, material2);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = 0.3;
    group.add(ring1);
    
    const ring2 = new THREE.Mesh(geometry2, material2);
    ring2.rotation.x = Math.PI / 2;
    ring2.position.y = -0.3;
    group.add(ring2);
    //smal rings
    const geometry3 = new THREE.TorusGeometry(0.6, 0.1, 16, 100);
    const material3 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const ringSmall1 = new THREE.Mesh(geometry3, material3);
    ringSmall1.rotation.x = Math.PI / 2;
    ringSmall1.position.y = 0.3;
    group.add(ringSmall1);

    const ringSmall2 = new THREE.Mesh(geometry3, material3);
    ringSmall2.rotation.x = Math.PI / 2;
    ringSmall2.position.y = -0.3;
    group.add(ringSmall2);

    scene.add(group);

    group.rotation.x = 1.5;

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      // group.rotation.y += 0.01;
      // group.rotation.z += -0.01;
      group.rotation.x += 0.01;
      group.rotation.y += -0.01;

      // Subtle floating motion
      // group.position.y = Math.sin(Date.now() * 0.002) * 0.2;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className="shrink-0"
      style={{ width: size, height: size }}
    />
  );
}
