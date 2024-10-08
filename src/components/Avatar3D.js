import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import model from '../assets/horse.glb';

const Avatar3D = () => {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, model);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      
      // Calculate rotation based on mouse position
      const maxRotation = Math.PI / 3; // 60 degrees
      const newRotationY = x * maxRotation;
      setRotationY(newRotationY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Quick appearing animation
    const animationDuration = 500; // 0.5 seconds
    const startTime = Date.now();

    const animateEntry = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      setScale(progress * 0.7); // Reduce final scale to 70% of original size

      if (progress < 1) {
        requestAnimationFrame(animateEntry);
      }
    };

    animateEntry();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    if (group.current) {
      // Smoothly interpolate current rotation towards target rotation
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        rotationY,
        0.1
      );

      // Add a subtle floating animation
      const t = state.clock.getElapsedTime();
      group.current.position.y = Math.sin(t / 1.5) / 20;
    }
  });

  return (
    <group ref={group} scale={[scale, scale, scale]}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Avatar3D;
