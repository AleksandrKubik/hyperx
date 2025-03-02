"use client";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { DeferredContent } from '../../../components/DeferredContent'; // Import deferred content component
import { XIconLarge } from '../../../components/icons/SocialIcons'; // Import large X icon

export default function XBoostPage() {
    const [showContent, setShowContent] = useState(false); // State to control content visibility
    const [isTransitioning, setIsTransitioning] = useState(true); // State to control transition effect
    const [showTitle, setShowTitle] = useState(false); // State to control title visibility
    const [showDescription, setShowDescription] = useState(false); // State to control description visibility
    const [scrollY, setScrollY] = useState(0); // State to track vertical scroll position
    const [isClient, setIsClient] = useState(false); // State to check if the component is rendered on the client

    useEffect(() => {
        setIsClient(true); // Set client state to true

        setTimeout(() => {
            setIsTransitioning(false); // End transition after timeout
            setTimeout(() => {
                setShowTitle(true); // Show title after transition
                setShowDescription(true); // Show description after transition
                setShowContent(true); // Show content after transition
            }, 400);
        }, 400);

        const handleScroll = () => {
            if (window) {
                setScrollY(window.scrollY); // Update scroll position
            }
        };

        // Add scroll event listener if window exists
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            // Call once for initialization
            handleScroll();
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll); // Clean up event listener
            }
        };
    }, []);

    // Default styles for server-side rendering
    const defaultStyle = {
        opacity: 1,
        filter: 'blur(0px)',
        transform: 'scale(1)',
    };

    // Styles for client-side rendering
    const clientStyle = isClient ? {
        opacity: Math.max(1 - scrollY / 500, 0.2), // Adjust opacity based on scroll
        filter: `blur(${Math.min(scrollY / 100, 8)}px)`, // Adjust blur based on scroll
        transform: `scale(${1 + Math.min(scrollY / 100, 8) / 16})`, // Adjust scale based on scroll
        willChange: 'opacity, filter, transform' // Optimize for performance
    } : defaultStyle;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animate to visible state
            exit={{ opacity: 0, y: -20 }} // Exit animation state
            transition={{ duration: 0.5 }} // Transition duration
        >
            <main className="min-h-screen relative overflow-hidden">
                {/* Animated icon */}
                <div
                    className="fixed transition-all duration-1000 ease-out"
                    style={clientStyle} // Apply client styles
                >
                    <div className="w-screen h-[1200px] md:h-[800px] lg:h-[1000px]">
                        <XIconLarge /> {/* Render large X icon */}
                    </div>
                </div>
                <div className="max-w-3xl mx-auto text-center top-20 relative pt-72">
                    {/* Title */}
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
                            <span className="text-[#1DA1F2]">Grow your X account</span> <br />fast & organically
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
                {/* Page content */}
                <div className={`mx-auto relative
                    transition-all duration-700 delay-300
                    ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <DeferredContent sections={['pricing', 'features', 'howItWorks', 'testFlight', 'contact', 'footer']} />
                </div>
            </main>
        </motion.div>
    );
}