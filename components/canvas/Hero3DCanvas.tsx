"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Hero3DCanvasProps {
  className?: string;
}

export default function Hero3DCanvas({ className = "" }: Hero3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // Root Group for 3D elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Crystal (Bright Electric Cyber Yellow)
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      wireframe: true,
      emissive: 0xfacc15,
      emissiveIntensity: 0.9,
      roughness: 0.15,
      metalness: 0.95,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 2. Outer Wireframe Polyhedron (Vibrant Gold)
    const outerGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xfde047,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 3. Floating Orbital Rings (Bright Neon Yellow)
    const ringGroup = new THREE.Group();
    const ringMat1 = new THREE.LineBasicMaterial({
      color: 0xfef08a,
      transparent: true,
      opacity: 0.85,
    });
    const ringMat2 = new THREE.LineBasicMaterial({
      color: 0xfacc15,
      transparent: true,
      opacity: 0.7,
    });

    const createRing = (radius: number, mat: THREE.LineBasicMaterial, rotX = 0, rotY = 0) => {
      const segments = 90;
      const points: THREE.Vector3[] = [];
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const ring = new THREE.Line(geom, mat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(2.3, ringMat1, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(2.6, ringMat2, -Math.PI / 4, Math.PI / 4);
    const ring3 = createRing(2.0, ringMat1, Math.PI / 2, 0);
    ringGroup.add(ring1);
    ringGroup.add(ring2);
    ringGroup.add(ring3);
    mainGroup.add(ringGroup);

    // 4. Surrounding 3D Particle Cloud (Luminous Electric Yellows)
    const particleCount = 800;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0xfef08a); // Bright neon yellow
    const c2 = new THREE.Color(0xfde047); // Radiant yellow
    const c3 = new THREE.Color(0xfacc15); // Electric gold
    const c4 = new THREE.Color(0xfffbeb); // Warm white glow

    for (let i = 0; i < particleCount; i++) {
      const r = 2.0 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      const rand = Math.random();
      const mixedColor = rand < 0.45 ? c1.clone().lerp(c4, Math.random()) : c2.clone().lerp(c3, Math.random());
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xfffbeb, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xfef08a, 5, 10);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xfacc15, 5, 10);
    pointLight2.position.set(-3, -3, 2);
    scene.add(pointLight2);

    // Canvas materials need their own palette; CSS dark variants cannot recolor WebGL.
    const darkParticleColors = particleColors.slice();
    const lightParticlePalette = [0x854d0e, 0xa16207, 0x57534e, 0xb45309].map(
      (color) => new THREE.Color(color),
    );
    const applyTheme = () => {
      const dark = document.documentElement.classList.contains("dark");
      renderer.toneMappingExposure = dark ? 1.4 : 1;
      coreMat.color.setHex(dark ? 0xfef08a : 0x854d0e);
      coreMat.emissive.setHex(dark ? 0xfacc15 : 0x854d0e);
      coreMat.emissiveIntensity = dark ? 0.9 : 0.35;
      coreMat.metalness = dark ? 0.95 : 0;
      coreMat.roughness = dark ? 0.15 : 0.8;
      outerMat.color.setHex(dark ? 0xfde047 : 0xa16207);
      outerMat.opacity = dark ? 0.45 : 0.65;
      ringMat1.color.setHex(dark ? 0xfef08a : 0x92400e);
      ringMat2.color.setHex(dark ? 0xfacc15 : 0x57534e);
      ringMat2.opacity = dark ? 0.7 : 0.8;
      for (const material of [coreMat, outerMat, ringMat1, ringMat2, particleMat]) {
        material.toneMapped = dark;
        material.needsUpdate = true;
      }
      // Additive particles wash out against white; normal blending preserves dark colors.
      particleMat.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
      particleMat.opacity = dark ? 0.95 : 0.8;
      for (let i = 0; i < particleCount; i++) {
        const color = lightParticlePalette[i % lightParticlePalette.length];
        particleColors[i * 3] = dark ? darkParticleColors[i * 3] : color.r;
        particleColors[i * 3 + 1] = dark ? darkParticleColors[i * 3 + 1] : color.g;
        particleColors[i * 3 + 2] = dark ? darkParticleColors[i * 3 + 2] : color.b;
      }
      particleGeo.getAttribute("color").needsUpdate = true;
      ambientLight.color.setHex(dark ? 0xfffbeb : 0xffffff);
      pointLight1.color.setHex(dark ? 0xfef08a : 0xffffff);
      pointLight2.color.setHex(dark ? 0xfacc15 : 0xffffff);
      pointLight1.intensity = dark ? 5 : 1;
      pointLight2.intensity = dark ? 5 : 1;
    };
    applyTheme();
    const themeObserver = new MutationObserver(applyTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 1.5;
      targetRotationX = -y * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle Rotation
      coreMesh.rotation.y += 0.008;
      coreMesh.rotation.x += 0.004;

      outerMesh.rotation.y -= 0.005;
      outerMesh.rotation.z += 0.003;

      ring1.rotation.z += 0.01;
      ring2.rotation.z -= 0.008;
      ring3.rotation.z += 0.006;

      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

      // Mouse Parallax Lerping
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Breathing scale effect on core
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.04;
      coreMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      themeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      coreGeo.dispose();
      coreMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, []);

  if (!isSupported) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-yellow-400/20 via-amber-400/20 to-yellow-200/20 blur-2xl animate-pulse" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[450px] sm:h-[500px] lg:h-[580px] pointer-events-auto cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive 3D Beevora core hologram"
    />
  );
}
