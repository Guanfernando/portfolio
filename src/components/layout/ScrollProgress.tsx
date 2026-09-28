import { useScrollProgress } from '@/hooks/use-scroll-progress';
import styles from './scroll-progress.module.css';

/** Thin gradient bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.bar} style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
