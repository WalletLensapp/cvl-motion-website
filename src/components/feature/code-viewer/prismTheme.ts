import type { PrismTheme } from 'prism-react-renderer';

/**
 * A custom Prism theme built entirely from the site's own design tokens,
 * so the code editor feels native to the page in any palette.
 */
export const prismTheme: PrismTheme = {
  plain: {
    color: 'oklch(var(--foreground-900))',
    backgroundColor: 'transparent',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: { color: 'oklch(var(--foreground-600))', fontStyle: 'italic' },
    },
    {
      types: ['punctuation'],
      style: { color: 'oklch(var(--foreground-600))' },
    },
    {
      types: ['tag', 'deleted', 'symbol', 'selector'],
      style: { color: 'oklch(var(--primary-400))' },
    },
    {
      types: ['attr-name', 'property', 'constant', 'function', 'class-name'],
      style: { color: 'oklch(var(--accent-400))' },
    },
    {
      types: ['attr-value', 'string', 'char', 'inserted'],
      style: { color: 'oklch(var(--secondary-400))' },
    },
    {
      types: ['keyword', 'rule', 'atrule', 'important'],
      style: { color: 'oklch(var(--primary-400))' },
    },
    {
      types: ['number', 'boolean', 'builtin'],
      style: { color: 'oklch(var(--secondary-300))' },
    },
    {
      types: ['operator', 'entity', 'url'],
      style: { color: 'oklch(var(--foreground-700))' },
    },
    {
      types: ['variable', 'regex'],
      style: { color: 'oklch(var(--secondary-300))' },
    },
    {
      types: ['namespace'],
      style: { opacity: 0.75 },
    },
    {
      types: ['bold'],
      style: { fontWeight: 'bold' },
    },
  ],
};