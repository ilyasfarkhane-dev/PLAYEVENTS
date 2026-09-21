import Image from 'next/image';
import Header from './header';
import Logo from './logo';
import Motion from './motion';
import { Arrow, ArrowUp, RibbonStar } from './icons';

const services = [
  {
    n: '01',
    category: 'VIDÉO',
    title: 'Régie Vidéo Professionnelle 4K',
    image: '/2.jpeg',
    intro: 'Une régie vidéo complète dédiée à la réalisation et à la captation multicaméra d’événements professionnels, offrant une qualité d’image 4K et une production en direct fluide et dynamique.',
    paragraphs: [
      'Notre dispositif intègre 5 caméras Sony FX9, équipées d’un capteur plein format 6K permettant une captation 4K de haute qualité, avec une large plage dynamique et des performances adaptées aux productions événementielles professionnelles.',
      'La configuration comprend également une caméra robotisée Sony 4K, permettant d’obtenir des plans supplémentaires et des mouvements de caméra précis, tout en offrant une grande flexibilité dans la réalisation.',
      'Au cœur de la régie, notre ATEM 4 M/E Broadcast Studio 4K assure la gestion et la réalisation des différentes sources vidéo, avec une architecture adaptée aux productions multicaméras en Ultra HD.',
      'L’ensemble est complété par un panneau de contrôle ATEM 2 M/E Advanced Panel 20, deux enregistreurs HyperDeck 4K ainsi que des systèmes de transmission vidéo sans fil Teradek 4K, permettant une configuration professionnelle pour la captation, la réalisation, l’enregistrement et la transmission des contenus.',
    ],
    sections: [
      {
        title: 'Une solution pensée pour vos événements',
        text: 'Cette régie permet de couvrir différents formats : congrès, conférences, cérémonies, concerts, événements corporate, lancements de produits et productions live, avec une gestion centralisée des sources vidéo et une réalisation multicaméra professionnelle.',
      },
    ],
  },
  {
    n: '02',
    category: 'AUDIO',
    title: 'Sonorisation Professionnelle',
    image: '/images/m32.jpg',
    intro: 'Une solution de sonorisation professionnelle conçue pour offrir une diffusion sonore claire, homogène et maîtrisée, adaptée aux conférences, congrès, événements corporate, cérémonies, concerts et spectacles.',
    paragraphs: [
      'Notre parc audio associe des systèmes LD Systems, des enceintes BOSE, des solutions de monitoring scène et des microphones sans fil Shure, le tout piloté par une console numérique Midas M32 Live.',
      'Cette configuration nous permet de proposer une sonorisation adaptée à chaque espace et à chaque type d’événement, avec une attention particulière portée à la qualité sonore, à la fiabilité et au confort des intervenants et artistes.',
    ],
  },
  {
    n: '03',
    category: 'LED',
    title: 'Écrans LED Professionnels Absen P2.9',
    image: '/images/absen.jpg',
    intro: 'Nous mettons à votre disposition une solution professionnelle d’affichage LED Absen P2.9, destinée aux événements, spectacles, conférences, cérémonies, lancements de produits et productions audiovisuelles.',
    paragraphs: [
      'Notre parc d’écrans LED est disponible en Indoor et Outdoor, afin de répondre aux différentes contraintes d’utilisation et aux exigences de chaque événement.',
    ],
    sections: [
      {
        title: 'Une solution complète',
        text: 'Notre prestation ne se limite pas aux panneaux LED. Nous disposons également de processeurs vidéo professionnels, de solutions de transmission du signal par RJ45 multipaire et fibre optique, ainsi que de l’ensemble du câblage et des accessoires nécessaires à la mise en œuvre du système.',
      },
      {
        title: 'Qualité d’image & fiabilité',
        text: 'La technologie Absen LED permet de bénéficier d’un affichage haute définition adapté aux applications événementielles et professionnelles, notamment en rental & staging.',
      },
    ],
    tags: ['Indoor', 'Outdoor', 'Événementiel', 'Rental & Staging'],
  },
  {
    n: '04',
    category: 'STRUCTURES',
    title: 'Structures Aluminium Professionnelles',
    image: '/images/structures.jpg',
    intro: 'Nous proposons des structures aluminium professionnelles destinées aux scènes, événements, mariages, conférences, spectacles et installations événementielles.',
    paragraphs: [
      'Nos structures sont accompagnées de leur documentation technique et certificats de conformité, garantissant la traçabilité et le respect des exigences techniques applicables à leur fabrication et à leur utilisation.',
      'Nos solutions permettent l’intégration de différents équipements événementiels tels que l’éclairage, les écrans LED, la sonorisation et les éléments de décoration, selon la configuration et les besoins de chaque événement.',
    ],
    sections: [
      {
        title: 'Une solution professionnelle et modulable',
        text: 'Grâce à leur conception modulaire, nos structures aluminium peuvent être adaptées à différentes configurations de scènes et d’espaces événementiels, avec une attention particulière portée à la sécurité, la stabilité et la conformité de l’installation.',
      },
    ],
    tags: ['Structures Aluminium', 'Scènes', 'Mariages', 'Événements', 'Éclairage', 'Écrans LED', 'Sonorisation'],
    note: 'Certificats & conformité disponibles sur demande.',
  },
  {
    n: '05',
    category: 'DRONE',
    title: 'Drones & Prise de Vue Aérienne',
    image: '/images/mavic.jpg',
    intro: 'PLAYEVENTS propose des prestations de prise de vue aérienne professionnelle pour l’événementiel, le sport et la production audiovisuelle.',
    paragraphs: [
      'Nos prestations s’adaptent à différents environnements : événements, mariages, concerts, festivals, stades, compétitions sportives, clips musicaux, films institutionnels, publicités et productions audiovisuelles.',
      'Grâce à notre parc diversifié, nous pouvons réaliser aussi bien des plans aériens cinématographiques et panoramiques que des séquences sportives et immersives, selon les besoins de chaque production.',
    ],
    points: [
      'DJI Inspire 3 pour les productions cinématographiques et les prises de vue haut de gamme.',
      'DJI Mavic 4 Créateur pour des prises de vue aériennes polyvalentes et créatives.',
      'DJI Mavic 3 Pro pour des images professionnelles et une grande flexibilité de cadrage.',
      'Drone FPV pour des plans immersifs, dynamiques et spectaculaires.',
    ],
    sections: [
      {
        title: 'Professionnalisme & conformité',
        text: 'PLAYEVENTS dispose de l’agrément requis pour les activités professionnelles liées aux drones, permettant d’intégrer la prise de vue aérienne à nos productions dans le respect de la réglementation applicable.',
      },
    ],
    tags: ['Prise de vue aérienne', 'Cinéma', 'Sport', 'Événementiel', 'FPV', 'Stades', 'Production audiovisuelle'],
  },
];
const equipment = [
  { image: '/images/fx9.jpg', category: 'VIDÉO', name: 'Sony FX9', description: 'Caméras professionnelles pour la production et la captation 4K.' },
  { image: '/images/regie.jpg', category: 'VIDÉO', name: 'Régie vidéo professionnelle', description: 'Réalisation multicaméra et diffusion événementielle.' },
  { image: '/images/absen.jpg', category: 'LED', name: 'ABsen Indoor 2.9 mm', description: '30 m² disponibles, processeurs vidéo professionnels pour conférences, conventions et spectacles.' },
  { image: '/images/m32.jpg', category: 'AUDIO', name: 'Midas M32 Live', description: 'Console numérique professionnelle.' },
  { image: '/images/maui.jpg', category: 'AUDIO', name: 'MAUI 28 G3', description: 'Système de sonorisation professionnel.' },
  { image: '/images/regie.jpg', category: 'AUDIO', name: 'Micros professionnels', description: 'Pour conférences, présentations, spectacles et cérémonies.' },
  { image: '/images/structures.jpg', category: 'STRUCTURES', name: 'Structures aluminium', description: 'Installation adaptée aux besoins techniques et scénographiques.' },
  { image: '/images/mavic.jpg', category: 'DRONE', name: 'DJI Mavic 3 Pro', description: 'Prise de vue aérienne selon les autorisations et réglementations applicables.' },
];
const events = ['Conventions & conférences', 'Séminaires d’entreprise', 'Lancements de produits', 'Salons professionnels', 'Événements institutionnels', 'Festivals & spectacles', 'Cérémonies', 'Événements sportifs', 'Activations de marques', 'Événements privés'];
const values = [
  { n: '01', title: 'Un parc matériel professionnel', text: 'Des équipements adaptés aux productions audiovisuelles et événementielles exigeantes.' },
  { n: '02', title: 'Une solution intégrée', text: 'Vidéo, LED, sonorisation, structures et captation réunis au sein d’un même prestataire.' },
  { n: '03', title: 'Une équipe technique', text: 'Préparation, installation, exploitation et démontage avec accompagnement technique.' },
  { n: '04', title: 'Partout au Maroc', text: 'PLAYEVENTS accompagne ses clients dans leurs projets événementiels à travers le Maroc.' },
];

