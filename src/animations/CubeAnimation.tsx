import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const CubeAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Adjust these dimensions as needed
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '50%', height: '50%' }} />;
};

export default CubeAnimation;
