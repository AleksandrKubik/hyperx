import { useEffect } from 'react';
import { AppProps } from 'next/app';

// Custom App component to initialize pages
function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Remove all bis_skin_checked attributes after hydration
        const removeBisAttributes = () => {
            document.querySelectorAll('[bis_skin_checked]').forEach((el) => {
                el.removeAttribute('bis_skin_checked'); // Remove the attribute from each element
            });
        };

        removeBisAttributes(); // Initial call to remove attributes

        // Observe DOM changes to remove new bis_skin_checked attributes
        const observer = new MutationObserver(removeBisAttributes);
        observer.observe(document.body, {
            attributes: true, // Observe attribute changes
            childList: true, // Observe addition/removal of child nodes
            subtree: true // Observe all descendants
        });

        return () => observer.disconnect(); // Clean up observer on unmount
    }, []);

    return <Component {...pageProps} />; // Render the current page component
}

export default MyApp; // Export the custom App component