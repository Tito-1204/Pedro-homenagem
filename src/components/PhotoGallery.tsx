import React, { useState, useEffect } from 'react';
import { PhotoItem } from '../types';
import { photosData } from '../data/tributesData';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, MapPin, Maximize2 } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [photos] = useState<PhotoItem[]>(photosData);
  const [activeModalPhoto, setActiveModalPhoto] = useState<PhotoItem | null>(null);

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalPhoto) return;
      if (e.key === 'Escape') setActiveModalPhoto(null);
      if (e.key === 'ArrowRight') navigateModal(1);
      if (e.key === 'ArrowLeft') navigateModal(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalPhoto, photos]);

  const navigateModal = (direction: number) => {
    if (!activeModalPhoto) return;
    const currentIndex = photos.findIndex(p => p.id === activeModalPhoto.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + photos.length) % photos.length;
    setActiveModalPhoto(photos[nextIndex]);
  };

  // Bento Grid arrangement
  const getBentoClasses = (index: number) => {
    switch (index) {
      case 0:
        return 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto';
      case 1:
        return 'md:col-span-1 md:row-span-1 aspect-[4/3]';
      case 2:
        return 'md:col-span-1 md:row-span-1 aspect-[4/3]';
      case 3:
        return 'md:col-span-1 md:row-span-2 aspect-[4/3] md:aspect-auto';
      case 4:
        return 'md:col-span-1 md:row-span-1 aspect-[4/3]';
      case 5:
        return 'md:col-span-1 md:row-span-1 aspect-[4/3]';
      default:
        return 'md:col-span-1 aspect-[4/3]';
    }
  };

  return (
    <section id="galeria" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-amber-500/20 text-amber-300 text-xs font-medium uppercase tracking-wider mb-3">
          <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
          Memórias Fotográficas
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-serif">
          Momentos e Recordações no <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-sky-300">SALS</span>
        </h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 auto-rows-[270px]">
        {photos.map((photo, index) => {
          const bentoClass = getBentoClasses(index);

          return (
            <div
              key={photo.id}
              onClick={() => setActiveModalPhoto(photo)}
              className={`group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-500 hover:shadow-xl cursor-pointer flex flex-col justify-end ${bentoClass}`}
            >
              {/* Image */}
              <img
                src={photo.url}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading={index < 3 ? 'eager' : 'lazy'}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>

              {/* Top Zoom Icon */}
              <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-slate-950/80 border border-slate-700/60 text-slate-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-md">
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                <h3 className="text-base font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
                
                <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed font-sans">
                  {photo.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal em Tela Cheia */}
      {activeModalPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setActiveModalPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalPhoto(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-950/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Photo Button */}
            <button
              onClick={() => navigateModal(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-950/90 text-slate-300 hover:text-amber-400 hover:bg-slate-800 border border-slate-700 transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Photo Button */}
            <button
              onClick={() => navigateModal(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-950/90 text-slate-300 hover:text-amber-400 hover:bg-slate-800 border border-slate-700 transition-colors md:right-[41%]"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* High-Res Image view */}
            <div className="md:w-3/5 bg-black flex items-center justify-center min-h-[280px] sm:min-h-[440px] p-2">
              <img
                src={activeModalPhoto.url}
                alt={activeModalPhoto.title}
                className="max-h-[60vh] md:max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            {/* Details sidebar */}
            <div className="md:w-2/5 p-6 sm:p-7 flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeModalPhoto.location}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-serif mb-3">
                  {activeModalPhoto.title}
                </h3>

                <p className="text-slate-200 text-sm leading-relaxed font-sans">
                  {activeModalPhoto.caption}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-serif italic">
                <span>Memórias do SALS</span>
                <span className="text-amber-400/90">Rumo a Betel</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
