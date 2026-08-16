'use client';
import Link from 'next/link';
import { ArrowRight, Star, Play, Quote } from 'lucide-react';
import { Reveal, SectionHeader } from '@/components/site/motion-primitives';

const TESTIMONIALS = [
  { name: 'Sophie L.', city: 'Genève', text: "J'ai retrouvé un vrai calme intérieur après plusieurs mois de stress intense. L'accueil de Maxime est d'une douceur rare.", rating: 5, video: true },
  { name: 'Marc D.', city: 'Nyon', text: "Après quelques séances, je me sens plus léger, mieux ancré. Une belle rencontre humaine avant tout.", rating: 5 },
  { name: 'Camille R.', city: 'Lausanne', text: "Une approche respectueuse, sans promesse, mais des résultats que je ressens au quotidien.", rating: 5 },
  { name: 'Isabelle V.', city: 'Carouge', text: "J'ai amené mon fils de 7 ans. Maxime a su l'accueillir avec une douceur infinie. Il en est ressorti souriant, apaisé.", rating: 5 },
  { name: 'Antoine B.', city: 'Genève', text: "J'étais sceptique au départ. Mais l'échange est humain, l'écoute est vraie. Je suis sorti plus léger.", rating: 5, video: true },
  { name: 'Valérie P.', city: 'Vevey', text: "Mon chien âgé a reçu une séance. Maxime a agi avec tellement de calme. Une belle expérience.", rating: 5 },
  { name: 'Julien M.', city: 'Meyrin', text: "Le cadre est apaisant, l'accueil impeccable. Une véritable bulle de sérénité au cœur de Genève.", rating: 5 },
  { name: 'Laura T.', city: 'Onex', text: "J'ai apprécié le vocabulaire honnête de Maxime, sans grandes promesses. C'est rassurant.", rating: 5 },
];

const VIDEO_TESTIMONIALS = [
  { src: '/VIDEO-2026-08-10-00-45-41.mp4', label: 'Témoignage vidéo · Sophie L.' },
  { src: '/VIDEO-2026-08-10-00-48-20.mp4', label: 'Témoignage vidéo · Antoine B.' },
];

export default function TemoignagesContent() {
  return (
    <main className="relative min-h-screen pt-40 pb-24">
      <div className="container">
        <SectionHeader center eyebrow="Témoignages" title={<>Ils ont retrouvé leur <em className="text-sage">équilibre</em>.</>} subtitle="Ces retours sont des témoignages individuels. Ils reflètent le vécu de chacun et ne présagent en rien du résultat pour d'autres personnes." />

        <Reveal>
          <div className="glass-strong rounded-[40px] p-10 md:p-14 mb-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                  <span className="text-xs tracking-wide text-inkSoft">Étude de cas · témoignage individuel</span>
                </div>
                <h2 className="display text-3xl md:text-4xl text-inkDark leading-tight mb-6">Douleurs liées à une jaunisse.</h2>
                <p className="text-inkSoft leading-relaxed mb-4">Une personne souffrant d'importantes douleurs liées à une jaunisse a constaté une amélioration après une séance de magnétisme.</p>
                <p className="text-sm text-inkSoft italic">Ce récit est un témoignage personnel. Il ne prétend pas démontrer un effet reproductible et ne remplace en aucun cas un avis ou un traitement médical.</p>
              </div>
              <div className="glass rounded-[28px] p-8">
                <Quote className="h-8 w-8 text-terracotta mb-4" strokeWidth={1.4} />
                <p className="display text-xl text-inkDark leading-snug">« J'ai ressenti un vrai apaisement dès la première séance. »</p>
                <div className="text-xs text-inkSoft mt-4">— Patiente accompagnée à Genève</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-inkSoft mb-6">Témoignages vidéo</div>
            <div className="grid md:grid-cols-2 gap-5">
              {VIDEO_TESTIMONIALS.map((video) => (
                <div key={video.src} className="relative rounded-[28px] overflow-hidden glass-strong bg-inkDark/5">
                  <video
                    className="block w-full aspect-video object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    src={video.src}
                  >
                    Votre navigateur ne prend pas en charge la lecture vidéo.
                  </video>
                  <div className="px-5 py-4 flex items-center gap-2">
                    <Play className="h-4 w-4 text-terracotta shrink-0" />
                    <span className="text-xs text-inkSoft">{video.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div className="glass rounded-[28px] p-8 h-full flex flex-col hover:shadow-glassLg transition-all duration-500">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-terracotta">
                    {[...Array(t.rating)].map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                  {t.video && <div className="text-[10px] uppercase tracking-widest text-sage">Vidéo</div>}
                </div>
                <p className="display text-xl text-inkDark leading-snug mb-6">« {t.text} »</p>
                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-inkDark/5">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sand to-brownLight" />
                  <div><div className="text-sm font-medium text-inkDark">{t.name}</div><div className="text-xs text-inkSoft">{t.city}</div></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass-strong rounded-[40px] p-12 text-center">
            <h2 className="display text-3xl md:text-4xl text-inkDark mb-4">Vous aussi, partagez votre expérience.</h2>
            <p className="text-inkSoft mb-8 max-w-xl mx-auto">Après votre séance, votre retour aide d'autres personnes à franchir le pas.</p>
            <Link href="/contact" className="btn-pill btn-primary">Prendre rendez-vous <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
