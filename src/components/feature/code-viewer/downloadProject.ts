import JSZip from 'jszip';
import { codeFiles } from './codeFiles';

/**
 * Builds the complete project as a ZIP directly in the browser and triggers a
 * download. Every source file is the REAL file bundled at build time, so the
 * archive is a 1:1 copy of the project — nothing is missing or rewritten.
 */

const README = `# cvl·motion — Web Animation Showcase & Library

A complete, production-ready frontend project built with Vite + React 19 +
TypeScript + Tailwind CSS.

This ZIP is the REAL source code — every file the live site uses, 1:1,
nothing removed, simplified or replaced with placeholders.

==========================================================================
1. WHAT THIS PROJECT DOES
==========================================================================
cvl·motion is a single-page showcase / personal library of the best web
animations. Every animation (typewriter, parallax, scroll reveals, aurora
backgrounds, text animations, micro-interactions and more) is labelled with
its real name and runs live on the page next to the name.

The page also ships a built-in "code viewer" panel (the < > button) that lets
you browse the whole source, copy any file, copy everything, or download this
ZIP again — all client-side, with no server.

==========================================================================
2. TECHNOLOGIES USED
==========================================================================
- React 19
- Vite (dev server + bundler)
- TypeScript
- Tailwind CSS 3
- react-router-dom 7 (routing)
- i18next / react-i18next (internationalisation)
- prism-react-renderer (syntax highlighting in the code viewer)
- jszip (builds this ZIP in the browser)
- Remix Icon + Font Awesome (icon fonts, loaded via CDN in index.html)
- Google Fonts (Pacifico, plus the body/heading fonts defined in index.css)

All dependencies and their exact versions are listed in package.json.

==========================================================================
3. INSTALL DEPENDENCIES
==========================================================================
  npm install

(Use Node.js 18 or newer.)

==========================================================================
4. RUN LOCALLY (fastest way to SEE the site)
==========================================================================
  npm run dev

Then open the URL it prints, usually:  http://localhost:3000

IMPORTANT: open the http://localhost link in the browser. Do NOT double-click
index.html — that shows a blank page, because a React app must be SERVED, not
opened as a file.

Other useful scripts:
  npm run type-check   -> TypeScript check
  npm run lint         -> ESLint

==========================================================================
5. BUILD FOR PRODUCTION
==========================================================================
  npm run build

The ready-to-upload files are generated inside the "out" folder.
NOTE: the output folder is "out" (not "dist") because vite.config.ts sets
build.outDir = "out". If you prefer "dist", change build.outDir in
vite.config.ts and update the deploy settings to match.

Preview the production build locally:
  npm run preview

==========================================================================
6. DEPLOY TO CLOUDFLARE PAGES
==========================================================================
Option A — GitHub auto-build (recommended, no terminal needed afterwards):
  1. Push this folder to a GitHub repository.
  2. Cloudflare Dashboard -> Workers & Pages -> Create -> Pages ->
     Connect to Git -> pick the repository.
  3. Build settings:
        Framework preset:        Vite
        Build command:           npm run build
        Build output directory:  out
  4. Save and Deploy. Every future push rebuilds automatically.

Option B — manual drag & drop:
  1. Run: npm run build
  2. A folder named "out" appears.
  3. Cloudflare Pages -> Create -> "Upload assets" -> drag the "out" folder.
  4. Deploy.

Routing note: public/_redirects is included so client-side routes keep working
after a refresh on Cloudflare Pages. Keep it.

==========================================================================
7. WHERE THE MAIN COMPONENTS AND PAGES LIVE
==========================================================================
  src/pages/home/page.tsx        the home page (composes everything)
  src/pages/NotFound.tsx         the 404 page
  src/pages/home/components/     each section (Hero, categories, demos...)
  src/components/feature/        Navbar, Footer, CodeViewer, Reveal, Parallax
  src/components/feature/code-viewer/   the code viewer + ZIP download logic
  src/components/base/           small reusable UI primitives
  src/hooks/                     custom hooks (useInView, useScrollProgress...)
  src/router/config.tsx          the route table
  src/mocks/                     static demo / mock data (.ts files)
  src/i18n/                      translation resources
  src/index.css                  design tokens, fonts and animation keyframes
  tailwind.config.ts             theme: colors, fonts, keyframes

==========================================================================
8. HOW TO MODIFY THE DESIGN
==========================================================================
- Colours / fonts / tokens: edit the CSS variables in src/index.css and the
  theme in tailwind.config.ts.
- A specific section's look: open its component in
  src/pages/home/components/ and change the Tailwind classes.
- Section order / which sections appear: edit src/pages/home/page.tsx.
- Navigation and footer: src/components/feature/Navbar.tsx and Footer.tsx.
- Animation data (names, descriptions): src/mocks/animations.ts.
- Text in other languages: src/i18n/local/<language>/.

==========================================================================
9. ENVIRONMENT VARIABLES
==========================================================================
No secret keys are required for the site to run as-is — it uses static mock
data. An .env.example file is included showing the optional variables:
  BASE_PATH            sub-path the app is served from (default "/")
  VITE_PUBLIC_SUPABASE_URL / VITE_PUBLIC_SUPABASE_ANON_KEY
                       only needed if you later connect a backend
Copy .env.example to .env and fill values as needed. Never commit real
secrets. On Cloudflare Pages, add these under Settings -> Environment
Variables.

==========================================================================
10. FEATURES THAT REQUIRE A BACKEND / EXTERNAL API
==========================================================================
- The website as shipped needs NO backend and NO API — it is fully static.
- The code-viewer ZIP download is done entirely in the browser (jszip), so it
  also needs no server.
- If you later add user accounts, saved data, file uploads or database-backed
  content, those would require a backend (Supabase is already listed as a
  dependency and can be plugged in). Until then everything works offline.

==========================================================================
MISSING / NOT INCLUDED (honest note)
==========================================================================
- package-lock.json is NOT included, because it can only be generated by
  actually running "npm install" on a machine. Run it once and it will be
  created. (Do not fabricate one — a fake lockfile breaks "npm ci".)
- There are no external image files; all visuals are code (CSS/SVG in JSX) or
  generated image URLs, so no /assets image files are required.

Happy building.
`;

