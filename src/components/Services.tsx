import React from 'react';
import {
  Globe,
  Layout,
  ShoppingCart,
  AppWindow,
  Cpu,
  ShieldCheck,
  Sparkles,
  Wrench,
  ArrowRight,
  Check,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/content';
import { ServiceItem } from '../types';
import { useScrollRevealItem } from '../hooks/useScrollReveal';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onInquire: (title: string) => void;
  getIcon: (iconName: string) => React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onInquire, getIcon }) => {
  const { ref, style } = useScrollRevealItem<HTMLDivElement>(index, 4);

  return (
    <div ref={ref} style={style} className="h-full flex">
      <div className="w-full flex flex-col justify-between p-6 rounded-2xl bg-[#10182A]/80 border border-[#1E293B] hover:border-[#3978FF]/50 hover:bg-[#10182A] shadow-lg hover:shadow-2xl hover:shadow-[#3978FF]/10 transition-all duration-300 group">
        <div>
          {/* Card Top: Number & Icon */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-xl bg-[#080D18] border border-[#1E293B] flex items-center justify-center group-hover:border-[#3978FF]/40 transition-colors">
              {getIcon(service.iconName)}
            </div>
            <span className="font-mono text-xs font-semibold text-[#65A4FF] bg-[#3978FF]/10 px-2.5 py-1 rounded-md">
              {service.number}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="font-display font-bold text-lg text-white mb-2.5 group-hover:text-[#65A4FF] transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-[#A7B1C5] leading-relaxed mb-5">
            {service.shortDesc}
          </p>

          {/* Feature bullets */}
          <ul className="space-y-2 mb-6 pt-4 border-t border-[#1E293B]/60">
            {service.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-center gap-2 text-xs text-[#F7F9FF]/80">
                <Check className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => onInquire(service.title)}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#F7F9FF] bg-[#080D18] hover:bg-[#3978FF] hover:text-white border border-[#1E293B] hover:border-[#3978FF] transition-all duration-200 group/btn"
        >
          <span>Request {service.title}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#65A4FF]' };
    switch (iconName) {
      case 'Globe':
        return <Globe {...props} />;
      case 'Layout':
        return <Layout {...props} />;
      case 'ShoppingCart':
        return <ShoppingCart {...props} />;
      case 'AppWindow':
        return <AppWindow {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Wrench':
        return <Wrench {...props} />;
      default:
        return <Globe {...props} />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10182A] border border-[#3978FF]/30 text-xs font-semibold tracking-wider text-[#65A4FF] uppercase mb-4">
            Capabilities &amp; Solutions
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            Engineered Services For Modern Growth
          </h2>
          <p className="text-base sm:text-lg text-[#A7B1C5] leading-relaxed">
            From bespoke corporate websites and high-converting online stores to scalable web applications and digital utilities, ZEXUNA delivers end-to-end technology solutions.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onInquire={handleInquire}
              getIcon={getIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
