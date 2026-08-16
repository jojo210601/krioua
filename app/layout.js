import './globals.css';
import Nav from '@/components/site/Nav';
import Footer from '@/components/site/Footer';
import AmbientBackdrop from '@/components/site/AmbientBackdrop';
import { SITE } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · Magnétiseur à Genève — ${SITE.practitioner}`,
    template: `%s · ${SITE.name} Magnétiseur Genève`,
  },
  description:
    "Maxime Krioua, magnétiseur à Genève. Soins énergétiques pour adultes, enfants, seniors et animaux. Retrouvez votre équilibre physique, émotionnel et énergétique en Suisse romande.",
  keywords: [
    'magnétiseur Genève', 'magnétiseur Suisse', 'magnétisme Genève',
    'soins énergétiques Genève', 'Reiki Genève', 'Krioua', 'Maxime Krioua',
    'magnétiseur Suisse romande', 'soin énergétique animaux Genève',
  ],
  authors: [{ name: SITE.practitioner }],
  creator: SITE.practitioner,
  publisher: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} · Magnétiseur à Genève`,
    description: "Retrouvez votre équilibre grâce au magnétisme. Séances à Genève et en Suisse romande.",
    images: [{ url: '/logo-icon.png', width: 1200, height: 630, alt: 'Krioua Soins énergétiques' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} · Magnétiseur à Genève`,
    description: 'Magnétiseur à Genève. Accompagnement doux et responsable.',
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: '/logo-icon.png', type: 'image/png' }],
    apple: [{ url: '/logo-icon.png' }],
  },
  category: 'health',
};

export const viewport = { themeColor: '#FAF6F0' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.fullName,
  description: 'Magnétiseur à Genève, soins énergétiques pour adultes, enfants, seniors et animaux.',
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/logo-icon.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.locality,
    postalCode: SITE.address.postal,
    addressCountry: SITE.address.country,
  },
  areaServed: ['Genève', 'Canton de Genève', 'Suisse romande'],
  founder: { '@type': 'Person', name: SITE.practitioner },
  priceRange: 'CHF 120–CHF 1149',
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    opens: '09:00', closes: '19:00',
  }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <AmbientBackdrop />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
