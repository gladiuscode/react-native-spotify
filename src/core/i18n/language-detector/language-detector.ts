import { LanguageDetectorModule } from 'i18next';
import { getLocales } from 'expo-localization';
import AppI18nDefaults from '@/core/i18n/defaults';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect() {
    return getLocales()[0].languageCode ?? AppI18nDefaults.locale;
  },
  cacheUserLanguage: function (lng) {
    // optional since v22.3.0
    /* cache language */
  },
  // or new since v22.3.0, but i18next will not await for it... so it's basically a fire and forget
  // cacheUserLanguage: async function(lng) {
  //   /* await cache language */
  // }
};

export default languageDetector;
