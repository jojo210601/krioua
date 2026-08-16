import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';

const SWISS_PHONE = '+41(0)77 941 77 96';
const FRENCH_PHONE = '+33(0)6 09';
const ADDRESS = 'Aliotis_Thérapies & bien-être, Bd Helvétique 30, 1207 Genève';

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10">
      <div className="container">
        <div className="glass rounded-[32px] p-8 md:p-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo-icon.png" alt="Krioua" width={56} height={56} className="h-14 w-14 object-contain" />
                <div className="text-xs text-inkSoft">Maxime Krioua · Magnétiseur à Genève</div>
              </div>
              <p className="text-sm text-inkSoft leading-relaxed max-w-md">
                Magnétiseur à Genève, accompagnement en soins énergétiques pour adultes,
                enfants, seniors et animaux, en Suisse romande.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-inkSoft mb-4">Navigation</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/a-propos" className="text-inkDark/80 hover:text-terracotta">À propos</Link></li>
                <li><Link href="/services" className="text-inkDark/80 hover:text-terracotta">Services</Link></li>
                <li><Link href="/tarifs" className="text-inkDark/80 hover:text-terracotta">Tarifs</Link></li>
                <li><Link href="/temoignages" className="text-inkDark/80 hover:text-terracotta">Témoignages</Link></li>
                <li><Link href="/blog" className="text-inkDark/80 hover:text-terracotta">Blog</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-inkSoft mb-4">Contact</div>
              <ul className="space-y-2 text-sm text-inkDark/80">
                <li className="leading-relaxed">{ADDRESS}</li>
                <li><a href={`tel:${SWISS_PHONE.replace(/\D/g, '')}`} className="hover:text-terracotta">{SWISS_PHONE}</a> <span className="text-xs text-inkSoft">Numéro Suisse</span></li>
                <li><a href={`tel:${FRENCH_PHONE.replace(/\D/g, '')}`} className="hover:text-terracotta">{FRENCH_PHONE}</a> <span className="text-xs text-inkSoft">Numéro français</span></li>
                <li><a href={`mailto:${SITE.email}`} className="hover:text-terracotta">{SITE.email}</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-inkDark/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-inkSoft max-w-2xl leading-relaxed">
              Les prestations proposées ne remplacent en aucun cas un avis, un diagnostic ou un traitement médical.
              Elles constituent une approche complémentaire de bien-être.
            </p>
            <p className="text-xs text-inkSoft">© {new Date().getFullYear()} {SITE.name} · Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
