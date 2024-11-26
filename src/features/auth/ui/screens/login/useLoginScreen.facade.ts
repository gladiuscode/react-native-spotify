import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAppTranslation from '@/core/i18n/use-app-translation';

const useLoginScreenFacade = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const { t } = useAppTranslation('auth');

  return {
    safeAreaInsets,
    t,
  };
};

export default useLoginScreenFacade;
