import { Section } from '@/components/primitives/Section';
import { SectionHeading } from '@/components/primitives/SectionHeading';
import { Reveal } from '@/components/primitives/Reveal';
import { Portrait } from '@/components/primitives/Portrait';
import { useLanguage } from '@/i18n/use-language';
import styles from './about.module.css';

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <SectionHeading index="01" eyebrow={t.about.eyebrow} title={t.about.title} />

      <div className={styles.grid}>
        <div className={styles.aside}>
          <Reveal>
            <Portrait variant="card" caption />
          </Reveal>
        </div>

        <Reveal delay={1}>
          <p className={styles.lead}>{t.about.lead}</p>
          <div className={styles.prose}>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className={`${styles.panel} glass`}>
            <h3 className={styles.panelTitle}>{t.about.focusTitle}</h3>
            <ul className={styles.focusList} role="list">
              {t.about.focus.map((point) => (
                <li key={point.slice(0, 24)} className={styles.focusItem}>
                  <span className={styles.focusMarker} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
