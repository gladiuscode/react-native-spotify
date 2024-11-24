import {createContext, useContext} from 'react';

const buildContext = <T>(name: string) => {
  const Context = createContext<T | undefined>(undefined);

  const useCtx = () => {
    const ctx = useContext(Context);
    if (!ctx) {
      throw new Error(`${name} is not initialized yet`);
    }
    return ctx;
  };

  return [useCtx, Context.Provider] as const;
};

export default buildContext;
