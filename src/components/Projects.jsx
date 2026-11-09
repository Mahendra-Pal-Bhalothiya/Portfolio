import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, X, ChevronRight } from 'lucide-react';
import { useFadeUp } from '../hooks/useFadeUp';
import { projectsData, personalInfo } from '../data/portfolioData';

export default function Projects() {
  const ref = useFadeUp();
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState(null);

  const categories = ['All', 'Generative AI', 'Computer Vision & AI', 'Data Analytics & Quant', 'Systems & Algorithms', 'Full-Stack & Finance', 'Enterprise & AI'];

  const visible = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" ref={ref} className="py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section eyebrow */}
        <div className="fade-up mb-10 flex items-center gap-3">
          <span className="font-mono text-xs text-lime tracking-widest uppercase">Work</span>
          <span className="flex-1 h-px bg-[#1E1F25]" />
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-lime transition-colors flex items-center gap-1 link-lime"
          >
            <Github size={12} /> GitHub ↗
          </a>
        </div>

        {/* Section headline */}
        <div className="fade-up mb-10">
          <h2 className="font-display text-[clamp(42px,8vw,100px)] leading-[0.9] tracking-[0.02em] text-cream">
            FEATURED
          </h2>
          <h2 className="font-display text-[clamp(42px,8vw,100px)] leading-[0.9] tracking-[0.02em] text-lime">
            PROJECTS
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="fade-up flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded font-mono text-[11px] tracking-wide transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-lime text-bg font-bold'
                  : 'border border-[#222329] text-muted hover:text-cream hover:border-[#333]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project list — editorial row style */}
        <div className="border-t border-[#1E1F25]">
          {visible.map((project, i) => (
            <div
              key={project.id}
              className="fade-up border-b border-[#1E1F25] group"
            >
              <div
                className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#131419] transition-colors px-3 -mx-3 rounded-lg"
                onClick={() => setModal(project)}
              >
                {/* Left: index + title + tags */}
                <div className="flex items-start sm:items-center gap-5">
                  <span className="font-mono text-xs text-muted mt-0.5 flex-shrink-0 w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-cream group-hover:text-lime transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-body text-xs mt-0.5">{project.subtitle}</p>
                  </div>
                </div>

                {/* Right: category pill + arrow */}
                <div className="flex items-center gap-4 flex-shrink-0 pl-10 sm:pl-0">
                  <span className="hidden sm:block font-mono text-[10px] text-muted uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Stack preview */}
                    <div className="hidden sm:flex flex-wrap gap-1 max-w-xs">
                      {project.techStack.slice(0, 3).map((t, ti) => (
                        <span key={ti} className="px-1.5 py-0.5 border border-[#1E1F25] rounded font-mono text-[9px] text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="p-1.5 border border-[#222329] rounded text-muted hover:text-lime hover:border-lime transition-colors"
                      title="GitHub"
                    >
                      <Github size={13} />
                    </a>
                    <ChevronRight size={16} className="text-muted group-hover:text-lime transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Modal ──────────────────────────────────────────────── */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/80 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-xl border border-[#222329] bg-[#131419] shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-[#131419] border-b border-[#1E1F25] px-6 py-4 flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-lime tracking-widest uppercase block mb-1">
                  {modal.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-cream">{modal.title}</h3>
                <p className="text-xs text-muted mt-0.5">{modal.subtitle}</p>
              </div>
              <button onClick={() => setModal(null)} className="text-muted hover:text-cream mt-1 cursor-pointer">
                <X size={18} />
              </button>
            </div>

            {/* Modal body */}
            <div className="px-6 py-6 space-y-6">
              {/* Impact */}
              <div className="p-4 bg-lime/8 border border-lime/20 rounded-lg">
                <p className="font-mono text-xs text-lime">
                  <span className="font-bold">Core Impact: </span>{modal.impactMetric}
                </p>
              </div>

              {/* Key points */}
              <div>
                <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-3">Technical Highlights</p>
                <ul className="space-y-3">
                  {modal.keyPoints.map((kp, kpi) => (
                    <li key={kpi} className="flex items-start gap-3 text-sm text-body">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" />
                      <span>{kp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div>
                <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-3">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {modal.techStack.map((t, ti) => (
                    <span key={ti} className="px-2.5 py-1 border border-[#222329] rounded font-mono text-[10px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 flex items-center gap-3 border-t border-[#1E1F25]">
                <button onClick={() => setModal(null)} className="text-xs font-mono text-muted hover:text-cream cursor-pointer">
                  Close
                </button>
                <a
                  href={modal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-2 px-4 py-2 bg-lime text-bg text-xs font-mono font-bold rounded hover:bg-lime-dim transition-colors"
                >
                  <Github size={13} /> Open Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
