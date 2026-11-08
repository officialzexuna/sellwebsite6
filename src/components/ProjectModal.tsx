import React, { useEffect } from 'react';
import { X, ArrowRight, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireAboutProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireAboutProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#10182A] border border-[#1E293B] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#A7B1C5] hover:text-white hover:bg-[#18233C] transition-colors focus-visible:ring-2 focus-visible:ring-[#65A4FF]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Concept Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold text-[#65A4FF] bg-[#3978FF]/15 px-3 py-1 rounded-full uppercase">
            {project.categoryLabel}
          </span>
          {project.isConcept && (
            <span className="text-xs font-mono font-medium text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-3 py-1 rounded-full">
              Demonstration Concept
            </span>
          )}
        </div>

        {/* Title */}
        <h3 id="modal-title" className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base text-[#A7B1C5] leading-relaxed mb-6">
          {project.details}
        </p>

        {/* Highlight metric */}
        <div className="p-4 rounded-xl bg-[#080D18] border border-[#1E293B] mb-6 flex items-center justify-between">
          <span className="text-xs text-[#A7B1C5] font-mono">Performance Metric</span>
          <span className="text-sm font-bold text-[#34D399] font-mono">{project.highlightMetric}</span>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#65A4FF]" />
            <span>Architectural Capabilities</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#F7F9FF]/90 p-2.5 rounded-lg bg-[#080D18]/70 border border-[#1E293B]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3978FF]" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#38BDF8]" />
            <span>Verified Technology Stack</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-md bg-[#080D18] border border-[#1E293B] text-[#65A4FF]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#1E293B]">
          <button
            type="button"
            onClick={() => {
              onClose();
              onInquireAboutProject(project.title);
            }}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#3978FF] to-[#65A4FF] hover:from-[#2a68ef] hover:to-[#5493ef] shadow-md shadow-[#3978FF]/30 transition-all"
          >
            <span>Inquire About Similar Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-[#A7B1C5] hover:text-white bg-[#080D18] border border-[#1E293B] transition-colors"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
};
