import type { QueryOpts } from '../utils/types';
import type { Api } from '../api/api';

type ListEntriesFn = Api<unknown>['transactions']['v1ListEntries'];
export type ListEntriesResponse = NonNullable<Awaited<ReturnType<ListEntriesFn>>['data']>;
export type Entry = NonNullable<NonNullable<ListEntriesResponse['data']>['entries']>[number];

export const transactionsKeys = {
  all: () => ['transactions'] as const,
  getEntries: (queryOpts?: QueryOpts) => [...transactionsKeys.all(), { queryOpts }] as const,
  getSummary: (filter: string) => [...transactionsKeys.all(), 'summary', { filter }] as const,
};

export function getEntriesQueryOpts(api: Api<unknown>, queryOpts?: QueryOpts) {
  return {
    queryKey: [...transactionsKeys.getEntries(queryOpts)],
    queryFn: () => api.transactions.v1ListEntries(queryOpts).then((res) => res.data),
  };
}

export function getSummaryQueryOpts(api: Api<unknown>, filter: string) {
  return {
    queryKey: transactionsKeys.getSummary(filter),
    queryFn: () => api.transactions.v1GetSummary({ filter }).then((res) => res.data),
  };
}
