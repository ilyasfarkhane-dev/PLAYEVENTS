export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#accueil" className={`brand${light ? ' brand-light' : ''}`} aria-label="PLAYEVENTS, retour à l’accueil">
      <span className="brand-mark">
        <span className="brand-play">PLAY</span>
        <svg className="brand-symbol" viewBox="0 0 18 22" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M1.2 1.1 16.8 11 1.2 20.9Z" />
        </svg>
      </span>
      <span className="brand-events">EVENTS</span>
    </a>
  );
}
