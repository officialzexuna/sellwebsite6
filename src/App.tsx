import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ProjectModal } from './components/ProjectModal';
import { Process } from './components/Process';
import { WhyChoose } from './components/WhyChoose';
import { About } from './components/About';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FAQSection } from './components/FAQSection';
import { FounderPage } from './components/FounderPage';
import { CompanyUpdates } from './components/CompanyUpdates';
import { SEOHead } from './components/SEOHead';
import { Breadcrumbs } from './components/Breadcrumbs';
import { SearchConsoleDashboard } from './components/SearchConsoleDashboard';
import { ProjectItem, PageView } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedService, setSelectedService] = useState<string>('Website Development');
  const [inquiryDetails, setInquiryDetails] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);

  // Sync with browser URL hash & listen for keyboard shortcuts
  useEffect(() => {
    const parseHash = () => {
      const rawHash = window.location.hash.toLowerCase().replace('#/', '').replace('#', '');
      if (rawHash.includes('search-console')) {
        setCurrentView('search-console');
      } else if (['about', 'founder', 'services', 'projects', 'updates', 'contact'].includes(rawHash)) {
        setCurrentView(rawHash as PageView);
      } else {
        setCurrentView('home');
      }
    };

    parseHash();
    window.addEventListener('popstate', parseHash);

    // Admin debug shortcut: Ctrl+Shift+S or Cmd+Shift+S
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        setCurrentView((prev) => (prev === 'search-console' ? 'home' : 'search-console'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('popstate', parseHash);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavigate = (view: PageView, sectionId?: string) => {
    setCurrentView(view);
    const newHash = view === 'home' ? '' : `#/${view}`;
    if (window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash || window.location.pathname);
    }

    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    handleNavigate('contact', 'contact');
  };

  const handleApplyEstimate = (service: string, details: string) => {
    setSelectedService(service);
    setInquiryDetails(details);
    handleNavigate('contact', 'contact');
  };

  const handleInquireFromProject = (projectTitle: string) => {
    setSelectedService('Website Development');
    setInquiryDetails(`Interested in a build architecture similar to: ${projectTitle}`);
    handleNavigate('contact', 'contact');
  };

  return (
    <div className="min-h-screen bg-[#080D18] text-[#F7F9FF] font-sans antialiased flex flex-col selection:bg-[#3978FF]/30 selection:text-white">
      {/* Dynamic SEO Head with canonical URL and JSON-LD structured data */}
      <SEOHead currentView={currentView} />

      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#3978FF] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* VIEW 1: Home (Comprehensive Showcase) */}
        {currentView === 'home' && (
          <>
            <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />
            <Stats />
            <Services onSelectService={handleSelectService} />
            <Portfolio onSelectProject={(project) => setActiveProjectModal(project)} />
            <Process />
            <WhyChoose />
            <About
              onViewFounder={() => handleNavigate('founder')}
              onOpenContact={() => handleNavigate('contact', 'contact')}
            />
            <FAQSection />
            <Contact selectedService={selectedService} inquiryDetails={inquiryDetails} />
          </>
        )}

        {/* VIEW 2: Dedicated Founder Page (Maddisetti Hema Harsha) */}
        {currentView === 'founder' && (
          <FounderPage
            onNavigateHome={() => handleNavigate('home', 'hero')}
            onOpenContact={() => handleNavigate('contact', 'contact')}
          />
        )}

        {/* VIEW 3: Dedicated Company Updates & Announcements */}
        {currentView === 'updates' && (
          <CompanyUpdates
            onNavigateHome={() => handleNavigate('home', 'hero')}
            onOpenContact={() => handleNavigate('contact', 'contact')}
          />
        )}

        {/* VIEW 4: Dedicated About ZEXUNA Page */}
        {currentView === 'about' && (
          <div className="py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs
                items={[{ label: 'About ZEXUNA' }]}
                onNavigateHome={() => handleNavigate('home', 'hero')}
              />
            </div>
            <About
              onViewFounder={() => handleNavigate('founder')}
              onOpenContact={() => handleNavigate('contact', 'contact')}
            />
            <Stats />
            <WhyChoose />
          </div>
        )}

        {/* VIEW 5: Dedicated Services Page */}
        {currentView === 'services' && (
          <div className="py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs
                items={[{ label: 'Our Services' }]}
                onNavigateHome={() => handleNavigate('home', 'hero')}
              />
            </div>
            <Services onSelectService={handleSelectService} />
            <Process />
          </div>
        )}

        {/* VIEW 6: Dedicated Projects Showcase */}
        {currentView === 'projects' && (
          <div className="py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs
                items={[{ label: 'Our Projects' }]}
                onNavigateHome={() => handleNavigate('home', 'hero')}
              />
            </div>
            <Portfolio onSelectProject={(project) => setActiveProjectModal(project)} />
          </div>
        )}

        {/* VIEW 7: Dedicated Contact Page */}
        {currentView === 'contact' && (
          <div className="py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs
                items={[{ label: 'Contact ZEXUNA' }]}
                onNavigateHome={() => handleNavigate('home', 'hero')}
              />
            </div>
            <Contact selectedService={selectedService} inquiryDetails={inquiryDetails} />
            <FAQSection />
          </div>
        )}

        {/* VIEW 8: Search Console Dashboard (Admin & Debug) */}
        {currentView === 'search-console' && (
          <SearchConsoleDashboard
            onNavigateHome={() => handleNavigate('home', 'hero')}
          />
        )}
      </main>

      {/* Modals */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onInquireAboutProject={handleInquireFromProject}
      />

      <ProjectEstimator
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onApplyEstimate={handleApplyEstimate}
      />

      {/* Footer */}
      <Footer
        onSelectService={handleSelectService}
        onNavigate={(view) => handleNavigate(view)}
      />
    </div>
  );
}
