"use client";

import { AnimatePresence } from "framer-motion";
import BackgroundGlow from '../components/BackgroundGlow';
import Header from '../components/Header';

export const LayoutContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="overflow-hidden">
            <div className="fixed inset-0 z-[-1]">
                <BackgroundGlow />
            </div>
            <Header />
            <AnimatePresence mode="wait">
                <main>
                    {children}
                </main>
            </AnimatePresence>
        </div>
    );
};

export default LayoutContent;