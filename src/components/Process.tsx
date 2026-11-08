import React, { useState } from 'react';
import { WORKING_PROCESS } from '../data/content';
import { Compass, FileCode, Palette, Code, Rocket, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const stepIcons = [
    <Compass className="w-5 h-5 text-[#65A4FF]" key="1" />,
    <FileCode className="w-5 h-5 text-[#38BDF8]" key="2" />,
    <Palette className="w-5 h-5 text-[#A78BFA]" key="3" />,
    <Code className="w-5 h-5 text-[#34D399]" key="4" />,
    <Rocket className="w-5 h-5 text-[#F472B6]" key="5" />,
  ];

  return (
    <section id="process" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10182A] border border-[#3978FF]/30 text-xs font-semibold tracking-wider text-[#65A4FF] uppercase mb-4">
            Workflow &amp; Methodology
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Five Steps From Concept to Launch
          </h2>
          <p className="text-base sm:text-lg text-[#A7B1C5]">
            A structured, transparent engineering process that eliminates guesswork and delivers dependable digital results.
          </p>
        </div>

        {/* 5-Step Process Tabs / Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 p-2 bg-[#10182A] rounded-2xl border border-[#1E293B] mb-10">
          {WORKING_PROCESS.map((proc, idx) => {
            const isCurrent = activeStep === proc.step;
            return (
              <button
                key={proc.step}
                type="button"
                onClick={() => setActiveStep(proc.step)}
                className={`flex flex-col sm:flex-row items-center gap-2.5 p-3 sm:p-4 rounded-xl text-left transition-all duration-200 ${
                  isCurrent
                    ? 'bg-[#080D18] border border-[#3978FF]/50 shadow-lg text-white'
                    : 'text-[#A7B1C5] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                    isCurrent ? 'bg-[#3978FF] text-white' : 'bg-[#18233C] text-[#A7B1C5]'
                  }`}
                >
                  0{proc.step}
                </div>
                <div className="text-center sm:text-left">
                  <span className="block text-sm font-semibold leading-tight">{proc.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed View */}
        {(() => {
          const current = WORKING_PROCESS.find((p) => p.step === activeStep) || WORKING_PROCESS[0];
          return (
            <div className="rounded-2xl bg-[#10182A] border border-[#1E293B] p-6 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-[#080D18] border border-[#1E293B]">
                      {stepIcons[current.step - 1]}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#65A4FF]">STEP 0{current.step}</span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                        {current.name} : <span className="text-gradient-electric">{current.tagline}</span>
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-[#A7B1C5] leading-relaxed mb-6">
                    {current.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">
                      Key Deliverables &amp; Milestones:
                    </h4>
                    <div className="space-y-2.5">
                      {current.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2.5 text-sm text-[#F7F9FF]/90">
                          <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Visual Badge */}
                <div className="lg:col-span-5 bg-[#080D18] rounded-xl p-6 border border-[#1E293B] flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
                    <span className="text-xs font-mono text-[#A7B1C5]">STAGE PROGRESSION</span>
                    <span className="text-xs font-mono text-[#34D399]">{current.step} OF 5 COMPLETED</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {WORKING_PROCESS.map((item) => (
                      <div
                        key={item.step}
                        className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-mono ${
                          item.step === current.step
                            ? 'bg-[#3978FF]/20 text-[#65A4FF] border border-[#3978FF]/40 font-bold'
                            : item.step < current.step
                            ? 'text-[#34D399] bg-[#34D399]/5'
                            : 'text-[#A7B1C5] opacity-60'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>0{item.step}.</span>
                          <span>{item.name}</span>
                        </span>
                        <span>{item.step <= current.step ? 'READY' : 'QUEUED'}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3978FF] to-[#65A4FF] shadow-md shadow-[#3978FF]/20"
                  >
                    <span>Start Stage 1 With ZEXUNA</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
