import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAppTranslation from '@/core/i18n/use-app-translation';
import { useCallback, useState } from 'react';

const useLoginScreenFacade = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const { t } = useAppTranslation('auth');

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isLoginDisabled = !username || !password;
  const passwordIcon = showPassword ? 'eye' : 'eye-off';

  const handleLogin = useCallback(() => {
    console.log('Login: username, password', username, password);
  }, [username, password]);

  const handlePasswordIconPress = useCallback(() => {
    setShowPassword((current) => !current);
  }, []);

  return {
    safeAreaInsets,
    t,
    showPassword,
    isLoginDisabled,
    passwordIcon,
    setUsername,
    setPassword,
    handleLogin,
    handlePasswordIconPress,
  };
};

export default useLoginScreenFacade;
