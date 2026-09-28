import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/use-language';
import { useActiveSection } from '@/hooks/use-active-section';
import { SECTION_IDS, profile } from '@/data/site';
import styles from './navbar.module.css';

const NAV_KEYS = SECTION_IDS;

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const activeSection = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <div className={styles.bar}>
        <a href="#top" className={styles.brand} aria-label={profile.name}>
          <span className={styles.mark}>{profile.initials}</span>
          <span className={styles.brandName}>{profile.shortName}</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {NAV_KEYS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={styles.link}
              data-active={activeSection === id}
            >
              {t.nav.links[id]}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.langToggle} role="group" aria-label={t.nav.languageLabel}>
            {(['es', 'en'] as const).map((code) => (
              <button
                key={code}
                type="button"
                className={styles.langOption}
                data-active={lang === code}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <a className={styles.resume} href={profile.resumeUrl} target="_blank" rel="noreferrer">
            {t.nav.resume}
            <span aria-hidden="true">&darr;</span>
          </a>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={t.nav.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.drawer}>
          <nav className={styles.drawerNav} aria-label="Mobile">
            {NAV_KEYS.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                className={styles.drawerLink}
                data-active={activeSection === id}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.drawerIndex}>{String(i + 1).padStart(2, '0')}</span>
                {t.nav.links[id]}
              </a>
            ))}
          </nav>
          <a
            className={`${styles.resume} ${styles.drawerResume}`}
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.resume}
            <span aria-hidden="true">&darr;</span>
          </a>
        </div>
      )}
    </header>
  );
}
