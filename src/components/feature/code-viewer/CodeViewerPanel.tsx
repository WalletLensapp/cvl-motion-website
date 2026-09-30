import { useEffect, useMemo, useState } from 'react';
import { codeFiles, buildAllCode, formatBytes, getLanguageLabel } from './codeFiles';
import CodeBlock from './CodeBlock';
import { copyText } from './clipboard';
import { AI_PACK_PROMPT } from './aiPrompt';
import { downloadProjectZip } from './downloadProject';

interface CodeViewerPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function CodeViewerPanel({ open, onClose }: CodeViewerPanelProps) {
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState(codeFiles[0].id);
  const [copied, setCopied] = useState<string | null>(null);
  const [zipState, setZipState] = useState<'idle' | 'working' | 'done' | 'error'>('idle');

  const activeFile = useMemo(
    () => codeFiles.find((file) => file.id === activeId) ?? codeFiles[0],
    [activeId],
  );

  const stats = useMemo(() => {
    const lineCount = activeFile.code.replace(/\n$/, '').split('\n').length;
    const bytes = new Blob([activeFile.code]).size;
    return { lineCount, bytes };
  }, [activeFile]);

  const totalLines = useMemo(
    () =>
      codeFiles.reduce(
        (sum, file) => sum + file.code.replace(/\n$/, '').split('\n').length,
        0,
      ),
    [],
  );

