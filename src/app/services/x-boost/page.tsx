"use client";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { DeferredContent } from '../../../components/DeferredContent';
import { XIconLarge } from '../../../components/icons/SocialIcons';

export default function XBoostPage() {
    const [showContent, setShowContent] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [showTitle, setShowTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        setTimeout(() => {
            setIsTransitioning(false);
            setTimeout(() => {
                setShowTitle(true);
                setShowDescription(true);
                setShowContent(true);
            }, 400);
        }, 400);

        const handleScroll = () => {
            if (window) {
                setScrollY(window.scrollY);
            }
        };

        // Добавляем проверку на существование window
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            // Вызываем один раз для инициализации
            handleScroll();
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    // Базовые стили для серверного рендеринга
    const defaultStyle = {
        opacity: 1,
        filter: 'blur(0px)',
        transform: 'scale(1)',
    };

    // Стили для клиентского рендеринга
    const clientStyle = isClient ? {
        opacity: Math.max(1 - scrollY / 500, 0.2),
        filter: `blur(${Math.min(scrollY / 100, 8)}px)`,
        transform: `scale(${1 + Math.min(scrollY / 100, 8) / 16})`,
        willChange: 'opacity, filter, transform'
    } : defaultStyle;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <main className="min-h-screen relative overflow-hidden">
                {/* Анимированная иконка */}
                <div
                    className="fixed transition-all duration-1000 ease-out"
                    style={clientStyle}
                >
                    <div className="w-screen h-[1200px] md:h-[800px] lg:h-[1000px]">
                        <XIconLarge />
                    </div>
                </div>
                <div className="max-w-3xl mx-auto text-center top-20 relative pt-72">
                    {/* Заголовок */}
                    <div
                        className={`max-w-3xl mx-auto text-center mb-20 relative 
                                transition-all duration-700 ease-out
                                ${isTransitioning ? '-translate-y-full opacity-0' : 'translate-y-0'}`}
                    >
                        <h1
                            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight
                                    [text-shadow:0_0_50px_rgba(0,163,255,0.5),0_0_100px_rgba(0,163,255,0.3)]
                                    transition-all duration-700 transform
                                    ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <span className="text-blue-500">Grow your X account</span> <br />fast & organically
                        </h1>
                        <div
                            className={`transform transition-all duration-700
                                    ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <p className="text-lg sm:text-xl text-neutral-400">
                                No bots — just authentic engagement to make your profile stand out.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Контент страницы */}
                <div className={`mx-auto relative
                    transition-all duration-700 delay-300
                    ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                ><DeferredContent sections={['pricing', 'features', 'howItWorks', 'testFlight', 'contact', 'footer']} />
                </div>

            </main>
        </motion.div>
    );
}