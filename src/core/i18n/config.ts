import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AuthI18n from '@/features/auth/i18n/auth-i18n';
import HomeI18n from '@/features/home/i18n/home-i18n';
import languageDetector from '@/core/i18n/language-detector/language-detector';
import AppI18nDefaults from '@/core/i18n/defaults';

import commonEn from './translations/common.json';

export const resources = {
  en: {
    common: commonEn,
    auth: AuthI18n.en,
    home: HomeI18n.en,
  },
} as const;

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    defaultNS: AppI18nDefaults.ns,
    ns: ['common', 'auth', 'home'],
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;