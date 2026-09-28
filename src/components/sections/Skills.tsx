import type { MouseEvent } from 'react';
import { Section } from '@/components/primitives/Section';
import { SectionHeading } from '@/components/primitives/SectionHeading';
import { Reveal } from '@/components/primitives/Reveal';
import { useLanguage } from '@/i18n/use-language';
import { skillGroups } from '@/data/skills';
import styles from './skills.module.css';

/** Track the cursor so the card can render a spotlight glow behind it. */
function handlePointer(event: MouseEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
}

export function Skills() {
  const { t, pick } = useLanguage();

  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        lead={t.skills.lead}
      />

      <div className={styles.grid}>
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.id}
            delay={i}
            className={`${styles.card} glass`}
            onMouseMove={handlePointer}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{pick(group.title)}</h3>
              <span className={styles.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <ul className={styles.items} role="list">
              {group.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
