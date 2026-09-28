import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Language } from '@/types';
import { getDictionary } from './dictionary';
import { LanguageContext, LANG_STORAGE_KEY, type LanguageContextValue } from './context';

const SUPPORTED: Language[] = ['es', 'en'];

function detectInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es';

  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    /* localStorage unavailable — fall through to navigator */
  }

  const navLang = window.navigator.language?.slice(0, 2).toLowerCase();
  return SUPPORTED.includes(navLang as Language) ? (navLang as Language) : 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      /* ignore write failures (private mode, etc.) */
    }
  }, [lang]);

  const setLang = useCallback((next: Language) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((current) => (current === 'es' ? 'en' : 'es')),
    [],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: getDictionary(lang),
      setLang,
      toggleLang,
      pick: (record) => record[lang],
    }),
    [lang, setLang, toggleLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
