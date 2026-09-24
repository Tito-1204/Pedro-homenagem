import React from 'react';
import { Heart, Sparkles, Building2, Wrench, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 py-16 border-t border-slate-800/80 overflow-hidden">
      
      {/* Soft background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle emblem */}
        <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-amber-400/30 flex items-center justify-center mb-6 shadow-md">
          <Sparkles className="w-5 h-5 text-amber-400" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mb-3">
          Que Jeová Guie os Teus Passos, Pedro
        </h3>
        
        <p className="max-w-xl text-slate-300 text-sm leading-relaxed mb-8">
          A equipa de manutenção técnica do Salão de Assembleias de Luanda Sul estará sempre a torcer e a orar por ti nesta nova etapa do teu serviço sagrado.
        </p>

        {/* Badges Journey */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200">
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            Salão de Assembleias de Luanda Sul (SALS)
          </span>
          <span className="text-amber-400">➔</span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            Nova Designação
          </span>
        </div>

        {/* Bottom row with Feito de ❤️ por Tito Capewando */}
        <div className="w-full pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-300 text-sm flex items-center gap-1.5 font-medium">
            <span>Feito de</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline mx-0.5" />
            <span>por <strong className="text-white font-semibold">Tito Capewando</strong></span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors p-2.5 rounded-xl bg-slate-900 border border-slate-800"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
