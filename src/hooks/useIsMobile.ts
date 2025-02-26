import { useEffect, useState } from 'react';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Проверяем размер окна при монтировании
        window.addEventListener('resize', handleResize); // Добавляем обработчик события

        return () => {
            window.removeEventListener('resize', handleResize); // Убираем обработчик при размонтировании
        };
    }, []);

    return isMobile;
}; 