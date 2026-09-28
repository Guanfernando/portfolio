/** Supported UI languages. */
export type Language = 'es' | 'en';

/** A string available in every supported language. */
export type Localized = Record<Language, string>;

/** A list of strings available in every supported language. */
export type LocalizedList = Record<Language, string[]>;
