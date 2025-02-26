"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

// Оптимизированные динамические импорты
const PricingCard = dynamic(() => import('@/components/PricingCard'), {
    loading: () => <div className="h-96 bg-gray-100/5 rounded-lg animate-pulse" />,
    ssr: false
});
const Features = dynamic(() => import('@/components/Features'), {
    loading: () => <div className="h-96 bg-gray-100/5 rounded-lg animate-pulse" />,
    ssr: false
});
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
    loading: () => <div className="h-96 bg-gray-100/5 rounded-lg animate-pulse" />,
    ssr: false
});
const HowItWorksPage = dynamic(() => import('@/components/HowItWorksPage'), {
    loading: () => <div className="h-96 bg-gray-100/5 rounded-lg animate-pulse" />,
    ssr: false
});
const TestFlightCard = dynamic(() => import('@/components/TestFlightCard'), {
    loading: () => <div className="h-96 bg-gray-100/5 rounded-lg animate-pulse" />,
    ssr: false
});
const ContactFormDynamic = dynamic(() => import('@/components/ContactForm').then(mod => mod.default), {
    loading: () => <div className="h-96 bg-gray-100/5 rounded-lg animate-pulse" />,
    ssr: false
});
const FooterDynamic = dynamic(() => import('@/components/Footer'), {
    loading: () => <div className="h-24 bg-gray-100/5 rounded-lg animate-pulse" />,
    ssr: false
});

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

interface DeferredContentProps {
    sections: string[]; // Массив названий секций, которые нужно отобразить
}

export const DeferredContent = ({ sections }: DeferredContentProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="space-y-16 md:space-y-24">
            <AnimatePresence>
                {sections.includes('pricing') && (
                    <motion.div
                        key="pricing"
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <PricingCard />
                    </motion.div>
                )}
                {sections.includes('features') && (
                    <motion.div
                        key="features"
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <Features />
                    </motion.div>
                )}
                {sections.includes('howItWorks') && (
                    <motion.div
                        key="howItWorks"
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <HowItWorks />
                    </motion.div>
                )}
                {sections.includes('howItWorksPage') && (
                    <motion.div
                        key="howItWorksPage"
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        <HowItWorksPage />
                    </motion.div>
                )}
                {sections.includes('testFlight') && (
                    <motion.div
                        key="testFlight"
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        <TestFlightCard />
                    </motion.div>
                )}
                {sections.includes('contact') && (
                    <motion.div
                        key="contact"
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        <ContactFormDynamic />
                    </motion.div>
                )}
                {sections.includes('footer') && (
                    <motion.div
                        key="footer"
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{ duration: 0.3, delay: 0.5 }}
                    >
                        <FooterDynamic />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}; 