import { LanguageDetectorModule } from 'i18next';
import { getLocales } from 'expo-localization';
import AppI18nConfig from '@/core/i18n/config';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect() {
    const userLocales = getLocales();
    const possibleSupportedPreferredLocale = userLocales.find((locale) => {
      if (!locale.languageCode) {
        return;
      }

      // @ts-ignore
      return AppI18nConfig.supportedLocales.includes(locale.languageCode);
    });
    return (
      possibleSupportedPreferredLocale?.languageCode ?? AppI18nConfig.defaultLng
    );
  },
};

export default languageDetector;
