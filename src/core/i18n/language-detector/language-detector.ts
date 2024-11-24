import { LanguageDetectorModule } from 'i18next';
import { getLocales } from 'expo-localization';
import AppI18nConfig from '@/core/i18n/config';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect() {
    return getLocales()[0].languageCode ?? AppI18nConfig.defaultLng;
  },
};

export default languageDetector;
