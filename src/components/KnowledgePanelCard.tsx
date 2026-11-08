import React, { useState } from 'react';
import { ShieldCheck, Search, ExternalLink, Globe, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { COMPANY_INFO, FOUNDER_BIO } from '../data/content';

export const KnowledgePanelCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const entitySummary = `ZEXUNA (Technology Without Limits)
Type: Organization
Founder & CEO: Maddisetti Hema Harsha
Headquarters / Country: India
Core Services: Website Development, Web Application Development, Software Development, Digital Solutions, Technology Services
Official Email: official.zexuna@gmail.com
Official Instagram: https://www.instagram.com/zexuna_official/
Canonical Domain: https://zexuna.com/`;

  const handleCopy = () => {
    navigator.clipboard.writeText(entitySummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-b from-[#10182A] to-[#0A101D] border border-[#3978FF]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3978FF]/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#1E293B]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#080D18] border border-[#3978FF]/40 flex items-center justify-center text-[#65A4FF]">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#65A4FF] uppercase tracking-wider block font-semibold">
              Search Engine Entity Foundation
            </span>
            <h3 className="font-display font-bold text-xl text-white">
              Google Knowledge Graph Profile
            </h3>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#080D18] border border-[#1E293B] hover:border-[#3978FF]/40 text-xs font-mono text-[#A7B1C5] hover:text-white transition-colors self-start sm:self-auto"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Entity Data Copied' : 'Copy Entity Metadata'}</span>
        </button>
      </div>

      {/* Entity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Left Column: Organization Node */}
        <div className="p-4 rounded-2xl bg-[#080D18] border border-[#1E293B] space-y-2.5 text-xs font-mono">
          <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]">
            <span className="text-[#65A4FF] font-semibold">@type: Organization</span>
            <span className="text-[#34D399] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Valid Schema.org</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A7B1C5]">name:</span>
            <span className="text-white font-bold">{COMPANY_INFO.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A7B1C5]">alternateName:</span>
            <span className="text-[#F7F9FF]">ZEXUNA Official, Technology</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A7B1C5]">slogan:</span>
            <span className="text-[#38BDF8]">"{COMPANY_INFO.tagline}"</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A7B1C5]">country / base:</span>
            <span className="text-white">India (IN)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A7B1C5]">canonical:</span>
            <span className="text-[#65A4FF]">{COMPANY_INFO.canonicalUrl}</span>
          </div>
        </div>

        {/* Right Column: Founder Node */}
        <div className="p-4 rounded-2xl bg-[#080D18] border border-[#1E293B] space-y-2.5 text-xs font-mono">
          <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]">
            <span className="text-[#65A4FF] font-semibold">@type: Person (Founder)</span>
            <span className="text-[#34D399] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Linked Entity</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A7B1C5]">name:</span>
            <span className="text-white font-bold">{FOUNDER_BIO.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A7B1C5]">jobTitle:</span>
            <span className="text-[#F7F9FF]">{FOUNDER_BIO.title}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A7B1C5]">worksFor:</span>
            <span className="text-[#65A4FF]">ZEXUNA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A7B1C5]">email:</span>
            <span className="text-white">{COMPANY_INFO.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A7B1C5]">sameAs:</span>
            <span className="text-[#F472B6]">{COMPANY_INFO.instagramHandle}</span>
          </div>
        </div>
      </div>

      {/* Target Search Queries Chips */}
      <div className="mb-6">
        <span className="text-[11px] font-mono text-[#A7B1C5] block mb-2">
          Target Semantic Search Queries (Integrated into Semantic Headings &amp; Meta):
        </span>
        <div className="flex flex-wrap gap-1.5">
          {[
            'ZEXUNA',
            'ZEXUNA Official',
            'ZEXUNA Technology',
            'ZEXUNA Founder',
            'ZEXUNA Web Development',
            'ZEXUNA Software Services',
            'ZEXUNA India',
            'Maddisetti Hema Harsha ZEXUNA',
          ].map((query) => (
            <span
              key={query}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#080D18] border border-[#1E293B] text-[#A7B1C5]"
            >
              "{query}"
            </span>
          ))}
        </div>
      </div>

      {/* Honest Knowledge Panel Disclaimer */}
      <div className="p-4 rounded-2xl bg-[#080D18]/90 border border-[#3978FF]/20 flex items-start gap-3 text-xs leading-relaxed">
        <AlertCircle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
        <p className="text-[#A7B1C5]">
          <strong className="text-white">Google Knowledge Panel Transparency:</strong> Google independently determines whether to generate and display a Knowledge Panel based on entity authority, public web presence, and structured Schema.org data. ZEXUNA implements the complete technical foundation—including JSON-LD Organization markup, Person Schema, XML sitemaps, and canonical resolution—to maximize semantic clarity for search engine crawlers.
        </p>
      </div>
    </div>
  );
};
