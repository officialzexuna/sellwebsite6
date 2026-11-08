import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { ProjectItem } from '../types';
import { ArrowUpRight, Layers, Eye } from 'lucide-react';
import { useScrollRevealItem } from '../hooks/useScrollReveal';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelectProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelectProject }) => {
  const { ref, style } = useScrollRevealItem<HTMLDivElement>(index, 3);

  return (
    <div ref={ref} style={style} className="h-full flex">
      <article className="w-full flex flex-col justify-between rounded-2xl bg-[#10182A] border border-[#1E293B] hover:border-[#3978FF]/50 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-[#3978FF]/10 transition-all duration-300 group">
        <div>
          {/* Meta header without generic pills */}
          <div className="flex items-center justify-between text-xs text-[#A7B1C5] mb-4 pb-3 border-b border-[#1E293B]">
            <span className="font-mono text-[#65A4FF] font-semibold uppercase">
              {project.categoryLabel}
            </span>
            {project.isConcept && (
              <span className="text-[11px] font-mono text-[#F59E0B] tracking-wide">
                Demonstration Concept
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#65A4FF] transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#A7B1C5] leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlight metric & features */}
          <div className="mb-6 p-3 rounded-xl bg-[#080D18] border border-[#1E293B]/80 flex items-center justify-between">
            <span className="text-xs text-[#A7B1C5] font-mono">Verified Metric</span>
            <span className="text-xs font-bold text-[#34D399] font-mono">{project.highlightMetric}</span>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#080D18] border border-[#1E293B] text-[#A7B1C5]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* View Blueprint Action */}
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-semibold text-[#F7F9FF] bg-[#080D18] hover:bg-[#18233C] border border-[#1E293B] group-hover:border-[#3978FF]/40 transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-[#65A4FF]" />
            <span>Inspect Architecture Blueprint</span>
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#A7B1C5] group-hover:text-white transition-colors" />
        </button>
      </article>
    </div>
  );
};

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'web-dev' | 'ecommerce' | 'web-app' | 'tools'>('all');

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web-dev', label: 'Website Dev' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'web-app', label: 'Web Applications' },
    { key: 'tools', label: 'Online Tools' },
  ];

  const filteredProjects =
    filter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#10182A]/30 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10182A] border border-[#3978FF]/30 text-xs font-semibold tracking-wider text-[#65A4FF] uppercase mb-4">
              Project Portfolio
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
              Crafted With Engineering Discipline
            </h2>
            <p className="text-base text-[#A7B1C5] max-w-xl">
              Explore our project showcase. All demonstration builds are clearly noted as concepts, demonstrating real frontend performance, verified tech stacks, and responsive UI.
            </p>
          </div>

          {/* Filter segment tabs (buttons per frontend design guideline) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#080D18] rounded-xl border border-[#1E293B] overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setFilter(cat.key as any)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-200 ${
                  filter === cat.key
                    ? 'bg-[#3978FF] text-white shadow-md shadow-[#3978FF]/30 font-semibold'
                    : 'text-[#A7B1C5] hover:text-white hover:bg-[#10182A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
