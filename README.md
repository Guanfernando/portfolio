# Portafolio · Juan Fernando Uribe Medina

Portafolio personal de un solo scroll, bilingüe (ES/EN), con estética *dark aurora + glass*.
Construido con **Vite + React + TypeScript**, animaciones con **Framer Motion** y **CSS Modules**
(sin framework de estilos).

## Requisitos

- Node.js 18+ (probado con Node 24)
- npm 9+

## Scripts

```bash
npm install     # instala dependencias
npm run dev     # entorno de desarrollo en http://localhost:5173
npm run build   # type-check + build de producción en dist/
npm run preview # sirve el build de dist/
npm run lint    # ESLint
```

## Estructura

```
src/
├── main.tsx                 # punto de entrada
├── App.tsx                  # composición de la página + LanguageProvider
├── types.ts                 # tipos compartidos (Language, Localized)
├── styles/                  # reset, design tokens y estilos globales
├── i18n/
│   ├── dictionary.ts         # copy de UI en ES y EN
│   └── language-context.tsx  # provider + hook useLanguage()
├── data/                    # contenido tipado y bilingüe
│   ├── site.ts               # perfil, contacto, stats
│   ├── skills.ts
│   ├── experience.ts
│   ├── projects.ts           # casos de estudio + repos
│   └── education.ts
├── hooks/                   # useReducedMotion, useActiveSection, useScrollProgress, useTypewriter
└── components/
    ├── background/          # AuroraBackground (fondo animado fijo)
    ├── layout/              # Navbar, Footer, ScrollProgress
    ├── primitives/          # Section, SectionHeading, Reveal, TagList, MagneticButton, icons
    └── sections/            # Hero, About, Skills, Experience, Projects, Education, Contact
```

## Cómo editar el contenido

Todo el texto vive en dos lugares:

1. **`src/i18n/dictionary.ts`** — títulos de sección, botones y textos de interfaz.
2. **`src/data/*.ts`** — experiencia, proyectos, skills, formación. Cada campo con texto
   libre es un objeto `{ es: '...', en: '...' }`.

No hay texto quemado dentro de los componentes.

## CV

El PDF se sirve desde `public/assets/cv-juan-fernando-uribe.pdf`.
Para actualizarlo, reemplaza ese archivo manteniendo el mismo nombre.

## Foto de perfil

Guarda tu retrato como **`public/assets/juan-uribe.jpg`** (o `.webp`; si cambias la
extensión, ajusta `profile.portraitUrl` en `src/data/site.ts`). Se muestra en la sección
**Perfil** y como avatar en **Contacto**, con un tratamiento duotono cian→violeta aplicado
por CSS para que combine con la estética. Si el archivo no está, cae a las iniciales `JU`
sin romper nada. Ideal: foto vertical, encuadre de rostro/hombros, buena luz.

## Imagen para compartir (Open Graph)

`public/assets/og.png` (1200×630) es la miniatura que se ve al compartir el link en
LinkedIn, WhatsApp o X. Para regenerarla (incluye tu foto automáticamente si ya está
en `public/assets/juan-uribe.jpg`):

```bash
npm i -D puppeteer   # una sola vez, descarga Chromium
npm run og
```

Si prefieres no instalar Chromium, define `CHROME_PATH` apuntando a un Chrome/Edge ya
instalado antes de `npm run og`.

## Personalización visual

Los colores, tipografías, espaciados y radios están centralizados como *design tokens*
en `src/styles/tokens.css`. Cambiar el acento de toda la página es cuestión de editar
`--accent-cyan`, `--accent-indigo` y `--accent-magenta`.

## Accesibilidad

- Respeta `prefers-reduced-motion` (desactiva parallax, aurora y typewriter).
- Navegación por teclado, `skip-link`, `:focus-visible` y roles ARIA en listas.
- Contraste AA sobre el fondo oscuro.

## Despliegue

Cualquier hosting de estáticos sirve el contenido de `dist/`:

- **Vercel / Netlify**: framework preset *Vite*, comando `npm run build`, carpeta `dist`.
- **GitHub Pages**: publica `dist/` (ajusta `base` en `vite.config.ts` si el repo no está en la raíz del dominio).
