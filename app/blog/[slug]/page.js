import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-posts';
import { SITE } from '@/lib/site';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();

  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const next = BLOG_POSTS[(idx + 1) % BLOG_POSTS.length];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: SITE.practitioner },
    publisher: { '@type': 'Organization', name: SITE.name },
    datePublished: post.date,
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
    ],
  };

  return (
    <main className="relative min-h-screen pt-40 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="container max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-inkSoft hover:text-terracotta mb-8">
          <ArrowLeft className="h-4 w-4" /> Retour au blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] uppercase tracking-widest text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-full">{post.tag}</span>
          <span className="text-xs text-inkSoft flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime} min de lecture</span>
          <span className="text-xs text-inkSoft">· {new Date(post.date).toLocaleDateString('fr-CH', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>

        <h1 className="display text-4xl md:text-5xl lg:text-6xl text-inkDark leading-[1.05] mb-6 text-balance">{post.title}</h1>
        <p className="text-lg text-inkSoft leading-relaxed mb-10">{post.excerpt}</p>

        <article className="glass-strong rounded-[32px] p-8 md:p-12 space-y-5 text-inkDark leading-relaxed">
          {post.body.map((para, i) => (
            <p key={i} className={i === 0 ? 'text-lg' : 'text-base'}>{para}</p>
          ))}
          <p className="text-xs text-inkSoft italic pt-6 border-t border-inkDark/5">
            Cet article est proposé à titre informatif. Les prestations évoquées ne remplacent en aucun cas un avis, un diagnostic ou un traitement médical.
          </p>
        </article>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          <Link href={`/blog/${next.slug}`} className="glass rounded-[24px] p-6 hover:shadow-glassLg transition-all">
            <div className="text-xs text-inkSoft mb-2">Article suivant</div>
            <div className="display text-xl text-inkDark leading-snug flex items-center justify-between gap-4">
              <span>{next.title}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-terracotta" />
            </div>
          </Link>
          <Link href="/contact" className="glass-strong rounded-[24px] p-6 hover:shadow-glassLg transition-all bg-gradient-to-br from-terracotta/10 to-transparent">
            <div className="text-xs text-inkSoft mb-2">Envie d'échanger&nbsp;?</div>
            <div className="display text-xl text-inkDark leading-snug flex items-center justify-between gap-4">
              <span>Prendre rendez-vous</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-terracotta" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
