import { ServiceItem, ProjectItem, ProcessStep, StatItem, FounderProfile, CompanyUpdate, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'ZEXUNA',
  legalName: 'ZEXUNA',
  alternateNames: ['ZEXUNA Official', 'ZEXUNA Technology', 'ZEXUNA India'],
  tagline: 'Technology Without Limits.',
  founder: 'Maddisetti Hema Harsha',
  founderTitle: 'Founder & CEO',
  country: 'India',
  countryCode: 'IN',
  industry: 'Technology',
  subIndustry: 'Web Development, Web Applications, Software Development & Digital Solutions',
  email: 'official.zexuna@gmail.com',
  instagram: 'https://www.instagram.com/zexuna_official/',
  instagramHandle: '@zexuna_official',
  canonicalUrl: 'https://zexuna.com',
  experienceYears: '2+',
  completedProjects: '200+',
  clientsServed: '200+',
  logoPath: '/assets/zexuna-logo.png',
  heroHeadline: 'Your Vision. Our Technology. Limitless Possibilities.',
  heroDescription:
    'ZEXUNA creates modern websites, high-performance web applications, bespoke software, and digital solutions designed to help businesses build a commanding online presence. Founded and led by Maddisetti Hema Harsha in India, serving forward-thinking businesses worldwide.',
  aboutHeadline: 'Technology Without Limits.',
  aboutDescription:
    'ZEXUNA is an Indian technology company specializing in website development, web applications, custom software development, digital solutions, and technology services. Founded and led by Maddisetti Hema Harsha, ZEXUNA has delivered over 200+ completed web projects with an unwavering dedication to modern TypeScript/React engineering, responsive design, and practical digital execution.',
  coreServices: [
    'Website Development',
    'Web Application Development',
    'Software Development',
    'Digital Solutions',
    'Technology Services',
  ],
};

export const FOUNDER_BIO: FounderProfile = {
  name: 'Maddisetti Hema Harsha',
  title: 'Founder & CEO',
  company: 'ZEXUNA',
  country: 'India',
  officialEmail: 'official.zexuna@gmail.com',
  instagram: 'https://www.instagram.com/zexuna_official/',
  instagramHandle: '@zexuna_official',
  summary:
    'Maddisetti Hema Harsha is an Indian technology entrepreneur, software engineer, and the Founder & CEO of ZEXUNA. Under his leadership, ZEXUNA delivers production-ready websites, reactive web applications, and custom software architectures built on principles of clean code, accessible design, and transparent communication.',
  biography: [
    'Maddisetti Hema Harsha founded ZEXUNA with a definitive philosophy: "Technology Without Limits." Recognizing the widespread need for reliable, high-performance digital craftsmanship, he established ZEXUNA as a technology partner that values engineering discipline over generic templates.',
    'As Founder and Chief Executive Officer, he personally oversees architectural strategy, user experience design systems, and client delivery across every project. His technical focus centers on React, modern TypeScript, responsive reflow across all viewport widths, and semantic search engine discoverability.',
    'Under his leadership, ZEXUNA has completed over 200 web projects for businesses across diverse industries—ranging from modern corporate portals and dynamic single-page applications to bespoke web utilities—with an emphasis on real-world usability and long-term maintainability.',
  ],
  principles: [
    'Zero-Slop Craftsmanship: Every line of code and interface element serves a verified purpose.',
    'Direct Leadership Access: Clients collaborate directly with technical leadership, eliminating miscommunication.',
    'Inclusive Accessibility: Commitment to WCAG AA compliance and device-agnostic responsive design.',
    'Honest Project Scopes: Clear milestones, realistic roadmaps, and zero inflated promises.',
  ],
  expertise: [
    'Modern Web Engineering (React, Next.js, TypeScript)',
    'Single-Page Application & State Architecture',
    'Responsive Design from 320px to 4K Viewports',
    'Search Engine Optimization & Schema.org Semantic Data',
    'RESTful APIs & Third-Party System Integration',
    'Performance Optimization & Core Web Vitals',
  ],
};

