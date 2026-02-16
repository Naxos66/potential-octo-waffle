import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#020617,#1e1b4b,#7c2d12,#020617)] bg-[length:300%_300%] opacity-70 animate-gradient-shift" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gold-soft">Expériences temporelles exclusives</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Voyagez entre les siècles avec l’élégance d’une agence premium.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-200 md:text-lg">
          De Paris 1889 au Crétacé, nos itinéraires allient immersion historique, sécurité avancée et confort luxueux.
        </p>
        <Link
          to="/destinations"
          className="mt-8 inline-flex rounded-full border border-gold bg-gold/10 px-6 py-3 font-medium text-gold-soft shadow-gold transition hover:scale-[1.02] hover:bg-gold/20"
        >
          Explorer les destinations
        </Link>
      </div>
    </section>
  );
}
