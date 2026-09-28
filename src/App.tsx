import { LanguageProvider } from '@/i18n/LanguageProvider';
import { useLanguage } from '@/i18n/use-language';
import { AuroraBackground } from '@/components/background/AuroraBackground';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

function Page() {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#about">
        {t.nav.links.about}
      </a>
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
