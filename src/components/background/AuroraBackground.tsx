import styles from './aurora-background.module.css';

/**
 * Fixed, non-interactive canvas that renders the drifting aurora,
 * a faint grid and an animated grain layer behind all page content.
 */
export function AuroraBackground() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={`${styles.blob} ${styles['blob--cyan']}`} />
      <div className={`${styles.blob} ${styles['blob--indigo']}`} />
      <div className={`${styles.blob} ${styles['blob--magenta']}`} />
      <div className={styles.grid} />
      <div className={styles.noise} />
    </div>
  );
}
