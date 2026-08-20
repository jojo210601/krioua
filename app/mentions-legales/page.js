import { SectionHeader } from '@/components/site/motion-primitives';

export const metadata = {
  title: 'Mentions légales | Maxime Krioua',
  description: 'Mentions légales du site de Maxime Krioua, magnétiseur à Genève.',
};

export default function MentionsLegalesPage() {
  return (
    <main className="relative min-h-screen pt-40 pb-24">
      <div className="container max-w-4xl">
        <SectionHeader
          eyebrow="Informations légales"
          title={<>Mentions <em className="text-terracotta">légales</em>.</>}
          subtitle="Informations relatives à l'éditeur et à l'utilisation du site."
        />

        <div className="space-y-6">
          <section className="glass-strong rounded-[32px] p-8 md:p-10">
            <h2 className="display text-3xl text-inkDark mb-4">Éditeur du site</h2>
            <div className="space-y-2 text-sm text-inkSoft leading-relaxed">
              <p><strong className="text-inkDark">Nom :</strong> Maxime Krioua</p>
              <p><strong className="text-inkDark">Activité :</strong> Magnétiseur</p>
              <p><strong className="text-inkDark">Adresse :</strong> Aliotis_Thérapies & bien-être, Bd Helvétique 30, 1207 Genève, Suisse</p>
              <p><strong className="text-inkDark">Téléphone Suisse :</strong> +41(0)77 941 77 96</p>
              <p><strong className="text-inkDark">Téléphone France :</strong> +33(0)6 09 43 82 08</p>
            </div>
          </section>

          <section className="glass rounded-[32px] p-8 md:p-10">
            <h2 className="display text-3xl text-inkDark mb-4">Responsabilité</h2>
            <p className="text-sm text-inkSoft leading-relaxed">Les informations présentes sur ce site sont fournies à titre informatif. Les prestations proposées constituent une approche complémentaire de bien-être et ne remplacent en aucun cas un avis, un diagnostic ou un traitement médical.</p>
          </section>

          <section className="glass rounded-[32px] p-8 md:p-10">
            <h2 className="display text-3xl text-inkDark mb-4">Propriété intellectuelle</h2>
            <p className="text-sm text-inkSoft leading-relaxed">Les textes, éléments graphiques, photographies, vidéos et autres contenus présents sur ce site sont protégés par les droits applicables. Toute reproduction ou utilisation non autorisée est interdite.</p>
          </section>

          <section className="glass rounded-[32px] p-8 md:p-10">
            <h2 className="display text-3xl text-inkDark mb-4">Données personnelles</h2>
            <p className="text-sm text-inkSoft leading-relaxed">Les données transmises via les moyens de contact du site sont utilisées uniquement pour répondre aux demandes des visiteurs et gérer les échanges liés aux prestations. Pour toute demande concernant vos données personnelles, vous pouvez utiliser les coordonnées indiquées ci-dessus.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
