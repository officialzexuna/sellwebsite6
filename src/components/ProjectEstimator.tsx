import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2, Clock, Layers } from 'lucide-react';
import { calculateProjectEstimate, EstimationInputs } from '../utils/validation';

interface ProjectEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyEstimate: (service: string, details: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  isOpen,
  onClose,
  onApplyEstimate,
}) => {
  const [inputs, setInputs] = useState<EstimationInputs>({
    serviceType: 'Website Development',
    scopeSize: 'growth',
    needsDesign: true,
    needsSeo: true,
    needsFastDelivery: false,
  });

  if (!isOpen) return null;

  const estimate = calculateProjectEstimate(inputs);

  const handleApply = () => {
    const summary = `Estimated Scope: ${inputs.scopeSize.toUpperCase()} (${estimate.estimatedWeeks} weeks). Requires UI/UX Design: ${inputs.needsDesign ? 'Yes' : 'No'}, SEO: ${inputs.needsSeo ? 'Yes' : 'No'}.`;
    onApplyEstimate(inputs.serviceType, summary);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="estimator-title"
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#10182A] border border-[#1E293B] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#A7B1C5] hover:text-white hover:bg-[#18233C] transition-colors"
          aria-label="Close estimator"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-[#080D18] border border-[#3978FF]/30 text-[#65A4FF]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold text-[#65A4FF] uppercase">Interactive Tool</span>
            <h3 id="estimator-title" className="font-display font-bold text-2xl text-white">
              Project Scope &amp; Timeline Estimator
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#A7B1C5] mb-6">
          Configure your requirements to calculate an estimated project timeline and recommended technology stack.
        </p>

        <div className="space-y-5 mb-8">
          {/* Service Type Selection */}
          <div>
            <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Primary Service Needed
            </label>
            <select
              value={inputs.serviceType}
              onChange={(e) => setInputs({ ...inputs, serviceType: e.target.value })}
              className="w-full bg-[#080D18] border border-[#1E293B] text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#3978FF]"
            >
              <option value="Website Development">Website Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="E-commerce Development">E-commerce Development</option>
              <option value="Web Application Development">Web Application Development</option>
              <option value="Custom Software Solutions">Custom Software Solutions</option>
              <option value="Website Maintenance">Website Maintenance</option>
              <option value="Digital Branding">Digital Branding</option>
              <option value="Online Tools and Utilities">Online Tools and Utilities</option>
            </select>
          </div>

          {/* Scope Size */}
          <div>
            <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Scope &amp; Complexity
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'starter', label: 'Starter', desc: '1-3 Core Pages' },
                { id: 'growth', label: 'Growth', desc: '5-10 Pages & Integrations' },
                { id: 'enterprise', label: 'Bespoke', desc: 'Full Application Scope' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setInputs({ ...inputs, scopeSize: opt.id as any })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    inputs.scopeSize === opt.id
                      ? 'bg-[#3978FF]/20 border-[#3978FF] text-white'
                      : 'bg-[#080D18] border-[#1E293B] text-[#A7B1C5] hover:text-white'
                  }`}
                >
                  <span className="block text-sm font-semibold">{opt.label}</span>
                  <span className="text-[11px] opacity-75">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Additional Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#080D18] border border-[#1E293B] cursor-pointer text-xs text-[#F7F9FF]">
              <input
                type="checkbox"
                checked={inputs.needsDesign}
                onChange={(e) => setInputs({ ...inputs, needsDesign: e.target.checked })}
                className="w-4 h-4 rounded accent-[#3978FF]"
              />
              <span>Full UI/UX Design System</span>
            </label>

            <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#080D18] border border-[#1E293B] cursor-pointer text-xs text-[#F7F9FF]">
              <input
                type="checkbox"
                checked={inputs.needsSeo}
                onChange={(e) => setInputs({ ...inputs, needsSeo: e.target.checked })}
                className="w-4 h-4 rounded accent-[#3978FF]"
              />
              <span>Advanced SEO &amp; Schema</span>
            </label>

            <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#080D18] border border-[#1E293B] cursor-pointer text-xs text-[#F7F9FF]">
              <input
                type="checkbox"
                checked={inputs.needsFastDelivery}
                onChange={(e) => setInputs({ ...inputs, needsFastDelivery: e.target.checked })}
                className="w-4 h-4 rounded accent-[#3978FF]"
              />
              <span>Accelerated Sprint Priority</span>
            </label>
          </div>
        </div>

        {/* Calculation Result Preview */}
        <div className="p-5 rounded-xl bg-[#080D18] border border-[#3978FF]/30 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#1E293B]">
            <div>
              <span className="text-xs font-mono text-[#A7B1C5] block">Estimated Delivery Timeline</span>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-5 h-5 text-[#34D399]" />
                <span className="font-display font-extrabold text-2xl text-white">
                  ~{estimate.estimatedWeeks} {estimate.estimatedWeeks === 1 ? 'Week' : 'Weeks'}
                </span>
                <span className="text-xs text-[#A7B1C5]">to deployment</span>
              </div>
            </div>

            <div className="text-right sm:text-right">
              <span className="text-xs font-mono text-[#A7B1C5] block">Recommended Architecture</span>
              <span className="text-xs font-bold text-[#65A4FF] font-mono">
                {estimate.recommendedStack.join(' · ')}
              </span>
            </div>
          </div>

          <p className="text-xs text-[#A7B1C5]">
            * Estimates are indicative based on typical scope requirements. Direct consultation with Maddisetti Hema Harsha will confirm exact milestones.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleApply}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#3978FF] to-[#65A4FF] shadow-lg shadow-[#3978FF]/30 hover:shadow-[#3978FF]/50 transition-all"
          >
            <span>Apply This Scope to Contact Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-[#A7B1C5] hover:text-white bg-[#080D18] border border-[#1E293B]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
