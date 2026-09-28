import styles from './tag-list.module.css';

interface TagListProps {
  items: string[];
  accent?: boolean;
  'aria-label'?: string;
}

export function TagList({ items, accent = false, ...rest }: TagListProps) {
  return (
    <ul className={styles.list} role="list" {...rest}>
      {items.map((item) => (
        <li key={item} className={styles.tag} data-accent={accent}>
          {item}
        </li>
      ))}
    </ul>
  );
}
