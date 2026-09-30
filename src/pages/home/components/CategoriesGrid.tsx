import { categories } from '@/mocks/animations';
import Reveal from '@/components/feature/Reveal';
import SectionHeading from './DemoShell';

export default function CategoriesGrid() {
  return (
    <section id="categories" className="relative w-full px-4 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="The whole map"
        title="Pick a family of motion"
        description="Animations are grouped into families. Jump into any section, watch the effects run, and read the name of the one you like."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((item, index) => (
          <Reveal key={item.id} variant="up" delay={index * 80} className="h-full">
            <a
              href={item.href}
              className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-background-200/70 bg-background-100/50 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-300/70"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-background-200/70 text-foreground-800 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-background-50">
                  <i className={`${item.icon} text-xl`} />
                </span>
                <span className="font-label text-xs text-foreground-500">{item.index}</span>
              </div>

              <div className="mt-8">
                <h3 className="font-heading text-lg font-semibold text-foreground-950">
                  {item.title}
                </h3>
                <p className="mt-1.5 font-label text-[11px] uppercase tracking-[0.15em] text-foreground-500">
                  {item.count}
                </p>
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600">
                Open section
                <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}