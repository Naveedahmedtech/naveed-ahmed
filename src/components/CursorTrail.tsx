import React, { useEffect, useRef } from 'react';

const ExpandingRingCursor = () => {
    const canvasRef = useRef(null);
    const circle = useRef({ x: 0, y: 0, radius: 0, alpha: 1, draw: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const updateCircle = (x, y) => {
            if (!circle.current.draw) {
                circle.current.x = x;
                circle.current.y = y;
                circle.current.draw = true;
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (circle.current.draw) {
                ctx.beginPath();
                ctx.arc(circle.current.x, circle.current.y, circle.current.radius, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(59, 130, 246, ${circle.current.alpha})`; // Using #3b82f6 with alpha for fillStyle
                ctx.shadowColor = 'rgba(59, 130, 246, 0.5)'; // Same color for the glow but with reduced opacity
                ctx.shadowBlur = 10;
                ctx.fill();

                circle.current.radius += 0.5;
                circle.current.alpha -= 0.01;

                if (circle.current.alpha <= 0) {
                    circle.current.radius = 0;
                    circle.current.alpha = 1;
                    circle.current.draw = false;
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        document.addEventListener('mousemove', (e) => updateCircle(e.clientX, e.clientY));

        return () => {
            document.removeEventListener('mousemove', (e) => updateCircle(e.clientX, e.clientY));
        };
    }, []);

    return <canvas ref={canvasRef} className="expanding-ring-canvas" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999999 }}></canvas>;
};

export default ExpandingRingCursor;
