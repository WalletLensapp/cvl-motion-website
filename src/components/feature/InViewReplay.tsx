import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface InViewReplayProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

/**
 * Mounts its children only once the element scrolls into view, so CSS
 * entrance animations always play at the right moment instead of on page load.
 */
export default function InViewReplay({
  children,
  className = '',
  threshold = 0.3,
}: InViewReplayProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });

  return (
    <div ref={ref} className={className}>
      {inView ? children : null}
    </div>
  );
}