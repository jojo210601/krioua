'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Sparkles, Heart, Leaf, Moon, Shield, Home, ArrowRight, Check,
  Phone, Mail, MapPin, Star, ChevronDown, Waves, Sun,
} from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { fadeUp, stagger } from '@/components/site/motion-primitives';

const HERO_IMG = 'https://images.unsplash.com/photo-1649217707473-225fba0febd3?auto=format&fit=crop&w=1600&q=80';

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="hero" className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:col-span-7 relative z-10">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
              <span className="text-xs tracking-wide text-inkSoft">Magnétiseur · Genève & Suisse romande</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] leading-[1.02] text-inkDark text-balance">
              Retrouvez votre équilibre grâce au{' '}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-terracotta">magnétisme</span>
                <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: 'left' }}
                  className="absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-gradient-to-r from-terracotta/40 via-brownLight/40 to-sage/30 blur-[2px]" />
              </span>.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg text-inkSoft leading-relaxed">
              Magnétiseur à Genève, j&apos;accompagne adultes, enfants, seniors et animaux dans leur mieux-être physique, émotionnel et énergétique.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-pill btn-primary text-[15px]">
                Prendre rendez-vous <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-pill btn-ghost-glass text-[15px]">Découvrir les soins</Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div key={i} className="h-9 w-9 rounded-full border-2 border-cream bg-gradient-to-br from-sand to-brownLight" />
                ))}
              </div>
              <div className="flex items-center gap-1 text-terracotta">
                {[...Array(5)].map((_,i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                <span className="ml-2 text-xs text-inkSoft">4,9 · +120 personnes accompagnées</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y2, opacity }} className="lg:col-span-5 relative">
            <motion.div style={{ y: y1 }} className="relative aspect-[4/5] rounded-[36px] overflow-hidden glass-strong p-2">
              <div className="absolute inset-2 rounded-[30px] overflow-hidden">
                <img src={HERO_IMG} alt="Séance de magnétisme, mains apaisantes" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-cream/50 via-transparent to-transparent" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9 }}
              className="absolute -left-4 sm:-left-10 top-16 glass-strong rounded-3xl p-4 w-[210px] shadow-glassLg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-sage/25 flex items-center justify-center"><Leaf className="h-5 w-5 text-sage" /></div>
                <div><div className="text-xs text-inkSoft">Approche</div><div className="text-sm font-medium text-inkDark">Douce & naturelle</div></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.9 }}
              className="absolute -right-2 sm:-right-6 bottom-14 glass-strong rounded-3xl p-4 w-[230px] shadow-glassLg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-terracotta/20 flex items-center justify-center"><Heart className="h-5 w-5 text-terracotta" /></div>
                <div><div className="text-xs text-inkSoft">Séance</div><div className="text-sm font-medium text-inkDark">60 min de sérénité</div></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Heart, title: 'Écoute bienveillante', text: "Un espace sûr, sans jugement, où chacun est accueilli avec attention." },
    { icon: Leaf, title: 'Approche naturelle', text: "Le magnétisme, transmis en douceur, comme complément à votre bien-être." },
    { icon: Shield, title: 'Vocabulaire responsable', text: "Aucune promesse de guérison. Un accompagnement clair et respectueux." },
    { icon: Moon, title: 'Cadre apaisant', text: "Cabinet à Genève, atmosphère calme, propice à la détente profonde." },
  ];
  return (
    <section id="approche" className="relative py-24 lg:py-32">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="max-w-2xl mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-inkSoft mb-4">
            <span className="h-px w-8 bg-taupe/50" /> Pourquoi Maxime
          </motion.div>
          <motion.h2 variants={fadeUp} className="display text-4xl md:text-5xl lg:text-6xl text-inkDark leading-[1.05]">
            Un accompagnement <em className="text-terracotta">humain</em>,<br />sensible et sur mesure.
          </motion.h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div key={i} custom={i} variants={fadeUp} whileHover={{ y: -4 }} transition={{ duration: 0.4 }}
              className="glass rounded-[28px] p-7 h-full hover:shadow-glassLg transition-all duration-500">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sand to-brownLight/60 flex items-center justify-center mb-6">
                <it.icon className="h-5 w-5 text-inkDark" strokeWidth={1.6} />
              </div>
              <h3 className="text-lg font-medium text-inkDark mb-2">{it.title}</h3>
              <p className="text-sm text-inkSoft leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Waves, tag: 'Corps', title: 'Douleurs physiques', items: ['Mal de dos', 'Migraines', 'Fatigue', 'Brûlures, eczéma, psoriasis'] },
    { icon: Heart, tag: 'Émotions', title: 'Blessures émotionnelles', items: ['Stress, anxiété', 'Burn-out', 'Confiance en soi', 'Sommeil'] },
    { icon: Sun, tag: 'Vie', title: 'Accompagnement', items: ['Séparation', 'Deuil', 'Périodes difficiles', 'Transitions'] },
    { icon: Sparkles, tag: 'Profondeur', title: 'Blocages', items: ["Mémoires d'enfance", 'Mémoires familiales', 'Transgénérationnel', 'Vies antérieures'] },
    { icon: Home, tag: 'Lieux', title: 'Nettoyage énergétique', items: ['Maisons', 'Appartements', 'Bureaux', 'Commerces'] },
    { icon: Leaf, tag: 'Tous', title: 'Enfants & animaux', items: ['Enfants accueillis gratuitement', 'Animaux accueillis gratuitement', 'Séance adaptée', 'Douceur particulière'], highlight: true },
  ];
  return (
    <section id="soins" className="relative py-24 lg:py-32">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-inkSoft mb-4">
              <span className="h-px w-8 bg-taupe/50" /> Les soins
            </motion.div>
            <motion.h2 variants={fadeUp} className="display text-4xl md:text-5xl lg:text-6xl text-inkDark leading-[1.05]">
              Des thèmes accompagnés<br />avec <em className="text-sage">délicatesse</em>.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-inkSoft max-w-md text-sm leading-relaxed">
            Ces thèmes font partie de l&apos;approche du praticien. Ils ne remplacent en aucun cas un avis, un diagnostic ou un traitement médical.
          </motion.p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}
              className={`group relative rounded-[32px] p-8 overflow-hidden transition-all duration-500 ${s.highlight ? 'glass-strong shadow-glassLg' : 'glass hover:shadow-glassLg'}`}>
              {s.highlight && (<div className="absolute top-6 right-6 text-[10px] uppercase tracking-widest text-sage font-medium">Offert</div>)}
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sand via-brownLight/40 to-terracotta/20 flex items-center justify-center mb-8 shadow-soft">
                <s.icon className="h-6 w-6 text-inkDark" strokeWidth={1.5} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-inkSoft mb-2">{s.tag}</div>
              <h3 className="display text-2xl text-inkDark mb-6">{s.title}</h3>
              <ul className="space-y-2.5">
                {s.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-inkSoft">
                    <span className="mt-1 h-1 w-1 rounded-full bg-terracotta shrink-0" /><span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-pill btn-ghost-glass">Voir tous les soins en détail <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function SessionFlow() {
  const steps = [
    { n: '01', t: 'Nettoyage énergétique', d: "Un premier passage pour dissiper les tensions et préparer le corps." },
    { n: '02', t: 'Ancrage', d: "Reconnexion à soi, à sa respiration, au moment présent." },
    { n: '03', t: 'Libération des blocages', d: "Travail en douceur sur ce qui pèse, ce qui freine, ce qui encombre." },
    { n: '04', t: 'Recharge énergétique', d: "Apport d'une énergie apaisante, comme une lumière qui se dépose." },
    { n: '05', t: 'Harmonisation', d: "Rééquilibrage global entre corps, cœur et esprit." },
    { n: '06', t: 'Magnétisme ciblé', d: "Passage sur les zones qui en ont particulièrement besoin." },
  ];
  return (
    <section id="seance" className="relative py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-inkSoft mb-4">
              <span className="h-px w-8 bg-taupe/50" /> La séance
            </motion.div>
            <motion.h2 variants={fadeUp} className="display text-4xl md:text-5xl text-inkDark leading-[1.05] mb-6">
              Comment se déroule<br />une <em className="text-terracotta">séance</em>.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-inkSoft leading-relaxed mb-8">
              Chaque séance dure environ 60 minutes. Elle se déroule dans un cadre calme, respectueux et confidentiel, en 6 temps.
            </motion.p>
            <motion.div variants={fadeUp}><Link href="/contact" className="btn-pill btn-primary">Réserver ma séance <ArrowRight className="h-4 w-4" /></Link></motion.div>
          </motion.div>
          <motion.ol variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <motion.li key={i} variants={fadeUp} className="glass rounded-[26px] p-6 hover:shadow-glassLg transition-all duration-500">
                <div className="display text-terracotta text-3xl mb-3">{s.n}</div>
                <div className="text-lg font-medium text-inkDark mb-1.5">{s.t}</div>
                <p className="text-sm text-inkSoft leading-relaxed">{s.d}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

function PricingTeaser() {
  const plans = [
    { name: 'Séance unique', price: 120, sessions: 'À l\'unité' },
    { name: 'Forfait Découverte', price: 299, old: 360, save: 61, sessions: '3 séances', badge: 'Le plus populaire', featured: true },
    { name: 'Forfait Bien-être', price: 599, old: 720, save: 121, sessions: '6 séances' },
  ];
  return (
    <section id="tarifs" className="relative py-24 lg:py-32">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-inkSoft mb-4 justify-center">
            <span className="h-px w-8 bg-taupe/50" /> Tarifs
          </motion.div>
          <motion.h2 variants={fadeUp} className="display text-4xl md:text-5xl lg:text-6xl text-inkDark leading-[1.05]">
            Un tarif juste,<br />pour un vrai <em className="text-terracotta">changement</em>.
          </motion.h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}
              className={`relative rounded-[32px] p-8 flex flex-col transition-all duration-500 ${p.featured ? 'glass-strong shadow-glassLg lg:scale-[1.04] lg:-translate-y-1' : 'glass hover:shadow-glassLg'}`}>
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-terracotta to-terracottaDark text-white text-[10px] uppercase tracking-[0.18em] px-4 py-1.5 rounded-full shadow-soft whitespace-nowrap">★ {p.badge}</div>
                </div>
              )}
              <div className="text-[10px] uppercase tracking-[0.2em] text-inkSoft mb-2">{p.sessions}</div>
              <h3 className="display text-2xl text-inkDark mb-6">{p.name}</h3>
              <div className="flex items-end gap-2 mb-1">
                <div className="display text-5xl text-inkDark">{p.price}</div>
                <div className="text-inkSoft mb-2 text-sm">CHF</div>
              </div>
              {p.old ? (
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-inkSoft line-through">{p.old} CHF</span>
                  <span className="text-xs text-sage font-medium bg-sage/15 px-2.5 py-1 rounded-full">Économie de {p.save} CHF</span>
                </div>
              ) : <div className="mb-6 h-[26px]" />}
              <Link href="/tarifs" className={`btn-pill w-full justify-center mt-auto ${p.featured ? 'btn-primary' : 'btn-ghost-glass'}`}>Choisir</Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Link href="/tarifs" className="text-sm text-inkSoft hover:text-terracotta underline underline-offset-4">Voir tous les forfaits →</Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: 'Sophie L.', city: 'Genève', text: "J'ai retrouvé un vrai calme intérieur. L'accueil de Maxime est d'une douceur rare.", rating: 5 },
    { name: 'Marc D.', city: 'Nyon', text: "Après quelques séances, je me sens plus léger, mieux ancré. Une belle rencontre.", rating: 5 },
    { name: 'Camille R.', city: 'Lausanne', text: "Une approche respectueuse, sans promesse, mais des résultats que je ressens au quotidien.", rating: 5 },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mb-14">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-inkSoft mb-4">
            <span className="h-px w-8 bg-taupe/50" /> Témoignages
          </motion.div>
          <motion.h2 variants={fadeUp} className="display text-4xl md:text-5xl lg:text-6xl text-inkDark leading-[1.05]">
            Ils ont retrouvé leur <em className="text-sage">équilibre</em>.
          </motion.h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }} className="glass rounded-[28px] p-8 flex flex-col">
              <div className="flex items-center gap-1 text-terracotta mb-5">
                {[...Array(t.rating)].map((_,k)=> <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="display text-2xl text-inkDark leading-snug mb-6">« {t.text} »</p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-inkDark/5">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sand to-brownLight" />
                <div><div className="text-sm font-medium text-inkDark">{t.name}</div><div className="text-xs text-inkSoft">{t.city}</div></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link href="/temoignages" className="btn-pill btn-ghost-glass">Lire tous les témoignages <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="glass rounded-[24px] overflow-hidden">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between gap-6 text-left px-7 py-6">
        <span className="text-lg text-inkDark font-medium">{q}</span>
        <span className={`h-9 w-9 rounded-full glass flex items-center justify-center transition-transform duration-500 shrink-0 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown className="h-4 w-4 text-inkDark" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <div className="px-7 pb-6 text-inkSoft leading-relaxed text-[15px]">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const FAQ_ITEMS = [
  { q: "Le magnétisme peut-il remplacer un médecin ?", a: "Non. Le magnétisme est une approche complémentaire de bien-être. Il ne remplace en aucun cas un avis, un diagnostic ou un traitement médical. Il peut soutenir, accompagner et contribuer au confort, selon les personnes." },
  { q: "Combien de temps dure une séance ?", a: "Environ 60 minutes. Elle comprend un temps d'échange, la séance à proprement parler, puis un temps pour partager vos ressentis." },
  { q: "À partir de quel âge peut-on venir ?", a: "Il n'y a pas d'âge minimum. Les enfants sont accueillis avec une approche particulièrement douce et sont accompagnés gratuitement." },
  { q: "Faut-il croire au magnétisme pour que cela fonctionne ?", a: "Non, il n'est pas nécessaire d'avoir de convictions particulières. L'ouverture et la disponibilité suffisent pour vivre pleinement la séance." },
  { q: "Combien de séances sont nécessaires ?", a: "Cela dépend de chacun. Une séance suffit parfois, tandis que d'autres situations bénéficient d'un accompagnement sur plusieurs séances. Nous en parlons ensemble." },
];

function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="container max-w-3xl">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-inkSoft mb-4 justify-center">
            <span className="h-px w-8 bg-taupe/50" /> Questions fréquentes
          </motion.div>
          <motion.h2 variants={fadeUp} className="display text-4xl md:text-5xl text-inkDark leading-[1.05]">
            Vos questions,<br />nos <em className="text-terracotta">réponses</em>.
          </motion.h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="space-y-3">
          {FAQ_ITEMS.map((f, i) => (
            <motion.div key={i} variants={fadeUp}><FAQItem q={f.q} a={f.a} defaultOpen={i === 0} /></motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[40px] glass-strong p-10 md:p-16 lg:p-20 text-center shadow-glassLg">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-terracotta/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sage/25 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
              <MapPin className="h-3.5 w-3.5 text-terracotta" />
              <span className="text-xs tracking-wide text-inkSoft">Genève · Suisse romande</span>
            </div>
            <h2 className="display text-4xl md:text-6xl lg:text-7xl text-inkDark leading-[1.05] max-w-3xl mx-auto text-balance">
              Prêt à faire le<br /><em className="text-terracotta">premier pas</em> ?
            </h2>
            <p className="mt-6 text-inkSoft max-w-xl mx-auto text-lg">
              Réservez votre séance en quelques secondes. Un moment pour vous, pour respirer, pour retrouver votre équilibre.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-pill btn-primary text-[15px] px-8 py-4">Prendre rendez-vous <ArrowRight className="h-4 w-4" /></Link>
              <a href="tel:+41000000000" className="btn-pill btn-ghost-glass text-[15px]"><Phone className="h-4 w-4" /> Appeler Maxime</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomeContent() {
  return (
    <main className="relative min-h-screen text-inkDark overflow-hidden">
      <Hero />
      <Benefits />
      <Services />
      <SessionFlow />
      <PricingTeaser />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
