import { useLanguage } from '@/i18n/use-language';
import { contact, profile } from '@/data/site';
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from '@/components/primitives/icons';
import styles from './footer.module.css';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <span className={styles.name}>{profile.name}</span>
          <span className={styles.meta}>
            © {year} · {t.footer.rights}
          </span>
          <span className={styles.meta}>{t.footer.built}</span>
        </div>

        <div className={styles.links}>
          <a
            className={styles.socialLink}
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            className={styles.socialLink}
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            className={styles.socialLink}
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsappIcon />
          </a>
          <a
            className={styles.socialLink}
            href={`mailto:${contact.email}`}
            aria-label={t.contact.emailLabel}
          >
            <MailIcon />
          </a>
        </div>

        <a href="#top" className={styles.top}>
          &uarr; {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
