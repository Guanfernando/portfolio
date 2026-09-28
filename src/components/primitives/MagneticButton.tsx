import { useRef, type MouseEvent, type ReactNode, type RefObject } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import styles from './magnetic-button.module.css';

interface BaseProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  withArrow?: boolean;
  className?: string;
}

type AnchorProps = BaseProps & {
  href: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  download?: boolean | string;
  target?: string;
  rel?: string;
};

type ButtonProps = BaseProps & {
  href?: undefined;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
};

type MagneticButtonProps = AnchorProps | ButtonProps;

const STRENGTH = 0.28;

/**
 * Pill button that subtly leans toward the cursor.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export function MagneticButton(props: MagneticButtonProps) {
  const { children, variant = 'ghost', withArrow = false, className } = props;
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const handleMove = (event: MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * STRENGTH;
    const y = (event.clientY - rect.top - rect.height / 2) * STRENGTH;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  const shared = {
    className: [styles.button, className].filter(Boolean).join(' '),
    'data-variant': variant,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
  };

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {withArrow && (
        <span className={styles.arrow} aria-hidden="true">
          &rarr;
        </span>
      )}
    </>
  );

  if ('href' in props && props.href !== undefined) {
    return (
      <a
        ref={ref as unknown as RefObject<HTMLAnchorElement>}
        href={props.href}
        onClick={props.onClick}
        download={props.download}
        target={props.target}
        rel={props.rel}
        {...shared}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as unknown as RefObject<HTMLButtonElement>}
      type={props.type ?? 'button'}
      onClick={props.onClick}
      {...shared}
    >
      {content}
    </button>
  );
}
