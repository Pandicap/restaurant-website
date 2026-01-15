import enTranslations from './translations/en.json';
import deTranslations from './translations/de.json';
import enMenu from './menu/en.json';
import deMenu from './menu/de.json';

export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

const translations: Record<Lang, typeof enTranslations> = {
  en: enTranslations,
  de: deTranslations,
};

const menus: Record<Lang, typeof enMenu> = {
  en: enMenu,
  de: deMenu,
};

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

export function getMenu(lang: Lang) {
  return menus[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getOtherLang(currentLang: Lang): Lang {
  return currentLang === 'en' ? 'de' : 'en';
}

export function getTranslatedPath(url: URL, targetLang: Lang): string {
  const [, currentLang, ...rest] = url.pathname.split('/');
  if (currentLang in languages) {
    return `/${targetLang}/${rest.join('/')}`;
  }
  return `/${targetLang}${url.pathname}`;
}
