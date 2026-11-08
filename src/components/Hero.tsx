import React, { useState } from 'react';
import { ArrowRight, Code2, Sparkles, CheckCircle2, Laptop, Smartphone, Tablet, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#3978FF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-[#38BDF8]/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtle tag / kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10182A] border border-[#3978FF]/30 text-xs font-semibold tracking-wide text-[#65A4FF] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>TECHNOLOGY WITHOUT LIMITS</span>
            <span className="text-[#A7B1C5]">·</span>
            <span className="text-[#A7B1C5]">200+ Projects Completed</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-6">
            Your Vision.{' '}
            <span className="text-gradient-electric">Our Technology.</span>{' '}
            <br className="hidden sm:inline" />
            Limitless Possibilities.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#A7B1C5] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            {COMPANY_INFO.heroDescription}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#3978FF] to-[#65A4FF] hover:from-[#2c6bf8] hover:to-[#5597fc] shadow-lg shadow-[#3978FF]/30 hover:shadow-[#3978FF]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-[#F7F9FF] bg-[#10182A] hover:bg-[#18233C] border border-[#1E293B] hover:border-[#3978FF]/40 transition-all duration-200"
            >
              <span>Explore Our Work</span>
            </a>

            {onOpenEstimator && (
              <button
                type="button"
                onClick={onOpenEstimator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[#A7B1C5] hover:text-white border border-[#1E293B] hover:border-[#65A4FF]/30 transition-all duration-200"
              >
                <Code2 className="w-4 h-4 text-[#65A4FF]" />
                <span>Estimate Project Scope</span>
              </button>
            )}
          </div>

          {/* Proof bullets */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#A7B1C5] mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#65A4FF]" />
              <span>Full-Stack Web Development</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#65A4FF]" />
              <span>Modern React & TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#65A4FF]" />
              <span>Direct Founder Communication</span>
            </div>
          </div>
        </div>

        {/* Digital Device & Live Tech Showcase Visual */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-[#10182A]/90 border border-[#1E293B] shadow-2xl shadow-black/80 p-2 sm:p-4 backdrop-blur-xl">
            {/* Window Topbar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E293B] px-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                <span className="text-xs text-[#A7B1C5] ml-2 font-mono hidden sm:inline">
                  zexuna-engine :: v2.1.0-prod
                </span>
              </div>

              {/* Viewport switcher */}
              <div className="flex items-center gap-1 bg-[#080D18] p-1 rounded-lg border border-[#1E293B]">
                <button
                  type="button"
                  onClick={() => setActiveTab('desktop')}
                  className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                    activeTab === 'desktop' ? 'bg-[#3978FF]/20 text-[#65A4FF] font-semibold' : 'text-[#A7B1C5] hover:text-white'
                  }`}
                  aria-label="Desktop preview"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('tablet')}
                  className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                    activeTab === 'tablet' ? 'bg-[#3978FF]/20 text-[#65A4FF] font-semibold' : 'text-[#A7B1C5] hover:text-white'
                  }`}
                  aria-label="Tablet preview"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('mobile')}
                  className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                    activeTab === 'mobile' ? 'bg-[#3978FF]/20 text-[#65A4FF] font-semibold' : 'text-[#A7B1C5] hover:text-white'
                  }`}
                  aria-label="Mobile preview"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[#34D399] font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                  <span>ONLINE</span>
                </span>
              </div>
            </div>

            {/* Showcase inner content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left Code & Architecture Spec */}
              <div className="lg:col-span-5 bg-[#080D18] rounded-xl p-4 border border-[#1E293B]/70 font-mono text-xs text-[#A7B1C5]">
                <div className="flex items-center gap-2 text-white font-semibold mb-3 pb-2 border-b border-[#1E293B]">
                  <Terminal className="w-4 h-4 text-[#65A4FF]" />
                  <span>ZEXUNA Web Architecture</span>
                </div>
                <div className="space-y-1.5 leading-relaxed text-[11px] sm:text-xs">
                  <p className="text-[#65A4FF]">const agency = {`{`}</p>
                  <p className="pl-4 text-white">brand: <span className="text-[#FBBF24]">"{COMPANY_INFO.name}"</span>,</p>
                  <p className="pl-4 text-white">tagline: <span className="text-[#38BDF8]">"{COMPANY_INFO.tagline}"</span>,</p>
                  <p className="pl-4 text-white">founder: <span className="text-[#34D399]">"{COMPANY_INFO.founder}"</span>,</p>
                  <p className="pl-4 text-white">completedProjects: <span className="text-[#F472B6]">"{COMPANY_INFO.completedProjects}"</span>,</p>
                  <p className="pl-4 text-white">verifiedEmail: <span className="text-[#A78BFA]">"{COMPANY_INFO.email}"</span>,</p>
                  <p className="pl-4 text-white">stack: [<span className="text-[#60A5FA]">"React"</span>, <span className="text-[#60A5FA]">"TypeScript"</span>, <span className="text-[#60A5FA]">"Tailwind"</span>],</p>
                  <p className="pl-4 text-white">standards: [<span className="text-[#34D399]">"100% Responsive"</span>, <span className="text-[#34D399]">"WCAG AA"</span>, <span className="text-[#34D399]">"Zero Pill Slop"</span>]</p>
                  <p className="text-[#65A4FF]">{`}`};</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1E293B] flex items-center justify-between text-[11px]">
                  <span className="text-[#A7B1C5]">Build Status:</span>
                  <span className="text-[#34D399] font-semibold">200+ Projects Shipped</span>
                </div>
              </div>

              {/* Right Live Simulation Preview */}
              <div className="lg:col-span-7 bg-[#080D18] rounded-xl p-4 sm:p-6 border border-[#1E293B]/70 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img src={COMPANY_INFO.logoPath} alt="ZEXUNA Logo" className="w-6 h-6 object-contain" />
                    <span className="font-display font-bold text-sm text-white">ZEXUNA Preview Surface</span>
                  </div>
                  <span className="text-[11px] text-[#65A4FF] bg-[#3978FF]/15 px-2.5 py-0.5 rounded-full font-mono">
                    {activeTab.toUpperCase()} VIEW
                  </span>
                </div>

                {/* Adaptive mockup representation */}
                <div
                  className={`mx-auto w-full transition-all duration-300 rounded-lg p-4 bg-[#10182A] border border-[#3978FF]/30 ${
                    activeTab === 'mobile'
                      ? 'max-w-[280px] aspect-[9/16] flex flex-col justify-between'
                      : activeTab === 'tablet'
                      ? 'max-w-[460px] aspect-[4/3]'
                      : 'w-full'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="h-4 w-32 bg-[#3978FF]/40 rounded animate-pulse" />
                    <div className="h-6 w-3/4 bg-white/20 rounded" />
                    <div className="h-3 w-5/6 bg-[#A7B1C5]/20 rounded" />
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="p-2.5 rounded bg-[#080D18] border border-[#1E293B]">
                        <span className="text-[10px] text-[#A7B1C5] block">Performance</span>
                        <span className="text-sm font-bold text-[#34D399]">99+ Speed</span>
                      </div>
                      <div className="p-2.5 rounded bg-[#080D18] border border-[#1E293B]">
                        <span className="text-[10px] text-[#A7B1C5] block">Responsiveness</span>
                        <span className="text-sm font-bold text-[#65A4FF]">Pixel Exact</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1E293B] flex items-center justify-between">
                    <div className="text-[10px] text-[#A7B1C5]">
                      <span>Founder: </span>
                      <span className="text-white font-medium">{COMPANY_INFO.founder}</span>
                    </div>
                    <span className="text-[10px] text-[#65A4FF] font-semibold">Active Client Base: 200+</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#A7B1C5]">
                  <span>Engineered with zero clutter</span>
                  <a href="#services" className="text-[#65A4FF] hover:underline flex items-center gap-1 font-medium">
                    <span>View all 8 services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
