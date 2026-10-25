"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Mini3DOrb() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number;

    try {
      const size = 120;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
      camera.position.z = 3.2;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(size, size);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);

      const light = new THREE.DirectionalLight(0xffffff, 2.5);
      light.position.set(2, 4, 3);
      scene.add(light);

      const orangeLight = new THREE.PointLight(0xff7900, 3, 5);
      orangeLight.position.set(-1, -1, 1);
      scene.add(orangeLight);

      const ambient = new THREE.AmbientLight(0xfffbf5, 1.5);
      scene.add(ambient);

      // Glass orange icosahedron
      const geo = new THREE.IcosahedronGeometry(0.85, 0);
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xff7900,
        metalness: 0.2,
        roughness: 0.15,
        transmission: 0.7,
        transparent: true,
        opacity: 0.88,
        ior: 1.5,
      });
      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      // Inner wireframe
      const wireGeo = new THREE.IcosahedronGeometry(0.86, 0);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xffe3cc,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      scene.add(wireMesh);

      const clock = new THREE.Clock();
      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        mesh.rotation.x = t * 0.4;
        mesh.rotation.y = t * 0.6;
        wireMesh.rotation.x = t * 0.4;
        wireMesh.rotation.y = t * 0.6;
        renderer?.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animId);
        if (renderer && renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
        geo.dispose();
        mat.dispose();
        wireGeo.dispose();
        wireMat.dispose();
        renderer?.dispose();
      };
    } catch {
      // Fallback silently if WebGL fails
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-28 h-28 flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    />
  );
}
