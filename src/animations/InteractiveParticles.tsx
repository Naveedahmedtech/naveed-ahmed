import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const InteractiveParticles = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 2;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

        mountRef.current.appendChild(renderer.domElement);

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCnt = 5000;

        const posArray = new Float32Array(particlesCnt * 3);
        for (let i = 0; i < particlesCnt * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: '#fff'
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Animation loop
        const animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            particlesMesh.rotation.y += 0.001;
        };

        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        });

        // Cleanup
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default InteractiveParticles;


// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { useMouse } from 'react-use';

// const ParticleSystemInteractive = () => {
//     const mountRef = useRef(null);
//     const { docX, docY } = useMouse(mountRef);

//     useEffect(() => {
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         camera.position.z = 5;

//         const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         mountRef.current.appendChild(renderer.domElement);

//         const particlesGeometry = new THREE.BufferGeometry();
//         const particlesCount = 500;
//         const posArray = new Float32Array(particlesCount * 3);

//         for (let i = 0; i < particlesCount * 3; i++) {
//             // Spread particles around
//             posArray[i] = (Math.random() - 0.5) * 10;
//         }

//         particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//         const material = new THREE.PointsMaterial({ size: 0.05, color: '#fff' });
//         const particlesMesh = new THREE.Points(particlesGeometry, material);
//         scene.add(particlesMesh);

//         // Mouse interaction
//         const mouse = new THREE.Vector2();
//         const animateParticles = (event) => {
//             mouse.x = (docX / window.innerWidth) * 2 - 1;
//             mouse.y = -(docY / window.innerHeight) * 2 + 1;
//         };

//         // Animation loop
//         const animate = () => {
//             requestAnimationFrame(animate);
//             renderer.render(scene, camera);

//             // Apply some movement
//             particlesMesh.rotation.y += 0.001;
//             particlesMesh.rotation.x += 0.001;

//             // Update particles based on mouse position
//             animateParticles();
//         };

//         animate();

//         return () => {
//             mountRef.current.removeChild(renderer.domElement);
//         };
//     }, [docX, docY]); // Re-run the effect if mouse position changes

//     return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
// };

// export default ParticleSystemInteractive;


