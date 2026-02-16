import { useMemo, useState } from 'react';
import { destinations } from '../data/destinations';
import { readBookings, removeBooking, type Booking } from '../lib/bookings';

function formatDate(value: string): string {
  return new Date(value).toLocaleString('fr-FR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

export default function MyTripPage() {
  const [bookings, setBookings] = useState<Booking[]>(() => readBookings());

  const checklist = useMemo(() => {
    const tips = bookings.flatMap((booking) => {
      const destination = destinations.find((entry) => entry.id === booking.destinationId);
      return destination?.tips ?? [];
    });

    return [...new Set(tips)];
  }, [bookings]);

  const handleDelete = (bookingId: string) => {
    setBookings(removeBooking(bookingId));
  };

  return (
    <section className="mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-6">
      <h1 className="text-3xl font-semibold text-white">My Trip</h1>

      <div className="space-y-4">
        {bookings.length === 0 ? (
          <p className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-slate-300">Aucune réservation pour le moment.</p>
        ) : (
          bookings.map((booking) => (
            <article key={booking.id} className="rounded-xl border border-gold/20 bg-slate-900/70 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-white">{booking.destinationTitle}</h2>
                  <p className="text-sm text-slate-300">Réservé le {formatDate(booking.date)}</p>
                </div>
                <button onClick={() => handleDelete(booking.id)} className="rounded-md border border-rose-400/70 px-3 py-1 text-sm text-rose-200 hover:bg-rose-500/10">
                  Supprimer
                </button>
              </div>

              <ul className="mt-3 space-y-1 text-sm text-slate-200">
                <li>Budget: {booking.options.budget.toLocaleString('fr-FR')} crédits</li>
                <li>Durée: {booking.options.duration}</li>
                <li>Risque: {booking.options.risk}</li>
                <li>Intérêts: {booking.options.interests.join(', ') || 'Aucun'}</li>
                <li>Formule: {booking.options.formula}</li>
              </ul>
            </article>
          ))
        )}
      </div>

      <section className="rounded-2xl border border-gold/20 bg-slate-900/70 p-6">
        <h2 className="mb-3 text-xl font-semibold text-white">Checklist de préparation</h2>
        {checklist.length === 0 ? (
          <p className="text-slate-300">Ajoutez une réservation pour obtenir une checklist personnalisée.</p>
        ) : (
          <ul className="space-y-2 text-slate-200">
            {checklist.map((tip) => (
              <li key={tip}>☑ {tip}</li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}
