"use client";

import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'boost-button animate-button-glow inline-flex items-center justify-center',
    {
        variants: {
            variant: {
                default: 'bg-[#0A1825] hover:bg-[#0F2234]',
                primary: 'bg-primary hover:bg-primary/90',
                secondary: 'bg-secondary hover:bg-secondary/90',
            },
            size: {
                default: 'px-10 py-4 text-lg',
                sm: 'px-8 py-3 text-base',
                lg: 'px-12 py-5 text-xl',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'ref'>,
    VariantProps<typeof buttonVariants> {
    href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, href, children, ...props }, ref) => {

        // Добавляем отступы для планшетной версии
        const paddingClasses = "pl-6 pr-6 md:pl-6 md:pr-6"; // Отступы для планшетной версии

        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(buttonVariants({ variant, size, className }), paddingClasses)}
                >
                    {children}
                </Link>
            );
        }
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

Button.displayName = 'Button';

export { Button, buttonVariants }; 