export const BUSINESS_STATS: StatItem[] = [
  {
    value: '2+',
    numValue: 2,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Dedicated to modern web engineering and digital solutions',
  },
  {
    value: '200+',
    numValue: 200,
    suffix: '+',
    label: 'Completed Projects',
    description: 'High-performing websites, web apps, and digital platforms',
  },
  {
    value: '200+',
    numValue: 200,
    suffix: '+',
    label: 'Clients Served',
    description: 'Businesses empowered with a dependable online presence',
  },
  {
    value: '100%',
    numValue: 100,
    suffix: '%',
    label: 'Responsive Standards',
    description: 'Flawlessly tested across mobile, tablet, laptop, and desktop',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    shortDesc: 'Modern, responsive, fast, and SEO-optimized corporate websites and landing pages.',
    fullDesc:
      'Engineered from the ground up using React, Next.js, and modern TypeScript. Every website is built for lightning-fast load times, flawless responsiveness across every device width, and structured schema markup for search engine discovery and Google Knowledge Graph indexing.',
    iconName: 'Globe',
    features: ['Custom Responsive Layouts', 'SEO & OpenGraph Ready', 'Performance Optimized', 'Semantic HTML5 & Accessibility'],
  },
  {
    id: 'web-application-development',
    number: '02',
    title: 'Web Application Development',
    shortDesc: 'Dynamic single-page applications, interactive dashboards, and client portals.',
    fullDesc:
      'Full-featured web apps engineered for speed, complex state handling, and data visualization. We turn workflow automation and bespoke digital operations into dependable, reactive web software.',
    iconName: 'AppWindow',
    features: ['Single-Page App Architecture', 'State & Data Management', 'REST & GraphQL Integration', 'Interactive Analytics & Dashboards'],
  },
  {
    id: 'software-development',
    number: '03',
    title: 'Software Development',
    shortDesc: 'Tailored digital tools, scalable logic, and custom software built for unique workflows.',
    fullDesc:
      'When off-the-shelf software falls short, ZEXUNA engineers custom software solutions. Clean, maintainable architectures that eliminate operational bottlenecks, automate business routines, and scale reliably.',
    iconName: 'Cpu',
    features: ['Bespoke Business Logic', 'Scalable Code Architecture', 'Workflow Automation', 'Integration Pipelines'],
  },
  {
    id: 'digital-solutions',
    number: '04',
    title: 'Digital Solutions',
    shortDesc: 'Comprehensive digital strategies, interactive utilities, and tech transformation.',
    fullDesc:
      'End-to-end digital solutions that connect branding, user journeys, customer acquisition, and interactive utilities into one unified digital footprint.',
    iconName: 'Sparkles',
    features: ['Digital Strategy Consulting', 'Workflow Automation', 'Lead-Generation Tools', 'Unified Digital Footprint'],
  },
  {
    id: 'technology-services',
    number: '05',
    title: 'Technology Services',
    shortDesc: 'Technical upkeep, performance audits, security monitoring, and architecture advisory.',
    fullDesc:
      'Proactive health monitoring, speed tuning, dependency updates, and technical troubleshooting to keep your digital infrastructure running flawlessly at all times.',
    iconName: 'ShieldCheck',
    features: ['Security & Health Audits', 'Performance Speed Tuning', 'Dependency & Patch Updates', 'Architecture Advisory'],
  },
  {
    id: 'ui-ux-design',
    number: '06',
    title: 'UI/UX Design',
    shortDesc: 'Intuitive, aesthetically refined user interfaces and seamless digital user journeys.',
    fullDesc:
      'We craft bespoke user experiences rooted in human-centered design. From wireframes to high-fidelity design systems, we build layouts that convert visitors into active clients while delivering effortless digital navigation.',
    iconName: 'Layout',
    features: ['User Journey Mapping', 'Design Systems & Tokens', 'High-Fidelity Wireframes', 'Interactive Prototypes'],
  },
  {
    id: 'ecommerce-development',
    number: '07',
    title: 'E-commerce Development',
    shortDesc: 'Scalable online stores with frictionless product catalogues, carts, and checkout flows.',
    fullDesc:
      'Robust digital storefronts tailored to sell your products online. Featuring responsive catalog filtering, streamlined cart interactions, secure checkout readiness, and intuitive product showcase capabilities.',
    iconName: 'ShoppingCart',
    features: ['Product Catalogue & Filters', 'Seamless Cart Workflows', 'Mobile-First Checkout UX', 'Inventory & Order Architecture'],
  },
  {
    id: 'online-tools-utilities',
    number: '08',
    title: 'Online Tools and Utilities',
    shortDesc: 'Interactive web calculators, converters, valuation engines, and practical utilities.',
    fullDesc:
      'Engage visitors and deliver immediate utility with custom web-based tools. We build calculators, quote estimators, and workflow converters that drive repeat engagement and demonstrate business authority.',
    iconName: 'Wrench',
    features: ['Client Calculators & Estimators', 'Data Converters & Generators', 'Fast Client-Side Execution', 'Lead-Capturing Utilities'],
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'nexusflow-cloud',
    title: 'NexusFlow Enterprise Cloud Platform',
    category: 'web-app',
    categoryLabel: 'Web Application',
    description: 'Scalable multi-tenant cloud management dashboard with real-time operational telemetry.',
    details:
      'Demonstration concept designed and developed by ZEXUNA showcasing clean TypeScript architecture, complex state handling, responsive data grids, and dark-luxury UI design.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    isConcept: true,
    highlightMetric: '<0.8s TTI & 99+ Lighthouse',
    features: ['Telemetry visualization', 'Role-based control matrix', 'Automated export utilities', 'Responsive data table'],
  },
  {
    id: 'aurum-lux-store',
    title: 'Aurum Lux Modern E-Commerce',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    description: 'High-end lifestyle and technology storefront with instant cart flows and product inspection.',
    details:
      'Demonstration concept built by ZEXUNA showcasing seamless mobile shopping, category navigation, real-time client cart calculations, and performance-conscious typography.',
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Responsive Cart UX'],
    isConcept: true,
    highlightMetric: 'Frictionless Checkout UX',
    features: ['Instant drawer cart', 'Multi-attribute product filters', 'Rich gallery viewer', 'Order total calculation'],
  },
  {
    id: 'apex-capital-web',
    title: 'Apex Capital Strategic Advisors',
    category: 'web-dev',
    categoryLabel: 'Website Development',
    description: 'Corporate technology and financial advisory website built for credibility and lead conversion.',
    details:
      'Demonstration concept highlighting semantic HTML5 architecture, zero-pill typography, verified OpenGraph social metadata, and interactive project inquiry routing.',
    techStack: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'SEO Schema'],
    isConcept: true,
    highlightMetric: '100% SEO & Mobile Score',
    features: ['Interactive service showcase', 'Executive team directory', 'Lead capture validation', 'WCAG AA accessible'],
  },
  {
    id: 'omnicenter-tools',
    title: 'OmniCenter Project & Cost Estimator',
    category: 'tools',
    categoryLabel: 'Online Tools',
    description: 'Real-time interactive project budget, scope, and technology roadmap calculator.',
    details:
      'Interactive online utility developed by ZEXUNA allowing prospective clients to estimate engineering timelines, service requirements, and project scopes on the fly.',
    techStack: ['React', 'TypeScript', 'Client-Side Math', 'Tailwind CSS'],
    isConcept: true,
    highlightMetric: 'Zero Server Latency',
    features: ['Dynamic budget estimator', 'Feature toggle matrix', 'One-click quote summary', 'Instant spec export'],
  },
  {
    id: 'novacraft-studio',
    title: 'NovaCraft Digital Creative Agency',
    category: 'web-dev',
    categoryLabel: 'Website Development',
    description: 'Digital studio portfolio emphasizing fluid transitions, rich imagery, and typographic hierarchy.',
    details:
      'Demonstration concept illustrating ZEXUNA’s digital branding and modern responsive frontend craftsmanship with restrained micro-animations and dark-luxury styling.',
    techStack: ['React', 'TypeScript', 'Motion', 'Tailwind CSS'],
    isConcept: true,
    highlightMetric: 'Fluid 60fps Micro-interactions',
    features: ['Subtle ambient glow', 'Interactive case studies', 'Clean typographic layout', 'Device-tested responsive reflow'],
  },
  {
    id: 'pulse-telemetry-app',
    title: 'PulseTrack System Diagnostics',
    category: 'web-app',
    categoryLabel: 'Web Application',
    description: 'Server telemetry and uptime monitoring interface with interactive latency charts.',
    details:
      'Demonstration concept highlighting ZEXUNA’s ability to render clean interactive telemetry widgets, system status indicators, and responsive dashboard layouts.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'SVG Graphs'],
    isConcept: true,
    highlightMetric: 'Real-Time Reactivity',
    features: ['Live latency graphs', 'Incident logging filter', 'Dark mode telemetry panel', 'High density information design'],
  },
];

