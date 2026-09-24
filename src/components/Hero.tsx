import React from 'react';
import { Wrench, Building2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16">



        {/* Título Principal */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 font-serif max-w-3xl leading-[1.2] drop-shadow-md">
          Um Legado de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
            Serviço, Dedicação
          </span>{' '}
          e Amor no{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-amber-300">
            SALS
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 font-normal drop-shadow-md">
          Uma recordação especial da tua passagem pela manutenção técnica do Salão de Assembleias de Luanda Sul, antes de seguires para a tua nova designação.
        </p>

        {/* Badges de transição */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 font-medium mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 backdrop-blur-sm shadow-sm">
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            Manutenção Técnica SALS (Petição A-2)
          </span>
          <span className="text-amber-400 font-bold">➔</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 border border-sky-500/30 text-sky-300 backdrop-blur-sm shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            Nova Designação
          </span>
        </div>

        {/* Texto Bíblico Hebreus 6:10 */}
        <div className="max-w-xl mx-auto p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-amber-500/25 backdrop-blur-md relative shadow-md text-center">
          <blockquote className="text-slate-200 text-xs sm:text-sm italic leading-relaxed font-serif">
            "Porque Deus não é injusto para se esquecer da vossa obra e do amor que mostrastes ao seu nome, por terem servido os santos e por continuarem a servir."
          </blockquote>
          <div className="mt-1.5 text-[11px] font-medium text-amber-400 font-mono">
            — Hebreus 6:10
          </div>
        </div>
      </div>
    </section>
  );
};
