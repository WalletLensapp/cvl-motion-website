/**
 * Ready-made prompt the user can hand to any AI so it packs the downloaded
 * project into a runnable ZIP without touching a single file.
 */
export const AI_PACK_PROMPT = `I am giving you my complete website project (a Vite + React 19 + TypeScript + Tailwind CSS project) that I downloaded from my editor.

Your job:
1. Pack ALL the files into a single .zip archive and keep the exact same folder structure.
2. Give me the .zip so I can download it.

Then give me the exact steps to run it locally:
- npm install
- npm run dev

Hard rules (very important):
- Do NOT change, rename, delete, move or reformat ANY file or folder.
- Keep every single file 100% identical to what I gave you byte-for-byte.
- Do NOT touch package.json, tailwind.config.ts, index.css, vite.config.ts or any config file.
- Do NOT rewrite, "clean up" or "improve" any code.
- If any file or folder seems missing, STOP and ask me before doing anything.

Goal: after unzipping and running it, the site must look and behave exactly 100% the same as my original project.`;

export const AI_PROMPT_STEPS: string[] = [
  'Open the Code tab and download your project.',
  'Attach the downloaded file and paste this prompt.',
  'Your AI hands back a ready-to-run .zip — no changes made.',
];