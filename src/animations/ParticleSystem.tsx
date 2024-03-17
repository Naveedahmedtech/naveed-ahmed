import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleSystem = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let frameId;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        mountRef.current.appendChild(renderer.domElement);

        // Particles setup
        const particleCount = 100;
        const particles = [];
        const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const particleGeometry = new THREE.SphereGeometry(0.05, 16, 16);

        for (let i = 0; i < particleCount; i++) {
            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.set(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5);
            particle.velocity = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, 0);
            scene.add(particle);
            particles.push(particle);
        }

        // Line setup
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });

        const drawLineBetweenParticles = () => {
            const threshold = 1.5; // Max distance for connecting line
            particles.forEach((particle, index) => {
                for (let j = index + 1; j < particles.length; j++) {
                    const distance = particle.position.distanceTo(particles[j].position);
                    if (distance < threshold) {
                        // Updated line creation using BufferGeometry
                        const points = [];
                        points.push(particle.position.clone(), particles[j].position.clone());

                        const geometry = new THREE.BufferGeometry().setFromPoints(points);
                        const line = new THREE.Line(geometry, lineMaterial);
                        scene.add(line);

                        // Remove the line after a short time
                        setTimeout(() => scene.remove(line), 100);
                    }
                }
            });
        };


        // Animation loop
        const animate = () => {
            particles.forEach(particle => {
                particle.position.add(particle.velocity);
                // Bounce particles off the "walls"
                ['x', 'y', 'z'].forEach(axis => {
                    if (particle.position[axis] > 2.5 || particle.position[axis] < -2.5) {
                        particle.velocity[axis] *= -1;
                    }
                });
            });

            drawLineBetweenParticles();

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ParticleSystem;
