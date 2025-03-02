"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Define the props for the PageTransition component
interface PageTransitionProps {
    children: ReactNode; // Children elements to be wrapped with transition
}

// PageTransition component that applies a fade and slide effect
export const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
            animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
            exit={{ opacity: 0, y: -20 }} // Exit state: invisible and slightly above
            transition={{ duration: 0.3 }} // Duration of the transition
        >
            {/*
                Render the children elements
            */}
            {children}
        </motion.div>
    );
}; 