import { Link } from 'react-router-dom';

const sectionItems = [
  { label: 'Agence', hash: '#agence' },
  { label: 'Chat', hash: '#chat' },
  { label: 'Footer', hash: '#footer' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="text-lg font-semibold tracking-wide text-gold">
          TimeTravel Agency
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-200">
          <Link to="/destinations" className="transition hover:text-gold-soft">
            Destinations
          </Link>
          <Link to="/personalize" className="transition hover:text-gold-soft">
            Personnaliser
          </Link>
          <Link to="/my-trip" className="transition hover:text-gold-soft">
            My Trip
          </Link>
          {sectionItems.map((item) => (
            <Link key={item.label} to={`/${item.hash}`} className="transition hover:text-gold-soft">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
