import { QueryClientProvider } from '@tanstack/react-query';
import appQueryClient from '@/core/fetch/init';
import { PropsWithChildren } from 'react';

function AppFetch({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={appQueryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default AppFetch;
