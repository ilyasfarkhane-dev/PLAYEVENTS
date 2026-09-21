import Image from 'next/image';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#accueil" className={`brand${light ? ' brand-light' : ''}`} aria-label="PLAYEVENTS, retour à l’accueil">
      <Image
        className="brand-logo"
        src={light ? '/log-playevents-light.png' : '/log-playevents.png'}
        alt="PLAYEVENTS"
        width={222}
        height={102}
        priority
      />
    </a>
  );
}
