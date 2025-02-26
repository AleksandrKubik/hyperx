"use client";

import { useEffect, useRef } from 'react';

export default function ParallaxBackground() {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!backgroundRef.current) return;

            const scrolled = window.scrollY;
            const rate = scrolled * 0.5;

            // Плавное смещение фона
            backgroundRef.current.style.transform = `translateY(${rate}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden">
            {/* Основной фон с параллаксом */}
            <div
                ref={backgroundRef}
                className="absolute inset-0 min-h-[150vh]"
                style={{
                    background: `
                        radial-gradient(circle at 50% 0%, rgba(29,161,242,0.08) 0%, rgba(29,161,242,0) 50%),
                        radial-gradient(circle at 0% 50%, rgba(29,161,242,0.04) 0%, rgba(29,161,242,0) 50%),
                        radial-gradient(circle at 100% 50%, rgba(29,161,242,0.04) 0%, rgba(29,161,242,0) 50%),
                        radial-gradient(circle at 50% 100%, rgba(29,161,242,0.06) 0%, rgba(29,161,242,0) 50%)
                    `
                }}
            >
                {/* Анимированные элементы фона */}
                <div className="absolute top-[10%] left-[15%] w-[50vw] h-[50vw] animate-glow-slow opacity-30">
                    <div className="absolute inset-0 rounded-full bg-[rgba(29,161,242,0.03)] blur-3xl" />
                </div>

                <div className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] animate-glow-slow-reverse opacity-20">
                    <div className="absolute inset-0 rounded-full bg-[rgba(29,161,242,0.02)] blur-3xl" />
                </div>

                <div className="absolute bottom-[20%] left-[25%] w-[35vw] h-[35vw] animate-glow-slower opacity-25">
                    <div className="absolute inset-0 rounded-full bg-[rgba(29,161,242,0.02)] blur-3xl" />
                </div>
            </div>
        </div>
    );
} 