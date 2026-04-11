import type { QueryOpts } from '../utils/types';
import type { Api } from '../api/api';

type ListCategoriesFn = Api<unknown>['categories']['listCategories'];
export type Category = NonNullable<
  NonNullable<NonNullable<Awaited<ReturnType<ListCategoriesFn>>['data']>['data']>['categories']
>[number];

export const categoriesKeys = {
  all: () => ['categories'] as const,
  getCategories: (queryOpts?: QueryOpts) => [...categoriesKeys.all(), { queryOpts }] as const,
  getCategoriesPerPeriod: (period: string, queryOpts?: QueryOpts) =>
    [...categoriesKeys.all(), 'PER_PERIOD', { period }, { queryOpts }] as const,
};

type ListCategoriesAmountPerPeriodFn = Api<unknown>['categories']['listCategoriesAmountPerPeriod'];

export function getCategoriesQueryOpts(api: Api<unknown>, queryOpts?: QueryOpts) {
  return {
    queryKey: categoriesKeys.getCategories(queryOpts),
    queryFn: () =>
      api.categories
        .listCategories(queryOpts as Parameters<ListCategoriesFn>[0])
        .then((res) => res.data),
  };
}

export function getCategoriesPerPeriodQueryOpts(
  api: Api<unknown>,
  period: string,
  queryOpts?: QueryOpts,
) {
  return {
    queryKey: categoriesKeys.getCategoriesPerPeriod(period, queryOpts),
    queryFn: () =>
      api.categories
        .listCategoriesAmountPerPeriod(
          period,
          queryOpts as Parameters<ListCategoriesAmountPerPeriodFn>[1],
        )
        .then((res) => res.data),
  };
}
