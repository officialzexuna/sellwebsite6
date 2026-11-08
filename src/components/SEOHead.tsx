import React, { useEffect } from 'react';
import { PageView } from '../types';
import { COMPANY_INFO, FOUNDER_BIO } from '../data/content';

interface SEOHeadProps {
  currentView: PageView;
}

interface ViewMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  schemaType?: string;
}

const VIEW_METADATA: Record<PageView, ViewMetadata> = {
  home: {
    title: 'ZEXUNA — Technology Without Limits | Official Website',
    description:
      'Official website of ZEXUNA, an Indian technology company founded by Maddisetti Hema Harsha. Specializing in Website Development, Web Application Development, Software Development, Digital Solutions, and Technology Services.',
    canonicalPath: '/',
    schemaType: 'Organization',
  },
  about: {
    title: 'About ZEXUNA — Technology Without Limits | Official Technology Company India',
    description:
      'Discover ZEXUNA, an Indian technology company founded and led by Maddisetti Hema Harsha. Specializing in high-performance web development, modern digital solutions, and tailored software.',
    canonicalPath: '/#/about',
    schemaType: 'AboutPage',
  },
  founder: {
    title: 'Maddisetti Hema Harsha — Founder & CEO of ZEXUNA | Official Profile',
    description:
      'Official profile of Maddisetti Hema Harsha, Founder and CEO of ZEXUNA. Technology leader in web development, web apps, and bespoke software solutions based in India.',
    canonicalPath: '/#/founder',
    schemaType: 'ProfilePage',
  },
  services: {
    title: 'Technology Services & Web Development — ZEXUNA Official',
    description:
      'Explore ZEXUNA’s 5 core technology services: Website Development, Web Application Development, Software Development, Digital Solutions, and Technology Services.',
    canonicalPath: '/#/services',
    schemaType: 'Service',
  },
  projects: {
    title: 'Our Projects & Technical Case Studies — ZEXUNA Showcase',
    description:
      'Explore ZEXUNA’s verified project portfolio. Clean TypeScript architecture, responsive web applications, and demonstration concepts built for real-world performance.',
    canonicalPath: '/#/projects',
    schemaType: 'CollectionPage',
  },
  updates: {
    title: 'Company Updates & Announcements — ZEXUNA Official News',
    description:
      'Official milestones, architecture blueprints, and technology service announcements from ZEXUNA and Founder Maddisetti Hema Harsha.',
    canonicalPath: '/#/updates',
    schemaType: 'Blog',
  },
  contact: {
    title: 'Contact ZEXUNA — Official Business Inquiry & Consultation',
    description:
      'Connect directly with ZEXUNA and Founder & CEO Maddisetti Hema Harsha. Official inquiries for web development, software services, and digital solutions with a 24-hour response time.',
    canonicalPath: '/#/contact',
    schemaType: 'ContactPage',
  },
  'search-console': {
    title: 'Google Search Console Verification — ZEXUNA Admin & Debug',
    description:
      'Search Console dashboard and ownership verification center for ZEXUNA. Manage live HTML meta tags, DNS records, and sitemap indexing status.',
    canonicalPath: '/#/search-console',
    schemaType: 'AdminPage',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ currentView }) => {
  useEffect(() => {
    const meta = VIEW_METADATA[currentView] || VIEW_METADATA.home;

    // 1. Update Document Title
    document.title = meta.title;

    // 2. Update Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', meta.description);

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://zexuna.com${meta.canonicalPath}`);

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://zexuna.com${meta.canonicalPath}`);

    // 5. Update Twitter Tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', meta.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', meta.description);

    // 6. View-Specific Schema.org Structured Data
    const scriptId = 'zexuna-dynamic-schema';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    let dynamicSchema: object;
    if (currentView === 'founder') {
      dynamicSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        dateModified: '2026-11-07',
        mainEntity: {
          '@type': 'Person',
          '@id': 'https://zexuna.com/#founder',
          name: FOUNDER_BIO.name,
          jobTitle: FOUNDER_BIO.title,
          worksFor: {
            '@type': 'Organization',
            name: COMPANY_INFO.name,
            url: COMPANY_INFO.canonicalUrl,
          },
          nationality: {
            '@type': 'Country',
            name: FOUNDER_BIO.country,
          },
          email: FOUNDER_BIO.officialEmail,
          sameAs: [FOUNDER_BIO.instagram],
          description: FOUNDER_BIO.summary,
        },
      };
    } else if (currentView === 'contact') {
      dynamicSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact ZEXUNA',
        description: 'Official contact channel for ZEXUNA and Founder & CEO Maddisetti Hema Harsha',
        url: 'https://zexuna.com/#/contact',
        mainEntity: {
          '@type': 'Organization',
          name: COMPANY_INFO.name,
          email: COMPANY_INFO.email,
          url: COMPANY_INFO.canonicalUrl,
        },
      };
    } else if (currentView === 'services') {
      dynamicSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'ZEXUNA Technology Services',
        description: 'Comprehensive software, web development, and digital solutions',
        url: 'https://zexuna.com/#/services',
        about: COMPANY_INFO.coreServices.map((svc) => ({
          '@type': 'Service',
          name: svc,
          provider: {
            '@type': 'Organization',
            name: COMPANY_INFO.name,
          },
        })),
      };
    } else {
      dynamicSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: meta.title,
        description: meta.description,
        url: `https://zexuna.com${meta.canonicalPath}`,
      };
    }

    scriptEl.textContent = JSON.stringify(dynamicSchema);
  }, [currentView]);

  return null;
};
