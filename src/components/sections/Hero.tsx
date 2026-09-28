import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '@/i18n/use-language';
import { useTypewriter } from '@/hooks/use-typewriter';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { MagneticButton } from '@/components/primitives/MagneticButton';
import { profile, stats, rotatingRoles } from '@/data/site';
import styles from './hero.module.css';

export function Hero() {
  const { t, pick } = useLanguage();
  const reduced = useReducedMotion();
  const phrases = rotatingRoles.map((role) => pick(role));
  const typed = useTypewriter(phrases);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.09, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <header id="top" className={styles.hero}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {profile.availableForWork && (
          <motion.span className={styles.status} variants={item}>
            <span className={styles.statusDot} />
            {t.hero.status}
          </motion.span>
        )}

        <motion.p className={styles.role} variants={item}>
          {t.hero.roleLine}
        </motion.p>

        <motion.h1 className={styles.headline} variants={item}>
          {t.hero.headlinePre}
          <span className={styles.accent}>{t.hero.headlineAccent}</span>
          {t.hero.headlinePost}
        </motion.h1>

        <motion.p className={styles.description} variants={item}>
          {t.hero.description}
        </motion.p>

        <motion.div className={styles.ticker} variants={item} aria-hidden="true">
          <span className={styles.tickerPrompt}>~/juan</span>
          <span className={styles.tickerText}>{typed}</span>
          <span className={styles.caret} />
        </motion.div>

        <motion.div className={styles.actions} variants={item}>
          <MagneticButton href="#projects" variant="primary" withArrow>
            {t.hero.ctaPrimary}
          </MagneticButton>
          <MagneticButton href="#contact" withArrow>
            {t.hero.ctaSecondary}
          </MagneticButton>
        </motion.div>

        <motion.dl className={styles.stats} variants={item}>
          {stats.map((stat) => (
            <div className={styles.stat} key={stat.labelKey}>
              <dt className={styles.statValue}>{stat.value}</dt>
              <dd className={styles.statLabel}>{t.stats[stat.labelKey]}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>{t.hero.scroll}</span>
        <span className={styles.scrollTrack} />
      </div>
    </header>
  );
}
