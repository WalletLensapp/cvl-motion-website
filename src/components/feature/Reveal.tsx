import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'blur' | 'rotate';

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={variant}
      className={`${className} ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}