  useEffect(() => {
    if (open) {
      setRendered(true);
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }
    setVisible(false);
    const timer = window.setTimeout(() => setRendered(false), 460);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  const handleCopy = async (id: string, text: string) => {
    const ok = await copyText(text);
    if (!ok) return;
    setCopied(id);
    window.setTimeout(() => {
      setCopied((current) => (current === id ? null : current));
    }, 1800);
  };

  const handleDownloadZip = async () => {
    if (zipState === 'working') return;
    setZipState('working');
    const ok = await downloadProjectZip();
    setZipState(ok ? 'done' : 'error');
    window.setTimeout(() => setZipState('idle'), 3000);
  };

  const zipLabel =
    zipState === 'working'
      ? 'Packing ZIP...'
      : zipState === 'done'
        ? 'ZIP Downloaded'
        : zipState === 'error'
          ? 'Download failed - retry'
          : 'Download ZIP';

  const zipIcon =
    zipState === 'working'
      ? 'ri-loader-4-line animate-spin'
      : zipState === 'done'
        ? 'ri-check-line'
        : zipState === 'error'
          ? 'ri-error-warning-line'
          : 'ri-download-2-line';

  if (!rendered) return null;

  return (
    <div
      className="fixed inset-0 z-[80]"
      role="dialog"
      aria-modal="true"
      aria-label="Website source code"
    >
      <button
        type="button"
        aria-label="Close code viewer"
        onClick={onClose}
        className={`absolute inset-0 cursor-pointer bg-background-950/70 backdrop-blur-sm transition-opacity duration-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-[1000px] flex-col overflow-hidden border-l border-background-300 bg-background-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex flex-none items-center justify-between gap-3 border-b border-background-200/80 px-4 py-3 md:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-primary-500 text-background-50">
              <i className="ri-code-s-slash-line text-lg" />
            </span>
            <div className="min-w-0">
              <h3 className="truncate font-heading text-sm font-semibold text-foreground-950 md:text-base">
                Website Source Code
              </h3>
              <p className="truncate font-label text-[11px] text-foreground-500">
                {codeFiles.length} files · {totalLines} lines
              </p>
            </div>
          </div>

          <div className="flex flex-none items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadZip}
              disabled={zipState === 'working'}
              title="Download the complete project as a ready-to-run .zip"
              className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-3 py-2 text-xs font-medium text-background-50 transition-colors hover:bg-primary-600 disabled:cursor-wait disabled:opacity-80 md:text-sm"
            >
              <i className={zipIcon} />
              <span className="hidden sm:inline">{zipLabel}</span>
            </button>
            <button
              type="button"
              onClick={() => handleCopy('__prompt__', AI_PACK_PROMPT)}
              title="Copy a prompt that tells your AI to pack this project into a ZIP"
              className="hidden cursor-pointer items-center gap-2 whitespace-nowrap rounded-md border border-background-300 px-3 py-2 text-xs font-medium text-foreground-800 transition-colors hover:border-accent-400 hover:text-accent-700 md:flex md:text-sm"
            >
              <i className={copied === '__prompt__' ? 'ri-check-line' : 'ri-sparkling-2-line'} />
              <span className="hidden sm:inline">
                {copied === '__prompt__' ? 'Copied' : 'AI Prompt'}
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleCopy('__all__', buildAllCode())}
              className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-md border border-background-300 px-3 py-2 text-xs font-medium text-foreground-800 transition-colors hover:border-primary-400 hover:text-primary-500 md:text-sm"
            >
              <i className={copied === '__all__' ? 'ri-check-line' : 'ri-file-copy-2-line'} />
              <span className="hidden sm:inline">
                {copied === '__all__' ? 'Copied' : 'Copy All Code'}
              </span>
            </button>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-md border border-background-200 text-foreground-700 transition-colors hover:bg-background-200/60 hover:text-foreground-950"
            >
              <i className="ri-close-line text-xl" />
            </button>
          </div>
        </div>

        {/* File tabs */}
        <div className="flex flex-none items-center gap-1 overflow-x-auto border-b border-background-200/80 bg-background-50/60 px-2 py-2">
          {codeFiles.map((file) => {
            const isActive = file.id === activeFile.id;
            return (
              <button
                key={file.id}
                type="button"
                onClick={() => setActiveId(file.id)}
                title={file.path}
                className={`flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-md px-3 py-1.5 font-label text-[11.5px] transition-colors md:text-xs ${
                  isActive
                    ? 'bg-primary-500 text-background-50'
                    : 'text-foreground-600 hover:bg-background-200/60 hover:text-foreground-900'
                }`}
              >
                <i className={isActive ? 'ri-file-code-fill' : 'ri-file-code-line'} />
                {file.name}
              </button>
            );
          })}
        </div>

        {/* File meta bar */}
        <div className="flex flex-none flex-wrap items-center justify-between gap-3 border-b border-background-200/80 px-4 py-2.5 md:px-5">
          <div className="flex min-w-0 items-center gap-2">
            <span className="truncate font-label text-xs text-foreground-700">
              {activeFile.path}
            </span>
            <span className="flex-none rounded-full bg-secondary-100 px-2 py-0.5 font-label text-[10px] uppercase tracking-wide text-secondary-900">
              {getLanguageLabel(activeFile.language)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden font-label text-[11px] text-foreground-500 sm:inline">
              {stats.lineCount} lines · {formatBytes(stats.bytes)}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(activeFile.id, activeFile.code.replace(/^\n/, ''))}
              className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-md border border-background-300 px-2.5 py-1.5 font-label text-[11px] text-foreground-800 transition-colors hover:border-primary-400 hover:text-primary-500"
            >
              <i className={copied === activeFile.id ? 'ri-check-line' : 'ri-file-copy-line'} />
              {copied === activeFile.id ? 'Copied' : 'Copy Code'}
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="flex-none border-b border-background-200/60 bg-background-100 px-4 py-2 text-xs leading-relaxed text-foreground-600 md:px-5">
          <i className="ri-information-line mr-1.5 text-secondary-500" />
          {activeFile.description}
        </p>

        {/* Code area */}
        <div className="flex-1 overflow-auto bg-background-50">
          <CodeBlock file={activeFile} />
        </div>

        {/* Footer hint */}
        <div className="flex flex-none items-center justify-between gap-3 border-t border-background-200/80 px-4 py-2 md:px-5">
          <span className="font-label text-[11px] text-foreground-500">
            Press <kbd className="rounded bg-background-200/70 px-1.5 py-0.5 text-foreground-700">Esc</kbd> to close
          </span>
          <span className="font-label text-[11px] text-foreground-500">
            ZIP ready · Cloudflare Pages friendly
          </span>
        </div>
      </div>
    </div>
  );
}