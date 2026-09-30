import { demoMeta } from '@/mocks/animations';
import Reveal from '@/components/feature/Reveal';
import Parallax from '@/components/feature/Parallax';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import SectionHeading, { DemoShell } from './DemoShell';

const REVEAL_TILES: { variant: 'up' | 'left' | 'zoom' | 'blur'; label: string }[] = [
  { variant: 'up', label: 'Fade Up' },
  { variant: 'left', label: 'Slide In' },
  { variant: 'zoom', label: 'Zoom In' },
  { variant: 'blur', label: 'Blur In' },
];

const GALLERY_IMAGES = [
  'https://readdy.ai/api/search-image?query=minimal%20abstract%20dark%20texture%20with%20warm%20coral%20orange%20soft%20light%20gradient%2C%20studio%20lighting%2C%20elegant%20smooth%20composition%2C%20premium%20artistic%20render&width=800&height=1000&seq=gallery-tile-1&orientation=portrait',
  'https://readdy.ai/api/search-image?query=minimal%20abstract%20dark%20texture%20with%20lime%20green%20glow%20and%20soft%20grain%2C%20studio%20lighting%2C%20elegant%20smooth%20composition%2C%20premium%20artistic%20render&width=800&height=1000&seq=gallery-tile-2&orientation=portrait',
  'https://readdy.ai/api/search-image?query=minimal%20abstract%20dark%20texture%20with%20mint%20teal%20gradient%20and%20soft%20shadow%2C%20studio%20lighting%2C%20elegant%20smooth%20composition%2C%20premium%20artistic%20render&width=800&height=1000&seq=gallery-tile-3&orientation=portrait',
  'https://readdy.ai/api/search-image?query=minimal%20abstract%20dark%20texture%20with%20amber%20gold%20light%20streak%20and%20soft%20grain%2C%20studio%20lighting%2C%20elegant%20smooth%20composition%2C%20premium%20artistic%20render&width=800&height=1000&seq=gallery-tile-4&orientation=portrait',
  'https://readdy.ai/api/search-image?query=minimal%20abstract%20dark%20texture%20with%20coral%20pink%20haze%20and%20soft%20grain%2C%20studio%20lighting%2C%20elegant%20smooth%20composition%2C%20premium%20artistic%20render&width=800&height=1000&seq=gallery-tile-5&orientation=portrait',
  'https://readdy.ai/api/search-image?query=minimal%20abstract%20dark%20texture%20with%20emerald%20green%20glow%20and%20deep%20shadow%2C%20studio%20lighting%2C%20elegant%20smooth%20composition%2C%20premium%20artistic%20render&width=800&height=1000&seq=gallery-tile-6&orientation=portrait',
];

const PARALLAX_IMAGE =
  'https://readdy.ai/api/search-image?query=abstract%20layered%20mountain%20silhouettes%20in%20deep%20charcoal%20with%20coral%20orange%20sun%20glow%20and%20mint%20atmosphere%2C%20minimal%20artistic%20illustration%2C%20smooth%20gradient%20sky%2C%20cinematic%20dark%20composition&width=1400&height=900&seq=parallax-scene-1&orientation=landscape';

const ZOOM_IMAGE =
  'https://readdy.ai/api/search-image?query=abstract%20concentric%20glowing%20rings%20in%20coral%20orange%20and%20mint%20green%20on%20a%20deep%20charcoal%20background%2C%20minimal%20cinematic%20texture%2C%20smooth%20gradient%20lighting&width=1200&height=900&seq=zoom-scene-1&orientation=landscape';

const STACK_CARDS = [
  {
    title: 'Card one',
    note: 'Pins at the top',
    icon: 'ri-layout-top-line',
    tone: 'border-primary-200/60 bg-primary-50/50',
  },
  {
    title: 'Card two',
    note: 'Stacks over the first',
    icon: 'ri-stack-line',
    tone: 'border-accent-200/60 bg-accent-50/50',
  },
  {
    title: 'Card three',
    note: 'Creates the pile',
    icon: 'ri-layout-grid-line',
    tone: 'border-secondary-200/60 bg-secondary-50/50',
  },
];