const GITIGNORE = `node_modules
out
dist
.vite
.DS_Store
*.local
*.log
`;

const ENV_EXAMPLE = `# Copy this file to ".env" and fill in values as needed.
# The site runs fine WITHOUT any of these (it uses static mock data).

# Sub-path the app is served from. Leave as "/" for a normal deployment.
BASE_PATH=/

# Only needed if you later connect a backend (Supabase compatible).
# These are PUBLIC client-side values, safe to expose in the browser.
VITE_PUBLIC_SUPABASE_URL=
VITE_PUBLIC_SUPABASE_ANON_KEY=
`;

const REDIRECTS = `/*    /index.html   200
`;

interface ExtraFile {
  path: string;
  content: string;
}

const EXTRA_FILES: ExtraFile[] = [
  { path: 'README.md', content: README },
  { path: '.gitignore', content: GITIGNORE },
  { path: '.env.example', content: ENV_EXAMPLE },
  { path: 'public/_redirects', content: REDIRECTS },
];

export async function downloadProjectZip(): Promise<boolean> {
  try {
    const zip = new JSZip();

    codeFiles.forEach((file) => {
      zip.file(file.path, file.code.replace(/^\n/, ''));
    });

    EXTRA_FILES.forEach((file) => {
      const alreadyExists = codeFiles.some((existing) => existing.path === file.path);
      if (!alreadyExists) zip.file(file.path, file.content);
    });

    const blob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cvl-motion-project.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(() => URL.revokeObjectURL(url), 5000);
    return true;
  } catch {
    return false;
  }
}