import type { Destination } from '../types';
import DestinationCard from './DestinationCard';

interface DestinationGridProps {
  destinations: Destination[];
}

export default function DestinationGrid({ destinations }: DestinationGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
}
