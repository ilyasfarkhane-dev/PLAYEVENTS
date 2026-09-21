'use client';

import { useEffect, useState } from 'react';

const SPLASH_KEY = 'pe-splash';

export default function Splash() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SPLASH_KEY) === '1';
    } catch {
      seen = false;
    }

    if (seen || (document.documentElement.classList.contains('splash-ready') && !document.documentElement.classList.contains('splash-active'))) {
      document.documentElement.classList.remove('splash-active');
      document.documentElement.classList.add('splash-ready');
      setHidden(true);
      return;
    }

    document.documentElement.classList.add('splash-active');
    document.documentElement.classList.remove('splash-ready');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let finishTimer = 0;

    if (reduced) {
      setProgress(100);
      finishTimer = window.setTimeout(() => setDone(true), 200);
      return () => window.clearTimeout(finishTimer);
    }

    const duration = 2400;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
      else finishTimer = window.setTimeout(() => setDone(true), 300);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(finishTimer);
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    try {
      sessionStorage.setItem(SPLASH_KEY, '1');
    } catch {
      /* ignore */
    }
    const t = window.setTimeout(() => {
      setHidden(true);
      document.documentElement.classList.remove('splash-active');
      document.documentElement.classList.add('splash-ready');
    }, 550);
    return () => window.clearTimeout(t);
  }, [done]);

  if (hidden) return null;

  return (
    <div className={`splash${done ? ' is-done' : ''}`} role="status" aria-live="polite" aria-label={`Chargement ${progress}%`}>
      <div className="splash-inner">
        <div className="splash-brand" aria-hidden="true">
          <img className="brand-logo" src="/log-playevents-light.png" alt="" width={280} height={129} />
        </div>
        <div className="splash-meter">
          <div className="splash-track" aria-hidden="true">
            <div className="splash-bar" style={{ width: `${progress}%` }} />
          </div>
          <p className="splash-pct">{progress}%</p>
        </div>
      </div>
    </div>
  );
}
