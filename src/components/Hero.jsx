import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Copy, Check, Github, Linkedin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

/** Lightweight countUp for stat numbers */
function CountUp({ target, suffix = '', duration = 1600 }) {
  const [val, setVal] = useState(0);
  const isFloat = target % 1 !== 0;

  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const pct = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      setVal(isFloat ? parseFloat((eased * target).toFixed(2)) : Math.floor(eased * target));
      if (pct < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);

  return <span>{isFloat ? val.toFixed(2) : val}{suffix}</span>;
}

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleResume = () => {
    confetti({ particleCount: 45, spread: 55, origin: { y: 0.6 }, colors: ['#D4F038', '#FAF5EE', '#A8C220'] });
    onOpenResume();
  };

  /* Marquee ticker items */
  const tickers = [
    'AI/ML Research', '·', 'Computer Vision', '·', 'Generative AI', '·',
    'Quantitative Analytics', '·', 'C++ Systems', '·', 'Full-Stack Engineering', '·',
    'NIT Mizoram CSE \'27', '·', 'IIT Guwahati', '·',
  ];
  const tickerFull = [...tickers, ...tickers]; // double for seamless loop

  const stats = [
    { label: 'JEE Percentile',    value: 96.97, suffix: '%',  note: 'Pan-India' },
    { label: 'B.Tech CGPA',       value: 7.60,  suffix: '',   note: 'NIT Mizoram CSE' },
    { label: 'CV Model Accuracy', value: 18,    suffix: '%↑', note: 'IIT Guwahati' },
    { label: 'Public Repos',      value: 16,    suffix: '+',  note: 'GitHub' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">

      {/* ── Faint grid texture ───────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#D4F038 1px, transparent 1px), linear-gradient(90deg, #D4F038 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Accent glow blobs ─────────────────────────────────── */}
      <div className="absolute top-24 right-16 w-72 h-72 bg-lime/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-amber/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">

        {/* ── Availability pill ─────────────────────────────────── */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#222329] bg-[#131419] font-mono text-xs text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          Available for internships & collaborations — 2026-27
        </div>

        {/* ── DISPLAY NAME — editorial style ───────────────────── */}
        <div className="mb-4">
          <h1 className="font-display text-[clamp(68px,13vw,180px)] leading-[0.9] tracking-[0.02em] text-cream select-none">
            MAHENDRA
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6">
            <h1 className="font-display text-[clamp(68px,13vw,180px)] leading-[0.9] tracking-[0.02em] text-lime select-none">
              PAL
            </h1>
            {/* Profile photo nestled beside the name */}
            <div className="sm:mb-3 relative">
              <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-xl overflow-hidden border border-[#222329] flex-shrink-0 shadow-2xl">
                <img
                  src={personalInfo.profilePic}
                  alt="Mahendra Pal Bhalothiya"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Active badge */}
              <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-lime text-bg text-[9px] font-mono font-bold rounded-full uppercase tracking-widest">
                Active
              </span>
            </div>
          </div>
          <h1 className="font-display text-[clamp(68px,13vw,180px)] leading-[0.9] tracking-[0.02em] text-cream select-none">
            BHALOTHIYA
          </h1>
        </div>

        {/* ── Tagline row ───────────────────────────────────────── */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-5xl">
          <p className="text-body text-sm sm:text-base leading-relaxed max-w-lg">
            CS undergrad at <span className="text-cream font-medium">NIT Mizoram</span> building production AI pipelines, computer vision systems, and scalable full-stack platforms. Research experience at <span className="text-cream font-medium">IIT Guwahati</span>.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime text-bg text-sm font-semibold rounded hover:bg-lime-dim transition-colors group"
            >
              <span>View Work</span>
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={handleResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#222329] text-body text-sm font-medium rounded hover:border-lime hover:text-cream transition-colors cursor-pointer"
            >
              <Download size={14} />
              Resume
            </button>
          </div>
        </div>

        {/* ── Contact chips + socials ───────────────────────────── */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#222329] rounded font-mono text-xs text-muted hover:text-cream hover:border-[#333] transition-colors cursor-pointer"
          >
            <Mail size={12} />
            {personalInfo.email}
            {copied ? <Check size={11} className="text-lime ml-1" /> : <Copy size={11} className="ml-1" />}
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[#222329] rounded text-muted hover:text-cream hover:border-[#333] transition-colors"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[#222329] rounded text-muted hover:text-cream hover:border-[#333] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
        </div>
      </div>

      {/* ── Horizontal marquee ticker ─────────────────────────── */}
      <div className="mt-14 border-t border-b border-[#1E1F25] py-3 overflow-hidden">
        <div className="marquee-track gap-6">
          {tickerFull.map((item, i) => (
            <span
              key={i}
              className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap flex-shrink-0 ${
                item === '·' ? 'text-lime' : 'text-muted'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats row ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full mt-10 pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1B20]">
          {stats.map((s, i) => (
            <div key={i} className="bg-bg p-5 sm:p-6">
              <div className="font-display text-5xl sm:text-6xl text-cream leading-none">
                {counted ? <CountUp target={s.value} suffix={s.suffix} /> : `0${s.suffix}`}
              </div>
              <div className="mt-2 text-xs font-mono uppercase tracking-widest text-muted">{s.label}</div>
              <div className="text-[11px] font-mono text-[#444] mt-0.5">{s.note}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
