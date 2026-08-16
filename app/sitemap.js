import { SITE } from '@/lib/site';
import { BLOG_POSTS } from '@/lib/blog-posts';

export default function sitemap() {
  const routes = ['', '/a-propos', '/services', '/tarifs', '/temoignages', '/blog', '/contact'];
  const now = new Date();
  return [
    ...routes.map((r) => ({
      url: `${SITE.url}${r}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: r === '' ? 1 : 0.8,
    })),
    ...BLOG_POSTS.map((p) => ({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
