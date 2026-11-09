/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* ── MONTGOMERY-inspired palette ─────────────────────────── */
      colors: {
        bg:       '#0A0B0E',   // near-black base
        surface:  '#131419',   // slightly lifted card bg
        stroke:   '#222329',   // border / dividers
        muted:    '#6B6E7D',   // secondary text
        body:     '#BAB8B2',   // body prose text
        cream:    '#FAF5EE',   // light off-white
        lime:     '#D4F038',   // the signature lime accent
        'lime-dim':'#A8C220',  // darker lime for active states
        amber:    '#F5A623',   // warm accent
        rust:     '#935227',   // editorial rust/brown
      },
      /* ── Typography ──────────────────────────────────────────── */
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      /* ── Custom spacing ──────────────────────────────────────── */
      letterSpacing: {
        display:  '0.03em',
        wide:     '0.08em',
        widest:   '0.18em',
      },
      /* ── Transition timing ───────────────────────────────────── */
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
