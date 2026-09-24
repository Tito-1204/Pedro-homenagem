import React from 'react';
import { editorialValuesData } from '../data/tributesData';
import { Feather, Heart, Wrench, HeartHandshake, Building2, Sparkles, Quote } from 'lucide-react';

export const EditorialLetter: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-sky-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="carta" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ambient-glow-gold opacity-20 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-amber-500/20 text-amber-300 text-xs font-medium uppercase tracking-wider mb-3">
          <Feather className="w-3.5 h-3.5 text-amber-400" />
          Carta de Gratidão
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-serif">
          Uma Mensagem do Coração para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-sky-300">Pedro</span>
        </h2>
      </div>

      {/* Editorial Letter Container */}
      <div className="relative rounded-3xl bg-slate-900/80 border border-amber-500/20 p-6 sm:p-9 lg:p-10 shadow-xl backdrop-blur-md mb-12 overflow-hidden">
        
        {/* Subtle decorative background quote */}
        <Quote className="absolute top-4 right-4 w-24 h-24 text-amber-500/5 pointer-events-none" />

        {/* Letter Content */}
        <div className="space-y-7 text-slate-200 leading-relaxed font-sans text-sm sm:text-base lg:text-[16px]">
          
          {/* 1. O Acolhimento na Reta Final */}
          <div className="relative pl-4 sm:pl-5 border-l-2 border-amber-500/40">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono mb-2">
              O Acolhimento na Reta Final
            </h3>
            <p className="font-serif italic text-slate-100 text-base sm:text-lg leading-relaxed">
              "Cheguei à equipa técnica do SALS num momento em que tu já estavas próximo de receber a tua nova designação. Eu nem sequer tinha uma equipa em definitivo, mas tu não hesitaste: abriste espaço, deste-me apoio e integraste-me de coração num grupo de voluntários que se tornou família."
            </p>
          </div>

          {/* 2. O Significado das Fotos */}
          <div className="relative pl-4 sm:pl-5 border-l-2 border-sky-500/40">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono mb-2">
              O Significado das Fotos (Por que eu não apareço nelas)
            </h3>
            <p className="font-serif italic text-slate-100 text-base sm:text-lg leading-relaxed">
              "Se olhares para estas memórias, não me verás em nenhuma foto ao teu lado — cheguei quase no final da tua etapa connosco. Mas o pouco tempo que partilhámos foi suficiente para ver o teu zelo, a tua humildade e o amor com que cuidavas de cada detalhe do Salão de Assembleias. Não precisei de sair na foto para ter a tua mentoria gravada no meu coração."
            </p>
          </div>

        </div>

        {/* Signature Box: Clean and sentimental */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-end">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span className="font-serif italic font-medium">Gratidão que permanece</span>
          </div>
        </div>

      </div>

      {/* 3. OS 3 VALORES DO PEDRO NO SALS */}
      <div>
        <div className="text-center mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
            Os 3 Pilares do Pedro no SALS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {editorialValuesData.map((val) => (
            <div
              key={val.id}
              className="rounded-2xl p-5 bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl border ${
                    val.color === 'amber'
                      ? 'bg-amber-500/10 border-amber-500/20'
                      : val.color === 'sky'
                      ? 'bg-sky-500/10 border-sky-500/20'
                      : 'bg-emerald-500/10 border-emerald-500/20'
                  }`}>
                    {getIcon(val.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-medium uppercase px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-400">
                    {val.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white font-serif mb-1.5">
                  {val.title}
                </h4>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
