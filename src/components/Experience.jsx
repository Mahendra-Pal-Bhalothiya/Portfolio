import React from 'react';
import { useFadeUp } from '../hooks/useFadeUp';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const ref = useFadeUp();

  return (
    <section id="experience" ref={ref} className="py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section eyebrow */}
        <div className="fade-up mb-10 flex items-center gap-3">
          <span className="font-mono text-xs text-lime tracking-widest uppercase">Experience</span>
          <span className="flex-1 h-px bg-[#1E1F25]" />
        </div>

        {experienceData.map((exp, idx) => (
          <div key={idx} className="fade-up border border-[#1E1F25] rounded-xl overflow-hidden mb-6">
            {/* Header band */}
            <div className="bg-[#131419] px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1E1F25]">
              <div>
                <span className="font-mono text-[10px] text-lime tracking-widest uppercase block mb-1">{exp.type}</span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-cream">{exp.role}</h3>
                <p className="text-body text-sm mt-0.5">{exp.organization} — {exp.location}</p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                <span className="font-mono text-xs text-muted">{exp.period}</span>
                <span className="inline-block px-2.5 py-0.5 bg-lime/10 text-lime text-[10px] font-mono rounded border border-lime/25">
                  {exp.badge}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Highlights */}
              <ul className="md:col-span-3 space-y-3">
                {exp.highlights.map((h, hi) => (
                  <li key={hi} className="flex items-start gap-3 text-sm text-body leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="md:col-span-2">
                <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-3">Technologies</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((t, ti) => (
                    <span key={ti} className="px-2 py-1 border border-[#222329] rounded font-mono text-[10px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                {exp.repoUrl && (
                  <a
                    href={exp.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-lime link-lime"
                  >
                    View codebase ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
