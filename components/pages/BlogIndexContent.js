'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { fadeUp, stagger, Reveal, SectionHeader } from '@/components/site/motion-primitives';
import { BLOG_POSTS } from '@/lib/blog-posts';

export default function BlogIndexContent() {
  return (
    <main className="relative min-h-screen pt-40 pb-24">
      <div className="container">
        <SectionHeader center eyebrow="Blog" title={<>Comprendre le <em className="text-terracotta">magnétisme</em>.</>} subtitle="Des articles simples pour découvrir la pratique, ses limites et son intérêt comme approche complémentaire." />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.map((p, i) => (
            <motion.article key={p.slug} variants={fadeUp}>
              <Link href={`/blog/${p.slug}`} className="group block glass rounded-[28px] p-8 h-full hover:shadow-glassLg transition-all duration-500">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-full">{p.tag}</span>
                  <span className="text-[11px] text-inkSoft flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime} min</span>
                </div>
                <h2 className="display text-2xl text-inkDark leading-snug mb-3 group-hover:text-terracotta transition-colors">{p.title}</h2>
                <p className="text-sm text-inkSoft leading-relaxed mb-6">{p.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-inkDark/5">
                  <span className="text-xs text-inkSoft">{new Date(p.date).toLocaleDateString('fr-CH', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="h-8 w-8 rounded-full glass flex items-center justify-center group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
