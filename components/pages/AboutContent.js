'use client';
import { motion } from 'framer-motion';
import { Award, Sparkles, Heart, Watch } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { fadeUp, stagger, Reveal, SectionHeader } from '@/components/site/motion-primitives';

const ABOUT_IMG = 'https://images.unsplash.com/photo-1636142972514-0c75fc584a12?auto=format&fit=crop&w=1200&q=80';

/* Faux diplômes placeholders — remplacer par les vrais diplômes du client */
const DIPLOMAS = [
  { title: 'Certification Européenne en Magnétisme', school: 'Académie Européenne des Thérapies Énergétiques', year: '2021' },
  { title: 'Formation Reiki Niveau III', school: 'Institut Européen des Soins Vibratoires', year: '2022' },
  { title: 'Praticien en Soins Énergétiques', school: 'Centre Suisse d\u2019Approche Holistique', year: '2023' },
  { title: 'Approfondissement Transgénérationnel', school: 'Institut Européen du Bien-être', year: '2024' },
];

export default function AboutContent() {
  return (
    <main className="relative min-h-screen pt-40 pb-24">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="À propos" title={<><span>Maxime Krioua,</span><br /><em className="text-terracotta">magnétiseur</em> à Genève.</>} subtitle="Une vocation, une sensibilité, un chemin de vie tourné vers l'accompagnement humain." />
            <Reveal delay={0.15}>
              <div className="space-y-4 text-inkSoft leading-relaxed max-w-xl">
                <p>Depuis toujours, j'ai perçu le monde d'une manière un peu différente. Sensible aux énergies, aux atmosphères, aux non-dits, j'ai grandi en cherchant à comprendre cette part de moi qui percevait plus que ce qui était dit.</p>
                <p>Cette sensibilité s'est peu à peu transformée en vocation : accompagner celles et ceux qui traversent des moments difficiles, physiques, émotionnels ou existentiels.</p>
                <p>Aujourd'hui à Genève, je reçois adultes, enfants, seniors et animaux dans un cadre calme, respectueux et confidentiel.</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden glass-strong p-2">
              <div className="absolute inset-2 rounded-[30px] overflow-hidden">
                <img src={ABOUT_IMG} alt="Maxime Krioua, magnétiseur" className="h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mon don */}
        <section className="mb-24">
          <div className="glass-strong rounded-[40px] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                  <Sparkles className="h-3.5 w-3.5 text-terracotta" />
                  <span className="text-xs tracking-wide text-inkSoft">Mon don</span>
                </div>
                <h2 className="display text-4xl md:text-5xl text-inkDark leading-[1.05] mb-6">Une sensibilité particulière,<br />depuis <em className="text-terracotta">toujours</em>.</h2>
                <div className="space-y-4 text-inkSoft leading-relaxed">
                  <p>Je possède, depuis l'enfance, une sensibilité particulière aux énergies. Je ne le présente pas comme un pouvoir : c'est simplement ma façon d'être au monde, une perception qui m'accompagne au quotidien.</p>
                  <p className="italic text-inkDark">Un petit clin d'œil du destin : il arrive que des montres cessent de fonctionner à mon contact. Je le partage comme une anecdote personnelle, sans y voir une preuve scientifique.</p>
                </div>
              </div>
              <div className="glass rounded-3xl p-8 relative">
                <Watch className="h-8 w-8 text-terracotta mb-4" strokeWidth={1.4} />
                <div className="display text-2xl text-inkDark mb-3">« Une expérience personnelle. »</div>
                <p className="text-sm text-inkSoft leading-relaxed">Cette anecdote ne prétend rien démontrer. Elle fait simplement partie de mon vécu et me rappelle chaque jour l'importance d'un accompagnement humain, sincère, respectueux.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Approche */}
        <section className="mb-24">
          <SectionHeader eyebrow="Mon approche" title={<>Une philosophie <em className="text-sage">simple</em>.</>} />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Heart, t: 'Humain avant tout', d: "Chaque personne est unique. J'écoute, j'accueille et j'accompagne sans jugement." },
              { icon: Sparkles, t: 'Douceur & présence', d: "Le magnétisme se transmet dans le calme, la lenteur, la disponibilité." },
              { icon: Award, t: 'Vocabulaire responsable', d: "Aucune promesse de guérison. Un accompagnement clair, honnête, respectueux." },
            ].map((it, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass rounded-[28px] p-8 h-full">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sand to-brownLight/60 flex items-center justify-center mb-6"><it.icon className="h-5 w-5 text-inkDark" strokeWidth={1.6} /></div>
                  <h3 className="text-lg font-medium text-inkDark mb-2">{it.t}</h3>
                  <p className="text-sm text-inkSoft leading-relaxed">{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Diplômes */}
        <section className="mb-24">
          <SectionHeader eyebrow="Formations & diplômes" title={<>Un parcours <em className="text-terracotta">continu</em>.</>} subtitle="Ces diplômes sont des placeholders et seront remplacés par les certifications réelles du client." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIPLOMAS.map((d, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="glass rounded-[26px] p-6 aspect-[3/4] flex flex-col justify-between hover:shadow-glassLg transition-all duration-500">
                  <div>
                    <div className="h-10 w-10 rounded-2xl bg-terracotta/15 flex items-center justify-center mb-4"><Award className="h-5 w-5 text-terracotta" strokeWidth={1.5} /></div>
                    <div className="display text-lg text-inkDark leading-tight mb-2">{d.title}</div>
                    <div className="text-xs text-inkSoft">{d.school}</div>
                  </div>
                  <div className="text-xs text-inkSoft mt-4 pt-4 border-t border-inkDark/5">{d.year}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="glass-strong rounded-[40px] p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-terracotta/25 blur-3xl" />
            <div className="relative">
              <h2 className="display text-4xl md:text-5xl text-inkDark leading-[1.05] max-w-2xl mx-auto">Prenons le temps d'échanger.</h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn-pill btn-primary">Prendre rendez-vous <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