function Kicker({ children, number }: { children: React.ReactNode; number: string }) { return <p className="kicker"><span>{number}</span> — {children}</p>; }

export default function Home() {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE;
  const address = process.env.NEXT_PUBLIC_CONTACT_ADDRESS;
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Organization', name: 'PLAYEVENTS', description: 'Production événementielle et audiovisuelle au Maroc : vidéo, écrans LED, sonorisation et structures.', areaServed: { '@type': 'Country', name: 'Maroc' }, ...(url ? { url } : {}), ...(email ? { email } : {}), ...(phone ? { telephone: phone } : {}), ...(address ? { address: { '@type': 'PostalAddress', streetAddress: address, addressCountry: 'MA' } } : {}), sameAs: [instagram, linkedin].filter(Boolean) };
  return <>
    <Motion />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <Header />
    <main id="accueil">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-photo" aria-hidden="true"><video className="hero-video" src="/hero-video.mp4" autoPlay muted loop playsInline preload="auto" /></div><div className="hero-shade"/><div className="hero-grain" aria-hidden="true" /><div className="container hero-inner"><div className="hero-content"><p className="hero-eyebrow"><span className="red-line" /> EVENT & AUDIOVISUAL PRODUCTION</p><h1 id="hero-title"><span className="hero-line"><span>VOTRE ÉVÉNEMENT.</span></span><span className="hero-line"><span><em>NOTRE EXPERTISE</em></span></span><span className="hero-line"><span>TECHNIQUE.</span></span></h1><p>Production événementielle et audiovisuelle au Maroc. De la préparation à la réalisation, une équipe et un parc matériel au service de vos projets.</p><a className="button button-red" href="#expertises">Découvrir nos expertises <Arrow /></a></div><div className="hero-rail"><span>VIDEO</span><span>LED</span><span>AUDIO</span><span>STRUCTURES</span></div></div><a className="hero-scroll" href="#apropos" aria-label="Aller à la section À propos"><span /></a></section>
      <div className="infinite-ribbon" role="img" aria-label="Production, captation, expérience et immersion"><div className="ribbon-track" aria-hidden="true">{[0,1].map(i=><div className="ribbon-copy" key={i}><span>PRODUCTION</span><RibbonStar /><span>CAPTATION</span><RibbonStar /><span>EXPÉRIENCE</span><RibbonStar /><span>IMMERSION</span><RibbonStar /></div>)}</div></div>
      <section id="apropos" className="section about-section"><div className="container"><div className="about-heading" data-reveal><Kicker number="01">À PROPOS DE PLAYEVENTS</Kicker><h2>L’EXPERTISE TECHNIQUE<br /><span>AU SERVICE DE VOS IDÉES.</span></h2></div><div className="about-stage"><div className="about-media" data-reveal><Image src="/1.jpeg" alt="Équipe technique PLAYEVENTS en régie événementielle" fill sizes="(max-width: 900px) 100vw, 55vw" /><div className="about-media-meta"><span>01 / 07</span><strong>PLAYEVENTS · MAROC</strong></div></div><div className="about-copy" data-reveal><p className="about-lead">Société spécialisée dans la production événementielle et audiovisuelle, pour les événements corporate, institutionnels, culturels et privés.</p><p>Grâce à un parc matériel professionnel et à une équipe technique qualifiée, PLAYEVENTS accompagne ses clients de la préparation jusqu’à la réalisation de l’événement.</p><p className="about-objective">Notre objectif : offrir une prestation fiable, professionnelle et adaptée aux exigences de chaque projet.</p><a className="text-link" href="#contact">Parlons de votre projet <Arrow /></a></div></div></div></section>
      <section id="expertises" className="section services-section"><div className="container"><div className="expertise-grid"><article className="expertise-card expertise-lead" data-reveal><Kicker number="02">NOS EXPERTISES</Kicker><h2>DES SOLUTIONS POUR<br /><span>CHAQUE ÉVÉNEMENT.</span></h2><p>Une réponse technique coordonnée, de la captation à la diffusion et à l’installation scénique.</p></article>{services.map((s) => <article className="expertise-card" key={s.n} data-reveal><div className="expertise-media"><Image src={s.image} alt={`Équipement illustrant ${s.title}`} fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="expertise-content"><span className="expertise-cat">{s.category}</span><span className="expertise-index">{s.n}<small>/05</small></span><h3>{s.title}</h3><p className="expertise-intro">{s.intro}</p>{s.paragraphs?.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}{s.points?.length ? <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul> : null}{s.sections?.map((sec) => <div className="expertise-block" key={sec.title}><h4>{sec.title}</h4><p>{sec.text}</p></div>)}{s.tags?.length ? <div className="expertise-tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div> : null}{s.note ? <p className="expertise-note">{s.note}</p> : null}</div></article>)}</div></div></section>
      <section id="materiel" className="section equipment-section"><div className="container"><div className="section-heading" data-reveal><div><Kicker number="03">NOTRE PARC MATÉRIEL</Kicker><h2>LE BON MATÉRIEL.<br /><span>AU BON MOMENT.</span></h2></div><p>Une sélection d’équipements professionnels pour des productions maîtrisées.</p></div><div className="equipment-grid">{equipment.map((item,i)=><article className="equipment-card" key={`${item.name}-${i}`} data-reveal><div className="equipment-visual"><Image src={item.image} alt={`Illustration : ${item.name}`} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" /></div><div className="equipment-meta"><span className="eq-index">{String(i+1).padStart(2,'0')}</span><span className="eq-category">{item.category}</span><h3>{item.name}</h3><p>{item.description}</p></div></article>)}</div></div></section>
      <section id="evenements" className="section events-section"><div className="container events-grid"><div data-reveal><Kicker number="04">TYPES D’ÉVÉNEMENTS</Kicker><h2>CHAQUE FORMAT<br /><span>SON EXIGENCE.</span></h2><p>PLAYEVENTS intervient notamment pour les événements professionnels, institutionnels, culturels et privés.</p><a className="button button-red" href="#contact">Demander une proposition <Arrow /></a></div><div className="events-list" data-reveal>{events.map((event,i)=><div key={event}><span>{String(i+1).padStart(2,'0')}</span><strong>{event}</strong><Arrow className="icon-arrow" /></div>)}</div></div></section>
      <section className="section value-section"><div className="container"><div className="section-heading" data-reveal><div><Kicker number="05">NOTRE VALEUR AJOUTÉE</Kicker><h2>UNE SEULE ÉQUIPE.<br /><span>TOUTES LES SOLUTIONS.</span></h2></div><p>Quatre piliers pour des productions maîtrisées, de bout en bout.</p></div><div className="value-list">{values.map(v=><article className="value-item" key={v.n} data-reveal><span className="value-num" aria-hidden="true">{v.n}</span><div className="value-body"><h3>{v.title}</h3><p>{v.text}</p></div></article>)}</div></div></section>
      <section className="manifesto"><div className="container" data-reveal><Kicker number="06">POURQUOI PLAYEVENTS ?</Kicker><p className="manifesto-words">PROFESSIONNALISME <b>•</b> FIABILITÉ <b>•</b> RÉACTIVITÉ <b>•</b> QUALITÉ TECHNIQUE <b>•</b> ACCOMPAGNEMENT</p><h2>Nous transformons les besoins techniques de nos clients en solutions concrètes, maîtrisées et adaptées à chaque événement.</h2></div></section>
      <section id="contact" className="contact-section"><div className="container"><div className="contact-heading" data-reveal><Kicker number="07">CONTACT</Kicker><h2>DONNONS VIE<br />À VOTRE <span>PROJET.</span></h2></div><div className="contact-stage"><div className="contact-copy" data-reveal><p>Parlez-nous de votre événement et demandez votre devis ou proposition technique.</p>{email ? <a className="button button-red" href={`mailto:${email}?subject=Demande%20de%20devis%20PLAYEVENTS`}>Demandez votre devis <Arrow /></a> : <p className="contact-note">Coordonnées à compléter avant la mise en ligne.</p>}</div><div className="contact-details" data-reveal><div className="contact-brand"><h3>PLAYEVENTS</h3><p>EVENT • AUDIOVISUAL • PRODUCTION</p></div><dl><div><dt>Adresse</dt><dd>{address || 'À compléter'}</dd></div><div><dt>Téléphone</dt><dd>{phone ? <a href={`tel:${phone.replace(/[^+\d]/g,'')}`}>{phone}</a> : 'À compléter'}</dd></div><div><dt>Email</dt><dd>{email ? <a href={`mailto:${email}`}>{email}</a> : 'À compléter'}</dd></div></dl></div></div></div></section>
    </main>
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p>EVENT · AUDIOVISUAL · PRODUCTION</p>
          </div>
          <nav className="footer-nav" aria-label="Pied de page">
            <a href="#apropos">À propos</a>
            <a href="#expertises">Expertises</a>
            <a href="#materiel">Matériel</a>
            <a href="#evenements">Événements</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="footer-cta" href={email ? `mailto:${email}?subject=Demande%20de%20devis%20PLAYEVENTS` : '#contact'}>
            Demander un devis <Arrow />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PLAYEVENTS. Tous droits réservés.</span>
          {(instagram || linkedin) && (
            <div className="footer-social">
              {instagram ? <a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a> : null}
              {linkedin ? <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> : null}
            </div>
          )}
          <a className="footer-top-link" href="#accueil">Retour en haut <ArrowUp /></a>
        </div>
      </div>
    </footer>
  </>;
}
