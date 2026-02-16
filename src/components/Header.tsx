import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Agence', href: '/#agence' },
  { label: 'Chat', href: '/#chat' },
  { label: 'Footer', href: '/#footer' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="text-lg font-semibold tracking-wide text-gold">
          TimeTravel Agency
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-200">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-gold-soft">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
