"use client";

import { AnimatePresence } from "framer-motion";
import BackgroundGlow from '../components/BackgroundGlow';
import Header from '../components/Header';

// LayoutContent component to wrap the main content of the application
export const LayoutContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="overflow-hidden">
            {/* Background glow effect */}
            <div className="fixed inset-0 z-[-1]">
                <BackgroundGlow />
            </div>
            {/* Header component */}
            <Header />
            {/* AnimatePresence for handling animations on component mount/unmount */}
            <AnimatePresence mode="wait">
                <main>
                    {children} {/* Render the child components */}
                </main>
            </AnimatePresence>
        </div>
    );
};

export default LayoutContent;