import DestinationGrid from '../components/DestinationGrid';
import Hero from '../components/Hero';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { destinations } from '../data/destinations';

export default function HomePage() {
  const intro = useRevealOnScroll<HTMLElement>();

  return (
    <>
      <Hero />
      <section
        id="agence"
        ref={intro.ref}
        className={`mx-auto max-w-6xl px-4 py-16 transition duration-700 md:px-6 ${
          intro.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <h2 className="mb-4 text-3xl font-semibold text-white">Présentation de l’agence</h2>
        <p className="max-w-3xl text-slate-300">
          TimeTravel Agency orchestre des expériences historiques et préhistoriques haut de gamme, combinant précision chronologique, sécurité et art de vivre.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <h2 className="mb-6 text-3xl font-semibold text-white">Destinations</h2>
        <DestinationGrid destinations={destinations} />
      </section>
    </>
  );
}
