import type { ReactNode } from 'react';
import styles from './section.module.css';

interface SectionProps {
  id: string;
  children: ReactNode;
  /** Constrain content to the narrow reading width. */
  narrow?: boolean;
  className?: string;
  'aria-label'?: string;
}

/** A page section with a consistent id anchor, rhythm and content width. */
export function Section({ id, children, narrow = false, className, ...rest }: SectionProps) {
  return (
    <section id={id} className={[styles.section, className].filter(Boolean).join(' ')} {...rest}>
      <div className={styles.inner} data-narrow={narrow}>
        {children}
      </div>
    </section>
  );
}
