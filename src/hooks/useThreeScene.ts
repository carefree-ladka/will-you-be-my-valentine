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
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Create simple human figures
    const createFigure = (color: string, position: THREE.Vector3, kneeling = false) => {
      const group = new THREE.Group();

      // Body
      const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.4, kneeling ? 1 : 1.5, 8);
      const bodyMaterial = new THREE.MeshPhongMaterial({ color });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.position.y = kneeling ? 0.5 : 0.75;
      group.add(body);

      // Head
      const headGeometry = new THREE.SphereGeometry(0.25, 16, 16);
      const headMaterial = new THREE.MeshPhongMaterial({ color: '#ffdbac' });
      const head = new THREE.Mesh(headGeometry, headMaterial);
      head.position.y = kneeling ? 1.25 : 1.75;
      group.add(head);

      // Eyes
      const eyeGeometry = new THREE.SphereGeometry(0.04, 8, 8);
      const eyeMaterial = new THREE.MeshPhongMaterial({ color: '#000000' });

      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      leftEye.position.set(-0.08, kneeling ? 1.3 : 1.8, 0.2);
      group.add(leftEye);

      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      rightEye.position.set(0.08, kneeling ? 1.3 : 1.8, 0.2);
      group.add(rightEye);

      // Mouth
      const mouthGeometry = new THREE.SphereGeometry(0.03, 8, 8);
      const mouthMaterial = new THREE.MeshPhongMaterial({ color: '#ff6b9d' });
      const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
      mouth.position.set(0, kneeling ? 1.2 : 1.7, 0.22);
      mouth.scale.set(1.5, 0.5, 0.5);
      group.add(mouth);

      // Nose
      const noseGeometry = new THREE.SphereGeometry(0.02, 8, 8);
      const noseMaterial = new THREE.MeshPhongMaterial({ color: '#ffdbac' });
      const nose = new THREE.Mesh(noseGeometry, noseMaterial);
      nose.position.set(0, kneeling ? 1.25 : 1.75, 0.24);
      group.add(nose);

      // Hair
      const hairGeometry = new THREE.SphereGeometry(0.28, 16, 16);
      const hairColor = color === '#e24a90' ? '#8B4513' : '#654321';
      const hairMaterial = new THREE.MeshPhongMaterial({ color: hairColor });
      const hair = new THREE.Mesh(hairGeometry, hairMaterial);
      hair.position.set(0, kneeling ? 1.35 : 1.85, -0.05);
      hair.scale.set(1, 0.8, 1);
      group.add(hair);

      // Arms
      const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 8);
      const armMaterial = new THREE.MeshPhongMaterial({ color: '#ffdbac' });

      const leftArm = new THREE.Mesh(armGeometry, armMaterial);
      leftArm.position.set(-0.5, kneeling ? 0.8 : 1.2, 0);
      leftArm.rotation.z = kneeling ? -Math.PI/3 : Math.PI/6;
      group.add(leftArm);

      const rightArm = new THREE.Mesh(armGeometry, armMaterial);
      rightArm.position.set(0.5, kneeling ? 0.8 : 1.2, 0);
      rightArm.rotation.z = kneeling ? Math.PI/3 : -Math.PI/6;
      group.add(rightArm);

      if (!kneeling) {
        // Legs for standing figure
        const legGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.8, 8);
        const legMaterial = new THREE.MeshPhongMaterial({ color });

        const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
        leftLeg.position.set(-0.2, -0.4, 0);
        group.add(leftLeg);

        const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
        rightLeg.position.set(0.2, -0.4, 0);
        group.add(rightLeg);
      }

      group.position.copy(position);
      return group;
    };

    // Create boy (kneeling) and girl (standing)
    const boy = createFigure('#4a90e2', new THREE.Vector3(-1.5, 0, 0), true);
    const girl = createFigure('#e24a90', new THREE.Vector3(1.5, 0, 0), false);

    scene.add(boy);
    scene.add(girl);

    // Create heart between them
    const heartShape = new THREE.Shape();
    const x = 0, y = 0;
    heartShape.moveTo(x + 0.25, y + 0.25);
    heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y);
    heartShape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35);
    heartShape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.15, y + 0.77, x + 0.25, y + 0.95);
    heartShape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
    heartShape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);
    heartShape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);

    const extrudeSettings = {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 2,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    };

    const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    const heartMaterial = new THREE.MeshPhongMaterial({
      color: CONFIG.colors.heartPrimary,
      emissive: CONFIG.colors.heartPrimary,
      emissiveIntensity: 0.3,
    });

    const heart = new THREE.Mesh(heartGeometry, heartMaterial);
    heart.position.set(-0.25, 2, 0);
    heart.rotation.z = Math.PI;
    scene.add(heart);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 8;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: CONFIG.colors.particleColor,
      transparent: true,
      opacity: 0.6,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(CONFIG.colors.heartPrimary, 1, 10);
    pointLight.position.set(0, 3, 2);
    scene.add(pointLight);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Gentle heart animation
      heart.rotation.y = Math.sin(time * 0.5) * 0.2;
      const scale = 1 + Math.sin(time * 2) * 0.1;
      heart.scale.set(scale, scale, scale);

      // Subtle figure animations
      boy.rotation.y = Math.sin(time * 0.3) * 0.05;
      girl.rotation.y = Math.sin(time * 0.3 + Math.PI) * 0.05;

      // Particle animation
      particlesMesh.rotation.y += 0.002;

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
      renderer.dispose();
    };
  }, []);

  return mountRef;
};
