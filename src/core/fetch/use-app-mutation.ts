import {
  useMutation,
  UseMutationOptions,
  DefaultError,
} from '@tanstack/react-query';

// TODO: ADD LOADERS AND ERROR HANDLING
export interface AppMutationAdditionalOptions {}

type UseAppMutationParams<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
> = UseMutationOptions<TData, TError, TVariables, TContext> &
  AppMutationAdditionalOptions;

const useAppMutation = <
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
>({
  ...mutationOptions
}: UseAppMutationParams<TData, TError, TVariables, TContext>) => {
  return useMutation<TData, TError, TVariables, TContext>(mutationOptions);
};

export default useAppMutation;
