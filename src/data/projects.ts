import type { Localized } from '@/types';

export interface CaseStudy {
  id: string;
  name: Localized;
  context: Localized;
  year: string;
  challenge: Localized;
  solution: Localized;
  impact: Localized;
  stack: string[];
  /** Short accent word shown large in the card corner. */
  kicker: Localized;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'heliops-ops-data',
    name: {
      es: 'Centralización de datos operativos de vuelo',
      en: 'Flight operations data centralisation',
    },
    context: { es: 'Heliops · Aviación', en: 'Heliops · Aviation' },
    year: '2025–2026',
    kicker: { es: 'Datos', en: 'Data' },
    challenge: {
      es: 'El área de operaciones registraba la actividad de vuelo en archivos manuales dispersos. Cada decisión de mantenimiento y planeación se tomaba con registros sueltos, sin una fuente única confiable.',
      en: 'Operations logged flight activity in scattered manual files. Every maintenance and planning decision was made from loose records, with no single reliable source.',
    },
    solution: {
      es: 'Administré la infraestructura web (hosting, dominios, WordPress) y diseñé y construí una solución a la medida (Node.js, Express, TypeScript, React) para capturar y centralizar los datos operativos, con el análisis estructurado en Excel avanzado y reportes consolidados.',
      en: 'I administered the web infrastructure (hosting, domains, WordPress) and designed and built a tailor-made solution (Node.js, Express, TypeScript, React) to capture and centralise operations data, with the analysis structured in advanced Excel and consolidated reports.',
    },
    impact: {
      es: 'Operaciones pasó de decidir con registros sueltos a decidir con reportes consolidados y confiables, cambiando cómo se prioriza el mantenimiento y la planeación de vuelo.',
      en: 'Operations moved from deciding with loose records to deciding with consolidated, reliable reports, changing how maintenance and flight planning are prioritised.',
    },
    stack: ['Hosting', 'WordPress', 'Node.js', 'Express', 'TypeScript', 'React', 'Excel avanzado'],
  },
  {
    id: 'flying-ops',
    name: {
      es: 'Sistema de gestión de operaciones de vuelo',
      en: 'Flight operations management system',
    },
    context: { es: 'Escuela de Aviación Flying · Aviación', en: 'Escuela de Aviación Flying · Aviation' },
    year: '2024–2025',
    kicker: { es: 'Full stack', en: 'Full stack' },
    challenge: {
      es: 'La planificación, el monitoreo y el control operativo de la escuela vivían fuera de un sistema unificado, y el grupo empresarial mantenía 6 sitios corporativos sin una gestión consistente.',
      en: 'Planning, monitoring and operational control lived outside a unified system, and the business group ran 6 corporate sites with no consistent management.',
    },
    solution: {
      es: 'Desarrollé aplicaciones full stack con React, Node.js, Express y PostgreSQL, diseñé el modelo de base de datos y lideré el levantamiento de requisitos con operaciones. En paralelo, administré y optimicé los 6 sitios WordPress del grupo.',
      en: 'I built full-stack applications with React, Node.js, Express and PostgreSQL, designed the database model and led requirements gathering with operations. In parallel, I managed and optimised the group 6 WordPress sites.',
    },
    impact: {
      es: 'Módulos operativos estructurados sobre un modelo de datos propio y 6 sitios corporativos optimizados en hosting, dominios, plugins y rendimiento.',
      en: 'Operational modules structured on a dedicated data model, and 6 corporate sites optimised across hosting, domains, plugins and performance.',
    },
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'WordPress'],
  },
  {
    id: 'registraduria-support',
    name: {
      es: 'Soporte técnico en el escrutinio electoral',
      en: 'Technical support for the electoral count',
    },
    context: {
      es: 'Registraduría Nacional · UITL (Thomas Greg & Son)',
      en: 'Registraduría Nacional · UITL (Thomas Greg & Son)',
    },
    year: '2026',
    kicker: { es: 'Soporte', en: 'Support' },
    challenge: {
      es: 'Un proceso de escrutinio electoral no puede detenerse. El punto necesitaba que su hardware, software y periféricos —impresoras y escáneres incluidos— funcionaran sin interrupciones, con usuarios capaces de operarlos.',
      en: 'An electoral count cannot stop. The site needed its hardware, software and peripherals — printers and scanners included — to run without interruption, with users able to operate them.',
    },
    solution: {
      es: 'Di soporte en sitio con mantenimiento preventivo y correctivo, gestión ordenada de incidentes y requerimientos, capacitación a los usuarios del punto de escrutinio y control del inventario de equipos de la sede.',
      en: 'I provided on-site support with preventive and corrective maintenance, orderly incident and request management, training for count-point users and inventory control of the site equipment.',
    },
    impact: {
      es: 'La sede sostuvo la operación durante toda la temporada electoral sin interrupciones atribuibles a fallas de equipo.',
      en: 'The site sustained operations throughout the electoral season with no interruptions attributable to equipment failure.',
    },
    stack: ['Soporte en sitio', 'Mantenimiento HW/SW', 'Gestión de incidentes', 'Capacitación', 'Inventario'],
  },
  {
    id: 'newinntech-tx',
    name: {
      es: 'Módulos backend para flujos transaccionales',
      en: 'Backend modules for transactional flows',
    },
    context: { es: 'NewInntech · Tecnología transaccional', en: 'NewInntech · Transactional technology' },
    year: '2026',
    kicker: { es: 'Cloud', en: 'Cloud' },
    challenge: {
      es: 'Los flujos transaccionales necesitaban validaciones de negocio robustas y un almacenamiento documental automatizado, con entornos de desarrollo homogéneos para todo el equipo.',
      en: 'Transactional flows needed robust business validations and automated document storage, with consistent development environments for the whole team.',
    },
    solution: {
      es: 'Implementé módulos backend con arquitectura controller–service–model (Node.js, Express, TypeScript), integré Amazon S3 y Azure Logic Apps para el flujo documental y contenericé los entornos con Docker y docker-compose.',
      en: 'I implemented backend modules with a controller–service–model architecture (Node.js, Express, TypeScript), integrated Amazon S3 and Azure Logic Apps for the document flow and containerised environments with Docker and docker-compose.',
    },
    impact: {
      es: 'Almacenamiento de archivos y flujos documentales automatizados, y despliegues locales estandarizados para todo el equipo.',
      en: 'Automated file storage and document flows, and standardised local deployments across the team.',
    },
    stack: ['Node.js', 'Express', 'TypeScript', 'AWS S3', 'Azure Logic Apps', 'Docker'],
  },
  {
    id: 'genai-students',
    name: {
      es: 'Impacto de la IA generativa en estudiantes',
      en: 'Generative AI impact on students',
    },
    context: { es: 'Análisis de datos · 50.000 registros', en: 'Data analysis · 50,000 records' },
    year: '2026',
    kicker: { es: 'Análisis', en: 'Analysis' },
    challenge: {
      es: '¿Más horas de IA generativa significan mejor desempeño académico? Había que responderlo sobre un dataset de 50.000 estudiantes con variables de GPA, ansiedad y burnout.',
      en: 'Do more generative-AI hours mean better academic performance? The question had to be answered over a dataset of 50,000 students with GPA, anxiety and burnout variables.',
    },
    solution: {
      es: 'Limpié y segmenté los datos por horas de uso, habilidad de prompting y política institucional, aplicando estadística descriptiva y visualización para contrastar cada hipótesis.',
      en: 'I cleaned and segmented the data by usage hours, prompting skill and institutional policy, applying descriptive statistics and visualisation to test each hypothesis.',
    },
    impact: {
      es: 'Identifiqué un punto óptimo de 5–10 h/semana: pasar de 20 h multiplica por 8 el riesgo de burnout sin mejorar el GPA, y la habilidad de prompting predice el éxito mejor que las horas invertidas.',
      en: 'I identified a sweet spot of 5–10 h/week: going past 20 h multiplies burnout risk by 8 without improving GPA, and prompting skill predicts success better than hours invested.',
    },
    stack: ['Análisis de datos', 'Estadística descriptiva', 'Visualización', 'Power BI'],
  },
];

