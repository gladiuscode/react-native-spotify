import AuthI18n from '@/features/auth/i18n/auth-i18n';
import HomeI18n from '@/features/home/i18n/home-i18n';
import commonEn from './translations/common-en.json';
import commonIt from './translations/common-it.json';

const ns = ['common', 'auth', 'home'] as const;

const resources = {
  en: {
    common: commonEn,
    auth: AuthI18n.en,
    home: HomeI18n.en,
  },
  it: {
    common: commonIt,
    auth: AuthI18n.it,
    home: HomeI18n.it,
  },
} as const;

const supportedLocales = ['en', 'it'] as const;

const AppI18nConfig = {
  supportedLocales,
  defaultLng: supportedLocales[0],
  ns,
  defaultNS: ns[0],
  resources,
} as const;

export default AppI18nConfig;
