import { useEffect, useState } from 'react';

// Custom hook to determine if the device is mobile
export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false); // State to track if the device is mobile

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Update state based on window width
        };

        handleResize(); // Check window size on mount
        window.addEventListener('resize', handleResize); // Add event listener for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener on unmount
        };
    }, []);

    return isMobile; // Return the mobile state
}; 