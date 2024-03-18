import { useEffect, useRef } from 'react';

const CursorTrail = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const circles = useRef<any>([]); // Use an array to store multiple circles

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const addCircle = (x: any, y: any) => {
            circles.current.push({ x, y, radius: 5, alpha: 0.6 });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            circles.current.forEach((circle: any, index: any) => {
                ctx.beginPath();
                ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(59, 130, 246, ${circle.alpha})`; // Adjust color as needed
                ctx.shadowColor = 'rgba(59, 130, 246, 0.5)'; // Same color for the glow but with reduced opacity
                ctx.shadowBlur = 20; // Increase for a more pronounced glow effect
                ctx.fill();

                // Update the circle's properties for the next frame
                circle.radius += 0.5; // Increase the speed of expansion
                circle.alpha -= 0.02; // Adjust the fade speed as needed

                // Remove the circle if it's completely faded
                if (circle.alpha <= 0) {
                    circles.current.splice(index, 1);
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        document.addEventListener('mousemove', (e) => addCircle(e.clientX, e.clientY));

        return () => {
            document.removeEventListener('mousemove', (e) => addCircle(e.clientX, e.clientY));
        };
    }, []);

    return <canvas ref={canvasRef} className="expanding-ring-canvas"></canvas>;
};

export default CursorTrail;
