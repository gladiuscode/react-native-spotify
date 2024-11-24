import 'i18next';
import AppI18nDefaults from '@/core/i18n/defaults';
import { resources } from '@/core/i18n/config';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof AppI18nDefaults.ns;
    resources: (typeof resources)['en'];
  }
}
