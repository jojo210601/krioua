import TemoignagesContent from '@/components/pages/TemoignagesContent';
export const metadata = {
  title: 'Témoignages — Retours de patients accompagnés',
  description: 'Découvrez les témoignages de personnes accompagnées par Maxime Krioua, magnétiseur à Genève.',
  alternates: { canonical: '/temoignages' },
};
export default function Page() { return <TemoignagesContent />; }
