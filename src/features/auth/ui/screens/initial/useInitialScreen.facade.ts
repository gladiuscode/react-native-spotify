import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAppTranslation from '@/core/i18n/use-app-translation';

type SocialSignUpType = 'google' | 'facebook' | 'apple';

const useInitialScreenFacade = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const { t } = useAppTranslation('auth');

  const handleSignUp = () => {
    console.log('handleSignUp');
  };

  const handleSocialSignUp = (type: SocialSignUpType) => {
    return () => {
      console.log('handleSocialSignUp: type', type);
    };
  };

  const handleLogin = () => {
    console.log('handleLogin');
  };

  return {
    safeAreaInsets,
    t,
    handleSignUp,
    handleSocialSignUp,
    handleLogin,
  };
};

export default useInitialScreenFacade;
