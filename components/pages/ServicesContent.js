'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Waves, Heart, Sun, Sparkles, Home, Leaf, Check } from 'lucide-react';
import { fadeUp, stagger, Reveal, SectionHeader } from '@/components/site/motion-primitives';

const SERVICES = [
  { icon: Waves, tag: 'Corps', title: 'Douleurs physiques', desc: "Un accompagnement doux pour les douleurs et gênes physiques.", items: ['Mal de dos, tensions', 'Migraines, céphalées', 'Fatigue chronique', 'Brûlures, eczéma, psoriasis'] },
  { icon: Heart, tag: 'Émotions', title: 'Blessures émotionnelles', desc: "Un espace de dépose pour ce que le cœur porte.", items: ['Stress, anxiété', 'Burn-out, épuisement', 'Confiance en soi', 'Troubles du sommeil'] },
  { icon: Sun, tag: 'Vie', title: 'Accompagnement de vie', desc: "Un soutien lors des étapes charnières.", items: ['Séparation, rupture', 'Deuil', 'Périodes difficiles', 'Transitions de vie'] },
  { icon: Sparkles, tag: 'Profondeur', title: 'Blocages profonds', desc: "Un travail sensible sur ce qui pèse en profondeur.", items: ["Mémoires d'enfance", 'Mémoires familiales', 'Transgénérationnel', 'Vies antérieures'], note: "Ces thèmes font partie de l'approche du praticien." },
  { icon: Home, tag: 'Lieux', title: 'Nettoyage énergétique', desc: "Redonner à un lieu son atmosphère paisible.", items: ['Maisons', 'Appartements', 'Bureaux', 'Commerces'] },
  { icon: Leaf, tag: 'Enfants & animaux', title: 'Enfants & animaux', desc: "Une douceur particulière, gratuitement.", items: ['Enfants : accompagnement gratuit', 'Animaux : accompagnement gratuit', 'Séances adaptées', 'Approche très douce'], highlight: true },
];

export default function ServicesContent() {
  return (
    <main className="relative min-h-screen pt-40 pb-24">
      <div className="container">
        <SectionHeader eyebrow="Les soins" title={<>Un accompagnement <em className="text-terracotta">sur mesure</em>.</>} subtitle="Chaque situation est unique. Les soins que je propose s'adaptent à votre vécu, votre rythme et vos besoins." />

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`relative rounded-[32px] p-8 h-full ${s.highlight ? 'glass-strong shadow-glassLg' : 'glass hover:shadow-glassLg'} transition-all duration-500`}>
                {s.highlight && (<div className="absolute top-6 right-6 text-[10px] uppercase tracking-widest text-sage font-medium">Offert</div>)}
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sand via-brownLight/40 to-terracotta/20 flex items-center justify-center mb-6 shadow-soft"><s.icon className="h-6 w-6 text-inkDark" strokeWidth={1.5} /></div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-inkSoft mb-2">{s.tag}</div>
                <h3 className="display text-3xl text-inkDark mb-3">{s.title}</h3>
                <p className="text-sm text-inkSoft mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-inkDark/80">
                      <Check className="h-4 w-4 text-terracotta mt-0.5 shrink-0" strokeWidth={2.5} /><span>{it}</span>
                    </li>
                  ))}
                </ul>
                {s.note && <p className="mt-5 text-xs text-inkSoft italic">{s.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass-strong rounded-[40px] p-12 text-center">
            <h2 className="display text-3xl md:text-4xl text-inkDark mb-4">Un doute sur le soin qui vous conviendrait&nbsp;?</h2>
            <p className="text-inkSoft mb-8 max-w-xl mx-auto">Écrivons-nous. Nous échangerons quelques minutes pour définir ensemble ce qui vous conviendrait le mieux.</p>
            <Link href="/contact" className="btn-pill btn-primary">Échanger avec Maxime <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>

        <p className="text-center text-xs text-inkSoft mt-10 max-w-2xl mx-auto">
          Les prestations proposées ne remplacent en aucun cas un avis, un diagnostic ou un traitement médical.
        </p>
      </div>
    </main>
  );
}
