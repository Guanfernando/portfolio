import type { Localized } from '@/types';

export interface EducationItem {
  id: string;
  title: Localized;
  institution: string;
  period: Localized;
  inProgress?: boolean;
}

export const education: EducationItem[] = [
  {
    id: 'software-engineering',
    title: { es: 'Ingeniería de Software', en: 'Software Engineering' },
    institution: 'Formación universitaria',
    period: { es: 'En curso · grado estimado jul 2027', en: 'In progress · expected Jul 2027' },
    inProgress: true,
  },
  {
    id: 'adso-sena',
    title: {
      es: 'Tecnólogo en Análisis y Desarrollo de Software',
      en: 'Software Analysis & Development Technologist',
    },
    institution: 'SENA',
    period: { es: '2025', en: '2025' },
  },
  {
    id: 'data-analyst-cimetria',
    title: { es: 'Analista de Datos Junior', en: 'Junior Data Analyst' },
    institution: 'Cimetria',
    period: { es: 'Finalizado', en: 'Completed' },
  },
  {
    id: 'networks-ceida',
    title: { es: 'Técnico en Redes de Datos', en: 'Data Networks Technician' },
    institution: 'CEIDA',
    period: { es: '2007', en: '2007' },
  },
  {
    id: 'bachillerato',
    title: {
      es: 'Bachillerato académico con énfasis en Sistemas',
      en: 'High school diploma, Systems emphasis',
    },
    institution: 'Liceo Enrique Vélez Escobar',
    period: { es: '1997', en: '1997' },
  },
];

export interface Certification {
  name: Localized;
  issuer: string;
}

export const certifications: Certification[] = [
  {
    name: {
      es: 'Fortinet NSE 1 · Network Security Awareness',
      en: 'Fortinet NSE 1 · Network Security Awareness',
    },
    issuer: 'Fortinet Training Institute · 2026',
  },
  { name: { es: 'AWS Fundamentals', en: 'AWS Fundamentals' }, issuer: 'Coursera' },
  {
    name: {
      es: 'Fundamentos de Microsoft Power Platform',
      en: 'Microsoft Power Platform Fundamentals',
    },
    issuer: 'Microsoft Learn',
  },
  { name: { es: 'JavaScript', en: 'JavaScript' }, issuer: 'Udemy' },
  { name: { es: 'Fundamentos Scrum Master', en: 'Scrum Master Fundamentals' }, issuer: 'Scrum' },
];
