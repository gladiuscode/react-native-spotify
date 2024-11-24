import AuthI18n from '@/features/auth/i18n/auth-i18n';
import HomeI18n from '@/features/home/i18n/home-i18n';
import commonEn from './translations/common.json';

const ns = ['common', 'auth', 'home'] as const;

const AppI18nConfig = {
  defaultLng: 'en',
  ns,
  defaultNS: ns[0],
  resources: {
    en: {
      common: commonEn,
      auth: AuthI18n.en,
      home: HomeI18n.en,
    },
  } as const,
};

export default AppI18nConfig;
