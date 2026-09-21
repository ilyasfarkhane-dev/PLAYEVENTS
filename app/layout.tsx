import type { Metadata, Viewport } from 'next';
import Splash from './splash';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const title = 'PLAYEVENTS | Production événementielle et audiovisuelle au Maroc';
const description = 'PLAYEVENTS accompagne vos conférences, conventions et événements au Maroc : captation vidéo 4K, écrans LED, sonorisation, scènes et prises de vue aériennes.';

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title,
  description,
  applicationName: 'PLAYEVENTS',
  keywords: ['production événementielle Maroc', 'production audiovisuelle Maroc', 'captation multicaméra', 'écrans LED indoor', 'sonorisation événementielle', 'location matériel événementiel Maroc', 'live streaming conférence'],
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  robots: { index: true, follow: true },
  openGraph: { title, description, type: 'website', locale: 'fr_MA', siteName: 'PLAYEVENTS', url: siteUrl, images: [{ url: '/images/absen.jpg', width: 1920, height: 1080, alt: 'Scène événementielle avec écran LED' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/absen.jpg'] },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#111214' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="splash-active" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('pe-splash')==='1'){document.documentElement.classList.remove('splash-active');document.documentElement.classList.add('splash-ready');}}catch(e){}`,
          }}
        />
        <Splash />
        {children}
      </body>
    </html>
  );
}

