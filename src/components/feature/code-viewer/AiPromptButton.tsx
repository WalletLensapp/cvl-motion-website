import { useEffect, useRef, useState } from 'react';
import { AI_PACK_PROMPT, AI_PROMPT_STEPS } from './aiPrompt';
import { copyText } from './clipboard';

/**
 * Small, professional helper that hands the user a copy-paste prompt for
 * packing their downloaded project into a ZIP. Hidden by default; opens a
 * compact popover only on click.
 */
export default function AiPromptButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;
    const handlePointer = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handlePointer);
    window.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      window.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const handleCopy = async () => {
    const ok = await copyText(AI_PACK_PROMPT);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div ref={wrapRef} className="relative">
      {open && (
        <div className="absolute bottom-full right-0 mb-3 w-[min(92vw,380px)] rounded-xl border border-background-300 bg-background-100 p-3.5">
          <div className="mb-2.5 flex items-center gap-2">
            <span className="grid h-7 w-7 flex-none place-items-center rounded-md bg-accent-500 text-background-50">
              <i className="ri-sparkling-2-line text-sm" />
            </span>
            <div className="min-w-0">
              <p className="font-heading text-sm font-semibold text-foreground-950">
                Pack it into a ZIP
              </p>
              <p className="font-label text-[11px] text-foreground-500">
                Give your AI the exact prompt below
              </p>
            </div>
          </div>

          <ol className="mb-3 space-y-1.5">
            {AI_PROMPT_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-2">
                <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-secondary-100 font-label text-[10px] font-semibold text-secondary-900">
                  {index + 1}
                </span>
                <span className="text-[11.5px] leading-snug text-foreground-700">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mb-2.5 max-h-28 overflow-auto rounded-md border border-background-200 bg-background-50 p-2.5">
            <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-foreground-700">
              {AI_PACK_PROMPT}
            </pre>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-3 py-2 font-label text-xs font-medium text-background-50 transition-colors hover:bg-primary-600"
          >
            <i className={copied ? 'ri-check-line' : 'ri-file-copy-line'} />
            {copied ? 'Prompt Copied' : 'Copy AI Prompt'}
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Get an AI prompt to pack this project into a ZIP"
        className="group flex cursor-pointer items-center gap-2 rounded-full border border-background-300 bg-background-100/95 py-2.5 pl-3.5 pr-4 backdrop-blur-md transition-colors duration-300 hover:border-accent-400 hover:bg-background-200/95"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-accent-500 text-background-50">
          <i className="ri-sparkling-2-line text-sm" />
        </span>
        <span className="font-label text-xs font-medium text-foreground-800 group-hover:text-foreground-950">
          AI Prompt
        </span>
      </button>
    </div>
  );
}