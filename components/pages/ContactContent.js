'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, Send, Check } from 'lucide-react';
import { Reveal, SectionHeader } from '@/components/site/motion-primitives';
import { SITE } from '@/lib/site';

export default function ContactContent() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connecter à un backend / email. Pour l'instant simulation.
    setSent(true);
  };

  return (
    <main className="relative min-h-screen pt-40 pb-24">
      <div className="container">
        <SectionHeader center eyebrow="Contact" title={<>Prenez rendez-vous en <em className="text-terracotta">quelques secondes</em>.</>} subtitle="Réservez directement en ligne, appelez ou écrivez. Je réponds personnellement." />

        {/* Coordonnées */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Phone, label: 'Téléphone', val: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g,'')}` },
            { icon: Mail, label: 'Email', val: SITE.email, href: `mailto:${SITE.email}` },
            { icon: MapPin, label: 'Cabinet', val: 'Genève, Suisse' },
            { icon: Clock, label: 'Horaires', val: 'Lun–Sam · 9h–19h' },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <a href={c.href || '#'} className="block glass rounded-[24px] p-6 hover:shadow-glassLg transition-all duration-500 h-full">
                <c.icon className="h-5 w-5 text-terracotta mb-3" />
                <div className="text-xs text-inkSoft mb-1">{c.label}</div>
                <div className="text-sm font-medium text-inkDark">{c.val}</div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6 mb-16">
          {/* Formulaire */}
          <Reveal className="lg:col-span-7">
            <div className="glass-strong rounded-[36px] p-8 md:p-10">
              <h2 className="display text-3xl text-inkDark mb-2">Écrire à Maxime</h2>
              <p className="text-sm text-inkSoft mb-8">Réponse sous 24h en général.</p>
              {sent ? (
                <div className="text-center py-10">
                  <div className="h-16 w-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6"><Check className="h-8 w-8 text-sage" /></div>
                  <h3 className="display text-2xl text-inkDark mb-2">Message envoyé</h3>
                  <p className="text-inkSoft">Merci, je reviens vers vous rapidement.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs text-inkSoft mb-2 block">Nom</span>
                      <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full glass rounded-2xl px-5 py-4 outline-none focus:shadow-glassLg transition-all text-sm text-inkDark placeholder:text-inkSoft/60" placeholder="Votre nom" />
                    </label>
                    <label className="block">
                      <span className="text-xs text-inkSoft mb-2 block">Email</span>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full glass rounded-2xl px-5 py-4 outline-none focus:shadow-glassLg transition-all text-sm text-inkDark placeholder:text-inkSoft/60" placeholder="vous@exemple.ch" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-xs text-inkSoft mb-2 block">Téléphone (optionnel)</span>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full glass rounded-2xl px-5 py-4 outline-none focus:shadow-glassLg transition-all text-sm text-inkDark placeholder:text-inkSoft/60" placeholder="+41 XX XXX XX XX" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-inkSoft mb-2 block">Message</span>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full glass rounded-2xl px-5 py-4 outline-none focus:shadow-glassLg transition-all text-sm text-inkDark placeholder:text-inkSoft/60 resize-none" placeholder="Dites-moi ce qui vous amène, votre disponibilité…" />
                  </label>
                  <button type="submit" className="btn-pill btn-primary w-full justify-center text-[15px] py-4 mt-2">
                    Envoyer <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Calendly / carte / infos */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal delay={0.1}>
              <div className="glass-strong rounded-[32px] p-8">
                <h3 className="display text-2xl text-inkDark mb-3">Réservez directement</h3>
                <p className="text-sm text-inkSoft mb-6">Sélectionnez un créneau qui vous convient. Un email de confirmation vous sera envoyé.</p>
                {/* Calendly embed placeholder — remplacer par le vrai lien du client */}
                <div className="rounded-2xl border border-inkDark/10 bg-cream/50 h-[280px] flex flex-col items-center justify-center text-center p-6">
                  <div className="h-12 w-12 rounded-full bg-terracotta/15 flex items-center justify-center mb-4">
                    <Clock className="h-5 w-5 text-terracotta" />
                  </div>
                  <div className="text-sm font-medium text-inkDark mb-1">Calendly — emplacement réservé</div>
                  <p className="text-xs text-inkSoft mb-4">Le calendrier de réservation en ligne sera intégré ici.</p>
                  <a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-pill btn-primary text-[13px] py-2.5 px-5">
                    Ouvrir Calendly <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-strong rounded-[32px] p-2 overflow-hidden">
                <div className="rounded-[26px] overflow-hidden aspect-[4/3]">
                  <iframe
                    src={SITE.mapEmbed}
                    width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation du cabinet à Genève"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Big CTA */}
        <Reveal>
          <div className="glass-strong rounded-[40px] p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-terracotta/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sage/25 blur-3xl" />
            <div className="relative">
              <h2 className="display text-4xl md:text-5xl text-inkDark mb-6">Un moment pour vous.</h2>
              <a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-pill btn-primary text-[16px] px-10 py-5">
                Prendre rendez-vous <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
