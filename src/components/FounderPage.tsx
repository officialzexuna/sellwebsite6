import React from 'react';
import { Mail, Instagram, ArrowRight, ShieldCheck, Code2, Globe, Cpu, UserCheck } from 'lucide-react';
import { COMPANY_INFO, FOUNDER_BIO } from '../data/content';
import { Breadcrumbs } from './Breadcrumbs';

interface FounderPageProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ onNavigateHome, onOpenContact }) => {
  return (
    <div className="py-24 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <Breadcrumbs
          items={[{ label: 'Our Founder' }]}
          onNavigateHome={onNavigateHome}
        />

        {/* Top Header Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#10182A] to-[#0A101D] border border-[#1E293B] p-8 sm:p-12 mb-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3978FF]/10 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#38BDF8]/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Info Column */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080D18] border border-[#3978FF]/30 text-xs font-mono font-semibold text-[#65A4FF] uppercase tracking-wider mb-5">
                <UserCheck className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Verified Leadership Profile · Google Knowledge Graph Entity</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-4">
                {FOUNDER_BIO.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-[#65A4FF] font-medium mb-6">
                <span className="font-display font-semibold">{FOUNDER_BIO.title}</span>
                <span className="text-[#A7B1C5]">·</span>
                <span className="text-white">{COMPANY_INFO.name}</span>
                <span className="text-[#A7B1C5]">·</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#34D399] font-mono px-2.5 py-1 rounded bg-[#34D399]/10 border border-[#34D399]/20">
                  <Globe className="w-3 h-3" />
                  <span>{FOUNDER_BIO.country} (Serving Clients Worldwide)</span>
                </span>
              </div>

              <p className="text-base sm:text-lg text-[#A7B1C5] leading-relaxed max-w-2xl mb-8">
                {FOUNDER_BIO.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#3978FF] to-[#65A4FF] shadow-lg shadow-[#3978FF]/25 hover:shadow-[#3978FF]/40 transition-all"
                >
                  <span>Connect With Maddisetti Hema Harsha</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`mailto:${FOUNDER_BIO.officialEmail}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#A7B1C5] hover:text-white bg-[#080D18] border border-[#1E293B] hover:border-[#3978FF]/40 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#65A4FF]" />
                  <span>{FOUNDER_BIO.officialEmail}</span>
                </a>
              </div>
            </div>

            {/* Right Brand Badge Column */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-[#080D18] border border-[#3978FF]/30 p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-xl">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#18233C] to-[#0A101D] border border-[#3978FF]/40 flex items-center justify-center p-3 mb-5 shadow-inner">
                  <img src={COMPANY_INFO.logoPath} alt="ZEXUNA Official Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  {COMPANY_INFO.name}
                </h3>
                <span className="text-xs font-mono text-[#65A4FF] block mb-4">
                  {COMPANY_INFO.tagline}
                </span>

                <div className="w-full pt-4 border-t border-[#1E293B] space-y-2.5 text-xs text-left">
                  <div className="flex justify-between">
                    <span className="text-[#A7B1C5]">Entity Status:</span>
                    <span className="text-[#34D399] font-mono font-semibold">Active &amp; Verified</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A7B1C5]">Nationality:</span>
                    <span className="text-white font-mono">India (IN)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A7B1C5]">Projects Delivered:</span>
                    <span className="text-[#65A4FF] font-mono font-bold">{COMPANY_INFO.completedProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A7B1C5]">Official Channel:</span>
                    <a
                      href={FOUNDER_BIO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F472B6] hover:underline flex items-center gap-1 font-mono"
                    >
                      <span>{FOUNDER_BIO.instagramHandle}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biography & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Biography Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-[#10182A] border border-[#1E293B] shadow-xl">
              <span className="text-xs font-mono font-semibold text-[#65A4FF] uppercase tracking-wider block mb-3">
                BIOGRAPHY &amp; TECHNICAL ARCHITECTURE
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
                Engineering Discipline Without Compromise
              </h2>
              <div className="space-y-4 text-base text-[#A7B1C5] leading-relaxed">
                {FOUNDER_BIO.biography.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Core Leadership Principles */}
            <div className="p-8 rounded-3xl bg-[#10182A] border border-[#1E293B] shadow-xl">
              <span className="text-xs font-mono font-semibold text-[#65A4FF] uppercase tracking-wider block mb-3">
                FOUNDER'S OPERATING PRINCIPLES
              </span>
              <h2 className="font-display font-bold text-2xl text-white mb-6">
                Transparent &amp; Dependable Execution
              </h2>
              <div className="space-y-3.5">
                {FOUNDER_BIO.principles.map((principle, idx) => {
                  const [title, desc] = principle.split(': ');
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-[#080D18] border border-[#1E293B] flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white text-sm block font-semibold">{title}</strong>
                        <span className="text-xs text-[#A7B1C5] leading-relaxed">{desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Verified Skills & Official Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#10182A] border border-[#1E293B] shadow-xl">
              <span className="text-xs font-mono font-semibold text-[#65A4FF] uppercase tracking-wider block mb-3">
                TECHNICAL DOMAIN EXPERTISE
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-5">
                Specialized Engineering Stack
              </h3>
              <div className="space-y-2.5">
                {FOUNDER_BIO.expertise.map((exp, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#080D18] border border-[#1E293B] text-xs font-mono text-[#F7F9FF]">
                    <Code2 className="w-4 h-4 text-[#65A4FF] shrink-0" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#10182A] border border-[#1E293B] shadow-xl">
              <span className="text-xs font-mono font-semibold text-[#65A4FF] uppercase tracking-wider block mb-3">
                PUBLIC PROFILES &amp; CONTACT
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-5">
                Verified Direct Channels
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${FOUNDER_BIO.officialEmail}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#080D18] hover:bg-[#18233C] border border-[#1E293B] hover:border-[#3978FF]/40 transition-colors text-xs text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#65A4FF]" />
                    <span>{FOUNDER_BIO.officialEmail}</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#34D399]">Direct SLA: 24h</span>
                </a>

                <a
                  href={FOUNDER_BIO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#080D18] hover:bg-[#18233C] border border-[#1E293B] hover:border-[#3978FF]/40 transition-colors text-xs text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#F472B6]" />
                    <span>{FOUNDER_BIO.instagramHandle}</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#A7B1C5]">Official Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
