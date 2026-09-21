'use client';

import { useEffect } from 'react';

function revealInView(nodes: NodeListOf<HTMLElement> | HTMLElement[]) {
  const vh = window.innerHeight;
  nodes.forEach(node => {
    const r = node.getBoundingClientRect();
    if (r.bottom > 40 && r.top < vh - 40) node.classList.add('is-visible');
  });
}

export default function Motion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('splash-ready');
      return;
    }

    const photo = document.querySelector<HTMLElement>('.hero-photo');
    const onScroll = () => {
      if (!photo) return;
      photo.style.setProperty('--hero-shift', `${Math.min(window.scrollY, 900) * 0.22}px`);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    let observer: IntersectionObserver | null = null;
    let started = false;

    const startReveal = () => {
      if (started) return;
      started = true;
      const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
      revealInView(nodes);
      requestAnimationFrame(() => {
        document.documentElement.classList.add('motion-ready');
        observer = new IntersectionObserver((entries, instance) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add('is-visible');
            instance.unobserve(entry.target);
          }
        }, { threshold: 0.01, rootMargin: '80px 0px 80px 0px' });
        nodes.forEach(node => {
          if (!node.classList.contains('is-visible')) observer!.observe(node);
        });
      });
    };

    if (document.documentElement.classList.contains('splash-ready')) {
      startReveal();
    } else {
      const mo = new MutationObserver(() => {
        if (!document.documentElement.classList.contains('splash-ready')) return;
        mo.disconnect();
        startReveal();
      });
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);
  return null;
}
