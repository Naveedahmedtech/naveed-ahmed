import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import globeTexture from "../assets/images/earth.jpg"; // Ensure the path is correct

const InteractiveGlobe = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 2;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0x000000, 0); // Transparent background
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        mountRef.current.appendChild(renderer.domElement);

        // Globe setup
        const textureLoader = new THREE.TextureLoader();
        const globeGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const globeMaterial = new THREE.MeshBasicMaterial({
            map: textureLoader.load(globeTexture),
        });
        const globe = new THREE.Mesh(globeGeometry, globeMaterial);
        scene.add(globe);

        // OrbitControls for interaction
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Optional: For smoother interaction

        // Raycaster setup
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        // Mouse event handler
        const onDocumentMouseDown = (event) => {
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children);
            for (let i = 0; i < intersects.length; i++) {
                console.log("Intersected object:", intersects[i]);
                // Implement interaction logic here
            }
        };
        document.addEventListener('mousedown', onDocumentMouseDown, false);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // Only required if controls.enableDamping = true
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', onDocumentMouseDown);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default InteractiveGlobe;
