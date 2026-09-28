import { Section } from '@/components/primitives/Section';
import { SectionHeading } from '@/components/primitives/SectionHeading';
import { Reveal } from '@/components/primitives/Reveal';
import { TagList } from '@/components/primitives/TagList';
import { ArrowUpRightIcon, GithubIcon } from '@/components/primitives/icons';
import { useLanguage } from '@/i18n/use-language';
import { caseStudies, repos } from '@/data/projects';
import { contact } from '@/data/site';
import styles from './projects.module.css';

export function Projects() {
  const { t, pick } = useLanguage();

  return (
    <Section id="projects">
      <SectionHeading
        index="04"
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        lead={t.projects.lead}
      />

      <div className={styles.caseList}>
        {caseStudies.map((study, i) => (
          <Reveal as="article" key={study.id} delay={i} className={`${styles.case} glass`}>
            <div className={styles.caseAside}>
              <span className={styles.kicker}>{pick(study.kicker)}</span>
              <h3 className={styles.caseName}>{pick(study.name)}</h3>
              <span className={styles.caseMeta}>
                {pick(study.context)} · {study.year}
              </span>
              <div className={styles.caseStack}>
                <TagList items={study.stack} accent aria-label={t.projects.stack} />
              </div>
            </div>

            <div className={styles.caseBody}>
              <div className={styles.block}>
                <span className={styles.blockLabel}>{t.projects.challenge}</span>
                <p className={styles.blockText}>{pick(study.challenge)}</p>
              </div>
              <div className={styles.block}>
                <span className={styles.blockLabel}>{t.projects.solution}</span>
                <p className={styles.blockText}>{pick(study.solution)}</p>
              </div>
              <div className={styles.block} data-impact="true">
                <span className={styles.blockLabel}>{t.projects.impact}</span>
                <p className={styles.blockText}>{pick(study.impact)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.labHeader}>
        <div>
          <h3 className={styles.labTitle}>{t.projects.labExperiments}</h3>
          <p className={styles.labLead}>{t.projects.labLead}</p>
        </div>
        <a className={styles.ghLink} href={contact.github} target="_blank" rel="noreferrer">
          <GithubIcon />
          {t.projects.viewGithub}
        </a>
      </Reveal>

      <div className={styles.repoGrid}>
        {repos.map((repo, i) => (
          <Reveal as="div" key={repo.name} delay={i}>
            <a
              className={`${styles.repo} glass`}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.projects.viewRepo}: ${repo.name}`}
            >
              <span className={styles.repoTop}>
                <span className={styles.repoName}>{repo.name}</span>
                <ArrowUpRightIcon className={styles.repoArrow} />
              </span>
              <span className={styles.repoDesc}>{pick(repo.description)}</span>
              <span className={styles.repoLang}>
                <span className={styles.repoLangDot} data-lang={repo.language} />
                {repo.language}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
