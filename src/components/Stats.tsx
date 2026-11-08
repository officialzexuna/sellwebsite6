import React, { useEffect, useState, useRef } from 'react';
import { BUSINESS_STATS } from '../data/content';
import { Award, Briefcase, Users2 } from 'lucide-react';

export const Stats: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const targets = BUSINESS_STATS.map((s) => s.numValue);
          const duration = 1400; // ms
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            // ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(targets.map((target) => Math.floor(target * easeOut)));

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(targets);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const statIcons = [
    <Award className="w-5 h-5 text-[#65A4FF]" key="exp" />,
    <Briefcase className="w-5 h-5 text-[#38BDF8]" key="proj" />,
    <Users2 className="w-5 h-5 text-[#34D399]" key="clients" />,
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#10182A]/50 border-y border-[#1E293B]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BUSINESS_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#080D18]/90 border border-[#1E293B] shadow-xl hover:border-[#3978FF]/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#10182A] border border-[#1E293B] group-hover:border-[#3978FF]/40 transition-colors">
                  {statIcons[idx]}
                </div>
                <span className="text-xs font-mono text-[#A7B1C5] uppercase tracking-wider">
                  VERIFIED RECORD
                </span>
              </div>

              {/* Number with stable layout (no shift) */}
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-2 flex items-baseline">
                <span>{hasAnimated ? counts[idx] : stat.numValue}</span>
                <span className="text-[#3978FF]">{stat.suffix}</span>
              </div>

              <h2 className="text-lg font-semibold text-[#F7F9FF] mb-2">{stat.label}</h2>
              <p className="text-sm text-[#A7B1C5] leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
