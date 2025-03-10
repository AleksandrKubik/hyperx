import Image from 'next/image';
import classNames from 'classnames';
import { useIsMobile } from '../../hooks/useIsMobile'; // Importing the hook

interface IconProps {
    className?: string; // Optional prop for className
}

// XIcon component
export const XIcon = ({ className }: IconProps) => {
    const isMobile = useIsMobile();

    return (
        <div className={classNames(
            'relative w-40 h-40 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full transition-transform duration-300 group-hover:scale-110',
            { 'animate-float-delayed': !isMobile }, // Add float animation if not mobile
            className
        )}>
            {/* Glow effect on hover - reduced intensity */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                transition-all duration-700 bg-white/10 blur-2xl animate-pulse-slow" />

            {/* X PNG icon */}
            <div className="relative w-full h-full">
                <Image
                    src="/icons/x_icon.avif"
                    alt="X"
                    fill
                    loading="eager"
                    priority
                    sizes="(max-width: 768px) 144px, 176px"
                    quality={75}
                    className="object-contain p-4 drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)]
                        transition-all duration-700 group-hover:drop-shadow-[0_4px_24px rgba(255,255,255,0.3)]"
                />
            </div>
        </div>
    );
};

// Large version of XIcon
export const XIconLarge = ({ className }: IconProps) => {
    const isMobile = useIsMobile();

    return (
        <div className={classNames(
            'relative w-screen h-[26rem] rounded-full transition-transform duration-300 group-hover:scale-110',
            { 'animate-float-delayed': !isMobile }, // Add float animation if not mobile
            className
        )}>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                transition-all duration-700 bg-white/10 blur-2xl animate-pulse-slow" />
            <div className="relative w-full h-full">
                <Image
                    src="/icons/x_icon.avif"
                    alt="X"
                    fill
                    loading="eager"
                    priority
                    sizes="(max-width: 768px) 144px, 176px"
                    quality={75}
                    className="object-contain p-4 drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)]
                        transition-all duration-700 group-hover:drop-shadow-[0_4px_24px rgba(255,255,255,0.3)]"
                />
            </div>
        </div>
    );
};

// TelegramIcon component
export const TelegramIcon = ({ className }: IconProps) => {
    const isMobile = useIsMobile();

    return (
        <div className={`relative w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full transition-transform duration-300 group-hover:scale-110 ${!isMobile ? 'animate-float-more-delayed' : ''} ${className}`}>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                transition-all duration-700 bg-[#0088cc]/20 blur-2xl animate-pulse-slow" />

            {/* Telegram PNG icon */}
            <div className="relative w-full h-full">
                <Image
                    src="/icons/telegram_icon.avif"
                    alt="Telegram"
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 128px, 160px"
                    quality={75}
                    className="object-contain p-4 drop-shadow-[0_4px_16px_rgba(0,136,204,0.4)]
                        transition-all duration-700 group-hover:drop-shadow-[0_4px_24px rgba(0,136,204,0.6)]"
                />
            </div>
        </div>
    );
};

// Large version of TelegramIcon
export const TelegramIconLarge = ({ className }: IconProps) => {
    const isMobile = useIsMobile();

    return (
        <div className={`relative w-screen h-[26rem] rounded-full transition-transform duration-300 group-hover:scale-110 ${!isMobile ? 'animate-float-more-delayed' : ''} ${className}`}>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                transition-all duration-700 bg-[#0088cc]/20 blur-2xl animate-pulse-slow" />
            <div className="relative w-full h-full">
                <Image
                    src="/icons/telegram_icon.avif"
                    alt="Telegram"
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 128px, 160px"
                    quality={75}
                    className="object-contain p-4 drop-shadow-[0_4px_16px_rgba(0,136,204,0.4)]
                        transition-all duration-700 group-hover:drop-shadow-[0_4px_24px rgba(0,136,204,0.6)]"
                />
            </div>
        </div>
    );
};

// YouTubeIcon component
export const YoutubeIcon = ({ className }: IconProps) => {
    const isMobile = useIsMobile();

    return (
        <div className={`relative w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full transition-transform duration-300 group-hover:scale-110 ${!isMobile ? 'animate-float' : ''} ${className}`}>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                transition-all duration-700 bg-red-500/20 blur-2xl animate-pulse-slow" />

            {/* YouTube PNG icon */}
            <div className="relative w-full h-full">
                <Image
                    src="/icons/youtube_icon.avif"
                    alt="YouTube"
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 128px, 160px"
                    quality={75}
                    className="object-contain p-4 drop-shadow-[0_4px_16px rgba(255,0,0,0.4)]
                        transition-all duration-700 group-hover:drop-shadow-[0_4px_24px rgba(255,0,0,0.6)]"
                />
            </div>
        </div>
    );
};

// Large version of YoutubeIcon
export const YoutubeIconLarge = ({ className }: IconProps) => {
    const isMobile = useIsMobile();

    return (
        <div className={`relative w-screen h-[26rem] rounded-full transition-transform duration-300 group-hover:scale-110 ${!isMobile ? 'animate-float-more-delayed' : ''} ${className}`}>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                transition-all duration-700 bg-red-500/20 blur-2xl animate-pulse-slow" />
            <div className="relative w-full h-full">
                <Image
                    src="/icons/youtube_icon.avif"
                    alt="YouTube"
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 128px, 160px"
                    quality={75}
                    className="object-contain p-4 drop-shadow-[0_4px_16px rgba(255,0,0,0.4)]
                        transition-all duration-700 group-hover:drop-shadow-[0_4px_24px rgba(255,0,0,0.6)]"
                />
            </div>
        </div>
    );
};