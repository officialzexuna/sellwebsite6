import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { PageView } from '../types';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView, sectionId?: string) => void;
  onOpenEstimator?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (currentView === 'home') {
        const sections = ['hero', 'services', 'projects', 'process', 'why-us', 'about', 'contact'];
        const scrollPos = window.scrollY + 120;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navLinks: { name: string; view: PageView; sectionId?: string }[] = [
    { name: 'Home', view: 'home', sectionId: 'hero' },
    { name: 'About', view: 'about', sectionId: 'about' },
    { name: 'Founder', view: 'founder' },
    { name: 'Services', view: 'services', sectionId: 'services' },
    { name: 'Projects', view: 'projects', sectionId: 'projects' },
    { name: 'Updates', view: 'updates' },
    { name: 'Contact', view: 'contact', sectionId: 'contact' },
  ];

  const handleLinkClick = (view: PageView, sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(view, sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080D18]/90 backdrop-blur-md border-b border-[#1E293B] py-3.5 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            type="button"
            onClick={() => handleLinkClick('home', 'hero')}
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#65A4FF] rounded-lg p-1 text-left"
            aria-label="ZEXUNA Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#18233C] to-[#0A101D] border border-[#3978FF]/30 p-1 group-hover:border-[#65A4FF]/60 transition-colors">
              <img
                src={COMPANY_INFO.logoPath}
                alt="ZEXUNA Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-white group-hover:text-[#65A4FF] transition-colors">
                ZEXUNA
              </span>
              <span className="text-[10px] text-[#A7B1C5] font-medium tracking-widest uppercase -mt-1 hidden sm:block">
                Technology Without Limits · India
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#10182A]/80 border border-[#1E293B] rounded-full px-3 py-1.5 backdrop-blur-md" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                currentView === link.view ||
                (currentView === 'home' && link.sectionId && activeSection === link.sectionId);

              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleLinkClick(link.view, link.sectionId)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#3978FF]/20 font-semibold'
                      : 'text-[#A7B1C5] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenEstimator && (
              <button
                type="button"
                onClick={onOpenEstimator}
                className="px-3 py-2 text-xs font-semibold text-[#A7B1C5] hover:text-white transition-colors border border-transparent hover:border-[#1E293B] rounded-lg"
              >
                Project Estimator
              </button>
            )}
            <button
              type="button"
              onClick={() => handleLinkClick('contact', 'contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#3978FF] to-[#65A4FF] hover:from-[#2a68ef] hover:to-[#5493ef] shadow-md shadow-[#3978FF]/25 hover:shadow-[#3978FF]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#A7B1C5] hover:text-white hover:bg-[#10182A] border border-[#1E293B] focus-visible:ring-2 focus-visible:ring-[#65A4FF]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#080D18]/95 backdrop-blur-xl border-b border-[#1E293B] p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleLinkClick(link.view, link.sectionId)}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-[#F7F9FF] hover:bg-[#10182A] hover:text-[#65A4FF] transition-colors border border-transparent hover:border-[#1E293B]"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-[#1E293B] flex flex-col gap-3">
              {onOpenEstimator && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimator();
                  }}
                  className="w-full text-center py-3 rounded-xl text-sm font-medium text-[#A7B1C5] bg-[#10182A] border border-[#1E293B]"
                >
                  Project Scope Estimator
                </button>
              )}
              <button
                type="button"
                onClick={() => handleLinkClick('contact', 'contact')}
                className="w-full text-center py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#3978FF] to-[#65A4FF] shadow-lg shadow-[#3978FF]/30 flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center pt-2">
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#A7B1C5] hover:text-white inline-flex items-center gap-1.5"
                >
                  <span>Instagram: {COMPANY_INFO.instagramHandle}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
