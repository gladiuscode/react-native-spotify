import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAppTranslation from '@/core/i18n/use-app-translation';
import { useNavigation } from '@react-navigation/native';
import AppScreen from '@/core/navigation/app-screen.enum';

type SocialSignUpType = 'google' | 'facebook' | 'apple';

const useInitialScreenFacade = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const { t } = useAppTranslation('auth');
  const navigation = useNavigation();

  const handleSignUp = () => {
    console.log('handleSignUp');
  };

  const handleSocialSignUp = (type: SocialSignUpType) => {
    return () => {
      console.log('handleSocialSignUp: type', type);
    };
  };

  const handleLogin = () => {
    navigation.navigate(AppScreen.Login);
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
