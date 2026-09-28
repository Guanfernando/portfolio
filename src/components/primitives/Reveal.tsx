import { motion, type HTMLMotionProps } from 'framer-motion';
import { createElement, type ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { useReveal } from '@/hooks/use-reveal';

type Tag = 'div' | 'li' | 'section' | 'article' | 'span';

type RevealProps = {
  children: ReactNode;
  /** Stagger index — multiplied by 60ms. */
  delay?: number;
  as?: Tag;
  y?: number;
} & Omit<HTMLMotionProps<'div'>, 'children'>;

/**
 * Fades + lifts its children into place the first time they enter the viewport.
 * Reveal state comes from `useReveal`, which shows anything already on screen at
 * mount immediately — so content is never gated behind an observer that might
 * not fire. With reduced motion it renders a plain element.
 */
export function Reveal({ children, delay = 0, as = 'div', y = 24, ...rest }: RevealProps) {
  const reduced = useReducedMotion();
  const { ref, shown } = useReveal<HTMLDivElement>();

  if (reduced) {
    return createElement(as, rest, children);
  }

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay: delay * 0.06, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
