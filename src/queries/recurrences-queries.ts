import type { QueryOpts } from '../utils/types';
import type { Api } from '../api/api';

type ListRecurrencesFn = Api<unknown>['recurrences']['v1ListRecurrences'];
export type ListRecurrencesResponse = NonNullable<Awaited<ReturnType<ListRecurrencesFn>>['data']>;
export type Recurrence = NonNullable<
  NonNullable<ListRecurrencesResponse['data']>['recurrences']
>[number];

export const recurrencesKeys = {
  all: () => ['recurrences'] as const,
  getRecurrences: (queryOpts?: QueryOpts) => [...recurrencesKeys.all(), { queryOpts }] as const,
};

export function getRecurrencesQueryOpts(api: Api<unknown>, queryOpts?: QueryOpts) {
  return {
    queryKey: recurrencesKeys.getRecurrences(queryOpts),
    queryFn: () =>
      api.recurrences
        .v1ListRecurrences(queryOpts as Parameters<ListRecurrencesFn>[0])
        .then((res) => res.data),
  };
}
