import { useState } from 'react';
import { Section } from '@/components/primitives/Section';
import { Reveal } from '@/components/primitives/Reveal';
import { Portrait } from '@/components/primitives/Portrait';
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from '@/components/primitives/icons';
import { useLanguage } from '@/i18n/use-language';
import { contact } from '@/data/site';
import styles from './contact.module.css';

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <Section id="contact">
      <Reveal className={`${styles.panel} glass`}>
        <div className={styles.content}>
          <div>
            <div className={styles.identity}>
              <Portrait variant="avatar" />
              <span className="eyebrow">{t.contact.eyebrow}</span>
            </div>
            <h2 className={styles.title}>{t.contact.title}</h2>
            <p className={styles.lead}>{t.contact.lead}</p>
            <span className={styles.location}>◈ {t.contact.location}</span>
          </div>

          <div className={styles.channels}>
            <div className={styles.channel}>
              <span className={styles.channelIcon}>
                <MailIcon />
              </span>
              <span className={styles.channelBody}>
                <span className={styles.channelLabel}>{t.contact.emailLabel}</span>
                <a className={styles.channelValue} href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </span>
              <button type="button" className={styles.channelAction} onClick={copyEmail}>
                {copied ? t.contact.copied : t.contact.copy}
              </button>
            </div>

            <a
              className={styles.channel}
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.channelIcon}>
                <WhatsappIcon />
              </span>
              <span className={styles.channelBody}>
                <span className={styles.channelLabel}>{t.contact.whatsappLabel}</span>
                <span className={styles.channelValue}>{contact.phoneDisplay}</span>
              </span>
              <ArrowUpRightIcon className={styles.channelArrow} />
            </a>

            <a
              className={styles.channel}
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.channelIcon}>
                <LinkedinIcon />
              </span>
              <span className={styles.channelBody}>
                <span className={styles.channelLabel}>{t.contact.linkedinLabel}</span>
                <span className={styles.channelValue}>in/juan-uribe-72aab6132</span>
              </span>
              <ArrowUpRightIcon className={styles.channelArrow} />
            </a>

            <a
              className={styles.channel}
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.channelIcon}>
                <GithubIcon />
              </span>
              <span className={styles.channelBody}>
                <span className={styles.channelLabel}>{t.contact.githubLabel}</span>
                <span className={styles.channelValue}>@{contact.githubUser}</span>
              </span>
              <ArrowUpRightIcon className={styles.channelArrow} />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
