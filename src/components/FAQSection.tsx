import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_LIST } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-[#080D18] border-t border-[#1E293B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10182A] border border-[#3978FF]/30 text-xs font-semibold tracking-wider text-[#65A4FF] uppercase mb-4 font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Search &amp; Knowledge Panel FAQ</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#A7B1C5] leading-relaxed">
            Essential facts about ZEXUNA, Founder &amp; CEO Maddisetti Hema Harsha, our India base, and our core technology services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#10182A] border border-[#1E293B] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#65A4FF]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#080D18] border border-[#1E293B] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#65A4FF] border-[#3978FF]/40' : 'text-[#A7B1C5]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#A7B1C5] leading-relaxed border-t border-[#1E293B]/50 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[11px] font-mono text-[#65A4FF] px-2 py-0.5 rounded bg-[#3978FF]/10">
                        Topic: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
