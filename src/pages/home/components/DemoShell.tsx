import type { ReactNode } from 'react';
import Reveal from '@/components/feature/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <Reveal variant="up" className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="inline-flex items-center gap-2 rounded-full border border-background-200 bg-background-100 px-3 py-1 font-label text-[11px] uppercase tracking-[0.2em] text-foreground-600">
        <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-foreground-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-foreground-600 md:text-lg">{description}</p>
    </Reveal>
  );
}

interface DemoShellProps {
  meta: { name: string; description: string; tag: string };
  index: number;
  children: ReactNode;
  stageClassName?: string;
  className?: string;
}

export function DemoShell({
  meta,
  index,
  children,
  stageClassName = '',
  className = '',
}: DemoShellProps) {
  return (
    <article
      className={`flex flex-col rounded-2xl border border-background-200/70 bg-background-100/50 p-4 transition-colors duration-300 hover:border-primary-300/60 md:p-5 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-label text-[11px] text-foreground-500">
          {String(index).padStart(2, '0')}
        </span>
        <span className="rounded-full bg-secondary-100 px-2.5 py-0.5 font-label text-[10px] uppercase tracking-[0.15em] text-secondary-900">
          {meta.tag}
        </span>
      </div>

      <div
        className={`relative mt-4 flex min-h-[180px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-background-200/60 bg-background-50 ${stageClassName}`}
      >
        {children}
      </div>

      <h3 className="mt-4 font-heading text-base font-semibold text-foreground-950">
        {meta.name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground-600">{meta.description}</p>
    </article>
  );
}