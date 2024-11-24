import { AppState, AppStateStatus } from 'react-native';
import { PropsWithChildren, useEffect } from 'react';
import {
  QueryClientProvider,
  onlineManager,
  focusManager,
} from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';
import appQueryClient from '@/core/fetch/init';

// https://tanstack.com/query/v5/docs/framework/react/react-native#online-status-management
onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

// https://tanstack.com/query/v5/docs/framework/react/react-native#refetch-on-app-focus
function setIsFocused(status: AppStateStatus) {
  focusManager.setFocused(status === 'active');
}

function AppFetch({ children }: PropsWithChildren) {
  const subscription = AppState.addEventListener('change', setIsFocused);
  useEffect(() => {
    return () => subscription.remove();
  }, []);

  return (
    <QueryClientProvider client={appQueryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default AppFetch;
