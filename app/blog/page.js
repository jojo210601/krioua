import BlogIndexContent from '@/components/pages/BlogIndexContent';
export const metadata = {
  title: 'Blog — Magnétisme, soins énergétiques, bien-être',
  description: 'Articles pour comprendre le magnétisme, choisir un magnétiseur à Genève et découvrir les soins énergétiques.',
  alternates: { canonical: '/blog' },
};
export default function Page() { return <BlogIndexContent />; }
