import { useEffect } from 'react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Удаляем все атрибуты bis_skin_checked после гидратации
        const removeBisAttributes = () => {
            document.querySelectorAll('[bis_skin_checked]').forEach((el) => {
                el.removeAttribute('bis_skin_checked');
            });
        };

        removeBisAttributes();

        // Наблюдаем за изменениями DOM для удаления новых bis_skin_checked атрибутов
        const observer = new MutationObserver(removeBisAttributes);
        observer.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true
        });

        return () => observer.disconnect();
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp; 