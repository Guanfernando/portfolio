import type { Localized } from '@/types';

export interface SkillGroup {
  id: string;
  title: Localized;
  /** Ordered most-relevant first. */
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'infra-support',
    title: { es: 'Infraestructura y soporte', en: 'Infrastructure & support' },
    items: [
      'Hosting',
      'Dominios y DNS',
      'WordPress',
      'Mantenimiento HW/SW',
      'Gestión de incidentes',
      'Documentación técnica',
      'Capacitación a usuarios',
      'Inventario de equipos',
    ],
  },
  {
    id: 'networks-security',
    title: { es: 'Redes y seguridad', en: 'Networks & security' },
    items: ['Redes de datos (CEIDA)', 'LAN / WAN', 'Fortinet NSE 1', 'Seguridad de red · fundamentos'],
  },
  {
    id: 'backend',
    title: { es: 'Backend', en: 'Backend' },
    items: [
      'Node.js',
      'Express',
      'TypeScript',
      'JavaScript',
      'APIs REST',
      'Controller–Service–Model',
      'Microservicios',
      'Validaciones de negocio',
    ],
  },
  {
    id: 'cloud-devops',
    title: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' },
    items: ['AWS S3', 'AWS Fundamentals', 'Azure Logic Apps', 'Docker', 'docker-compose', 'Git'],
  },
  {
    id: 'databases',
    title: { es: 'Bases de datos', en: 'Databases' },
    items: ['PostgreSQL', 'SQL', 'MongoDB', 'Oracle', 'Sequelize ORM', 'Modelado relacional / NoSQL'],
  },
  {
    id: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    id: 'data',
    title: { es: 'Análisis de datos', en: 'Data analysis' },
    items: ['Excel avanzado', 'Power BI', 'Power Platform', 'Estadística descriptiva'],
  },
  {
    id: 'tools',
    title: { es: 'Herramientas y método', en: 'Tools & method' },
    items: ['Postman', 'VS Code', 'Scrum', 'Historias de usuario', 'Levantamiento de requisitos'],
  },
];
