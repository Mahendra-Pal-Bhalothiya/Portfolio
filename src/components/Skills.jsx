import React, { useState } from 'react';
import { useFadeUp } from '../hooks/useFadeUp';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const ref = useFadeUp();
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="skills" ref={ref} className="py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section eyebrow */}
        <div className="fade-up mb-10 flex items-center gap-3">
          <span className="font-mono text-xs text-lime tracking-widest uppercase">Skills</span>
          <span className="flex-1 h-px bg-[#1E1F25]" />
        </div>

        {/* Two-column layout: categories left, skills right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Category accordion tabs */}
          <div className="lg:col-span-4 space-y-1">
            <h2 className="fade-up font-display text-[clamp(42px,7vw,80px)] leading-[0.9] text-cream mb-6">
              TOOLS &<br />STACK
            </h2>

            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
                className={`fade-up w-full text-left p-4 border rounded-lg transition-all cursor-pointer ${
                  activeId === cat.id
                    ? 'border-lime bg-lime/5 text-cream'
                    : 'border-[#1E1F25] bg-bg hover:border-[#2a2b30] text-body'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-sm">{cat.title}</span>
                  <span className={`font-mono text-lg leading-none transition-transform ${activeId === cat.id ? 'rotate-45 text-lime' : ''}`}>+</span>
                </div>
                <p className="text-xs text-muted mt-0.5">{cat.description}</p>
              </button>
            ))}
          </div>

          {/* Skills display */}
          <div className="lg:col-span-8">
            {skillsData.categories.map((cat) => (
              <div
                key={cat.id}
                className={`fade-up mb-8 ${activeId && activeId !== cat.id ? 'opacity-30' : 'opacity-100'} transition-opacity duration-300`}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-[10px] text-lime tracking-widest uppercase">{cat.title}</span>
                  <span className="flex-1 h-px bg-[#1E1F25]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <span
                      key={si}
                      className="group flex items-center gap-2 px-3 py-1.5 border border-[#222329] hover:border-lime hover:text-cream rounded font-mono text-xs text-muted transition-all duration-200 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-lime/40 group-hover:bg-lime transition-colors" />
                      {skill.name}
                      <span className="text-[9px] opacity-50">{skill.tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Core competencies strip */}
            <div className="fade-up mt-6 pt-5 border-t border-[#1E1F25]">
              <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-3">Core Disciplines</p>
              <div className="flex flex-wrap gap-1.5">
                {skillsData.coreCompetencies.map((c, i) => (
                  <span key={i} className="px-2.5 py-1 border border-[#1a1b20] rounded font-mono text-[10px] text-[#555]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
