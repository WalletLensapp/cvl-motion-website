import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { href: '#categories', label: 'Categories' },
  { href: '#text', label: 'Text' },
  { href: '#scroll', label: 'Scroll' },
  { href: '#background', label: 'Background' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      setScrolled(top > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, top / max)) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'border-b border-background-200/70 bg-background-50/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="h-[3px] w-full bg-background-200/50">
        <div
          className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-500 text-background-50">
            <i className="ri-sparkling-2-fill text-lg" />
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-foreground-950">
            cvl<span className="text-primary-500">·</span>motion
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-foreground-600 transition-colors hover:bg-background-100 hover:text-foreground-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <span className="font-label text-xs text-foreground-500">
            {String(Math.round(progress * 100)).padStart(2, '0')}%
          </span>
          <a
            href="#categories"
            className="cursor-pointer whitespace-nowrap rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-background-50 transition-colors hover:bg-primary-600"
          >
            Explore
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-md border border-background-200 text-foreground-800 md:hidden"
        >
          <i className={menuOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-background-200/70 bg-background-50/95 px-4 py-3 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-foreground-700 hover:bg-background-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}