export const COMPANY_UPDATES: CompanyUpdate[] = [
  {
    id: 'update-knowledge-panel-seo-rollout',
    title: 'ZEXUNA Implements Complete Semantic SEO & Knowledge Graph Foundation',
    date: 'November 2026',
    category: 'Announcement',
    tag: 'SEO & Knowledge Graph',
    summary:
      'ZEXUNA rolls out comprehensive Schema.org structured data, dedicated company identity pages, and search engine discoverability standards.',
    content: [
      'As part of our commitment to transparent digital authority and open web standards, ZEXUNA has deployed full Schema.org Organization, Person, WebSite, and FAQPage structured data across the entire platform.',
      'This deployment establishes verified public information for search engines like Google to accurately recognize ZEXUNA, its founder Maddisetti Hema Harsha, its India headquarters, and its core technology services.',
      'The architecture includes automated sitemaps, robots.txt, canonical link resolution, and WCAG AA accessibility verification.',
    ],
  },
  {
    id: 'update-200-projects-completed',
    title: 'Milestone: Over 200 Web Projects & Client Deployments Completed',
    date: 'October 2026',
    category: 'Milestone',
    tag: 'Company Milestone',
    summary:
      'ZEXUNA celebrates delivering over 200 completed websites, single-page applications, and digital tools for clients globally.',
    content: [
      'Over the past 2+ years, ZEXUNA has delivered 200+ projects spanning corporate landing pages, e-commerce stores, client dashboards, and custom software utilities.',
      'Founder & CEO Maddisetti Hema Harsha noted: "Our milestone represents 200 real opportunities where thoughtful engineering, fast load times, and clean design helped businesses establish a dependable online identity."',
      'Every project continues to follow ZEXUNA’s strict code quality standards with modular React and TypeScript architecture.',
    ],
  },
  {
    id: 'update-core-services-expansion',
    title: 'Expansion of Core Technology Services Suite',
    date: 'September 2026',
    category: 'Services',
    tag: 'Service Expansion',
    summary:
      'Formalizing 5 core technology offerings: Website Development, Web Application Development, Software Development, Digital Solutions, and Technology Services.',
    content: [
      'To better address the growing demand for custom enterprise solutions and interactive web platforms, ZEXUNA has structured its capabilities into five core disciplines.',
      'From fast-loading marketing sites to single-page software dashboards with complex state management, ZEXUNA provides full-cycle engineering from discovery to launch.',
      'Clients can also utilize our interactive online Project Scope Estimator to plan timelines and architectural requirements before initiating a project.',
    ],
  },
  {
    id: 'update-responsive-blueprint-standards',
    title: 'Introduction of Zero-Slop Architecture & Viewport Reflow Benchmarks',
    date: 'August 2026',
    category: 'Architecture',
    tag: 'Engineering Standards',
    summary:
      'ZEXUNA introduces rigorous viewport testing benchmarks from 320px mobile screens to 4K displays with reduced-motion compliance.',
    content: [
      'Digital interfaces should look exceptional on every screen without awkward overflow or broken touch targets. ZEXUNA now benchmarks all client deliverables across 7 distinct screen widths (320px, 375px, 430px, 768px, 1024px, 1440px, 1920px).',
      'Additionally, full support for the `prefers-reduced-motion` media query is standard on all interactive animations to respect user accessibility preferences.',
    ],
  },
];

