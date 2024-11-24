import { DefaultError, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { QueryKey } from '@tanstack/query-core';

// TODO: ADD LOADERS AND ERROR HANDLING
export interface AppQueryAdditionalOptions {}

type UseAppQueryParams<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> &
  AppQueryAdditionalOptions;

export const useAppQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>({
  ...queryOptions
}: UseAppQueryParams<TQueryFnData, TError, TData, TQueryKey> &
  AppQueryAdditionalOptions) => {
  return useQuery<TQueryFnData, TError, TData, TQueryKey>(queryOptions);
};
