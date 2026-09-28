import { useState } from 'react';
import { profile } from '@/data/site';
import styles from './portrait.module.css';

interface PortraitProps {
  variant?: 'card' | 'avatar';
  /** Show the name + location strip over the image (card variant only). */
  caption?: boolean;
  className?: string;
}

/**
 * Photo of Juan treated as a cyan→violet duotone so it sits inside the
 * aurora/glass language instead of clashing with it. Falls back to the
 * gradient initials mark if the image file is not present.
 */
export function Portrait({ variant = 'card', caption = false, className }: PortraitProps) {
  const [failed, setFailed] = useState(false);
  const showImage = !failed;

  return (
    <figure
      className={[styles.portrait, className].filter(Boolean).join(' ')}
      data-variant={variant}
    >
      {showImage ? (
        <>
          <img
            className={styles.image}
            src={profile.portraitUrl}
            alt={`Retrato de ${profile.name}`}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
          <span className={styles.duotone} aria-hidden="true" />
          <span className={styles.veil} aria-hidden="true" />
          <span className={styles.grain} aria-hidden="true" />
        </>
      ) : (
        <span className={styles.fallback} aria-hidden="true">
          {profile.initials}
        </span>
      )}

      {caption && variant === 'card' && (
        <figcaption className={styles.caption}>
          <span className={styles.captionName}>{profile.name}</span>
          <span className={styles.captionMeta}>{profile.location}</span>
        </figcaption>
      )}
    </figure>
  );
}
