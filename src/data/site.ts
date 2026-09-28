import type { Localized } from '@/types';

/** Section ids — used for anchors, nav links and scroll-spy. */
export const SECTION_IDS = [
  'about',
  'skills',
  'experience',
  'projects',
  'education',
  'contact',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const profile = {
  name: 'Juan Fernando Uribe Medina',
  shortName: 'Juan Uribe',
  initials: 'JU',
  location: 'Medellín, Antioquia, Colombia',
  englishLevel: 'B1',
  resumeUrl: '/assets/CV_Juan_Fernando_Uribe_Medina_2026.pdf',
  /** Drop the photo file here (JPG or WebP). Falls back to initials if missing. */
  portraitUrl: '/assets/juan-uribe.jpg',
  availableForWork: true,
};

export const contact = {
  email: 'jfuribe7@gmail.com',
  phoneDisplay: '+57 302 403 2239',
  whatsapp: 'https://wa.me/573024032239',
  github: 'https://github.com/Guanfernando',
  githubUser: 'Guanfernando',
  linkedin: 'https://www.linkedin.com/in/juan-uribe-72aab6132/',
};

/** Headline numbers shown in the hero / about block. */
export interface Stat {
  value: string;
  labelKey: 'years' | 'leading' | 'sites' | 'english';
}

export const stats: Stat[] = [
  { value: '15+', labelKey: 'years' },
  { value: '11', labelKey: 'leading' },
  { value: '6', labelKey: 'sites' },
  { value: 'B1', labelKey: 'english' },
];

/** Short phrases that rotate under the hero headline. */
export const rotatingRoles: Localized[] = [
  { es: 'Infraestructura web · hosting, dominios y DNS', en: 'Web infrastructure · hosting, domains & DNS' },
  { es: 'Soporte técnico en operaciones críticas', en: 'Technical support for critical operations' },
  { es: 'Redes de datos · LAN/WAN · Fortinet NSE 1', en: 'Data networks · LAN/WAN · Fortinet NSE 1' },
  { es: 'APIs REST en Node.js + TypeScript', en: 'REST APIs in Node.js + TypeScript' },
  { es: 'PostgreSQL, MongoDB y Sequelize', en: 'PostgreSQL, MongoDB & Sequelize' },
  { es: 'Docker, AWS S3 y Azure Logic Apps', en: 'Docker, AWS S3 & Azure Logic Apps' },
];
