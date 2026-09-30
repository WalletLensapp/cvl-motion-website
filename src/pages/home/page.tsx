import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import Hero from './components/Hero';
import CategoriesGrid from './components/CategoriesGrid';
import TextAnimationsSection from './components/TextAnimationsSection';
import ScrollAnimationsSection from './components/ScrollAnimationsSection';
import BackgroundAnimationsSection from './components/BackgroundAnimationsSection';
import ComingNext from './components/ComingNext';
import CodeViewer from '@/components/feature/CodeViewer';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background-50 font-body text-foreground-900">
      <Navbar />
      <main>
        <Hero />
        <CategoriesGrid />
        <TextAnimationsSection />
        <ScrollAnimationsSection />
        <BackgroundAnimationsSection />
        <ComingNext />
      </main>
      <Footer />
      <CodeViewer />
    </div>
  );
}