import { useState } from 'react';
import CodeViewerPanel from './code-viewer/CodeViewerPanel';
import AiPromptButton from './code-viewer/AiPromptButton';

/**
 * A small, always-available floating stack:
 *  - "AI Prompt"  → copies a ready prompt for packing the project into a ZIP
 *  - "View Code"  → opens a full source-code panel
 * The panel stays out of the DOM until it is opened, so it never affects the
 * page's layout, performance or design.
 */
export default function CodeViewer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed bottom-5 right-5 z-[75] flex flex-col items-end gap-2 transition-all duration-300 ${
          open ? 'pointer-events-none translate-y-3 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <AiPromptButton />

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="View website source code"
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-background-300 bg-background-100/95 py-2.5 pl-3.5 pr-4 backdrop-blur-md transition-colors duration-300 hover:border-primary-400 hover:bg-background-200/95"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-500 text-background-50">
            <i className="ri-code-s-slash-line text-sm" />
          </span>
          <span className="font-label text-xs font-medium text-foreground-800 group-hover:text-foreground-950">
            View Code
          </span>
        </button>
      </div>

      <CodeViewerPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}