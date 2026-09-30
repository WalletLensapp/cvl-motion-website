import { useEffect, useRef, useState } from 'react';

/**
 * Returns how far an element has travelled through the viewport.
 * 0 = element entering from the bottom, 1 = element leaving through the top.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const el = ref.current;
      if (!el) {
        return;
      }
      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const passed = window.innerHeight - rect.top;
      const next = total > 0 ? passed / total : 0;
      setProgress(Math.min(1, Math.max(0, next)));
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  return { ref, progress };
}

export default useScrollProgress;