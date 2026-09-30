import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  className?: string;
}

export default function Typewriter({ words, className = '' }: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(hold);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return undefined;
    }

    const speed = deleting ? 45 : 95;
    const timer = setTimeout(() => {
      setText(
        deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return <span className={`typewriter ${className}`}>{text}</span>;
}