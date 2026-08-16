export const SITE = {
  name: 'Krioua',
  fullName: 'Krioua · Soins énergétiques',
  practitioner: 'Maxime Krioua',
  tagline: 'Soins énergétiques',
  city: 'Genève',
  region: 'Suisse romande',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://krioua.ch',
  email: 'contact@krioua.ch',
  phone: '+41 XX XXX XX XX',
  address: {
    street: 'Cabinet à Genève',
    postal: '1200',
    locality: 'Genève',
    country: 'CH',
  },
  calendlyUrl: 'https://calendly.com/your-handle', // TODO: remplacer par le vrai lien Calendly du client
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21999.31!2d6.128!3d46.204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sGen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1710000000000',
};

export const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Témoignages', href: '/temoignages' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
