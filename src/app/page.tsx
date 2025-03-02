import Hero from '../components/Hero'; // Import the Hero component
import { DeferredContent } from '../components/DeferredContent'; // Import the DeferredContent component
import { PageTransition } from '../components/PageTransition'; // Import the PageTransition component

// Home component that serves as the main page
export default function Home() {
  return (
    <PageTransition> {/* Wrap the content in a page transition for animation effects */}
      <div className="relative"> {/* Container for relative positioning */}
        <Hero /> {/* Render the Hero component */}
        <DeferredContent sections={['pricing', 'features', 'howItWorksPage', 'contact']} /> {/* Load deferred content for specified sections */}
      </div>
      <DeferredContent sections={['footer']} /> {/* Load deferred content for the footer section */}
    </PageTransition>
  );
}