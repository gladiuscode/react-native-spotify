import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAppTranslation from '@/core/i18n/use-app-translation';
import { useCallback, useState } from 'react';

const useLoginScreenFacade = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const { t } = useAppTranslation('auth');

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const isLoginDisabled = !username || !password;

  const handleLogin = useCallback(() => {
    console.log('Login: username, password', username, password);
  }, [username, password]);

  return {
    safeAreaInsets,
    t,
    isLoginDisabled,
    handleLogin,
    setUsername,
    setPassword,
  };
};

export default useLoginScreenFacade;
