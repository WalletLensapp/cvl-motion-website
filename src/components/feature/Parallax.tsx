import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  innerClassName?: string;
}

export default function Parallax({
  children,
  speed = 0.25,
  className = '',
  innerClassName = '',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handle = () => {
      const el = ref.current;
      if (!el) {
        return;
      }
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(-center * speed);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      <div
        className={innerClassName}
        style={{ transform: `translate3d(0, ${offset.toFixed(1)}px, 0)` }}
      >
        {children}
      </div>
    </div>
  );
}