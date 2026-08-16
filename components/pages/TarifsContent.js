'use client';
import Link from 'next/link';
import { ArrowRight, Check, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, Reveal, SectionHeader } from '@/components/site/motion-primitives';

const PLANS = [
  { name: 'Séance unique', price: 120, sessions: "À l'unité", desc: 'Découvrir le magnétisme et repartir apaisé.', features: ['1 séance de 60 min', 'Bilan personnalisé', 'Conseils post-séance', 'Sans engagement'] },
  { name: 'Forfait Découverte', price: 299, old: 360, save: 61, sessions: '3 séances', badge: 'Le plus populaire', desc: 'Installer un vrai changement, en douceur.', features: ['3 séances de 60 min', 'Suivi personnalisé', 'Économie de 61 CHF', 'Recommandé pour débuter'], featured: true },
  { name: 'Forfait Bien-être', price: 599, old: 720, save: 121, sessions: '6 séances', desc: 'Un accompagnement en profondeur.', features: ['6 séances de 60 min', 'Suivi rapproché', 'Économie de 121 CHF', 'Progression durable'] },
  { name: 'Forfait Transformation', price: 1149, old: 1440, save: 291, sessions: '12 séances', desc: 'Une transformation durable.', features: ['12 séances de 60 min', 'Suivi premium', 'Économie de 291 CHF', 'Accompagnement long terme'] },
];

export default function TarifsContent() {
  return (
    <main className="relative min-h-screen pt-40 pb-24 overflow-x-hidden">
      <div className="container">
        <SectionHeader center eyebrow="Tarifs" title={<>Un tarif juste, pour un vrai <em className="text-terracotta">changement</em>.</>} subtitle="Choisissez la formule qui vous correspond. Les forfaits offrent une progression durable et des économies significatives." />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {PLANS.map((p, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}
              className={`relative min-w-0 w-full rounded-[32px] p-6 sm:p-8 flex flex-col transition-all duration-500 ${p.featured ? 'glass-strong shadow-glassLg lg:scale-[1.04] lg:-translate-y-1' : 'glass hover:shadow-glassLg'}`}>
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 max-w-[calc(100%-1.5rem)]">
                  <div className="bg-gradient-to-r from-terracotta to-terracottaDark text-white text-[10px] uppercase tracking-[0.18em] px-4 py-1.5 rounded-full shadow-soft whitespace-nowrap">★ {p.badge}</div>
                </div>
              )}
              <div className="text-[10px] uppercase tracking-[0.2em] text-inkSoft mb-2">{p.sessions}</div>
              <h3 className="display text-2xl text-inkDark mb-3 break-words">{p.name}</h3>
              <p className="text-sm text-inkSoft mb-6 min-h-[40px]">{p.desc}</p>
              <div className="flex items-end gap-2 mb-1 min-w-0">
                <div className="display text-5xl text-inkDark leading-none">{p.price}</div>
                <div className="text-inkSoft mb-1 text-sm">CHF</div>
              </div>
              {p.old ? (
                <div className="flex flex-wrap items-center gap-2 mb-6 min-w-0">
                  <span className="text-sm text-inkSoft line-through">{p.old} CHF</span>
                  <span className="text-xs text-sage font-medium bg-sage/15 px-2.5 py-1 rounded-full break-words">Économie {p.save} CHF</span>
                </div>
              ) : <div className="mb-6 h-[26px]" />}
              <ul className="space-y-2.5 mb-8 flex-1 min-w-0">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-inkDark/80 min-w-0">
                    <Check className="h-4 w-4 text-sage mt-0.5 shrink-0" strokeWidth={2.5} /><span className="break-words">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`btn-pill w-full justify-center ${p.featured ? 'btn-primary' : 'btn-ghost-glass'}`}>Choisir ce forfait</Link>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <div className="glass rounded-full px-6 py-4 flex items-center gap-4 justify-center max-w-2xl mx-auto flex-wrap text-center mb-16">
            <div className="h-8 w-8 rounded-full bg-sage/25 flex items-center justify-center shrink-0"><Heart className="h-4 w-4 text-sage" /></div>
            <p className="text-sm text-inkDark"><span className="font-medium">Les enfants et les animaux</span><span className="text-inkSoft"> sont accompagnés gratuitement.</span></p>
          </div>
        </Reveal>

        <Reveal>
          <div className="glass-strong rounded-[40px] p-8 md:p-12 text-center">
            <h2 className="display text-3xl md:text-4xl text-inkDark mb-4">Une question sur les forfaits&nbsp;?</h2>
            <p className="text-inkSoft mb-8 max-w-xl mx-auto">Je réponds personnellement à chaque demande. Prenons le temps d'échanger ensemble.</p>
            <Link href="/contact" className="btn-pill btn-primary">Contacter Maxime <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
