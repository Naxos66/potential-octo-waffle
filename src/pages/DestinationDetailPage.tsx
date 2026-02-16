import { Link, Navigate, useParams } from 'react-router-dom';
import DestinationDetail from '../components/DestinationDetail';
import { destinations } from '../data/destinations';

export default function DestinationDetailPage() {
  const { id } = useParams();
  const destination = destinations.find((item) => item.id === id);

  if (!id) return <Navigate to="/destinations" replace />;

  if (!destination) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <h1 className="text-3xl font-semibold text-white">Destination introuvable</h1>
        <Link to="/destinations" className="mt-4 inline-block text-gold hover:text-gold-soft">
          Retour aux destinations
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <DestinationDetail destination={destination} />
    </section>
  );
}
