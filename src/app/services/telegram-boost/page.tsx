
"use client";
import { useEffect, useState } from 'react';
import { TelegramIconLarge } from '../../../components/icons/SocialIcons';
import { motion } from "framer-motion";
import { DeferredContent } from '../../../components/DeferredContent';

export default function TelegramBoostPage() {
    const [showContent, setShowContent] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [showTitle, setShowTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsTransitioning(false);
            setTimeout(() => {
                setShowTitle(true);
                setShowDescription(true);
                setShowContent(true);
            }, 500);
        }, 100);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <main className="min-h-screen relative overflow-hidden">
                {/* Анимированная иконка */}
                <div className={`fixed transition-all duration-1000 ease-out`}>
                    <div className="w-[1200px] h-[1200px]">
                        <TelegramIconLarge />
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
                            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight
                                    [text-shadow:0_0_50px_rgba(0,163,255,0.5),0_0_100px_rgba(0,163,255,0.3)]
                                    transition-all duration-700 transform
                                    ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            Grow your Telegram account fast & organically
                            <br />

                        </h1>
                        <div
                            className={`transform transition-all duration-700
                                    ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <p className="text-xl text-neutral-400">
                                No bots — just authentic engagement to make your profile stand out.</p>
                        </div>
                    </div>
                </div>
                {/* Контент страницы */}
                <div className={`mx-auto relative
                    transition-all duration-700 delay-300
                    ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <DeferredContent sections={['features', 'howItWorks', 'testFlight', 'contact', 'footer']} />
                </div>
            </main>
        </motion.div>
    );
} 