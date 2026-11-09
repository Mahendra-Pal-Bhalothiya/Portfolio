import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1E1F25] bg-[#0A0B0E]">
      {/* Big wordmark */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="font-display text-[clamp(60px,14vw,180px)] leading-[0.9] tracking-[0.02em] text-[#1A1B20] select-none mb-10">
          MAHENDRA<br />PAL
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6 border-t border-[#1E1F25]">
          <div className="font-mono text-[11px] text-muted space-y-0.5">
            <p>© {year} Mahendra Pal Bhalothiya</p>
            <p className="text-[#333]">NIT Mizoram · CSE '27 · bt23cs022</p>
          </div>

          <nav className="flex flex-wrap gap-5 font-mono text-xs text-muted">
            {['#about', '#projects', '#experience', '#skills', '#education', '#contact'].map(href => (
              <a key={href} href={href} className="hover:text-lime link-lime transition-colors capitalize">
                {href.replace('#', '')}
              </a>
            ))}
            <button onClick={onOpenResume} className="hover:text-lime link-lime transition-colors cursor-pointer">
              resume
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="p-2 border border-[#1E1F25] rounded text-muted hover:text-lime hover:border-lime transition-colors" aria-label="GitHub">
              <Github size={15} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-2 border border-[#1E1F25] rounded text-muted hover:text-[#0a66c2] hover:border-[#0a66c2] transition-colors" aria-label="LinkedIn">
              <Linkedin size={15} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 border border-[#1E1F25] rounded text-muted hover:text-lime hover:border-lime transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
