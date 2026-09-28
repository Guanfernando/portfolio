import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './use-reduced-motion';

interface Options {
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}

type Phase = 'typing' | 'holding' | 'deleting';

/**
 * Cycles through `phrases`, typing then deleting each one.
 * With reduced motion on, it swaps the full phrase on a slow timer instead.
 */
export function useTypewriter(phrases: string[], options: Options = {}): string {
  const { typeSpeed = 55, deleteSpeed = 26, holdTime = 1900 } = options;
  const reduced = useReducedMotion();

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const phaseRef = useRef<Phase>('typing');

  useEffect(() => {
    if (phrases.length === 0) return;
    const target = phrases[index % phrases.length];

    if (reduced) {
      setText(target);
      const timer = window.setTimeout(
        () => setIndex((i) => (i + 1) % phrases.length),
        holdTime + 1400,
      );
      return () => window.clearTimeout(timer);
    }

    let delay = typeSpeed;

    switch (phaseRef.current) {
      case 'typing': {
        if (text === target) {
          phaseRef.current = 'holding';
          delay = holdTime;
        } else {
          delay = typeSpeed;
        }
        break;
      }
      case 'holding': {
        phaseRef.current = 'deleting';
        delay = deleteSpeed;
        break;
      }
      case 'deleting': {
        if (text === '') {
          phaseRef.current = 'typing';
          setIndex((i) => (i + 1) % phrases.length);
          return;
        }
        delay = deleteSpeed;
        break;
      }
    }

    const timer = window.setTimeout(() => {
      setText((current) => {
        if (phaseRef.current === 'deleting') return current.slice(0, -1);
        if (phaseRef.current === 'typing') return target.slice(0, current.length + 1);
        return current;
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [phrases, index, text, reduced, typeSpeed, deleteSpeed, holdTime]);

  return text;
}
