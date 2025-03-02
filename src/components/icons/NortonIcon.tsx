import Image from 'next/image';

// Define the props for the Norton icon
interface NortonIconProps {
    size?: 16 | 24 | 48; // Optional size for the icon
    className?: string; // Optional className for additional styling
}

// Norton icon component
export const NortonIcon = ({ size = 48, className }: NortonIconProps) => (
    <div className={`bg-white rounded-sm p-1 ${className}`}> {/* Container with background and padding */}
        <Image
            src={`/icons/norton/Size=${size}.svg`} // Path to the Norton icon
            width={size === 16 ? 23 : size === 24 ? 35 : 70} // Set width based on size prop
            height={size} // Set height based on size prop
            alt="Norton Secured" // Alt text for accessibility
        />
    </div>
);
