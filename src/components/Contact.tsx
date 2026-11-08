import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Send, CheckCircle2, Copy, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/content';
import { ContactFormData, FormErrors } from '../types';
import { validateContactForm, generateMailtoUrl } from '../utils/validation';

interface ContactProps {
  selectedService: string;
  inquiryDetails: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService, inquiryDetails }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    projectType: 'Website Development',
    budget: '$1,000 - $3,000',
    referenceUrl: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [copied, setCopied] = useState(false);

  // Sync selected service if clicked from services section or estimator
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        projectType: selectedService,
      }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (inquiryDetails) {
      setFormData((prev) => ({
        ...prev,
        description: prev.description ? `${prev.description}\n\n${inquiryDetails}` : inquiryDetails,
      }));
    }
  }, [inquiryDetails]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);

      // Focus first error field for accessibility
      const firstErrorKey = Object.keys(validation.errors)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) el.focus();
      return;
    }

    setErrors({});
    const mailtoUrl = generateMailtoUrl(formData, COMPANY_INFO.email);

    // Launch email application
    window.location.href = mailtoUrl;

    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  const handleCopyInquiry = () => {
    const inquiryText = `Inquiry to ZEXUNA (Attn: ${COMPANY_INFO.founder}, ${COMPANY_INFO.founderTitle})
Name: ${formData.fullName}
Email: ${formData.email}
Project Type: ${formData.projectType}
Budget: ${formData.budget || 'To be discussed'}
Reference Website: ${formData.referenceUrl || 'None'}

Description:
${formData.description}`;

    navigator.clipboard.writeText(inquiryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#10182A]/30 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10182A] border border-[#3978FF]/30 text-xs font-semibold tracking-wider text-[#65A4FF] uppercase mb-4">
            Direct Project Inquiries
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-base sm:text-lg text-[#A7B1C5]">
            Have an upcoming project, website redesign, or custom software requirement? Fill out the inquiry details below to connect directly with Founder &amp; CEO Maddisetti Hema Harsha.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Official Contact Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#10182A] border border-[#1E293B] shadow-2xl">
              <span className="text-xs font-mono font-semibold text-[#65A4FF] uppercase tracking-wider block mb-2">
                OFFICIAL COMPANY CONTACT
              </span>
              <h3 className="font-display font-bold text-2xl text-white mb-1">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-[#A7B1C5] mb-6">
                {COMPANY_INFO.tagline}
              </p>

              {/* Founder Information */}
              <div className="p-4 rounded-2xl bg-[#080D18] border border-[#1E293B] mb-6">
                <span className="text-[11px] font-mono text-[#A7B1C5] block">FOUNDER &amp; LEADERSHIP</span>
                <span className="font-display font-bold text-lg text-white block mt-0.5">
                  {COMPANY_INFO.founder}
                </span>
                <span className="text-xs text-[#65A4FF] font-medium block">
                  {COMPANY_INFO.founderTitle}
                </span>
              </div>

              {/* Official Contact Details */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-[#A7B1C5] block mb-1">Official Business Email:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-[#65A4FF] transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#65A4FF] shrink-0" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs text-[#A7B1C5] block mb-1">Official Instagram:</span>
                  <a
                    href={COMPANY_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-[#F472B6] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#F472B6] shrink-0" />
                    <span>{COMPANY_INFO.instagramHandle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-4 border-t border-[#1E293B]">
                  <span className="text-xs text-[#A7B1C5] block mb-1">Industry &amp; Scope:</span>
                  <p className="text-xs text-white leading-relaxed">
                    {COMPANY_INFO.industry}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-[#A7B1C5] block mb-1">Response Time:</span>
                  <p className="text-xs text-[#34D399] font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                    <span>Inquiries answered directly within 24 hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#10182A] border border-[#1E293B] shadow-2xl">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`w-full bg-[#080D18] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#A7B1C5]/40 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-[#1E293B] focus:border-[#3978FF]'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                      Email Address <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full bg-[#080D18] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#A7B1C5]/40 focus:outline-none transition-colors ${
                        errors.email ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-[#1E293B] focus:border-[#3978FF]'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                      Project Type <span className="text-[#EF4444]">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full bg-[#080D18] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                        errors.projectType ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-[#1E293B] focus:border-[#3978FF]'
                      }`}
                    >
                      {SERVICES_LIST.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="Custom Software / Other">Custom Software / Other Solution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                      Optional Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#080D18] border border-[#1E293B] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3978FF]"
                    >
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                      <option value="Flexible / To be discussed">Flexible / To be discussed</option>
                    </select>
                  </div>
                </div>

                {/* Reference Website (Optional) */}
                <div>
                  <label htmlFor="referenceUrl" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Optional Reference Website
                  </label>
                  <input
                    type="url"
                    id="referenceUrl"
                    name="referenceUrl"
                    value={formData.referenceUrl}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="w-full bg-[#080D18] border border-[#1E293B] rounded-xl px-4 py-3 text-sm text-white placeholder-[#A7B1C5]/40 focus:outline-none focus:border-[#3978FF]"
                  />
                  <span className="text-[11px] text-[#A7B1C5] mt-1 block">
                    Share an existing site or design inspiration you like.
                  </span>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="description" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Project Description <span className="text-[#EF4444]">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project objectives, target audience, timeline, or required features..."
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? 'description-error' : undefined}
                    className={`w-full bg-[#080D18] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#A7B1C5]/40 focus:outline-none transition-colors ${
                      errors.description ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-[#1E293B] focus:border-[#3978FF]'
                    }`}
                  />
                  {errors.description && (
                    <p id="description-error" className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.description}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#3978FF] to-[#65A4FF] hover:from-[#2a68ef] hover:to-[#5493ef] shadow-lg shadow-[#3978FF]/30 hover:shadow-[#3978FF]/50 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Email...' : 'Send Project Inquiry to official.zexuna@gmail.com'}</span>
                </button>

                {/* Honest Submission Feedback & Fallback copy option */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-[#080D18] border border-[#34D399]/40 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-white">
                          Your email application should now open with this inquiry ready to send directly to <span className="text-[#65A4FF]">{COMPANY_INFO.email}</span>.
                        </p>
                        <p className="text-xs text-[#A7B1C5] leading-relaxed">
                          Nothing is sent until you hit send in your email client. If your email application did not launch automatically, click the button below to copy the full inquiry text and email <strong className="text-white">official.zexuna@gmail.com</strong> directly.
                        </p>
                        <button
                          type="button"
                          onClick={handleCopyInquiry}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#65A4FF] hover:text-white bg-[#10182A] border border-[#1E293B] px-3 py-1.5 rounded-lg transition-colors"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copied ? 'Inquiry Copied to Clipboard!' : 'Copy Form Details to Clipboard'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
