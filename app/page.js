import HomeContent from '@/components/pages/HomeContent';
import { FAQ_ITEMS } from '@/lib/faq';

export const metadata = {
  title: 'Magnétiseur à Genève — Retrouvez votre équilibre',
  description: "Maxime Krioua, magnétiseur à Genève. Accompagnement en soins énergétiques pour adultes, enfants, seniors et animaux.",
  alternates: { canonical: '/' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomeContent />
    </>
  );
}
