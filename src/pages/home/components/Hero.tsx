import { demoMeta } from '@/mocks/animations';
import Typewriter from './Typewriter';

const HEADLINE = ['A', 'living', 'library', 'of', 'motion'];

const ROTATING_WORDS = [
  'text reveals',
  'parallax layers',
  'aurora glows',
  'ken burns pans',
  'vertical slides',
  'morphing blobs',
];

const TICKER = Object.values(demoMeta).map((item) => item.name);

const SLIDE_ONE =
  'https://readdy.ai/api/search-image?query=abstract%20flowing%20liquid%20gradient%20waves%20in%20deep%20charcoal%20with%20warm%20coral%20orange%20and%20amber%20light%20streaks%2C%20soft%20film%20grain%2C%20cinematic%20dark%20backdrop%20for%20white%20text%20overlay%2C%20ultra%20smooth%20minimal%20artistic%20composition&width=1920&height=1080&seq=hero-slide-a7&orientation=landscape';
const SLIDE_TWO =
  'https://readdy.ai/api/search-image?query=abstract%20smooth%20silk%20ribbons%20in%20deep%20espresso%20brown%20with%20lime%20green%20and%20mint%20highlights%2C%20gentle%20curves%2C%20dark%20moody%20studio%20lighting%2C%20minimal%20artistic%20rendering%20for%20website%20hero%20background&width=1920&height=1080&seq=hero-slide-b3&orientation=landscape';
const SLIDE_THREE =
  'https://readdy.ai/api/search-image?query=abstract%20topographic%20contour%20lines%20glowing%20in%20coral%20and%20teal%20on%20a%20deep%20charcoal%20canvas%2C%20subtle%20depth%2C%20dark%20elegant%20cinematic%20texture%20for%20website%20hero%20background&width=1920&height=1080&seq=hero-slide-c9&orientation=landscape';
const SLIDE_FOUR =
  'https://readdy.ai/api/search-image?query=abstract%20liquid%20chrome%20waves%20with%20warm%20amber%20and%20soft%20mint%20reflections%20on%20a%20near%20black%20surface%2C%20high%20gloss%2C%20minimal%20dark%20moody%20artistic%20composition%20for%20hero%20background&width=1920&height=1080&seq=hero-slide-d2&orientation=landscape';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="hero-slide" style={{ animationDelay: '0s', animationDuration: '32s' }}>
          <img
            src={SLIDE_ONE}
            alt="Abstract flowing liquid gradient waves in deep charcoal"
            title="Motion Lab hero background - liquid gradient waves"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="hero-slide" style={{ animationDelay: '8s', animationDuration: '32s' }}>
          <img
            src={SLIDE_TWO}
            alt="Abstract smooth silk ribbons with lime and mint highlights"
            title="Motion Lab hero background - silk ribbons"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="hero-slide" style={{ animationDelay: '16s', animationDuration: '32s' }}>
          <img
            src={SLIDE_THREE}
            alt="Glowing topographic contour lines in coral and teal"
            title="Motion Lab hero background - topographic contour lines"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="hero-slide" style={{ animationDelay: '24s', animationDuration: '32s' }}>
          <img
            src={SLIDE_FOUR}
            alt="Abstract liquid chrome waves with amber and mint reflections"
            title="Motion Lab hero background - liquid chrome waves"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background-50/85 via-background-50/70 to-background-50" />
      <div className="absolute inset-0 grain opacity-60" />

      <div className="relative z-10 w-full px-4 pb-28 pt-32 md:px-8">
        <div className="max-w-5xl">
          <span className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-background-300/60 bg-background-100/70 px-3.5 py-1.5 font-label text-[11px] uppercase tracking-[0.2em] text-foreground-700 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-500 animate-ping-slow" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            19 handcrafted animations · live on one page
          </span>

          <h1 className="mt-7 font-heading text-4xl font-semibold leading-[1.03] tracking-tight text-foreground-950 sm:text-6xl lg:text-7xl">
            {HEADLINE.map((word, wordIndex) => (
              <span key={word} className="mr-3 inline-block whitespace-nowrap md:mr-5">
                {word.split('').map((char, charIndex) => (
                  <span
                    key={`${word}-${charIndex}`}
                    className="inline-block animate-letter-up"
                    style={{ animationDelay: `${(wordIndex * 5 + charIndex) * 45}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-2xl animate-fade-in text-lg leading-relaxed text-foreground-700 md:text-xl">
            Every animation worth knowing, named and running right here — from{' '}
            <Typewriter words={ROTATING_WORDS} className="font-label text-accent-700" /> and
            everything in between.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#categories"
              className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 text-sm font-medium text-background-50 transition-colors hover:bg-primary-600"
            >
              <i className="ri-play-circle-line text-lg" />
              Start the tour
            </a>
            <a
              href="#text"
              className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-background-300/70 px-6 py-3 text-sm font-medium text-foreground-800 transition-colors hover:bg-background-100"
            >
              <i className="ri-text" />
              See text effects
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5">
            {[
              { value: '19', label: 'Named animations' },
              { value: '03', label: 'Categories live' },
              { value: '100%', label: 'CSS powered' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-label text-[11px] uppercase tracking-wider text-foreground-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-y border-background-200/60 bg-background-100/60 py-3 backdrop-blur">
        <div className="flex w-max animate-marquee-slow items-center">
          {[...TICKER, ...TICKER].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="flex items-center gap-4 px-5 font-label text-[11px] uppercase tracking-[0.18em] text-foreground-500"
            >
              {name}
              <i className="ri-asterisk text-primary-500" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}