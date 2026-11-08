import React from 'react';
import { WHY_CHOOSE_ZEXUNA } from '../data/content';
import { Users, Smartphone, MessageSquare, Code2, Zap, Target } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const getIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-[#65A4FF]' };
    switch (name) {
      case 'Users':
        return <Users {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'MessageSquareCheck':
      case 'MessageSquare':
        return <MessageSquare {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Target':
        return <Target {...props} />;
      default:
        return <Users {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#10182A]/40 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10182A] border border-[#3978FF]/30 text-xs font-semibold tracking-wider text-[#65A4FF] uppercase mb-4">
            The ZEXUNA Difference
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Why Businesses Choose ZEXUNA
          </h2>
          <p className="text-base sm:text-lg text-[#A7B1C5]">
            We focus on tangible engineering rigor, dependable execution, and transparent communication—without exaggerated claims or generic templates.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ZEXUNA.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#080D18] border border-[#1E293B] hover:border-[#3978FF]/40 shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#10182A] border border-[#1E293B] flex items-center justify-center mb-5 group-hover:border-[#3978FF]/50 transition-colors">
                {getIcon(item.icon)}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2.5 group-hover:text-[#65A4FF] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#A7B1C5] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
