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
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        setTimeout(() => {
            setIsVisible(true);
        }, 50);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isLoading || isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            targetX.current = (clientX / innerWidth) * 100;
            targetY.current = (clientY / innerHeight) * 100;
        };

        const animate = () => {
            currentX.current += (targetX.current - currentX.current) * 0.08;
            currentY.current += (targetY.current - currentY.current) * 0.08;

            if (glowRef.current) {
                glowRef.current.style.setProperty('--mouse-x', `${currentX.current}%`);
                glowRef.current.style.setProperty('--mouse-y', `${currentY.current}%`);
            }

            animationFrameId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
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