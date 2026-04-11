import type { QueryOpts } from '../utils/types';
import type { Api } from '../api/api';

type ListEntriesFn = Api<unknown>['transactions']['listEntries'];
export type ListEntriesResponse = NonNullable<Awaited<ReturnType<ListEntriesFn>>['data']>;
export type Entry = NonNullable<NonNullable<ListEntriesResponse['data']>['entries']>[number];

export const entriesKeys = {
  all: () => ['entries'] as const,
  getEntries: (queryOpts?: QueryOpts) => [...entriesKeys.all(), { queryOpts }] as const,
};

export function getEntriesQueryOpts(api: Api<unknown>, queryOpts?: QueryOpts) {
  return {
    queryKey: [...entriesKeys.getEntries(queryOpts)],
    queryFn: () =>
      api.transactions
        .listEntries(queryOpts as Parameters<ListEntriesFn>[0])
        .then((res) => res.data),
  };
}
