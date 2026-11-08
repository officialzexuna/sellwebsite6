import React from 'react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/content';
import { Mail, Instagram, ArrowUp, ArrowRight, Download, Globe, FileText, CheckCircle2, Terminal } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onSelectService: (service: string) => void;
  onNavigate?: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (view: PageView, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(view);
    }
    if (sectionId) {
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const handleServiceClick = (title: string) => {
    onSelectService(title);
    handleNav('contact', 'contact');
  };

  return (
    <footer className="bg-[#050810] border-t border-[#1E293B] pt-16 pb-12 text-[#A7B1C5] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1E293B]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#10182A] border border-[#3978FF]/30 p-1 flex items-center justify-center">
                <img src={COMPANY_INFO.logoPath} alt="ZEXUNA Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-extrabold text-2xl text-white tracking-wider">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="font-display font-semibold text-[#65A4FF] text-base">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs text-[#A7B1C5] leading-relaxed max-w-sm">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* Country and Leadership Info */}
            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-[#34D399]">
                <Globe className="w-3.5 h-3.5" />
                <span>Headquarters: India (IN) · Worldwide Client Delivery</span>
              </div>
              <div>
                <span className="text-[#A7B1C5]">Leadership: </span>
                <button
                  type="button"
                  onClick={() => handleNav('founder')}
                  className="text-white font-semibold hover:text-[#65A4FF] transition-colors underline"
                >
                  {COMPANY_INFO.founder}
                </button>
                <span className="text-[#65A4FF]"> · {COMPANY_INFO.founderTitle}</span>
              </div>
              <div className="pt-1">
                <a
                  href="/zexuna-project.zip"
                  download="zexuna-project.zip"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#10182A] border border-[#3978FF]/30 text-xs font-semibold text-[#65A4FF] hover:text-white hover:border-[#65A4FF]/60 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full Project ZIP</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links: 6 Company Identity Pages */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider block">
              Identity Pages
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', 'hero')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about', 'about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About ZEXUNA
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('founder')}
                  className="hover:text-white transition-colors text-left font-medium text-[#65A4FF]"
                >
                  Our Founder
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services', 'services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('projects', 'projects')}
                  className="hover:text-white transition-colors text-left"
                >
                  Our Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('updates')}
                  className="hover:text-white transition-colors text-left"
                >
                  Company Updates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact', 'contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact ZEXUNA
                </button>
              </li>
              <li className="pt-1.5 border-t border-[#1E293B]">
                <button
                  type="button"
                  onClick={() => handleNav('search-console')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#65A4FF] hover:text-white transition-colors text-left"
                  title="Press Ctrl+Shift+S anytime to open Search Console"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>Search Console</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider block">
              Core Services
            </span>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.slice(0, 5).map((svc) => (
                <li key={svc.id}>
                  <button
                    type="button"
                    onClick={() => handleServiceClick(svc.title)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[#65A4FF] hover:underline"
                >
                  <FileText className="w-3 h-3" />
                  <span>XML Sitemap</span>
                </a>
                <span className="text-[#1E293B] mx-2">·</span>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[#65A4FF] hover:underline"
                >
                  <span>robots.txt</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Official Inquiries & Social */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider block">
              Direct Contact
            </span>
            <div className="space-y-3 text-xs">
              <div>
                <span className="block text-[#A7B1C5] text-[11px] mb-0.5">Founder:</span>
                <button
                  type="button"
                  onClick={() => handleNav('founder')}
                  className="text-white font-medium block hover:text-[#65A4FF] transition-colors"
                >
                  {COMPANY_INFO.founder}
                </button>
                <span className="text-[#65A4FF]">{COMPANY_INFO.founderTitle}</span>
              </div>

              <div>
                <span className="block text-[#A7B1C5] text-[11px] mb-0.5">Official Email:</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:text-[#65A4FF] transition-colors break-all font-medium"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div>
                <span className="block text-[#A7B1C5] text-[11px] mb-0.5">Official Instagram:</span>
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F472B6] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#A7B1C5]">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved. {COMPANY_INFO.tagline} Based in India.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[#A7B1C5]">Founder &amp; CEO: {COMPANY_INFO.founder}</span>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1 text-[#65A4FF] hover:text-white transition-colors font-medium"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
