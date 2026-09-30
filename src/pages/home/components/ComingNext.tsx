import Reveal from '@/components/feature/Reveal';

const UPCOMING = [
  { name: 'Magnetic Button', icon: 'ri-magic-line' },
  { name: '3D Tilt Card', icon: 'ri-box-3-line' },
  { name: 'Underline Sweep', icon: 'ri-underline' },
  { name: 'Skeleton Shimmer', icon: 'ri-loader-4-line' },
  { name: 'Spinner Set', icon: 'ri-loader-line' },
  { name: 'Like & Check Micro', icon: 'ri-heart-3-line' },
  { name: 'Counter Roll', icon: 'ri-number-4' },
  { name: 'Cursor Trail', icon: 'ri-cursor-line' },
];

export default function ComingNext() {
  return (
    <section className="relative w-full px-4 pb-24 pt-4 md:px-8">
      <Reveal variant="zoom">
        <div className="relative overflow-hidden rounded-3xl border border-background-200/70 bg-background-100/60 px-6 py-12 md:px-12 md:py-16">
          <div className="bg-gradient-flow pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-25 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-background-200 bg-background-50 px-3 py-1 font-label text-[11px] uppercase tracking-[0.2em] text-foreground-600">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Coming in the next update
            </span>
            <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground-950 md:text-4xl">
              Hover, cursor &amp; micro-interactions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground-600">
              The next batch adds the effects you feel with your hand — magnetic buttons, 3D tilt
              cards, loading shimmers and tiny delightful details.
            </p>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap gap-2.5">
            {UPCOMING.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-2 rounded-full border border-background-200 bg-background-50 px-3.5 py-2 font-label text-xs text-foreground-700"
              >
                <i className={`${item.icon} text-primary-500`} />
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}