export interface Repo {
  name: string;
  description: Localized;
  language: string;
  url: string;
}

const repoBase = 'https://github.com/Guanfernando';

export const repos: Repo[] = [
  {
    name: 'facturacion',
    description: { es: 'Sistema de facturación', en: 'Invoicing system' },
    language: 'TypeScript',
    url: `${repoBase}/facturacion`,
  },
  {
    name: 'crud-react',
    description: { es: 'CRUD completo con React', en: 'Full CRUD with React' },
    language: 'JavaScript',
    url: `${repoBase}/crud-react`,
  },
  {
    name: 'gestor_de_tareas',
    description: { es: 'Gestor de tareas', en: 'Task manager' },
    language: 'JavaScript',
    url: `${repoBase}/gestor_de_tareas`,
  },
  {
    name: 'encriptador',
    description: { es: 'Encriptador de texto', en: 'Text encryptor' },
    language: 'JavaScript',
    url: `${repoBase}/encriptador`,
  },
  {
    name: 'juego-alura-latam',
    description: { es: 'Juego "número secreto" — Alura LATAM', en: '"Secret number" game — Alura LATAM' },
    language: 'JavaScript',
    url: `${repoBase}/juego-alura-latam`,
  },
  {
    name: 'IMC',
    description: { es: 'Calculadora de índice de masa corporal', en: 'Body mass index calculator' },
    language: 'JavaScript',
    url: `${repoBase}/IMC`,
  },
];
