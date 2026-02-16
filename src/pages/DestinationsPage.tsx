import { useMemo, useState } from 'react';
import DestinationGrid from '../components/DestinationGrid';
import { destinationTags, destinations } from '../data/destinations';
import type { DestinationTag } from '../types';

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState<DestinationTag | 'Tous'>('Tous');

  const filteredDestinations = useMemo(() => {
    if (activeFilter === 'Tous') return destinations;
    return destinations.filter((destination) => destination.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="mb-6 text-3xl font-semibold text-white">Catalogue des destinations</h1>
      <div className="mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveFilter('Tous')}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            activeFilter === 'Tous' ? 'border-gold bg-gold/20 text-gold-soft' : 'border-slate-700 text-slate-200 hover:border-gold/60'
          }`}
        >
          Tous
        </button>
        {destinationTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeFilter === tag ? 'border-gold bg-gold/20 text-gold-soft' : 'border-slate-700 text-slate-200 hover:border-gold/60'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <DestinationGrid destinations={filteredDestinations} />
    </section>
  );
}