export const FAQS_LIST: FAQItem[] = [
  {
    question: 'What is ZEXUNA?',
    answer:
      'ZEXUNA is an Indian technology company and digital agency specialized in Website Development, Web Application Development, Software Development, Digital Solutions, and Technology Services. Founded by Maddisetti Hema Harsha, ZEXUNA creates high-performance websites and software solutions designed to give businesses a commanding online presence under the slogan "Technology Without Limits."',
    category: 'General',
  },
  {
    question: 'Who is the Founder and CEO of ZEXUNA?',
    answer:
      'Maddisetti Hema Harsha is the Founder & CEO of ZEXUNA. He leads technical architecture, design systems, and client delivery across all projects. You can contact him directly via official business email at official.zexuna@gmail.com or on Instagram @zexuna_official.',
    category: 'Founder',
  },
  {
    question: 'Where is ZEXUNA located?',
    answer:
      'ZEXUNA is proudly based in India and serves businesses, startups, and enterprises worldwide with modern web development, software engineering, and digital solutions.',
    category: 'General',
  },
  {
    question: 'What services does ZEXUNA offer?',
    answer:
      'ZEXUNA provides five core technology services: (1) Website Development, (2) Web Application Development, (3) Software Development, (4) Digital Solutions, and (5) Technology Services. In addition, ZEXUNA offers UI/UX design, e-commerce development, digital branding systems, and custom online calculators and tools.',
    category: 'Services',
  },
  {
    question: 'How does a project begin with ZEXUNA?',
    answer:
      'Projects begin with a clear Discovery phase. Clients submit an inquiry detailing their goals, timeline, and requirements. Founder & CEO Maddisetti Hema Harsha responds within 24 hours to schedule a consultation, define the technical scope, and establish clear milestones before any code is written.',
    category: 'Delivery',
  },
  {
    question: 'How are project costs and timelines determined?',
    answer:
      'Costs and timelines are determined by project complexity, scope size, required integrations, and design prerequisites. You can use our interactive Project Estimator on the website to calculate indicative timelines (typically 1 to 6 weeks depending on scope). Exact milestones are agreed upon transparently during consultation.',
    category: 'Delivery',
  },
  {
    question: 'Can ZEXUNA redesign or upgrade an existing website or web app?',
    answer:
      'Yes. ZEXUNA specializes in modernizing legacy websites, refactoring codebases into modern React and TypeScript, optimizing Core Web Vitals, enhancing mobile responsiveness, and implementing Schema.org structured data for search engine visibility.',
    category: 'Services',
  },
  {
    question: 'Does ZEXUNA guarantee a Google Knowledge Panel?',
    answer:
      'No agency or company can ethically guarantee a Google Knowledge Panel. Google independently determines whether to generate and display a Knowledge Panel based on entity authority, public web citations, consistent digital footprints, and structured Schema.org data. ZEXUNA builds the complete technical and semantic foundation—including Organization JSON-LD, Person Schema for the founder, XML sitemaps, canonical tags, and verified profiles—to give search engines the clearest and most authoritative understanding possible.',
    category: 'General',
  },
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    step: 1,
    name: 'Discover',
    tagline: 'Understanding Your Exact Needs',
    description:
      'We begin by diving deep into your business objectives, target audience, technical prerequisites, and brand vision to lay down a solid roadmap.',
    deliverables: ['Goals & requirements audit', 'Audience & competitor analysis', 'Technical scope & stack roadmap'],
  },
  {
    step: 2,
    name: 'Strategize',
    tagline: 'Architecting the Solution',
    description:
      'We formulate a clear structural blueprint: wireframes, content hierarchy, responsive layout strategy, and performance budgets before writing code.',
    deliverables: ['Information architecture', 'Page flow wireframing', 'Performance & SEO plan'],
  },
  {
    step: 3,
    name: 'Design',
    tagline: 'Crafting the Digital Experience',
    description:
      'Our UI/UX design focuses on modern visual polish, accessible contrast, typography discipline, and high-fidelity layouts tailored to your brand.',
    deliverables: ['High-fidelity responsive UI', 'Design system & typography', 'Interactive component prototypes'],
  },
  {
    step: 4,
    name: 'Develop',
    tagline: 'Precision Frontend & Backend Code',
    description:
      'We turn approved designs into production-ready React and TypeScript code with clean architecture, fast loading assets, and robust error handling.',
    deliverables: ['Clean, modular TypeScript', 'Mobile & tablet responsive builds', 'Form validation & interactive features'],
  },
  {
    step: 5,
    name: 'Launch',
    tagline: 'Verification, QA & Going Live',
    description:
      'We run rigorous cross-browser testing across all viewports, verify SEO and accessibility, test all links and forms, and deliver clean deployment.',
    deliverables: ['Cross-device QA verification', 'SEO & metadata audit', 'Deployment and client handoff'],
  },
];

