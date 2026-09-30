import { demoMeta } from '@/mocks/animations';
import Reveal from '@/components/feature/Reveal';
import SectionHeading, { DemoShell } from './DemoShell';

const CROSSFADE_ONE =
  'https://readdy.ai/api/search-image?query=abstract%20soft%20flowing%20gradient%20of%20coral%20orange%20and%20warm%20amber%20on%20deep%20charcoal%2C%20smooth%20blurred%20shapes%2C%20minimal%20cinematic%20texture&width=1200&height=800&seq=crossfade-a4&orientation=landscape';
const CROSSFADE_TWO =
  'https://readdy.ai/api/search-image?query=abstract%20soft%20flowing%20gradient%20of%20lime%20green%20and%20mint%20on%20deep%20charcoal%2C%20smooth%20blurred%20shapes%2C%20minimal%20cinematic%20texture&width=1200&height=800&seq=crossfade-b8&orientation=landscape';
const CROSSFADE_THREE =
  'https://readdy.ai/api/search-image?query=abstract%20soft%20flowing%20gradient%20of%20teal%20and%20sand%20gold%20on%20deep%20charcoal%2C%20smooth%20blurred%20shapes%2C%20minimal%20cinematic%20texture&width=1200&height=800&seq=crossfade-c1&orientation=landscape';

const KENBURNS_IMAGE =
  'https://readdy.ai/api/search-image?query=minimal%20abstract%20canyon%20landscape%20in%20coral%20orange%20and%20deep%20brown%20with%20soft%20mint%20sky%2C%20artistic%20illustration%2C%20smooth%20gradients%2C%20cinematic%20wide%20composition&width=1400&height=900&seq=kenburns-scene-1&orientation=landscape';

const PARTICLE_POSITIONS = ['8%', '22%', '36%', '52%', '66%', '80%', '92%'];

export default function BackgroundAnimationsSection() {
  return (
    <section id="background" className="relative w-full px-4 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Section 03 · Atmosphere"
        title="Backgrounds that breathe"
        description="Gradients, glows and shapes that keep the page quietly alive behind everything. Great for hero sections and full-bleed bands."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <Reveal variant="up" className="h-full">
          <DemoShell meta={demoMeta.animatedGradient} index={12} className="h-full">
            <div className="bg-gradient-flow absolute inset-0" />
            <span className="relative z-10 rounded-full bg-background-50/80 px-3.5 py-1.5 font-label text-[11px] uppercase tracking-wider text-foreground-800">
              mesh gradient
            </span>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" delay={80} className="h-full">
          <DemoShell meta={demoMeta.aurora} index={13} className="h-full">
            <div className="absolute inset-0">
              <div className="absolute left-1/4 top-1/4 h-40 w-40 animate-float rounded-full bg-primary-500/50 blur-3xl" />
              <div className="absolute right-1/4 top-1/3 h-44 w-44 animate-float-slow rounded-full bg-accent-500/40 blur-3xl" />
              <div
                className="absolute bottom-1/4 left-1/3 h-36 w-36 animate-float rounded-full bg-secondary-500/40 blur-3xl"
                style={{ animationDelay: '1.6s' }}
              />
            </div>
            <span className="relative z-10 rounded-full bg-background-50/80 px-3.5 py-1.5 font-label text-[11px] uppercase tracking-wider text-foreground-800">
              aurora blobs
            </span>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" delay={160} className="h-full">
          <DemoShell meta={demoMeta.floatingShapes} index={14} className="h-full">
            <div className="absolute inset-0">
              <div className="absolute left-10 top-10 h-12 w-12 animate-float rounded-lg border border-primary-300/70" />
              <div className="absolute right-12 top-16 h-10 w-10 animate-float-slow rounded-full border border-accent-300/70" />
              <div className="absolute bottom-12 left-1/3 h-14 w-14 rotate-12 animate-tilt rounded-md border border-secondary-300/70" />
              <div
                className="absolute bottom-16 right-1/4 h-8 w-8 animate-bob rounded-full bg-primary-400/70"
                style={{ animationDelay: '0.7s' }}
              />
            </div>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" className="h-full">
          <DemoShell meta={demoMeta.imageCrossfade} index={15} className="h-full">
            <div className="absolute inset-0">
              <div className="hero-slide" style={{ animationDelay: '0s', animationDuration: '18s' }}>
                <img
                  src={CROSSFADE_ONE}
                  alt="Coral and amber gradient background for crossfade demo"
                  title="Background Crossfade animation demo - coral gradient"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="hero-slide" style={{ animationDelay: '6s', animationDuration: '18s' }}>
                <img
                  src={CROSSFADE_TWO}
                  alt="Lime and mint gradient background for crossfade demo"
                  title="Background Crossfade animation demo - lime gradient"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div
                className="hero-slide"
                style={{ animationDelay: '12s', animationDuration: '18s' }}
              >
                <img
                  src={CROSSFADE_THREE}
                  alt="Teal and gold gradient background for crossfade demo"
                  title="Background Crossfade animation demo - teal gradient"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <span className="relative z-10 rounded-full bg-background-50/80 px-3.5 py-1.5 font-label text-[11px] uppercase tracking-wider text-foreground-800">
              soft crossfade
            </span>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" delay={80} className="h-full">
          <DemoShell meta={demoMeta.kenBurns} index={16} className="h-full">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={KENBURNS_IMAGE}
                alt="Abstract canyon landscape used for the Ken Burns pan"
                title="Ken Burns animation demo - abstract canyon landscape"
                className="h-full w-full animate-kenburns object-cover object-top"
                style={{ animationIterationCount: 'infinite', animationDirection: 'alternate' }}
              />
            </div>
            <span className="relative z-10 rounded-full bg-background-50/80 px-3.5 py-1.5 font-label text-[11px] uppercase tracking-wider text-foreground-800">
              slow pan + zoom
            </span>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" delay={160} className="h-full">
          <DemoShell meta={demoMeta.morphBlob} index={17} className="h-full">
            <div className="relative flex h-full w-full items-center justify-center">
              <div
                className="h-28 w-28 animate-morph"
                style={{
                  background:
                    'linear-gradient(120deg, oklch(var(--primary-500)), oklch(var(--accent-500)))',
                }}
              />
            </div>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" className="h-full md:col-span-2 xl:col-span-3">
          <DemoShell
            meta={demoMeta.particles}
            index={18}
            className="h-full"
            stageClassName="min-h-[220px]"
          >
            <div className="grid-lines absolute inset-0 opacity-60" />
            <div className="absolute inset-0 overflow-hidden">
              {PARTICLE_POSITIONS.map((left, index) => (
                <span
                  key={left}
                  className="absolute bottom-6 h-1.5 w-1.5 animate-float rounded-full bg-accent-500/80"
                  style={{
                    left,
                    animationDelay: `${index * 0.45}s`,
                    animationDuration: `${5 + index * 0.4}s`,
                  }}
                />
              ))}
            </div>
            <span className="relative z-10 rounded-full bg-background-50/80 px-3.5 py-1.5 font-label text-[11px] uppercase tracking-wider text-foreground-800">
              rising dust
            </span>
          </DemoShell>
        </Reveal>
      </div>
    </section>
  );
}