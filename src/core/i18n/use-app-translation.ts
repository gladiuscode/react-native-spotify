import { useCallback } from 'react';
import { useTranslation, UseTranslationOptions } from 'react-i18next';
import type { FallbackNs } from 'react-i18next';
import type { FlatNamespace, KeyPrefix } from 'i18next';
import type { $Tuple } from 'react-i18next/helpers';
import AppI18nConfig from '@/core/i18n/config';

const useAppTranslation = <
  Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
) => {
  const [t, i18n] = useTranslation(ns, options);

  const changeLanguage = useCallback(
    (value: (typeof AppI18nConfig.supportedLocales)[number]) =>
      i18n.changeLanguage(value),
    [i18n],
  );

  return {
    t,
    currentLanguage: i18n.language,
    changeLanguage,
  };
};

export default useAppTranslation;
