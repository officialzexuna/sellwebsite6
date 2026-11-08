import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEmail, validateContactForm, generateMailtoUrl, calculateProjectEstimate } from './validation';
import { computeRevealStyle } from '../hooks/useScrollReveal';

test('validateEmail correctly accepts valid email addresses', () => {
  assert.equal(validateEmail('official.zexuna@gmail.com'), true);
  assert.equal(validateEmail('client@business.co.uk'), true);
  assert.equal(validateEmail('hello.world+test@domain.io'), true);
});

test('validateEmail rejects invalid emails', () => {
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail('notanemail'), false);
  assert.equal(validateEmail('user@'), false);
  assert.equal(validateEmail('@domain.com'), false);
  assert.equal(validateEmail('user@domain'), false);
});

test('validateContactForm passes valid form data', () => {
  const result = validateContactForm({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    projectType: 'Website Development',
    budget: '$1,000 - $3,000',
    referenceUrl: 'https://example.com',
    description: 'We need a high-performance corporate landing page for our new tech launch.',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateContactForm catches missing or short fields', () => {
  const result = validateContactForm({
    fullName: 'A',
    email: 'invalid-email',
    projectType: '',
    budget: '',
    referenceUrl: '',
    description: 'Too short',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.projectType);
  assert.ok(result.errors.description);
});

test('generateMailtoUrl formats mailto with official.zexuna@gmail.com and encoded params', () => {
  const url = generateMailtoUrl({
    fullName: 'John Smith',
    email: 'john@smith.com',
    projectType: 'E-commerce Development',
    budget: '$5,000+',
    referenceUrl: 'https://store.com',
    description: 'Looking to launch a custom luxury tech shop.',
  });

  assert.ok(url.startsWith('mailto:official.zexuna@gmail.com'));
  assert.ok(url.includes('E-commerce%20Development'));
  assert.ok(url.includes('John%20Smith'));
});

test('calculateProjectEstimate computes timeline and recommended stack', () => {
  const estStarter = calculateProjectEstimate({
    serviceType: 'Website Development',
    scopeSize: 'starter',
    needsDesign: false,
    needsSeo: true,
    needsFastDelivery: false,
  });

  assert.equal(estStarter.estimatedWeeks, 1);
  assert.equal(estStarter.scopeLabel, 'STARTER');
  assert.ok(estStarter.recommendedStack.includes('React'));

  const estEnterprise = calculateProjectEstimate({
    serviceType: 'E-commerce Development',
    scopeSize: 'enterprise',
    needsDesign: true,
    needsSeo: true,
    needsFastDelivery: false,
  });

  assert.equal(estEnterprise.estimatedWeeks, 6);
  assert.ok(estEnterprise.recommendedStack.includes('Stripe Integration'));
});

test('computeRevealStyle returns hidden state with translateY before entering viewport', () => {
  const hiddenStyle = computeRevealStyle(false, 0, 4, false);
  assert.equal(hiddenStyle.opacity, 0);
  assert.equal(hiddenStyle.transform, 'translateY(24px)');
  assert.equal(hiddenStyle.transitionDelay, '0ms');
});

test('computeRevealStyle computes staggered delay when visible', () => {
  const card0 = computeRevealStyle(true, 0, 4, false);
  const card1 = computeRevealStyle(true, 1, 4, false);
  const card2 = computeRevealStyle(true, 2, 4, false);
  const card4 = computeRevealStyle(true, 4, 4, false); // wrapped in 4 cols

  assert.equal(card0.opacity, 1);
  assert.equal(card0.transform, 'translateY(0)');
  assert.equal(card0.transitionDelay, '0ms');

  assert.equal(card1.transitionDelay, '80ms');
  assert.equal(card2.transitionDelay, '160ms');
  assert.equal(card4.transitionDelay, '0ms'); // 4 % 4 = 0ms
});

test('computeRevealStyle respects prefersReducedMotion by disabling transform and transition', () => {
  const reducedMotionStyle = computeRevealStyle(false, 3, 4, true);
  assert.equal(reducedMotionStyle.opacity, 1);
  assert.equal(reducedMotionStyle.transform, 'none');
  assert.equal(reducedMotionStyle.transition, 'none');
});

test('COMPANY_INFO contains verified Knowledge Graph and SEO foundation attributes', async () => {
  const { COMPANY_INFO, FOUNDER_BIO, SERVICES_LIST, FAQS_LIST } = await import('../data/content');
  
  assert.equal(COMPANY_INFO.name, 'ZEXUNA');
  assert.equal(COMPANY_INFO.founder, 'Maddisetti Hema Harsha');
  assert.equal(COMPANY_INFO.country, 'India');
  assert.equal(COMPANY_INFO.email, 'official.zexuna@gmail.com');
  assert.equal(COMPANY_INFO.instagram, 'https://www.instagram.com/zexuna_official/');
  assert.equal(COMPANY_INFO.tagline, 'Technology Without Limits.');
  
  // Verify 5 core services specified by prompt
  const coreServices = [
    'Website Development',
    'Web Application Development',
    'Software Development',
    'Digital Solutions',
    'Technology Services',
  ];
  for (const service of coreServices) {
    assert.ok(
      COMPANY_INFO.coreServices.includes(service),
      `Core service ${service} must be included in COMPANY_INFO.coreServices`
    );
    assert.ok(
      SERVICES_LIST.some((s) => s.title === service),
      `Core service ${service} must exist in SERVICES_LIST`
    );
  }

  // Verify Founder profile
  assert.equal(FOUNDER_BIO.name, 'Maddisetti Hema Harsha');
  assert.equal(FOUNDER_BIO.title, 'Founder & CEO');
  assert.equal(FOUNDER_BIO.company, 'ZEXUNA');
  assert.equal(FOUNDER_BIO.country, 'India');
  assert.ok(FOUNDER_BIO.biography.length >= 2);
  assert.ok(FOUNDER_BIO.principles.length >= 3);

  // Verify FAQs answer target search queries
  assert.ok(FAQS_LIST.length >= 5);
  const faqQuestions = FAQS_LIST.map((f) => f.question.toLowerCase());
  assert.ok(faqQuestions.some((q) => q.includes('zexuna')));
  assert.ok(faqQuestions.some((q) => q.includes('founder')));
  assert.ok(faqQuestions.some((q) => q.includes('knowledge panel')));
});

