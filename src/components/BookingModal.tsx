import { useEffect, useState } from 'react';
import type { Destination } from '../data/destinations';
import { saveBooking } from '../lib/bookings';

interface BookingModalProps {
  destination: Destination;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ destination, isOpen, onClose }: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-gold/40 bg-slate-900 p-6">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white">Réserver : {destination.title}</h3>
          <button onClick={onClose} className="text-slate-300 transition hover:text-gold-soft" aria-label="Fermer la modal">
            ✕
          </button>
        </div>

        {isSubmitted ? (
          <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-300">
            Réservation confirmée ! Votre voyage apparaît maintenant dans la page « My Trip ».
          </div>
        ) : (
          <form
            className="space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              saveBooking(destination, {
                budget: destination.basePrice,
                duration: '3 jours',
                interests: destination.interests,
                risk: destination.recommendedRisk,
                formula: 'Formule Classique',
              });
              setIsSubmitted(true);
            }}
          >
            <input required placeholder="Nom" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
            <input value={destination.title} readOnly className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
            <input required type="date" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
            <textarea placeholder="Notes" rows={3} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white" />
            <button type="submit" className="w-full rounded-lg bg-gold px-4 py-2 font-semibold text-slate-900 transition hover:bg-gold-soft">
              Confirmer la réservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
