import 'i18next';
import AppI18nConfig from '@/core/i18n/config';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof AppI18nConfig.defaultNS;
    resources: (typeof AppI18nConfig.resources)['en'];
  }
}
