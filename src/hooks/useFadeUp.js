import React, { useEffect, useRef } from 'react';

/** Tiny hook that marks elements .visible once they scroll into view */
export function useFadeUp(rootMargin = '-80px') {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      }),
      { rootMargin }
    );
    const els = ref.current.querySelectorAll('.fade-up');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootMargin]);
  return ref;
}
