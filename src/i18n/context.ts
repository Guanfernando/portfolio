import { createContext } from 'react';
import type { Language } from '@/types';
import type { Dictionary } from './dictionary';

export interface LanguageContextValue {
  lang: Language;
  /** UI copy for the active language. */
  t: Dictionary;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  /** Pick the right string from a bilingual data record. */
  pick: <T>(record: Record<Language, T>) => T;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LANG_STORAGE_KEY = 'portfolio-lang';
