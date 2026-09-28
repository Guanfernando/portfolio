import { Section } from '@/components/primitives/Section';
import { SectionHeading } from '@/components/primitives/SectionHeading';
import { Reveal } from '@/components/primitives/Reveal';
import { TagList } from '@/components/primitives/TagList';
import { useLanguage } from '@/i18n/use-language';
import { experience } from '@/data/experience';
import styles from './experience.module.css';

export function Experience() {
  const { t, pick } = useLanguage();

  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        lead={t.experience.lead}
      />

      <ol className={styles.timeline} role="list">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.id} delay={i} className={styles.entry} data-current={job.current}>
            <span className={styles.node} aria-hidden="true" />
            <article className={`${styles.card} glass`}>
              <div className={styles.head}>
                <h3 className={styles.role}>
                  {pick(job.role)} <span className={styles.company}>· {job.company}</span>
                  {job.current && (
                    <span className={styles.currentBadge}>{t.experience.present}</span>
                  )}
                </h3>
                <span className={styles.period}>{pick(job.period)}</span>
              </div>
              <p className={styles.location}>{pick(job.location)}</p>
              <p className={styles.summary}>{pick(job.summary)}</p>

              <ul className={styles.achievements} role="list">
                {pick(job.achievements).map((line) => (
                  <li key={line.slice(0, 28)} className={styles.achievement}>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.tags}>
                <TagList items={job.tags} aria-label={t.projects.stack} />
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
