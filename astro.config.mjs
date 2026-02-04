// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://duefratelli-dresden.de',
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'de',
      locales: {
        en: 'en',
        de: 'de'
      }
    }
  })],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  }
});
