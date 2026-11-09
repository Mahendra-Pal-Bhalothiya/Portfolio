import React from 'react';
import { useFadeUp } from '../hooks/useFadeUp';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const ref = useFadeUp();

  return (
    <section id="education" ref={ref} className="py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <div className="fade-up mb-10 flex items-center gap-3">
          <span className="font-mono text-xs text-lime tracking-widest uppercase">Education</span>
          <span className="flex-1 h-px bg-[#1E1F25]" />
        </div>

        {/* Big display type */}
        <h2 className="fade-up font-display text-[clamp(42px,8vw,100px)] leading-[0.9] tracking-[0.02em] text-cream mb-10">
          ACADEMIC<br /><span className="text-lime">BACKGROUND</span>
        </h2>

        {/* Timeline */}
        <div className="border-t border-[#1E1F25] divide-y divide-[#1E1F25]">
          {educationData.map((edu, i) => (
            <div key={i} className="fade-up py-7 grid grid-cols-1 md:grid-cols-12 gap-5">

              {/* Year */}
              <div className="md:col-span-2 font-mono text-xs text-muted mt-0.5">{edu.period}</div>

              {/* Body */}
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-heading font-bold text-cream text-lg sm:text-xl">{edu.institution}</h3>
                <p className="text-body text-sm">{edu.degree}</p>
                <ul className="mt-3 space-y-1.5">
                  {edu.details.map((d, di) => (
                    <li key={di} className="flex items-start gap-2 text-xs text-muted">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-lime flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Score + badge */}
              <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2">
                <span className="font-mono text-xs text-lime bg-lime/10 border border-lime/25 px-2.5 py-1 rounded">
                  {edu.score}
                </span>
                <span className="font-mono text-[10px] text-muted bg-[#131419] border border-[#1E1F25] px-2.5 py-1 rounded">
                  {edu.badge}
                </span>
                <span className="font-mono text-[10px] text-muted flex items-center gap-1 mt-1">
                  <span className="w-1 h-1 rounded-full bg-muted" /> {edu.location}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
