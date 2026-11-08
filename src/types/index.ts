export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web-dev' | 'ecommerce' | 'web-app' | 'tools';
  categoryLabel: string;
  description: string;
  details: string;
  techStack: string[];
  isConcept: boolean;
  highlightMetric: string;
  features: string[];
}

export interface ProcessStep {
  step: number;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface StatItem {
  value: string;
  numValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  budget: string;
  referenceUrl: string;
  description: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  description?: string;
}

export interface CompanyUpdate {
  id: string;
  title: string;
  date: string;
  category: 'Milestone' | 'Architecture' | 'Services' | 'Announcement';
  summary: string;
  content: string[];
  tag: string;
}

export interface FounderProfile {
  name: string;
  title: string;
  company: string;
  country: string;
  officialEmail: string;
  instagram: string;
  instagramHandle: string;
  summary: string;
  biography: string[];
  principles: string[];
  expertise: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Founder' | 'Services' | 'Delivery';
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface SearchConsoleState {
  verificationToken: string;
  isVerified: boolean;
  verifiedAt?: string;
  method?: 'meta_tag' | 'html_file' | 'dns' | 'gtm';
  updatedAt: string;
  updatedBy?: string;
}

export type PageView = 'home' | 'about' | 'founder' | 'services' | 'projects' | 'updates' | 'contact' | 'search-console';
