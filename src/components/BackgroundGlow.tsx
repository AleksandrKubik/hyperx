"use client";

import React from 'react';
import { useEffect, useRef, useState } from 'react';

const BackgroundGlow: React.FC = () => {
    const glowRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const currentX = useRef(50);
    const currentY = useRef(50);
    const targetX = useRef(50);
    const targetY = useRef<number>(50);
    const animationFrameId = useRef<number | undefined>(undefined);

    useEffect(() => {
        // Handle window resize to determine if the device is mobile
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Initial check for mobile

        window.addEventListener('resize', handleResize); // Add resize event listener

        // Show the glow effect after a short delay
        setTimeout(() => {
            setIsVisible(true);
        }, 50);

        // Stop loading after 1 second
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up resize listener
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current); // Cancel animation frame if it exists
            }
        };
    }, []);

    useEffect(() => {
        // Skip mouse movement tracking if loading or on mobile
        if (isLoading || isMobile) return;

        // Handle mouse movement to update target position
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            targetX.current = (clientX / innerWidth) * 100; // Calculate target X position
            targetY.current = (clientY / innerHeight) * 100; // Calculate target Y position
        };

        // Animation loop to smoothly transition the glow effect
        const animate = () => {
            currentX.current += (targetX.current - currentX.current) * 0.08; // Smooth transition for X
            currentY.current += (targetY.current - currentY.current) * 0.08; // Smooth transition for Y

            if (glowRef.current) {
                // Update CSS variables for glow effect
                glowRef.current.style.setProperty('--mouse-x', `${currentX.current}%`);
                glowRef.current.style.setProperty('--mouse-y', `${currentY.current}%`);
            }

            animationFrameId.current = requestAnimationFrame(animate); // Request next animation frame
        };

        window.addEventListener('mousemove', handleMouseMove); // Add mouse move event listener
        animate(); // Start the animation loop

        return () => {
            window.removeEventListener('mousemove', handleMouseMove); // Clean up mouse move listener
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current); // Cancel animation frame if it exists
            }
        };
    }, [isLoading, isMobile]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <div
                ref={glowRef}
                className={`absolute inset-0 transition-opacity duration-1000 ease-out
                    ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: 'radial-gradient(circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(29,161,242,0.12) 0%, rgba(29,161,242,0) 50%)',
                    '--mouse-x': '50%',
                    '--mouse-y': '50%',
                } as React.CSSProperties}
            />
        </div>
    );
};

export default BackgroundGlow; 