export interface DemoMeta {
  name: string;
  description: string;
  tag: string;
}

export const demoMeta: Record<string, DemoMeta> = {
  typewriter: {
    name: 'Typewriter',
    description: 'Characters appear one by one with a blinking caret, like live typing.',
    tag: 'TEXT',
  },
  gradientText: {
    name: 'Animated Gradient Text',
    description: 'A flowing colour gradient endlessly sweeps across the letters.',
    tag: 'TEXT',
  },
  letterReveal: {
    name: 'Letter Reveal (Stagger)',
    description: 'Each letter lifts and rotates in, staggered with a tiny delay.',
    tag: 'TEXT',
  },
  blurIn: {
    name: 'Blur In',
    description: 'Text fades from soft blur to sharp focus for an elegant entrance.',
    tag: 'TEXT',
  },
  neonFlicker: {
    name: 'Neon Flicker',
    description: 'A glowing sign that randomly flickers, like a real neon tube.',
    tag: 'TEXT',
  },
  waveLetters: {
    name: 'Wave Letters',
    description: 'Letters ride a smooth sine wave up and down, forever.',
    tag: 'TEXT',
  },
  scrollReveal: {
    name: 'Scroll Reveal (Multi-direction)',
    description: 'Elements slide, zoom and un-blur as they enter the viewport.',
    tag: 'SCROLL',
  },
  parallax: {
    name: 'Parallax Layers',
    description: 'Foreground and background move at different speeds while scrolling.',
    tag: 'SCROLL',
  },
  verticalSlide: {
    name: 'Image Slide (Up & Down)',
    description: 'Columns of images glide vertically in opposite directions.',
    tag: 'SCROLL',
  },
  stickyStack: {
    name: 'Sticky Stacking Cards',
    description: 'Cards pile up and pin on top of each other while you scroll.',
    tag: 'SCROLL',
  },
  scrollZoom: {
    name: 'Scroll Zoom',
    description: 'An image scales up smoothly, driven directly by scroll position.',
    tag: 'SCROLL',
  },
  progressBar: {
    name: 'Scroll Progress',
    description: 'A live progress bar and counter tied to page scroll.',
    tag: 'SCROLL',
  },
  animatedGradient: {
    name: 'Animated Gradient',
    description: 'A slow, cinematic mesh gradient drifting behind the content.',
    tag: 'BACKGROUND',
  },
  aurora: {
    name: 'Aurora Blobs',
    description: 'Blurred colour orbs float and breathe, creating an aurora glow.',
    tag: 'BACKGROUND',
  },
  floatingShapes: {
    name: 'Floating Shapes',
    description: 'Geometric shapes drift, spin and rotate in a lazy orbit.',
    tag: 'BACKGROUND',
  },
  imageCrossfade: {
    name: 'Background Crossfade',
    description: 'Background images soften in and out, smoothly crossfading.',
    tag: 'BACKGROUND',
  },
  kenBurns: {
    name: 'Ken Burns',
    description: 'A slow pan and zoom that makes a still image feel cinematic.',
    tag: 'BACKGROUND',
  },
  morphBlob: {
    name: 'Morphing Blob',
    description: 'An organic shape whose border-radius morphs endlessly.',
    tag: 'BACKGROUND',
  },
  particles: {
    name: 'Rising Particles',
    description: 'Tiny dots float upward, like dust caught in a light beam.',
    tag: 'BACKGROUND',
  },
};

export interface CategoryItem {
  id: string;
  title: string;
  count: string;
  icon: string;
  href: string;
  index: string;
}

export const categories: CategoryItem[] = [
  {
    id: 'text',
    title: 'Text Animations',
    count: '6 live effects',
    icon: 'ri-text',
    href: '#text',
    index: '01',
  },
  {
    id: 'scroll',
    title: 'Scroll & Reveal',
    count: '6 live effects',
    icon: 'ri-scroll-to-bottom-line',
    href: '#scroll',
    index: '02',
  },
  {
    id: 'background',
    title: 'Background & Motion',
    count: '7 live effects',
    icon: 'ri-blur-off-line',
    href: '#background',
    index: '03',
  },
  {
    id: 'hover',
    title: 'Hover & Cursor',
    count: 'Next update',
    icon: 'ri-cursor-line',
    href: '#background',
    index: '04',
  },
];