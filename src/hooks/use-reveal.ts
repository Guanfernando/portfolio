import { useEffect, useRef, useState, type RefObject } from 'react';

interface RevealState<T extends HTMLElement> {
  ref: RefObject<T>;
  shown: boolean;
}

/**
 * Reveals an element the first time it enters the viewport.
 *
 * Anything already on screen when it mounts is shown immediately (this also
 * covers environments where IntersectionObserver never fires, e.g. headless
 * screenshots), so content can never get stuck invisible.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(): RevealState<T> {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const rect = el.getBoundingClientRect();
    const withinView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;

    if (withinView || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);

    // Safety net: never let content stay hidden if the observer never fires
    // (misconfigured environments, headless captures). The scroll-in animation
    // is a progressive enhancement, not a gate on the content.
    const fallback = window.setTimeout(() => {
      setShown(true);
      observer.disconnect();
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [shown]);

  return { ref, shown };
}
