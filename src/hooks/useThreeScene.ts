import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CONFIG } from '../config';

export const useThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.colors.background);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create heart shape
    const heartShape = new THREE.Shape();
    const x = 0, y = 0;
    heartShape.moveTo(x + 0.5, y + 0.5);
    heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
    heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
    heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
    heartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
    heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1, y);
    heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

    // Main heart
    const extrudeSettings = {
      depth: 0.4,
      bevelEnabled: true,
      bevelSegments: 10,
      steps: 2,
      bevelSize: 0.1,
      bevelThickness: 0.1,
    };

    const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    const material = new THREE.MeshPhongMaterial({
      color: CONFIG.colors.heartPrimary,
      emissive: CONFIG.colors.heartPrimary,
      emissiveIntensity: 0.3,
      shininess: 100,
      specular: CONFIG.colors.heartSecondary,
    });

    const heart = new THREE.Mesh(geometry, material);
    heart.position.set(-0.5, -1, 0);
    heart.rotation.z = Math.PI;
    scene.add(heart);

    // Particles around heart
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = CONFIG.animation.particleCount;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: CONFIG.colors.particleColor,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff1744, 2, 100);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff1744, 2, 100);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(0, 5, 5);
    spotLight.angle = Math.PI / 6;
    scene.add(spotLight);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Rotate heart gently
      heart.rotation.y = Math.sin(time * 0.5) * 0.3;

      // Pulsing effect
      const scale = 1 + Math.sin(time * 2) * 0.1;
      heart.scale.set(scale, scale, scale);

      // Rotate particles
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Animate particle positions
      const positions = particlesMesh.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] = Math.sin(time + positions[i]) * 0.5;
      }
      particlesMesh.geometry.attributes.position.needsUpdate = true;

      // Animate lights
      pointLight1.position.x = Math.sin(time) * 3;
      pointLight1.position.y = Math.cos(time) * 3;
      pointLight2.position.x = Math.cos(time) * 3;
      pointLight2.position.y = Math.sin(time) * 3;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return mountRef;
};