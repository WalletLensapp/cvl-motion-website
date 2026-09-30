import { demoMeta } from '@/mocks/animations';
import Reveal from '@/components/feature/Reveal';
import InViewReplay from '@/components/feature/InViewReplay';
import SectionHeading, { DemoShell } from './DemoShell';
import Typewriter from './Typewriter';

const TYPE_TARGETS = ['animations', 'motion design', 'micro-interactions', 'scroll magic'];
const WAVE_WORD = 'MOTION';
const REVEAL_WORD = 'Reveal';

export default function TextAnimationsSection() {
  return (
    <section id="text" className="relative w-full px-4 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Section 01 · Typography"
        title="Text that wakes up"
        description="Six text effects, each named so you can reference it later. Most of these are pure CSS keyframes — no library needed."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <Reveal variant="up" className="h-full">
          <DemoShell meta={demoMeta.typewriter} index={1} className="h-full">
            <InViewReplay className="w-full px-6">
              <Typewriter
                words={TYPE_TARGETS}
                className="font-label text-lg text-accent-700"
              />
            </InViewReplay>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" delay={80} className="h-full">
          <DemoShell meta={demoMeta.gradientText} index={2} className="h-full">
            <div className="text-center">
              <span className="text-gradient font-heading text-3xl font-semibold">Motion</span>
              <span className="ml-2 font-heading text-3xl font-semibold text-foreground-950">Lab</span>
            </div>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" delay={160} className="h-full">
          <DemoShell meta={demoMeta.letterReveal} index={3} className="h-full">
            <InViewReplay className="flex">
              {REVEAL_WORD.split('').map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="inline-block animate-letter-up font-heading text-4xl font-semibold text-foreground-950"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {char}
                </span>
              ))}
            </InViewReplay>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" className="h-full">
          <DemoShell meta={demoMeta.blurIn} index={4} className="h-full">
            <Reveal variant="blur" className="text-center">
              <span className="font-heading text-3xl font-semibold text-foreground-950">
                Crystal clear
              </span>
            </Reveal>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" delay={80} className="h-full">
          <DemoShell meta={demoMeta.neonFlicker} index={5} className="h-full">
            <span className="neon-text font-heading text-3xl font-semibold tracking-[0.2em]">
              NEON
            </span>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" delay={160} className="h-full">
          <DemoShell meta={demoMeta.waveLetters} index={6} className="h-full">
            <div className="flex items-end gap-1">
              {WAVE_WORD.split('').map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="inline-block origin-bottom animate-wave font-heading text-3xl font-semibold text-primary-600"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {char}
                </span>
              ))}
            </div>
          </DemoShell>
        </Reveal>
      </div>
    </section>
  );
}