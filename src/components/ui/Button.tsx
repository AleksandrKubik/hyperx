"use client";

import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Define button variants using class-variance-authority
const buttonVariants = cva(
    'boost-button animate-button-glow inline-flex items-center justify-center',
    {
        variants: {
            variant: {
                default: 'bg-[#0A1825] hover:bg-[#0F2234]', // Default button style
                primary: 'bg-primary hover:bg-primary/90', // Primary button style
                secondary: 'bg-secondary hover:bg-secondary/90', // Secondary button style
            },
            size: {
                default: 'px-10 py-4 text-lg', // Default size
                sm: 'px-8 py-3 text-base', // Small size
                lg: 'px-12 py-5 text-xl', // Large size
            },
        },
        defaultVariants: {
            variant: 'default', // Default variant
            size: 'default', // Default size
        },
    }
);

// Define ButtonProps interface extending standard button attributes and variant props
export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'ref'>,
    VariantProps<typeof buttonVariants> {
    href?: string; // Optional href for link behavior
}

// Create a Button component using forwardRef
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, href, children, ...props }, ref) => {

        // Add padding classes for tablet version
        const paddingClasses = "pl-6 pr-6 md:pl-6 md:pr-6"; // Padding for tablet version

        if (href) {
            // Render as a Link if href is provided
            return (
                <Link
                    href={href}
                    className={cn(buttonVariants({ variant, size, className }), paddingClasses)}
                >
                    {children}
                </Link>
            );
        }
        // Render as a button if no href is provided
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }), paddingClasses)}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button'; // Set display name for debugging

export { Button, buttonVariants }; // Export the Button component and variants 