import React from 'react';
import { useFadeUp } from '../hooks/useFadeUp';
import { personalInfo, skillsData } from '../data/portfolioData';

export default function About() {
  const ref = useFadeUp();

  const pillars = [
    { tag: '01', title: 'Generative AI & LLM Systems',   body: 'LangChain, PyTorch, OpenAI APIs, Hugging Face. Conversational agents and IRT-based adaptive pipelines.' },
    { tag: '02', title: 'Quantitative & Data Analysis',  body: 'Multi-source data extraction with Python, SQL, Pandas. Statistical risk models, crypto sentiment indexes, backtesting routines.' },
    { tag: '03', title: 'Computer Vision & ML Research', body: 'End-to-end CV pipelines for live video feeds. +18% object detection accuracy at IIT Guwahati. Alert system architecture.' },
    { tag: '04', title: 'Full-Stack & Low-Level Systems', body: 'React, FastAPI, Node.js, Docker. O(1) C++ LRU cache & OS event scheduler. REST API design and database architecture.' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-5 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section eyebrow */}
        <div className="fade-up mb-10 flex items-center gap-3">
          <span className="font-mono text-xs text-lime tracking-widest uppercase">About</span>
          <span className="flex-1 h-px bg-[#1E1F25]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Bio */}
          <div className="lg:col-span-5 fade-up space-y-5">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-cream leading-tight">
              Engineering at the intersection of AI & Systems
            </h2>
            <p className="text-body leading-relaxed text-sm sm:text-base">
              B.Tech CSE student at <span className="text-cream">NIT Mizoram</span> (2023–present), top 3% nationwide in JEE Mains with <strong className="text-cream">96.97 percentile</strong>. Research internship at <span className="text-cream">IIT Guwahati's AI/ML Group</span> working on live-video computer vision alerting systems.
            </p>
            <p className="text-body leading-relaxed text-sm sm:text-base">
              I focus on clean algorithms, solid math, and production-ready software — from designing O(1) C++ data structures to deploying LLM-integrated full-stack platforms.
            </p>

            {/* Core competencies */}
            <div className="pt-4 flex flex-wrap gap-2">
              {skillsData.coreCompetencies.map((c, i) => (
                <span key={i} className="px-2.5 py-1 border border-[#222329] rounded font-mono text-[11px] text-muted">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Pillars grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1A1B20]">
            {pillars.map((p, i) => (
              <div key={i} className="fade-up bg-bg p-6 group hover:bg-[#131419] transition-colors duration-200">
                <span className="font-mono text-[11px] text-lime tracking-widest block mb-3">{p.tag}</span>
                <h3 className="font-heading font-bold text-cream text-base mb-2 group-hover:text-lime transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-body text-xs leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
