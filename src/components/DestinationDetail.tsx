import { useState } from 'react';
import type { Destination } from '../data/destinations';
import BookingModal from './BookingModal';

interface DestinationDetailProps {
  destination: Destination;
}

export default function DestinationDetail({ destination }: DestinationDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-2xl border border-gold/20 bg-slate-900/70">
        <img src={destination.imageUrl} alt={destination.title} className="h-64 w-full object-cover md:h-96" />
        <div className="space-y-4 p-6">
          <p className="text-sm uppercase tracking-[0.15em] text-gold-soft">{destination.era}</p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">{destination.title}</h1>
          <p className="text-slate-200">{destination.shortDescription}</p>
          <p className="text-gold">À partir de {destination.basePrice.toLocaleString('fr-FR')} crédits temporels</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full border border-gold bg-gold/10 px-5 py-2 font-medium text-gold-soft transition hover:bg-gold/20"
          >
            Réserver
          </button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gold/20 bg-slate-900/70 p-5">
          <h2 className="mb-3 text-xl font-semibold text-white">Points forts</h2>
          <ul className="space-y-2 text-slate-200">
            {destination.highlights.map((highlight) => (
              <li key={highlight}>• {highlight}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-gold/20 bg-slate-900/70 p-5">
          <h2 className="mb-3 text-xl font-semibold text-white">Risques & conseils</h2>
          <ul className="mb-5 space-y-2 text-slate-200">
            {destination.risks.map((risk) => (
              <li key={risk}>• {risk}</li>
            ))}
          </ul>
          <h3 className="mb-2 text-base font-semibold text-white">Préparation</h3>
          <ul className="space-y-2 text-slate-200">
            {destination.tips.map((tip) => (
              <li key={tip}>• {tip}</li>
            ))}
          </ul>
        </article>
      </section>

      <BookingModal destination={destination} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
