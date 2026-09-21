'use client';

import { useEffect, useState } from 'react';
import Logo from './logo';

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

const links = [
  { href: '#apropos', label: 'À propos' },
  { href: '#expertises', label: 'Expertises' },
  { href: '#materiel', label: 'Matériel' },
  { href: '#evenements', label: 'Événements' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('hashchange', close);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('hashchange', close);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="header-inner container">
        <Logo />
        <nav className="header-nav" aria-label="Navigation principale" id="site-nav">
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Demander un devis <Arrow /></a>
        </nav>
        <div className="header-actions">
          <a className="header-cta" href="#contact">Demander un devis <Arrow /></a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
