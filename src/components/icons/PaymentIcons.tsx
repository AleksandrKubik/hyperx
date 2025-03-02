import Image from 'next/image';

// Define the props for payment icons
interface PaymentIconProps {
    size?: 16 | 24 | 48; // Optional size for the icon
    className?: string; // Optional className for additional styling
}

// Visa icon component
export const VisaIcon = ({ size = 24, className }: PaymentIconProps) => (
    <Image
        src={`/icons/payment_icons/visa/Size=${size}.svg`} // Path to the Visa icon
        alt="Visa" // Alt text for accessibility
        width={size} // Set width based on size prop
        height={size} // Set height based on size prop
        className={className} // Apply additional className if provided
        style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
    />
);

// Mastercard icon component
export const MastercardIcon = ({ size = 24, className }: PaymentIconProps) => (
    <Image
        src={`/icons/payment_icons/mastercard/Size=${size}.svg`} // Path to the Mastercard icon
        alt="Mastercard" // Alt text for accessibility
        width={size} // Set width based on size prop
        height={size} // Set height based on size prop
        className={className} // Apply additional className if provided
        style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
    />
);

// American Express icon component
export const AmexIcon = ({ size = 24, className }: PaymentIconProps) => (
    <Image
        src={`/icons/payment_icons/amex/Size=${size}.svg`} // Path to the American Express icon
        alt="American Express" // Alt text for accessibility
        width={size} // Set width based on size prop
        height={size} // Set height based on size prop
        className={className} // Apply additional className if provided
        style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
    />
);

// Apple Pay icon component
export const ApplePayIcon = ({ size = 24, className }: PaymentIconProps) => (
    <Image
        src={`/icons/payment_icons/applepay/Size=${size}.svg`} // Path to the Apple Pay icon
        alt="Apple Pay" // Alt text for accessibility
        width={size} // Set width based on size prop
        height={size} // Set height based on size prop
        className={className} // Apply additional className if provided
        style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
    />
);

// Google Pay icon component
export const GooglePayIcon = ({ size = 24, className }: PaymentIconProps) => (
    <Image
        src={`/icons/payment_icons/gpay/Size=${size}.svg`} // Path to the Google Pay icon
        alt="Google Pay" // Alt text for accessibility
        width={size} // Set width based on size prop
        height={size} // Set height based on size prop
        className={className} // Apply additional className if provided
        style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
    />
); 