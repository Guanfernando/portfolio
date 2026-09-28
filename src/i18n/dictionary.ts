import type { Language } from '@/types';

/**
 * UI copy that is not tied to a specific data record.
 * Every leaf has one entry per supported language and both trees share a shape,
 * so `dictionary[lang]` is always safe to index.
 */
const dictionary = {
  es: {
    nav: {
      links: {
        about: 'Perfil',
        skills: 'Stack',
        experience: 'Experiencia',
        projects: 'Proyectos',
        education: 'Formación',
        contact: 'Contacto',
      },
      resume: 'Descargar CV',
      languageLabel: 'Cambiar idioma',
      menu: 'Menú',
    },
    hero: {
      status: 'Disponible para nuevos proyectos',
      roleLine: 'Desarrollador de Software · Infraestructura, Redes y Full Stack',
      headlinePre: '',
      headlineAccent: 'Código, redes',
      headlinePost: ' e Infraestructura',
      description:
        'Administración de infraestructura web y soporte técnico en operaciones críticas, más desarrollo backend y full stack con Node.js, TypeScript y React. 15+ años de trayectoria profesional y 11 liderando equipos y procesos.',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Hablemos',
      scroll: 'Desliza',
    },
    about: {
      eyebrow: 'Perfil',
      title: 'Infraestructura, soporte y criterio de negocio',
      lead:
        'Desarrollador de software con experiencia en administración de infraestructura tecnológica y soporte técnico, que combina la actualización de quien está en formación activa con el criterio de una trayectoria liderando procesos y equipos.',
      paragraphs: [
        'He administrado hosting, dominios y plataformas web corporativas (Escuela de Aviación Flying, Heliops) y dado soporte técnico en sitio a hardware, software y periféricos durante procesos operativos críticos (Registraduría Nacional / UITL), con gestión de incidentes y capacitación a usuarios.',
        'Complemento el perfil con desarrollo backend y full stack: APIs REST con arquitectura controller–service–model en Node.js, Express y TypeScript, bases de datos relacionales y NoSQL, integración de servicios cloud (AWS S3, Azure Logic Apps) y despliegues con Docker.',
        'Tengo formación técnica en Redes de Datos (CEIDA) y la certificación Fortinet NSE 1. Actualmente curso Ingeniería de Software (grado estimado: julio de 2027) mientras trabajo en proyectos reales de aviación y tecnología transaccional.',
      ],
      focusTitle: 'Cómo trabajo',
      focus: [
        'Priorizo la continuidad operativa: mantenimiento preventivo antes que correctivo y gestión ordenada de incidentes.',
        'Documento la infraestructura y los cambios, y capacito a los usuarios para reducir la dependencia de una sola persona.',
        'Uso asistentes de IA (Copilot, ChatGPT, Claude) para acelerar y revisar código, y valido el resultado con el negocio.',
      ],
    },
    stats: {
      years: 'años de trayectoria profesional',
      leading: 'años liderando equipos y procesos',
      sites: 'sitios corporativos administrados',
      english: 'nivel de inglés',
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Herramientas con las que trabajo',
      lead:
        'De la infraestructura y el soporte al diseño de la API y el reporte gerencial. Estas son las tecnologías que uso a diario y las que conozco a nivel de fundamentos.',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Trayectoria',
      lead:
        'De la coordinación de producción durante 11 años al desarrollo de software full stack: cada etapa aporta disciplina y visión de negocio.',
      present: 'Actualidad',
      achievements: 'Logros',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Casos de estudio',
      lead:
        'Sistemas y operaciones reales en los que trabajé en producción. Parte del código es privado, pero aquí está el problema, la solución y el impacto.',
      challenge: 'Reto',
      solution: 'Solución',
      impact: 'Impacto',
      stack: 'Stack',
      labExperiments: 'Experimentos y aprendizaje',
      labLead:
        'Repositorios públicos donde practico ideas, patrones y ejercicios de formación.',
      viewRepo: 'Ver repositorio',
      viewGithub: 'Ver GitHub completo',
    },
    education: {
      eyebrow: 'Formación',
      title: 'Educación y certificaciones',
      lead:
        'Formación formal en desarrollo y análisis de datos, más certificaciones técnicas específicas.',
      inProgress: 'En curso',
      certsTitle: 'Certificaciones y cursos',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Trabajemos juntos',
      lead:
        'Estoy abierto a roles backend o full stack, presenciales en Medellín o remotos. La forma más rápida de contactarme:',
      emailLabel: 'Correo',
      whatsappLabel: 'WhatsApp',
      whatsappCta: 'Escríbeme por WhatsApp',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      location: 'Medellín, Antioquia, Colombia',
      copy: 'Copiar',
      copied: 'Copiado',
    },
    footer: {
      built: 'Diseñado y construido con React, TypeScript y Vite.',
      rights: 'Todos los derechos reservados.',
      backToTop: 'Volver arriba',
    },
  },

  en: {
    nav: {
      links: {
        about: 'About',
        skills: 'Stack',
        experience: 'Experience',
        projects: 'Projects',
        education: 'Education',
        contact: 'Contact',
      },
      resume: 'Download CV',
      languageLabel: 'Switch language',
      menu: 'Menu',
    },
    hero: {
      status: 'Available for new projects',
      roleLine: 'Software Developer · Infrastructure, Networks & Full Stack',
      headlinePre: '',
      headlineAccent: 'Code, networks ',
      headlinePost: 'and infrastructure.',
      description:
        'Web infrastructure administration and technical support for critical operations, plus backend and full-stack development with Node.js, TypeScript and React. 15+ years of professional experience and 11 leading teams and processes.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      scroll: 'Scroll',
    },
    about: {
      eyebrow: 'About',
      title: 'Infrastructure, support and business judgement',
      lead:
        'Software developer with experience in technology infrastructure administration and technical support, combining the currency of someone in active training with the judgement of a career leading processes and teams.',
      paragraphs: [
        'I have administered hosting, domains and corporate web platforms (Escuela de Aviación Flying, Heliops) and provided on-site technical support for hardware, software and peripherals during critical operational processes (Registraduría Nacional / UITL), with incident management and user training.',
        'I complement the profile with backend and full-stack development: REST APIs with a controller–service–model architecture in Node.js, Express and TypeScript, relational and NoSQL databases, cloud service integration (AWS S3, Azure Logic Apps) and Docker deployments.',
        'I hold technical training in Data Networks (CEIDA) and the Fortinet NSE 1 certification. I am currently studying Software Engineering (expected graduation: July 2027) while working on real projects in aviation and transactional technology.',
      ],
      focusTitle: 'How I work',
      focus: [
        'I prioritise operational continuity: preventive maintenance over corrective, and orderly incident management.',
        'I document infrastructure and changes, and train users to reduce single-person dependency.',
        'I use AI assistants (Copilot, ChatGPT, Claude) to speed up and review code, and validate the result with the business.',
      ],
    },
    stats: {
      years: 'years of professional experience',
      leading: 'years leading teams and processes',
      sites: 'corporate sites managed',
      english: 'English level',
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Tools I work with',
      lead:
        'From infrastructure and support to API design and the management report. These are the technologies I use daily and the ones I know at a fundamentals level.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Career path',
      lead:
        'From 11 years coordinating production to full-stack software development: every stage adds discipline and business vision.',
      present: 'Present',
      achievements: 'Highlights',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Case studies',
      lead:
        'Real systems and operations I worked on in production. Some code is private, but here is the problem, the solution and the impact.',
      challenge: 'Challenge',
      solution: 'Solution',
      impact: 'Impact',
      stack: 'Stack',
      labExperiments: 'Experiments & learning',
      labLead: 'Public repositories where I practise ideas, patterns and training exercises.',
      viewRepo: 'View repository',
      viewGithub: 'View full GitHub',
    },
    education: {
      eyebrow: 'Education',
      title: 'Education & certifications',
      lead:
        'Formal training in development and data analysis, plus specific technical certifications.',
      inProgress: 'In progress',
      certsTitle: 'Certifications & courses',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's work together",
      lead:
        'I am open to backend or full-stack roles, on-site in Medellín or remote. The fastest way to reach me:',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      whatsappCta: 'Message me on WhatsApp',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      location: 'Medellín, Antioquia, Colombia',
      copy: 'Copy',
      copied: 'Copied',
    },
    footer: {
      built: 'Designed and built with React, TypeScript and Vite.',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
} as const;

export type Dictionary = (typeof dictionary)['es'];

export function getDictionary(lang: Language): Dictionary {
  return dictionary[lang] as unknown as Dictionary;
}

export default dictionary;
