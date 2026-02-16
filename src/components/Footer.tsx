export default function Footer() {
  return (
    <footer id="footer" className="border-t border-gold/20 bg-slate-950/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-300 md:px-6">
        <p>© {new Date().getFullYear()} TimeTravel Agency — Voyages temporels premium.</p>
        <a
          href="https://github.com/your-username/potential-octo-waffle"
          target="_blank"
          rel="noreferrer"
          className="w-fit text-gold transition hover:text-gold-soft"
        >
          Voir le repository GitHub
        </a>
      </div>
    </footer>
  );
}
