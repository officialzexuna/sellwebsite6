import React, { useState } from 'react';
import { Calendar, Tag, ArrowRight, Bell, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { COMPANY_UPDATES } from '../data/content';
import { Breadcrumbs } from './Breadcrumbs';

interface CompanyUpdatesProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
}

export const CompanyUpdates: React.FC<CompanyUpdatesProps> = ({ onNavigateHome, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Milestone', 'Architecture', 'Services', 'Announcement'];

  const filteredUpdates =
    selectedCategory === 'All'
      ? COMPANY_UPDATES
      : COMPANY_UPDATES.filter((u) => u.category === selectedCategory);

  return (
    <div className="py-24 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[{ label: 'Company Updates' }]}
          onNavigateHome={onNavigateHome}
        />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10182A] border border-[#3978FF]/30 text-xs font-mono font-semibold tracking-wider text-[#65A4FF] uppercase mb-4">
            <Bell className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Official News &amp; Milestone Logs</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Company Updates &amp; Engineering Logs
          </h1>
          <p className="text-base sm:text-lg text-[#A7B1C5] leading-relaxed">
            Transparent milestones, architectural enhancements, and official announcements from ZEXUNA and technical leadership.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#3978FF] text-white shadow-md shadow-[#3978FF]/30'
                  : 'bg-[#10182A] text-[#A7B1C5] hover:text-white border border-[#1E293B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Updates Grid */}
        <div className="space-y-8 max-w-4xl mx-auto mb-16">
          {filteredUpdates.map((update) => (
            <article
              key={update.id}
              className="p-7 sm:p-9 rounded-3xl bg-[#10182A] border border-[#1E293B] hover:border-[#3978FF]/40 shadow-xl transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-[#1E293B]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#65A4FF]">
                  <Calendar className="w-4 h-4 text-[#65A4FF]" />
                  <span>{update.date}</span>
                  <span className="text-[#1E293B]">·</span>
                  <span className="text-[#34D399] px-2 py-0.5 rounded bg-[#34D399]/10 border border-[#34D399]/20">
                    {update.category}
                  </span>
                </div>

                <span className="text-xs font-mono text-[#A7B1C5] px-2.5 py-1 rounded-md bg-[#080D18] border border-[#1E293B]">
                  {update.tag}
                </span>
              </div>

              <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-4 leading-snug">
                {update.title}
              </h2>

              <p className="text-sm sm:text-base text-[#F7F9FF] font-medium leading-relaxed mb-6">
                {update.summary}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#1E293B]/70 text-xs sm:text-sm text-[#A7B1C5] leading-relaxed">
                {update.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#10182A] to-[#18233C] border border-[#3978FF]/30 text-center shadow-2xl">
          <h3 className="font-display font-bold text-2xl text-white mb-2">
            Have an Upcoming Technical Initiative?
          </h3>
          <p className="text-sm text-[#A7B1C5] max-w-xl mx-auto mb-6">
            Work directly with Founder &amp; CEO Maddisetti Hema Harsha to architect your website, web application, or custom software.
          </p>
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#3978FF] hover:bg-[#2a68ef] shadow-lg shadow-[#3978FF]/30 transition-all"
          >
            <span>Initiate Direct Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
