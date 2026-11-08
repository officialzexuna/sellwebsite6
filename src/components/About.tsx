import React, { useState } from 'react';
import { COMPANY_INFO, FOUNDER_BIO } from '../data/content';
import { Award, Mail, Instagram, Shield, Check, ArrowRight, UserCheck, Globe, Search, ChevronRight } from 'lucide-react';
import { KnowledgePanelCard } from './KnowledgePanelCard';

interface AboutProps {
  onViewFounder?: () => void;
  onOpenContact?: () => void;
}

export const About: React.FC<AboutProps> = ({ onViewFounder, onOpenContact }) => {
  const [showKnowledgePanel, setShowKnowledgePanel] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column: Brand Story & Mission */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10182A] border border-[#3978FF]/30 text-xs font-semibold tracking-wider text-[#65A4FF] uppercase mb-4">
              About ZEXUNA · Official Technology Company
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
              {COMPANY_INFO.aboutHeadline}
            </h2>

            <div className="space-y-4 text-base text-[#A7B1C5] leading-relaxed mb-8">
              <p>
                <strong className="text-white">ZEXUNA</strong> is an Indian technology company specializing in Website Development, Web Application Development, Software Development, Digital Solutions, and Technology Services. Based in India and serving forward-thinking businesses worldwide, we empower companies to establish a commanding online presence through modern design, high-speed frontend architectures, and reliable web software.
              </p>
              <p>
                Founded and led by <strong className="text-white">Maddisetti Hema Harsha (Founder &amp; CEO)</strong>, ZEXUNA has delivered over <strong className="text-white">200+ completed projects</strong> across multiple business sectors with an unwavering dedication to modern engineering, responsive design, and practical digital execution.
              </p>
              <p>
                Every project is approached with clean engineering discipline: strict accessibility (WCAG AA), responsive layouts tested from 320px mobile screens to 4K desktop viewports, and clean codebases that clients can scale with confidence.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-[#F7F9FF]">
                <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Website &amp; Web App Development</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#F7F9FF]">
                <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Custom Software Solutions</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#F7F9FF]">
                <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Digital Solutions &amp; Utilities</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#F7F9FF]">
                <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Direct Founder Consultation</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#3978FF] to-[#65A4FF] shadow-md shadow-[#3978FF]/20 hover:shadow-[#3978FF]/40 transition-all"
              >
                <span>Connect With Maddisetti Hema Harsha</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setShowKnowledgePanel(!showKnowledgePanel)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-semibold text-[#65A4FF] bg-[#10182A] border border-[#3978FF]/30 hover:border-[#65A4FF]/60 transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{showKnowledgePanel ? 'Hide Knowledge Graph' : 'Inspect Knowledge Graph Schema'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Prominent & Accurate Founder Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#10182A] border border-[#1E293B] shadow-2xl p-7 sm:p-9 overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#3978FF]/10 blur-3xl pointer-events-none rounded-full" />

              {/* Founder Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#1E293B]">
                <div className="w-16 h-16 rounded-2xl bg-[#080D18] border border-[#3978FF]/40 flex items-center justify-center p-2 text-white font-display font-extrabold text-2xl tracking-wider">
                  <img src={COMPANY_INFO.logoPath} alt="ZEXUNA Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#65A4FF] uppercase tracking-wider block">
                    FOUNDER &amp; CEO, ZEXUNA
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {COMPANY_INFO.founder}
                  </h3>
                  <span className="text-xs text-[#A7B1C5] font-normal flex items-center gap-1.5 mt-0.5">
                    <Globe className="w-3 h-3 text-[#34D399]" />
                    <span>Based in India · Technology Architect</span>
                  </span>
                </div>
              </div>

              {/* Verified Metrics Card */}
              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080D18] border border-[#1E293B]">
                  <span className="text-[#A7B1C5]">Industry Experience</span>
                  <span className="text-white font-bold">{COMPANY_INFO.experienceYears} Years</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080D18] border border-[#1E293B]">
                  <span className="text-[#A7B1C5]">Websites &amp; Solutions</span>
                  <span className="text-[#34D399] font-bold">{COMPANY_INFO.completedProjects} Completed</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080D18] border border-[#1E293B]">
                  <span className="text-[#A7B1C5]">Client Partnerships</span>
                  <span className="text-[#65A4FF] font-bold">{COMPANY_INFO.clientsServed} Served</span>
                </div>
              </div>

              {/* Founder Page Link */}
              {onViewFounder && (
                <button
                  type="button"
                  onClick={onViewFounder}
                  className="w-full mb-4 inline-flex items-center justify-between p-3 rounded-xl bg-[#080D18] hover:bg-[#18233C] border border-[#3978FF]/30 text-xs font-semibold text-[#65A4FF] hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#34D399]" />
                    <span>Read Verified Founder Profile</span>
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {/* Official Contact Links */}
              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#080D18] hover:bg-[#18233C] border border-[#1E293B] hover:border-[#3978FF]/40 transition-colors text-xs text-[#F7F9FF] group"
                >
                  <Mail className="w-4 h-4 text-[#65A4FF] group-hover:scale-110 transition-transform" />
                  <span className="truncate">{COMPANY_INFO.email}</span>
                </a>

                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#080D18] hover:bg-[#18233C] border border-[#1E293B] hover:border-[#3978FF]/40 transition-colors text-xs text-[#F7F9FF] group"
                >
                  <Instagram className="w-4 h-4 text-[#F472B6] group-hover:scale-110 transition-transform" />
                  <span>Instagram: {COMPANY_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Knowledge Panel Entity Inspector */}
        {showKnowledgePanel && (
          <div className="mb-12 animate-in fade-in duration-300">
            <KnowledgePanelCard />
          </div>
        )}
      </div>
    </section>
  );
};
