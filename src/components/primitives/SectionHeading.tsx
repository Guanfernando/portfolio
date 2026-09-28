import { Reveal } from './Reveal';
import styles from './section-heading.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Two-digit section index, e.g. "01". */
  index?: string;
}

export function SectionHeading({ eyebrow, title, lead, index }: SectionHeadingProps) {
  return (
    <Reveal className={styles.header}>
      <span className="eyebrow">
        {index && <span className={styles.index}>{index}</span>}
        {eyebrow}
      </span>
      <h2 className={styles.title}>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </Reveal>
  );
}
