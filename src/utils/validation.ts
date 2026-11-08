import { ContactFormData, FormErrors } from '../types';

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: FormErrors;
} {
  const errors: FormErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.projectType || data.projectType.trim() === '') {
    errors.projectType = 'Please select a project or service category.';
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.description = 'Please describe your project (minimum 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateMailtoUrl(data: ContactFormData, officialEmail: string = 'official.zexuna@gmail.com'): string {
  const subject = `[Project Inquiry] ${data.projectType} — ${data.fullName.trim()}`;
  const body = `Hello Maddisetti Hema Harsha (Founder & CEO, ZEXUNA),

I would like to inquire about a project with ZEXUNA:

Full Name: ${data.fullName.trim()}
Email Address: ${data.email.trim()}
Project Type: ${data.projectType}
Budget Range: ${data.budget ? data.budget : 'To be discussed'}
Reference Website: ${data.referenceUrl ? data.referenceUrl : 'None provided'}

Project Description:
${data.description.trim()}

Looking forward to hearing from you.
Best regards,
${data.fullName.trim()}`;

  return `mailto:${officialEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export interface EstimationInputs {
  serviceType: string;
  scopeSize: 'starter' | 'growth' | 'enterprise';
  needsDesign: boolean;
  needsSeo: boolean;
  needsFastDelivery: boolean;
}

export function calculateProjectEstimate(inputs: EstimationInputs): {
  estimatedWeeks: number;
  scopeLabel: string;
  recommendedStack: string[];
} {
  let baseWeeks = 1;

  if (inputs.scopeSize === 'starter') {
    baseWeeks = 1;
  } else if (inputs.scopeSize === 'growth') {
    baseWeeks = 3;
  } else {
    baseWeeks = 5;
  }

  if (inputs.needsDesign) baseWeeks += 1;
  if (inputs.needsFastDelivery) baseWeeks = Math.max(1, Math.round(baseWeeks * 0.7));

  const stack: string[] = ['React', 'TypeScript', 'Tailwind CSS'];
  if (inputs.serviceType.includes('E-commerce') || inputs.scopeSize === 'enterprise') {
    stack.push('Next.js', 'Stripe Integration', 'Cloud DB');
  } else if (inputs.serviceType.includes('Application')) {
    stack.push('SPA Dashboard', 'REST/GraphQL API');
  } else {
    stack.push('SEO Schema', 'Semantic HTML5');
  }

  return {
    estimatedWeeks: baseWeeks,
    scopeLabel: inputs.scopeSize.toUpperCase(),
    recommendedStack: stack,
  };
}
