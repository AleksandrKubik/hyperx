import Image from 'next/image';

interface NortonIconProps {
    size?: 16 | 24 | 48;
    className?: string;
}

export const NortonIcon = ({ size = 48, className }: NortonIconProps) => (
    <div className={`bg-white rounded-sm p-1 ${className}`}>
        <Image
            src={`/icons/norton/Size=${size}.svg`}
            width={size === 16 ? 23 : size === 24 ? 35 : 70}
            height={size}
            alt="Norton Secured"
        />
    </div>
);
