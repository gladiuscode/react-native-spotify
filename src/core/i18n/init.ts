import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from '@/core/i18n/language-detector/language-detector';
import AppI18nConfig from '@/core/i18n/config';

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    defaultNS: AppI18nConfig.defaultNS,
    ns: AppI18nConfig.ns,
    resources: AppI18nConfig.resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
