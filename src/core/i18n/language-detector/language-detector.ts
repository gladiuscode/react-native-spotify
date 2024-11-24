import { LanguageDetectorModule } from 'i18next';
import { getLocales } from 'expo-localization';
import AppI18nDefaults from '@/core/i18n/defaults';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect() {
    return getLocales()[0].languageCode ?? AppI18nDefaults.locale;
  },
};

export default languageDetector;