function ScrollZoomStage() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const scale = 0.82 + progress * 0.55;

  return (
    <div ref={ref} className="flex h-full w-full items-center justify-center p-5">
      <div
        className="h-full w-full overflow-hidden rounded-xl"
        style={{ transform: `scale(${scale.toFixed(3)})`, transition: 'transform 120ms linear' }}
      >
        <img
          src={ZOOM_IMAGE}
          alt="Concentric glowing rings used to demonstrate scroll zoom"
          title="Scroll Zoom animation demo - glowing concentric rings"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function ScrollAnimationsSection() {
  return (
    <section id="scroll" className="relative w-full px-4 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Section 02 · Movement"
        title="Motion that follows your scroll"
        description="These effects are driven by scroll position and by elements entering the viewport — the moment they appear, they animate in."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Reveal variant="up" className="h-full">
          <DemoShell
            meta={demoMeta.scrollReveal}
            index={7}
            className="h-full"
            stageClassName="min-h-[240px]"
          >
            <div className="grid w-full grid-cols-2 gap-3 p-4">
              {REVEAL_TILES.map((tile) => (
                <Reveal key={tile.variant} variant={tile.variant}>
                  <div className="rounded-lg border border-background-200/70 bg-background-100 px-3 py-7 text-center">
                    <p className="font-label text-[11px] uppercase tracking-[0.15em] text-foreground-600">
                      {tile.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" delay={80} className="h-full">
          <DemoShell
            meta={demoMeta.scrollZoom}
            index={8}
            className="h-full"
            stageClassName="min-h-[240px]"
          >
            <ScrollZoomStage />
          </DemoShell>
        </Reveal>

        <Reveal variant="up" className="h-full lg:col-span-2">
          <DemoShell
            meta={demoMeta.parallax}
            index={9}
            className="h-full"
            stageClassName="min-h-[360px]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Parallax speed={0.16} className="absolute inset-0" innerClassName="h-full w-full">
                <img
                  src={PARALLAX_IMAGE}
                  alt="Layered mountain silhouettes used to show parallax depth"
                  title="Parallax Layers animation demo - layered mountain silhouettes"
                  className="h-full w-full scale-110 object-cover object-top"
                />
              </Parallax>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/30 to-transparent" />
            <div className="relative z-10 flex h-full w-full items-end justify-between gap-4 p-5">
              <Parallax speed={-0.22}>
                <span className="inline-flex items-center gap-2 rounded-full bg-background-100/90 px-3.5 py-1.5 font-label text-[11px] uppercase tracking-wider text-foreground-700">
                  <i className="ri-arrow-up-line text-primary-500" />
                  Layer speed 0.16
                </span>
              </Parallax>
              <Parallax speed={-0.34}>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-3.5 py-1.5 font-label text-[11px] uppercase tracking-wider text-background-50">
                  Foreground 0.34
                </span>
              </Parallax>
            </div>
          </DemoShell>
        </Reveal>

        <Reveal variant="up" className="h-full lg:col-span-2">
          <DemoShell
            meta={demoMeta.verticalSlide}
            index={10}
            className="h-full"
            stageClassName="min-h-[420px]"
          >
            <div className="pause-on-hover flex h-full w-full gap-3 p-4">
              <div className="flex-1 overflow-hidden">
                <div className="flex animate-slide-loop flex-col gap-3">
                  {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, index) => (
                    <img
                      key={`up-${index}`}
                      src={src}
                      alt="Abstract gallery tile sliding upward"
                      title="Image Slide animation demo - gallery tile"
                      className="h-44 w-full rounded-lg object-cover object-top"
                    />
                  ))}
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <div
                  className="flex animate-slide-loop flex-col gap-3"
                  style={{ animationDirection: 'reverse' }}
                >
                  {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, index) => (
                    <img
                      key={`down-${index}`}
                      src={src}
                      alt="Abstract gallery tile sliding downward"
                      title="Image Slide animation demo - gallery tile"
                      className="h-44 w-full rounded-lg object-cover object-top"
                    />
                  ))}
                </div>
              </div>
            </div>
          </DemoShell>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <Reveal variant="right" className="lg:col-span-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-background-200 bg-background-100 px-3 py-1 font-label text-[11px] uppercase tracking-[0.2em] text-foreground-600">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            11 · Scroll
          </span>
          <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
            {demoMeta.stickyStack.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">
            {demoMeta.stickyStack.description} Scroll slowly and watch each card pin on top of the
            previous one.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 font-label text-xs uppercase tracking-wider text-foreground-500">
            Keep scrolling
            <i className="ri-arrow-down-line animate-bob text-primary-500" />
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="flex flex-col gap-5">
            {STACK_CARDS.map((card, index) => (
              <div key={card.title} className="h-[34vh] min-h-[180px]">
                <div className="sticky" style={{ top: `${96 + index * 30}px` }}>
                  <div
                    className={`flex items-center gap-4 rounded-2xl border p-6 backdrop-blur ${card.tone}`}
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-background-50 text-foreground-800">
                      <i className={`${card.icon} text-xl`} />
                    </span>
                    <div>
                      <h4 className="font-heading text-base font-semibold text-foreground-950">
                        {card.title}
                      </h4>
                      <p className="mt-1 text-sm text-foreground-600">{card.note}</p>
                    </div>
                    <span className="ml-auto font-label text-xs text-foreground-500">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}