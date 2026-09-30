const FOOTER_LINKS = [
  { href: '#categories', label: 'Categories' },
  { href: '#text', label: 'Text Effects' },
  { href: '#scroll', label: 'Scroll Effects' },
  { href: '#background', label: 'Background Effects' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-secondary-100 bg-secondary-50">
      <div className="relative z-10 px-4 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-500 text-background-50">
                <i className="ri-sparkling-2-fill text-lg" />
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight text-foreground-950">
                cvl<span className="text-primary-500">·</span>motion
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground-700">
              A personal animation playground. Every motion on this page is labelled with its
              real name, so you can point at the one you love and say — that one, use that one.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-secondary-100 px-3 py-1 font-label text-xs text-secondary-900">
                CSS keyframes
              </span>
              <span className="rounded-full bg-secondary-100 px-3 py-1 font-label text-xs text-secondary-900">
                IntersectionObserver
              </span>
              <span className="rounded-full bg-secondary-100 px-3 py-1 font-label text-xs text-secondary-900">
                React + Tailwind
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground-500">
              Jump to
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="cursor-pointer text-sm text-foreground-700 transition-colors hover:text-primary-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground-500">
              About
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-foreground-700">
              Built for one person — me — to remember which animations exist and what they are
              called. No business, no shop, just good motion.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-secondary-100 pt-6 sm:flex-row sm:items-center">
          <p className="font-label text-xs text-foreground-600">
            © {year} cvl·motion — a personal motion library
          </p>
          <p className="font-label text-xs text-foreground-600">
            Made to be scrolled, slowly.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-accent-100/30 blur-3xl" />
    </footer>
  );
}