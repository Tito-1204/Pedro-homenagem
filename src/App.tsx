import React, { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { BackgroundCarousel } from './components/BackgroundCarousel';
import { Hero } from './components/Hero';
import { EditorialLetter } from './components/EditorialLetter';
import { PhotoGallery } from './components/PhotoGallery';
import { TimelineJourney } from './components/TimelineJourney';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [splashDone, setSplashDone] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    if (!splashDone) return;
    const handleScroll = () => {
      const sections = ['inicio', 'carta', 'galeria', 'jornada'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [splashDone]);

  return (
    <>
      {!splashDone && (
        <SplashScreen onEnter={() => setSplashDone(true)} />
      )}

      {/* Root site container: uses opacity transition (NO CSS transforms) so position:fixed works accurately on mobile */}
      <div
        className={'min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden transition-opacity duration-1000 ease-out ' + (splashDone ? 'opacity-100' : 'opacity-0 pointer-events-none')}
      >
        <Navbar activeSection={activeSection} />
        <main className="flex-1">
          {/* Unified container for Hero and EditorialLetter */}
          <div className="relative">
            {/* Sticky viewport-sized carousel: stays perfectly proportioned on mobile without 5x zoom */}
            <div className="sticky top-0 h-screen w-full -mb-[100vh] pointer-events-none overflow-hidden z-0">
              <BackgroundCarousel />
            </div>

            <div className="relative z-10">
              <Hero />
              <EditorialLetter />
            </div>
          </div>

          <PhotoGallery />
          <TimelineJourney />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
