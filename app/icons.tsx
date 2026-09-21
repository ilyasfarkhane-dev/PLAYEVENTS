export function Arrow({ className = 'icon-arrow' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
      <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" d="M3.2 12.8 12.8 3.2M5.2 3.2h7.6v7.6" />
    </svg>
  );
}

export function RibbonStar() {
  return (
    <svg className="ribbon-star" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 1.2 14.1 9.9 22.8 12 14.1 14.1 12 22.8 9.9 14.1 1.2 12 9.9 9.9Z" />
    </svg>
  );
}

export function ArrowUp() {
  return (
    <svg className="icon-arrow-up" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
      <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" d="M8 13.2V2.8M3.5 7.2 8 2.8l4.5 4.4" />
    </svg>
  );
}
