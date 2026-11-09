import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About',      href: '#about' },
    { label: 'Work',       href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Education',  href: '#education' },
    { label: 'Contact',    href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0B0E]/90 backdrop-blur-md border-b border-[#222329]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">

        {/* Wordmark */}
        <a href="#" className="font-display text-cream text-xl tracking-widest hover:text-lime transition-colors">
          MPB®
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-muted hover:text-cream link-lime transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Resume CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded text-xs font-mono font-medium bg-lime text-bg hover:bg-lime-dim transition-colors cursor-pointer"
          >
            <FileText size={13} />
            Resume
          </button>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-cream p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#131419] border-t border-[#222329] px-5 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-body hover:text-lime transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onOpenResume(); }}
            className="mt-2 w-full py-2 rounded text-xs font-mono bg-lime text-bg font-medium cursor-pointer"
          >
            View Resume
          </button>
        </div>
      )}
    </header>
  );
}
