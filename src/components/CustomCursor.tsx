import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            cursorRef.current.style.backgroundColor = "#3498db"; // Change dot color
            ringRef.current.style.borderColor = "#9b59b6"; // Change ring color
        };

        const handleMouseLeave = () => {
            cursorRef.current.style.backgroundColor = "#FF5733"; // Revert dot color
            ringRef.current.style.borderColor = "#33FF57"; // Revert ring color
        };

        const hoverElements = document.querySelectorAll('.hover-target'); // Elements with the class "hover-target"

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            hoverElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);


    return (
        <>
            <div ref={cursorRef} className="custom-cursor-dot"></div>
            <div ref={ringRef} className="custom-cursor-ring"></div>
        </>
    );
};

export default CustomCursor;