export const WHY_CHOOSE_ZEXUNA = [
  {
    title: 'User-Focused Design',
    desc: 'Every layout is designed for real people: intuitive navigation, readable type, and clear calls to action that guide visitors naturally.',
    icon: 'Users',
  },
  {
    title: 'Responsive on Every Screen',
    desc: 'Tested across 320px mobile phones, tablets, laptops, and 4K displays to ensure pixel-perfect fidelity with no horizontal overflow.',
    icon: 'Smartphone',
  },
  {
    title: 'Clear & Transparent Communication',
    desc: 'Direct interaction with Founder & CEO Maddisetti Hema Harsha. No confusing jargon, hidden surprises, or delayed responses.',
    icon: 'MessageSquareCheck',
  },
  {
    title: 'Clean & Maintainable Code',
    desc: 'Strict TypeScript typing, modular React components, and zero bloat ensure your website is easy to extend, update, and maintain.',
    icon: 'Code2',
  },
  {
    title: 'Performance-Conscious Builds',
    desc: 'Fast initial load times, optimized assets, and zero unnecessary scripts so your visitors stay engaged without frustrating lag.',
    icon: 'Zap',
  },
  {
    title: 'Tailored to Your Real Goals',
    desc: 'No cookie-cutter templates. We build custom digital solutions specifically calibrated to your industry, audience, and budget.',
    icon: 'Target',
  },
];
