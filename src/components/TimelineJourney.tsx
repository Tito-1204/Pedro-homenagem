import React, { useState } from 'react';
import { timelineData } from '../data/tributesData';
import { Milestone, ClipboardCheck, Wrench, HeartHandshake, Building2, ChevronDown, ChevronUp, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const TimelineJourney: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('milestone-4');

  const getIcon = (name: string) => {
    switch (name) {
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-4 h-4 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-sky-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4 text-rose-400" />;
      case 'Building2':
        return <Building2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="jornada" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 ambient-glow-blue opacity-20 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-sky-500/20 text-sky-300 text-xs font-medium uppercase tracking-wider mb-3">
          <Milestone className="w-3.5 h-3.5 text-sky-400" />
          Marcos de Serviço Fiel
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-serif">
          A Tua Trajetória: <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-amber-300 to-amber-400">Do SALS a Betel</span>
        </h2>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
        {timelineData.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const isLatest = index === timelineData.length - 1;

          return (
            <div key={item.id} className="relative group">
              
              {/* Node */}
              <div className={`absolute -left-[33px] sm:-left-[41px] top-1.5 w-8 h-8 rounded-xl flex items-center justify-center border transition-all ${
                isLatest
                  ? 'bg-slate-900 border-amber-400 text-amber-300 shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}>
                {getIcon(item.iconName)}
              </div>

              {/* Card */}
              <div
                onClick={() => toggleExpand(item.id)}
                className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border ${
                  isLatest
                    ? 'bg-slate-900/90 border-amber-500/30 shadow-md'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-amber-300 border border-slate-700">
                      {item.year}
                    </span>
                    <span className="text-xs text-sky-400 font-medium">
                      • {item.badge}
                    </span>
                  </div>

                  <button
                    className="p-1 text-slate-400 hover:text-slate-200"
                    aria-label={isExpanded ? 'Recolher detalhes' : 'Expandir detalhes'}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">
                  {item.subtitle}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-3 animate-in fade-in duration-200">
                    <ul className="space-y-1.5">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {item.scripture && (
                      <div className="p-3 rounded-xl bg-slate-950/70 border border-amber-500/15 flex items-start gap-2.5 mt-2">
                        <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs italic text-slate-200 font-serif">
                            "{item.scripture.text}"
                          </p>
                          <span className="text-[10px] font-semibold text-amber-400 block mt-0.5 font-mono">
                            — {item.scripture.reference}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
