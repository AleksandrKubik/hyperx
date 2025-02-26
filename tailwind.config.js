/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            keyframes: {
                'glow-blue': {
                    '0%, 100%': { opacity: 0.1 },
                    '50%': { opacity: 0.3 }
                },
                'glow-telegram': {
                    '0%, 100%': { opacity: 0.1 },
                    '50%': { opacity: 0.3 }
                },
                'glow-red': {
                    '0%, 100%': { opacity: 0.1 },
                    '50%': { opacity: 0.3 }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' }
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: 0.4 },
                    '50%': { opacity: 0.8 }
                },
                'pulse-slower': {
                    '0%, 100%': { opacity: 0.7 },
                    '50%': { opacity: 0.9 }
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'slide-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'slide-up-and-fade': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(80px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                'fade-in-3d': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateZ(-100px)',
                        filter: 'brightness(0)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateZ(0)',
                        filter: 'brightness(1)'
                    }
                },
                glow: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(10px, 10px)' },
                    '50%': { transform: 'translate(0, 20px)' },
                    '75%': { transform: 'translate(-10px, 10px)' },
                },
            },
            animation: {
                'glow-blue': 'glow-blue 3s ease-in-out infinite',
                'glow-telegram': 'glow-telegram 4s ease-in-out infinite',
                'glow-red': 'glow-red 5s ease-in-out infinite',
                float: 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 2s infinite',
                'float-more-delayed': 'float 6s ease-in-out 4s infinite',
                'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
                'pulse-slower': 'pulse-slower 8s ease-in-out infinite',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'slide-up': 'slide-up 0.7s ease-out forwards',
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 1.5s infinite',
                'slide-up-and-fade': 'slide-up-and-fade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
                'fade-in-3d': 'fade-in-3d 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'glow-slow': 'glow 8s ease-in-out infinite',
                'glow-slow-reverse': 'glow 8s ease-in-out infinite reverse',
                'glow-slower': 'glow 12s ease-in-out infinite',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        }
    },
    plugins: [],
} 