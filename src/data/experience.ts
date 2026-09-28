import type { Localized, LocalizedList } from '@/types';

export interface ExperienceItem {
  id: string;
  company: string;
  role: Localized;
  period: Localized;
  location: Localized;
  summary: Localized;
  achievements: LocalizedList;
  tags: string[];
  /** Marks the current / most recent role. */
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: 'heliops',
    company: 'Heliops',
    role: { es: 'Desarrollador Web', en: 'Web Developer' },
    period: { es: 'Jun 2025 — Ago 2026', en: 'Jun 2025 — Aug 2026' },
    location: { es: 'Medellín, Colombia', en: 'Medellín, Colombia' },
    current: true,
    summary: {
      es: 'Administración de la infraestructura web y desarrollo de una solución a la medida para centralizar los datos operativos de vuelo.',
      en: 'Web infrastructure administration and development of a tailor-made solution to centralise flight operations data.',
    },
    achievements: {
      es: [
        'Administré la infraestructura web de la organización: hosting, dominios y WordPress.',
        'Desarrollé una solución web para la captura y centralización de datos operativos de vuelo con Node.js, Express, TypeScript y React, reemplazando el registro manual en archivos.',
        'Estructuré el análisis de datos operativos en Excel avanzado, entregando reportes que apoyaron las decisiones del área de operaciones.',
      ],
      en: [
        "Administered the organisation's web infrastructure: hosting, domains and WordPress.",
        'Built a web solution to capture and centralise flight operations data with Node.js, Express, TypeScript and React, replacing manual file records.',
        'Structured operations data analysis in advanced Excel, delivering reports that supported operations decisions.',
      ],
    },
    tags: ['Hosting', 'Dominios', 'WordPress', 'Node.js', 'Express', 'TypeScript', 'React', 'Excel avanzado'],
  },
  {
    id: 'newinntech',
    company: 'NewInntech',
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    period: { es: 'Abr 2026 — Jun 2026', en: 'Apr 2026 — Jun 2026' },
    location: { es: 'Medellín, Colombia', en: 'Medellín, Colombia' },
    summary: {
      es: 'Módulos backend para flujos transaccionales con validaciones de negocio robustas e integración de servicios cloud.',
      en: 'Backend modules for transactional flows with robust business validations and cloud service integration.',
    },
    achievements: {
      es: [
        'Desarrollé módulos backend bajo arquitectura controller–service–model con Node.js, Express y TypeScript.',
        'Integré servicios cloud automatizando el almacenamiento de archivos y flujos documentales con Amazon S3 y Azure Logic Apps.',
        'Contenericé los entornos de desarrollo con Docker y docker-compose, estandarizando los despliegues locales del equipo.',
      ],
      en: [
        'Developed backend modules under a controller–service–model architecture with Node.js, Express and TypeScript.',
        'Integrated cloud services, automating file storage and document flows with Amazon S3 and Azure Logic Apps.',
        'Containerised development environments with Docker and docker-compose, standardising the team local deployments.',
      ],
    },
    tags: ['Node.js', 'Express', 'TypeScript', 'AWS S3', 'Azure Logic Apps', 'Docker'],
  },
  {
    id: 'uitl',
    company: 'UITL · Registraduría Nacional',
    role: { es: 'Soporte Técnico en Sitio', en: 'On-site Technical Support' },
    period: { es: 'Feb 2026 — Mar 2026', en: 'Feb 2026 — Mar 2026' },
    location: { es: 'Itagüí, Colombia · contrato electoral', en: 'Itagüí, Colombia · electoral contract' },
    summary: {
      es: 'Continuidad operativa del proceso de escrutinio electoral mediante mantenimiento preventivo y correctivo de hardware, software y periféricos.',
      en: 'Operational continuity of the electoral count through preventive and corrective maintenance of hardware, software and peripherals.',
    },
    achievements: {
      es: [
        'Garanticé la continuidad del escrutinio con mantenimiento preventivo y correctivo de equipos, impresoras y escáneres.',
        'Gestioné incidentes y requerimientos, capacité a los usuarios del punto de escrutinio y administré el inventario de equipos de la sede.',
      ],
      en: [
        'Ensured count continuity with preventive and corrective maintenance of workstations, printers and scanners.',
        'Managed incidents and requests, trained count-point users and administered the site equipment inventory.',
      ],
    },
    tags: ['Soporte en sitio', 'Hardware', 'Gestión de incidentes', 'Capacitación', 'Inventario'],
  },
  {
    id: 'flying',
    company: 'Escuela de Aviación Flying',
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    period: { es: 'Mar 2024 — Dic 2025', en: 'Mar 2024 — Dec 2025' },
    location: { es: 'Medellín, Colombia', en: 'Medellín, Colombia' },
    summary: {
      es: 'Administración de 6 sitios corporativos y desarrollo full stack para la gestión de operaciones de vuelo.',
      en: 'Administration of 6 corporate sites and full-stack development for flight operations management.',
    },
    achievements: {
      es: [
        'Administré y optimicé 6 sitios web corporativos del grupo empresarial: hosting, dominios, plugins y rendimiento.',
        'Desarrollé aplicaciones full stack para la gestión de operaciones de vuelo (planificación, monitoreo y control) con React, Node.js, Express y PostgreSQL.',
        'Diseñé el modelo de base de datos y lideré el levantamiento de requisitos con el equipo de operaciones.',
      ],
      en: [
        'Managed and optimised 6 corporate websites for the group: hosting, domains, plugins and performance.',
        'Built full-stack applications for flight operations management (planning, monitoring and control) with React, Node.js, Express and PostgreSQL.',
        'Designed the database model and led requirements gathering with the operations team.',
      ],
    },
    tags: ['Hosting', 'WordPress', 'React', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    id: 'bancolombia',
    company: 'Bancolombia · Konecta',
    role: { es: 'Asesor Bancario', en: 'Banking Advisor' },
    period: { es: 'Mar 2023 — Dic 2023', en: 'Mar 2023 — Dec 2023' },
    location: { es: 'Medellín, Colombia', en: 'Medellín, Colombia' },
    summary: {
      es: 'Asesoría a clientes corporativos sobre productos y transacciones bancarias, con reportes de indicadores en Excel avanzado.',
      en: 'Corporate client advisory on banking products and transactions, with indicator reporting in advanced Excel.',
    },
    achievements: {
      es: [
        'Resolví consultas complejas de clientes corporativos por canales digitales y presenciales.',
        'Elaboré reportes de indicadores transaccionales en Excel avanzado para la toma de decisiones del equipo comercial.',
      ],
      en: [
        'Resolved complex corporate client queries through digital and in-person channels.',
        'Produced transactional indicator reports in advanced Excel for the commercial team decision-making.',
      ],
    },
    tags: ['Excel avanzado', 'Reporting', 'Atención corporativa'],
  },
  {
    id: 'makrogorras',
    company: 'Makrogorras',
    role: { es: 'Coordinador de Producción y Procesos', en: 'Production & Process Coordinator' },
    period: { es: 'Ene 2011 — Dic 2022', en: 'Jan 2011 — Dec 2022' },
    location: { es: 'Medellín, Colombia', en: 'Medellín, Colombia' },
    summary: {
      es: '11 años coordinando procesos productivos, identificando cuellos de botella y liderando iniciativas de eficiencia.',
      en: '11 years coordinating production processes, identifying bottlenecks and leading efficiency initiatives.',
    },
    achievements: {
      es: [
        'Lideré la coordinación de procesos productivos e iniciativas de eficiencia operativa durante 11 años.',
        'Implementé sistemas de control de calidad que fortalecieron la consistencia del producto final.',
        'Elaboré reportes gerenciales en Excel avanzado para decisiones estratégicas del área.',
      ],
      en: [
        'Led production process coordination and operational efficiency initiatives for 11 years.',
        'Implemented quality-control systems that strengthened final-product consistency.',
        'Produced management reports in advanced Excel for strategic area decisions.',
      ],
    },
    tags: ['Liderazgo', 'Procesos', 'Control de calidad', 'Excel avanzado'],
  },
];
