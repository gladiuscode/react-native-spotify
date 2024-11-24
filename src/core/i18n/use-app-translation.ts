import { useTranslation, UseTranslationOptions } from 'react-i18next';
import type { FallbackNs } from 'react-i18next';
import type { FlatNamespace, KeyPrefix } from 'i18next';
import type { $Tuple } from 'react-i18next/helpers';

const useAppTranslation = <
  Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
) => {
  return useTranslation(ns, options);
};

export default useAppTranslation;
