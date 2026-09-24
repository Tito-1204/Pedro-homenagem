import React, { useState, useEffect } from 'react';

const carouselPhotos = [
  { url: '/assets/foto-7.jpeg', alt: 'Pedro no SALS - Postura firme' },
  { url: '/assets/foto-8.jpeg', alt: 'Pedro no SALS - Sorriso amigável' }
];

export const BackgroundCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {carouselPhotos.map((photo, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={photo.url}
            className={'absolute inset-0 transition-all duration-1000 ease-in-out ' + (
              isActive
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 -translate-x-6 scale-[1.02]'
            )}
          >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover object-[center_15%] md:object-top"
              />
          </div>
        );
      })}

      {/* Layered gradients — lighter on mobile so Pedro's face shows clearly */}
      <div className="absolute inset-0 bg-slate-950/20 md:bg-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/60 md:from-slate-950/70 md:via-transparent md:to-slate-950/75" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
};
