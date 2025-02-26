"use client";

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { XIcon, TelegramIcon, YoutubeIcon } from '../components/icons/SocialIcons';
import { Button } from '../components/ui/Button';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Hero() {
    const router = useRouter();
    const isMobile = useIsMobile();
    const [showTitle, setShowTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showCards, setShowCards] = useState(false);
    const [showIcons, setShowIcons] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [exitComplete, setExitComplete] = useState(false);

    // Мемоизируем socialServices
    const socialServices = useMemo(() => [
        {
            id: 'telegram',
            name: 'Telegram',
            icon: TelegramIcon,
            href: '/services/telegram-boost',
            color: 'bg-black',
            glow: 'rgba(0,136,204,0.3)',
            textGlow: '0 0 10px rgba(0,136,204,0.5)'
        },
        {
            id: 'x',
            name: 'X',
            icon: XIcon,
            href: '/services/x-boost',
            color: 'bg-black',
            glow: 'rgba(255,255,255,0.15)',
            textGlow: '0 0 10px rgba(255,255,255,0.2)'
        },
        {
            id: 'youtube',
            name: 'YouTube',
            icon: YoutubeIcon,
            href: '/services/youtube-boost',
            color: 'bg-black',
            glow: 'rgba(255,0,0,0.3)',
            textGlow: '0 0 10px rgba(255,0,0,0.5)'
        }
    ], []);

    useEffect(() => {
        // Обновленная последовательность анимаций
        setTimeout(() => {
            setShowTitle(true); // Заголовок

            setTimeout(() => {
                setShowDescription(true); // Описание

                setTimeout(() => {
                    setShowCards(true); // Карточки

                    setTimeout(() => {
                        setShowIcons(true); // Иконки

                        setTimeout(() => {
                            setShowButtons(true); // Кнопки
                        }, 400);
                    }, 500);
                }, 500);
            }, 500);
        }, 100);
    }, []);

    const handleServiceClick = async (service: typeof socialServices[0]) => {
        setIsTransitioning(true);
        setSelectedService(service.name);

        setShowButtons(false);

        setTimeout(() => {
            setShowDescription(false);
        }, 200);

        setTimeout(() => {
            setExitComplete(true);
        }, 400);

        setTimeout(() => {
            router.push(service.href);
        }, 1500);
    };

    return (
        <section className="relative min-h-[calc(100vh-64px)] flex items-center py-20">
            <div className="container mx-auto px-4 relative">
                <div className="max-w-3xl mx-auto text-center relative">
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
                            Grow your social media<br />
                            account fast & organically
                        </h1>
                        <div
                            className={`transform transition-all duration-700
                                ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <p className="text-xl text-neutral-400">
                                No bots — just authentic engagement to make your profile stand out.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Сетка сервисов */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-7xl mx-auto">
                    {/* В мобильной версии сначала X, затем Telegram и YouTube */}
                    <div className="md:hidden w-full">
                        {socialServices.filter(service => service.id === 'x').map((service: typeof socialServices[number]) => (
                            <div
                                key={service.id}
                                className={`group relative flex flex-col items-center mb-12 gap-12 p-8 rounded-2xl
                                    backdrop-blur-md bg-white/[0.03] border border-white/[0.07]
                                    transition-all duration-700 ease-out
                                    hover:bg-white/[0.05] hover:border-white/[0.12]`}
                            >
                                <div
                                    className={`transform transition-all duration-1000 ease-out relative z-10
                                        ${!showIcons ? 'opacity-0 translate-y-20 rotate-180' : 'opacity-100 translate-y-0 rotate-0'}
                                        ${isTransitioning && selectedService !== service.name ? 'opacity-0 scale-0' : ''}
                                        ${exitComplete && selectedService === service.name ?
                                            'fixed left-0 top-0 -translate-x-1/4 -translate-y-1/4 scale-[2] rotate-12 z-50' : ''}
                                        ${isTransitioning && selectedService === service.name && !exitComplete ?
                                            'scale-150 -translate-y-20' : ''}
                                        ${!isMobile ? 'group-hover:scale-110' : ''}`}
                                >
                                    <service.icon />
                                </div>

                                <div
                                    className={`transform transition-all duration-500 ease-out relative z-10
                                        ${!showButtons ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
                                        ${isTransitioning ? 'opacity-0 translate-y-10' : ''}`}
                                >
                                    <Button
                                        variant="default"
                                        className="relative group/button"
                                        href={service.href}
                                        onClick={() => handleServiceClick(service)}
                                    >
                                        <span className="relative flex items-center">
                                            Get Boost
                                            <svg
                                                className="ml-2 w-5 h-5 inline-block transform transition-transform duration-700 
                                                    group-hover/button:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        ))}
                        {socialServices.filter(service => service.id !== 'x').map((service: typeof socialServices[number]) => (
                            <div
                                key={service.id}
                                className={`group relative flex flex-col items-center mb-12 gap-12 p-8 rounded-2xl
                                    backdrop-blur-md bg-white/[0.03] border border-white/[0.07]
                                    transition-all duration-700 ease-out
                                    hover:bg-white/[0.05] hover:border-white/[0.12]`}
                            >
                                <div
                                    className={`transform transition-all duration-1000 ease-out relative z-10
                                        ${!showIcons ? 'opacity-0 translate-y-20 rotate-180' : 'opacity-100 translate-y-0 rotate-0'}
                                        ${isTransitioning && selectedService !== service.name ? 'opacity-0 scale-0' : ''}
                                        ${exitComplete && selectedService === service.name ?
                                            'fixed left-0 top-0 -translate-x-1/4 -translate-y-1/4 scale-[2] rotate-12 z-50' : ''}
                                        ${isTransitioning && selectedService === service.name && !exitComplete ?
                                            'scale-150 -translate-y-20' : ''}
                                        ${!isMobile ? 'group-hover:scale-110' : ''}`}
                                >
                                    <service.icon />
                                </div>

                                <div
                                    className={`transform transition-all duration-500 ease-out relative z-10
                                        ${!showButtons ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
                                        ${isTransitioning ? 'opacity-0 translate-y-10' : ''}`}
                                >
                                    <Button
                                        variant="default"
                                        className="relative group/button"
                                        href={service.href}
                                        onClick={() => handleServiceClick(service)}
                                    >
                                        <span className="relative flex items-center">
                                            Get Boost
                                            <svg
                                                className="ml-2 w-5 h-5 inline-block transform transition-transform duration-700 
                                                    group-hover/button:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Десктопная версия */}
                    <div className="hidden md:flex justify-center items-center gap-8">
                        {socialServices.map((service, index) => (
                            <div
                                key={service.id}
                                className={`group relative flex flex-col items-center gap-12 p-8 rounded-2xl
                                    backdrop-blur-md bg-white/[0.03] border border-white/[0.07]
                                    transition-all duration-700 ease-out
                                    hover:bg-white/[0.05] hover:border-white/[0.12]
                                    before:absolute before:inset-0 before:rounded-2xl
                                    before:bg-gradient-to-b 
                                    before:from-[rgba(255,255,255,0.03)] before:to-transparent
                                    before:opacity-0 before:transition-opacity before:duration-500
                                    hover:before:opacity-100
                                    ${index === 1 ? 'md:translate-y-16' : 'md:-translate-y-8'}
                                    transform
                                    ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                                    ${index === 1 ?
                                        (showCards ? 'md:translate-y-16' : 'translate-y-36') :
                                        (showCards ? 'md:-translate-y-8' : 'translate-y-12')}
                                    ${index === 0 ? 'md:order-1' : index === 2 ? 'md:order-3' : 'md:order-2'}`}
                                style={{
                                    boxShadow: `0 8px 32px -4px ${service.name === 'Telegram' ? 'rgba(0,136,204,0.07)' :
                                        service.name === 'X' ? 'rgba(255,255,255,0.05)' :
                                            'rgba(255,0,0,0.07)'}`,
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                <div
                                    className={`transform transition-all duration-1000 ease-out relative z-10
                                        ${!showIcons ? 'opacity-0 translate-y-20 rotate-180' : 'opacity-100 translate-y-0 rotate-0'}
                                        ${isTransitioning && selectedService !== service.name ? 'opacity-0 scale-0' : ''}
                                        ${exitComplete && selectedService === service.name ?
                                            'fixed left-0 top-0 -translate-x-1/4 -translate-y-1/4 scale-[2] rotate-12 z-50' : ''}
                                        ${isTransitioning && selectedService === service.name && !exitComplete ?
                                            'scale-150 -translate-y-20' : ''}
                                        group-hover:scale-110`}
                                >
                                    <service.icon />
                                </div>

                                <div
                                    className={`transform transition-all duration-500 ease-out relative z-10
                                        ${!showButtons ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
                                        ${isTransitioning ? 'opacity-0 translate-y-10' : ''}`}
                                >
                                    <Button
                                        variant="default"
                                        className="relative group/button"
                                        href={service.href}
                                        onClick={() => handleServiceClick(service)}
                                    >
                                        <span className="relative flex items-center">
                                            Get Boost
                                            <svg
                                                className="ml-2 w-5 h-5 inline-block transform transition-transform duration-700 
                                                    group-hover/button:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                        </span>
                                    </Button>
                                </div>

                                {/* Эффект свечения в цвет сервиса */}
                                <div className="absolute inset-0 -z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                    <div
                                        className="absolute inset-0 blur-2xl rounded-2xl"
                                        style={{
                                            backgroundColor: `${service.name === 'Telegram' ? 'rgba(0,136,204,0.02)' :
                                                service.name === 'X' ? 'rgba(255,255,255,0.02)' :
                                                    'rgba(255,0,0,0.02)'}`
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 