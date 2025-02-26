import Hero from '../components/Hero';
import { DeferredContent } from '../components/DeferredContent';
import { PageTransition } from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative">
        <Hero />
        <DeferredContent sections={['pricing', 'features', 'howItWorksPage', 'contact']} />
      </div>
      <DeferredContent sections={['footer']} />
    </PageTransition>
  );
}
