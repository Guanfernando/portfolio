import { Section } from '@/components/primitives/Section';
import { SectionHeading } from '@/components/primitives/SectionHeading';
import { Reveal } from '@/components/primitives/Reveal';
import { useLanguage } from '@/i18n/use-language';
import { certifications, education } from '@/data/education';
import styles from './education.module.css';

export function Education() {
  const { t, pick } = useLanguage();

  return (
    <Section id="education">
      <SectionHeading
        index="05"
        eyebrow={t.education.eyebrow}
        title={t.education.title}
        lead={t.education.lead}
      />

      <div className={styles.layout}>
        <Reveal className={styles.list}>
          {education.map((item) => (
            <div key={item.id} className={styles.item}>
              <div>
                <h3 className={styles.itemTitle}>{pick(item.title)}</h3>
                <p className={styles.itemInstitution}>{item.institution}</p>
                {item.inProgress && (
                  <span className={styles.badge}>{t.education.inProgress}</span>
                )}
              </div>
              <span className={styles.itemPeriod}>{pick(item.period)}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={1} className={`${styles.certPanel} glass`}>
          <h3 className={styles.certTitle}>{t.education.certsTitle}</h3>
          <ul className={styles.certList} role="list">
            {certifications.map((cert) => (
              <li key={pick(cert.name)} className={styles.cert}>
                <span className={styles.certName}>{pick(cert.name)}</span>
                <span className={styles.certIssuer}>{cert.issuer}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
