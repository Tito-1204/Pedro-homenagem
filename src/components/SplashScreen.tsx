import React, { useState } from 'react';
import { triggerGoldenCelebration } from '../utils/confetti';

interface SplashScreenProps {
  onEnter: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  const [clicked, setClicked] = useState(false);
  const [fading, setFading] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    triggerGoldenCelebration();

    setTimeout(() => {
      setFading(true);
    }, 500);

    setTimeout(() => {
      onEnter();
    }, 1300);
  };

  return (
    <div
      className={'fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 transition-all duration-1000 ease-in-out select-none ' + (fading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100')}
    >
      {/* Background ambient warm glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-amber-500/15 blur-[120px] transition-transform duration-1000 ' + (clicked ? 'scale-150 opacity-90' : 'scale-100 opacity-60')}
        />
      </div>

      {/* Luminous, distinct colored button (Golden/Amber) */}
      <button
        onClick={handleClick}
        disabled={clicked}
        className={'relative px-12 py-5 sm:px-16 sm:py-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-serif font-black text-2xl sm:text-3xl shadow-[0_0_50px_rgba(245,158,11,0.6)] border border-amber-200/60 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none tracking-wide ' + (clicked ? 'scale-105 shadow-[0_0_80px_rgba(251,191,36,0.9)] brightness-110' : '')}
        aria-label="Devo?"
      >
        Devo?
      </button>
    </div>
  );
};
