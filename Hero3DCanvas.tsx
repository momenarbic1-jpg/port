"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Verify WebGL support
    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfffbf5, 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(5, 8, 6);
    scene.add(dirLight);

    // Warm orange point light (AI Energy)
    const orangeLight = new THREE.PointLight(0xff7900, 4.5, 10);
    orangeLight.position.set(0, 0, 2);
    scene.add(orangeLight);

    const rimLight = new THREE.DirectionalLight(0xffe3cc, 1.2);
    rimLight.position.set(-6, -4, 4);
    scene.add(rimLight);

    // Master Group for Parallax and Rotation
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Translucent Orange Glass Panel
    const orangePanelGeo = new THREE.BoxGeometry(2.4, 3.2, 0.08);
    const orangePanelMat = new THREE.MeshPhysicalMaterial({
      color: 0xff7900,
      metalness: 0.1,
      roughness: 0.18,
      transmission: 0.6,
      transparent: true,
      opacity: 0.82,
      ior: 1.5,
    });
    const orangePanel = new THREE.Mesh(orangePanelGeo, orangePanelMat);
    orangePanel.position.set(0.4, 0.1, 0.3);
    orangePanel.rotation.set(0.2, -0.35, 0.1);
    masterGroup.add(orangePanel);

    // 2. Frosted White Glass Panel
    const whitePanelGeo = new THREE.BoxGeometry(2.2, 2.8, 0.06);
    const whitePanelMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.05,
      roughness: 0.3,
      transmission: 0.8,
      transparent: true,
      opacity: 0.75,
      ior: 1.4,
    });
    const whitePanel = new THREE.Mesh(whitePanelGeo, whitePanelMat);
    whitePanel.position.set(-0.5, -0.2, -0.4);
    whitePanel.rotation.set(-0.15, 0.25, -0.08);
    masterGroup.add(whitePanel);

    // 3. Central AI Metallic Core (Octahedron)
    const coreGeo = new THREE.OctahedronGeometry(0.7, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xff7900,
      metalness: 0.85,
      roughness: 0.22,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, 0.2, 0.7);
    masterGroup.add(coreMesh);

    // 4. Floating Torus Ring
    const ringGeo = new THREE.TorusGeometry(1.4, 0.04, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x152238,
      metalness: 0.8,
      roughness: 0.25,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    masterGroup.add(ringMesh);

    // 5. Small Metallic Cube
    const cubeGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0xffa040,
      metalness: 0.7,
      roughness: 0.2,
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    cubeMesh.position.set(-1.2, 1.2, 0.5);
    masterGroup.add(cubeMesh);

    // 6. Floating Particles
    const particleCount = 35;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xff7900,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particles);

    // Interaction & Animation State
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;
    let animationFrameId: number;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      const rect = container.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);

      targetMouseX = x * 0.45;
      targetMouseY = y * 0.45;

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        dragVelocityX = deltaX * 0.005;
        dragVelocityY = deltaY * 0.005;
        masterGroup.rotation.y += dragVelocityX;
        masterGroup.rotation.x += dragVelocityY;
        previousPointerX = clientX;
        previousPointerY = clientY;
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      if ("touches" in e && e.touches.length > 0) {
        previousPointerX = e.touches[0].clientX;
        previousPointerY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        previousPointerX = (e as MouseEvent).clientX;
        previousPointerY = (e as MouseEvent).clientY;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    container.addEventListener("mousedown", handlePointerDown);
    container.addEventListener("touchstart", handlePointerDown, {
      passive: true,
    });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth || 480;
      const newHeight = container.clientHeight || 480;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      if (!isDragging) {
        masterGroup.rotation.y += 0.003;
        masterGroup.rotation.x = currentMouseY * 0.4 + Math.sin(elapsedTime * 0.6) * 0.05;
        masterGroup.rotation.y += (currentMouseX * 0.5 - masterGroup.rotation.y * 0.01) * 0.02;
      }

      // Gentle floating animations
      orangePanel.position.y = 0.1 + Math.sin(elapsedTime * 1.1) * 0.08;
      whitePanel.position.y = -0.2 + Math.cos(elapsedTime * 0.9) * 0.07;
      coreMesh.position.y = 0.2 + Math.sin(elapsedTime * 1.5) * 0.06;
      coreMesh.rotation.y = elapsedTime * 0.4;
      coreMesh.rotation.x = elapsedTime * 0.25;

      ringMesh.rotation.z = elapsedTime * 0.15;
      cubeMesh.rotation.x = elapsedTime * 0.5;
      cubeMesh.rotation.y = elapsedTime * 0.4;

      // Pulse orange light
      orangeLight.intensity = 4.2 + Math.sin(elapsedTime * 2.0) * 0.8;

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);

      if (container) {
        container.removeEventListener("mousedown", handlePointerDown);
        container.removeEventListener("touchstart", handlePointerDown);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }

      // Dispose resources
      orangePanelGeo.dispose();
      orangePanelMat.dispose();
      whitePanelGeo.dispose();
      whitePanelMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
        aria-label="Interactive 3D Abstract AI Composition"
      />

      {/* Floating UI Meta Tag */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E7E2] shadow-xs text-[11px] font-mono text-[#737B87]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900] animate-pulse" />
          <span>Interactive 3D · Three.js</span>
        </div>
      </div>

      {/* Graceful Fallback if WebGL is disabled */}
      {!hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div className="p-8 rounded-2xl bg-white border border-[#E9E7E2] shadow-warm max-w-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FFF4EB] border border-[#FFD6B3] text-[#FF7900] font-bold text-lg flex items-center justify-center mx-auto mb-3">
              M
            </div>
            <h4 className="text-sm font-bold text-[#152238] mb-1">
              Intelligent Architecture
            </h4>
            <p className="text-xs text-[#737B87] leading-relaxed">
              3D composition rendered using hardware-accelerated WebGL.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
