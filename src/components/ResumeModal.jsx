import React, { useEffect, useState } from 'react';
import { X, Download, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, experienceData, educationData, projectsData, skillsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 }, colors: ['#D4F038', '#FAF5EE'] });
    const a = document.createElement('a');
    a.href = personalInfo.resumePath;
    a.download = 'Mahendra_Pal_Bhalothiya_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-bg/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] rounded-xl border border-[#222329] bg-[#131419] flex flex-col overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between p-5 border-b border-[#1E1F25] bg-[#0F1014]">
          <div className="flex items-center gap-3">
            <FileText size={18} className="text-lime" />
            <div>
              <h3 className="font-heading font-bold text-cream text-base">Curriculum Vitae</h3>
              <p className="font-mono text-[10px] text-muted">{personalInfo.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-lime text-bg text-xs font-mono font-bold rounded hover:bg-lime-dim transition-colors cursor-pointer"
            >
              <Download size={13} /> Download PDF
            </button>
            <button onClick={onClose} className="p-2 text-muted hover:text-cream transition-colors cursor-pointer">
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-7 font-mono text-xs">

          {/* Header */}
          <div className="pb-5 border-b border-[#1E1F25] text-center space-y-1">
            <h2 className="font-display text-4xl sm:text-5xl tracking-widest text-cream uppercase">
              {personalInfo.name}
            </h2>
            <p className="text-muted">{personalInfo.location} · {personalInfo.phone}</p>
            <p className="text-muted">{personalInfo.email}</p>
            <div className="flex justify-center gap-3 mt-1">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-lime link-lime">github.com/{personalInfo.githubUsername}</a>
              <span className="text-[#333]">·</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-lime link-lime">linkedin.com</a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <p className="text-[9px] text-lime uppercase tracking-widest mb-2 pb-1 border-b border-[#1E1F25]">Summary</p>
            <p className="text-body leading-relaxed">{personalInfo.summary}</p>
          </div>

          {/* Skills */}
          <div>
            <p className="text-[9px] text-lime uppercase tracking-widest mb-3 pb-1 border-b border-[#1E1F25]">Technical Skills</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsData.categories.map((cat, ci) => (
                <div key={ci}>
                  <span className="text-cream font-bold block mb-1">{cat.title}:</span>
                  <span className="text-muted">{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <p className="text-[9px] text-lime uppercase tracking-widest mb-3 pb-1 border-b border-[#1E1F25]">Experience</p>
            {experienceData.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-cream font-bold">{exp.role} — <span className="text-lime">{exp.organization}</span></span>
                  <span className="text-muted">{exp.period} · {exp.location}</span>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-start gap-2 text-body">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-lime flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <p className="text-[9px] text-lime uppercase tracking-widest mb-3 pb-1 border-b border-[#1E1F25]">Projects</p>
            <div className="space-y-3">
              {projectsData.map((p, pi) => (
                <div key={pi}>
                  <span className="text-cream font-bold">{p.title}</span>
                  <span className="text-muted"> · {p.techStack.slice(0, 5).join(', ')}</span>
                  <ul className="mt-1 space-y-1">
                    {p.keyPoints.map((kp, kpi) => (
                      <li key={kpi} className="flex items-start gap-2 text-body">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-lime flex-shrink-0" /> {kp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="text-[9px] text-lime uppercase tracking-widest mb-3 pb-1 border-b border-[#1E1F25]">Education</p>
            <div className="space-y-2">
              {educationData.map((edu, ei) => (
                <div key={ei} className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <span className="text-cream font-bold">{edu.institution}</span>
                    <span className="text-muted"> · {edu.degree}</span>
                    <br />
                    <span className="text-lime">{edu.score}</span>
                  </div>
                  <span className="text-muted text-right">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#1E1F25] bg-[#0F1014] flex justify-between items-center">
          <span className="font-mono text-[10px] text-muted">Mahendra_resume.pdf</span>
          <button onClick={handleDownload} className="flex items-center gap-1.5 px-3 py-1.5 bg-lime text-bg text-xs font-mono font-bold rounded hover:bg-lime-dim transition-colors cursor-pointer">
            <Download size={12} /> Download
          </button>
        </div>
      </div>
    </div>
  );
}
