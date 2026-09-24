import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Image as ImageIcon, Milestone, Feather, Compass } from 'lucide-react';
import { AudioAmbientPlayer } from './AudioAmbientPlayer';
import { triggerGoldenCelebration } from '../utils/confetti';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio', icon: Compass },
    { name: 'Carta de Gratidão', href: '#carta', icon: Feather },
    { name: 'Memórias no SALS', href: '#galeria', icon: ImageIcon },
    { name: 'Trajetória', href: '#jornada', icon: Milestone },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-amber-500/15 shadow-md py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Title */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-100 flex items-center gap-1.5 font-serif">
                Irmão Pedro
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/25">
                  SALS ➔ Nova Designação
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-amber-400/80" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <AudioAmbientPlayer />

            <button
              onClick={triggerGoldenCelebration}
              className="p-2 rounded-full bg-slate-900 border border-amber-500/30 hover:border-amber-400 text-amber-300 transition-colors"
              title="Celebrar"
              aria-label="Celebrar"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-amber-500/20 px-4 pt-3 pb-5 animate-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-amber-500/30 hover:text-amber-300 text-xs font-medium transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-400" />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
