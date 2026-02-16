import { Link } from 'react-router-dom';
import type { Destination } from '../data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gold/20 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold">
      <img src={destination.imageUrl} alt={destination.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.15em] text-gold-soft">{destination.era}</p>
        <h3 className="text-xl font-semibold text-white">{destination.title}</h3>
        <p className="text-sm text-slate-300">{destination.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {destination.interests.map((interest) => (
            <span key={interest} className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold-soft">
              {interest}
            </span>
          ))}
        </div>
        <p className="text-sm text-gold">À partir de {destination.basePrice.toLocaleString('fr-FR')} crédits temporels</p>
        <Link to={`/destinations/${destination.id}`} className="inline-block pt-2 text-sm font-medium text-gold transition hover:text-gold-soft">
          Découvrir →
        </Link>
      </div>
    </article>
  );
}
