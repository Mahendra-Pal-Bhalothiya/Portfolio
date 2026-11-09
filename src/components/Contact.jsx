import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useFadeUp } from '../hooks/useFadeUp';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const ref = useFadeUp();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.65 }, colors: ['#D4F038', '#FAF5EE'] });
    setSent(true);
    const sub = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`);
    setTimeout(() => {
      window.location.href = `mailto:${personalInfo.email}?subject=${sub}&body=${body}`;
    }, 700);
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <div className="fade-up mb-10 flex items-center gap-3">
          <span className="font-mono text-xs text-lime tracking-widest uppercase">Contact</span>
          <span className="flex-1 h-px bg-[#1E1F25]" />
        </div>

        {/* Large CTA heading */}
        <h2 className="fade-up font-display text-[clamp(48px,10vw,130px)] leading-[0.88] tracking-[0.02em] text-cream mb-12">
          LET'S<br /><span className="text-lime">TALK</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Info column */}
          <div className="lg:col-span-4 fade-up space-y-6">
            <p className="text-body text-sm leading-relaxed">
              Open to research collaborations, internship roles, project discussions, or just a conversation about interesting algorithmic problems.
            </p>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-between p-4 border border-[#1E1F25] rounded-lg bg-[#131419]">
                <div className="flex items-center gap-3">
                  <Mail size={15} className="text-lime" />
                  <div>
                    <p className="font-mono text-[9px] text-muted uppercase tracking-widest">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="font-mono text-xs text-cream hover:text-lime transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button onClick={copy} className="p-1.5 text-muted hover:text-lime transition-colors cursor-pointer">
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 border border-[#1E1F25] rounded-lg bg-[#131419]">
                <Phone size={15} className="text-lime" />
                <div>
                  <p className="font-mono text-[9px] text-muted uppercase tracking-widest">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="font-mono text-xs text-cream hover:text-lime transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 border border-[#1E1F25] rounded-lg bg-[#131419]">
                <MapPin size={15} className="text-lime" />
                <div>
                  <p className="font-mono text-[9px] text-muted uppercase tracking-widest">Location</p>
                  <p className="font-mono text-xs text-cream">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-[#222329] rounded font-mono text-xs text-muted hover:text-lime hover:border-lime transition-colors">
                <Github size={13} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-[#222329] rounded font-mono text-xs text-muted hover:text-[#0a66c2] hover:border-[#0a66c2] transition-colors">
                <Linkedin size={13} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-8 fade-up border border-[#1E1F25] rounded-xl overflow-hidden">
            {sent ? (
              <div className="p-10 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-lime/10 border border-lime/25 flex items-center justify-center">
                  <Check size={22} className="text-lime" />
                </div>
                <h4 className="font-heading font-bold text-cream text-lg">Message sent!</h4>
                <p className="text-body text-sm">Your email client will open shortly.</p>
                <button onClick={() => setSent(false)} className="font-mono text-xs text-muted hover:text-lime transition-colors cursor-pointer">
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="p-6 sm:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Alex Morgan' },
                    { label: 'Your Email', key: 'email', type: 'email', placeholder: 'alex@company.com' },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-1.5">{label}</label>
                      <input
                        required={key !== 'subject'}
                        type={type}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-bg border border-[#222329] rounded font-mono text-sm text-cream placeholder-[#444] focus:outline-none focus:border-lime transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="Internship / Research Collaboration"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-bg border border-[#222329] rounded font-mono text-sm text-cream placeholder-[#444] focus:outline-none focus:border-lime transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about the project, role, or idea..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-bg border border-[#222329] rounded font-mono text-sm text-cream placeholder-[#444] focus:outline-none focus:border-lime transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-lime text-bg font-heading font-bold text-sm rounded hover:bg-lime-dim transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
