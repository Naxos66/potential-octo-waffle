import { useMemo, useState } from 'react';
import { destinationInterests, destinations, type Destination, type RiskLevel, type TripInterest } from '../data/destinations';
import { saveBooking, type BookingOptions } from '../lib/bookings';

function getFormula(duration: string, risk: RiskLevel): string {
  if (risk === 'high') return `Formule Expédition ${duration}`;
  if (risk === 'low') return `Formule Sérénité ${duration}`;
  return `Formule Équilibre ${duration}`;
}

function pickDestination(budget: number, interests: TripInterest[], risk: RiskLevel): Destination {
  const scored = destinations.map((destination) => {
    let score = 0;
    if (budget >= destination.basePrice) score += 2;
    score += interests.filter((interest) => destination.interests.includes(interest)).length * 3;
    if (destination.recommendedRisk === risk) score += 2;
    if (risk === 'high' && destination.id === 'cretace-65m') score += 2;
    return { destination, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0].destination;
}

export default function PersonalizePage() {
  const [budget, setBudget] = useState(9500);
  const [duration, setDuration] = useState('5 jours');
  const [risk, setRisk] = useState<RiskLevel>('med');
  const [interests, setInterests] = useState<TripInterest[]>(['Culture']);
  const [recommendation, setRecommendation] = useState<Destination | null>(null);
  const [formula, setFormula] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const estimatedMatches = useMemo(() => destinations.filter((destination) => destination.basePrice <= budget).length, [budget]);

  const toggleInterest = (interest: TripInterest) => {
    setInterests((current) => (current.includes(interest) ? current.filter((entry) => entry !== interest) : [...current, interest]));
  };

  const handleRecommend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selected = pickDestination(budget, interests, risk);
    setRecommendation(selected);
    setFormula(getFormula(duration, risk));
    setIsBooked(false);
  };

  const handleBook = () => {
    if (!recommendation) return;
    const options: BookingOptions = { budget, duration, interests, risk, formula };
    saveBooking(recommendation, options);
    setIsBooked(true);
  };

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 md:px-6">
      <div>
        <h1 className="text-3xl font-semibold text-white">Personnaliser mon voyage</h1>
        <p className="mt-2 text-slate-300">Décrivez vos préférences et obtenez une recommandation instantanée.</p>
      </div>

      <form className="space-y-6 rounded-2xl border border-gold/20 bg-slate-900/70 p-6" onSubmit={handleRecommend}>
        <div>
          <label className="mb-2 block text-sm text-slate-200">Budget: {budget.toLocaleString('fr-FR')} crédits</label>
          <input
            type="range"
            min={7000}
            max={13000}
            step={100}
            value={budget}
            onChange={(event) => setBudget(Number(event.target.value))}
            className="w-full"
          />
          <p className="mt-2 text-xs text-slate-400">{estimatedMatches} destination(s) dans votre budget.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-200">
            <span className="block">Durée</span>
            <select value={duration} onChange={(event) => setDuration(event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white">
              <option>3 jours</option>
              <option>5 jours</option>
              <option>7 jours</option>
            </select>
          </label>

          <label className="space-y-2 text-sm text-slate-200">
            <span className="block">Niveau de risque</span>
            <select value={risk} onChange={(event) => setRisk(event.target.value as RiskLevel)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white">
              <option value="low">low</option>
              <option value="med">med</option>
              <option value="high">high</option>
            </select>
          </label>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm text-slate-200">Intérêts</legend>
          <div className="flex flex-wrap gap-4 text-sm text-slate-100">
            {destinationInterests.map((interest) => (
              <label key={interest} className="flex items-center gap-2">
                <input type="checkbox" checked={interests.includes(interest)} onChange={() => toggleInterest(interest)} />
                {interest}
              </label>
            ))}
          </div>
        </fieldset>

        <button type="submit" className="rounded-lg bg-gold px-4 py-2 font-semibold text-slate-900 transition hover:bg-gold-soft">
          Obtenir ma recommandation
        </button>
      </form>

      {recommendation && (
        <article className="space-y-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
          <p className="text-sm text-emerald-300">Recommandation personnalisée</p>
          <h2 className="text-2xl font-semibold text-white">{recommendation.title}</h2>
          <p className="text-slate-100">{recommendation.shortDescription}</p>
          <p className="text-emerald-200">Formule proposée : {formula}</p>
          <button onClick={handleBook} className="rounded-lg border border-emerald-300 px-4 py-2 text-sm font-medium text-emerald-100 hover:bg-emerald-400/10">
            Confirmer la réservation
          </button>
          {isBooked && <p className="text-sm text-emerald-200">Réservation enregistrée dans My Trip.</p>}
        </article>
      )}
    </section>
  );
}
