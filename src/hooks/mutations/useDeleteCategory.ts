import { useMutation } from '@tanstack/react-query';
import type { MutationOpts } from '../../utils/types';
import { useAPI } from '../useAPI';
import type { Api } from '../../api/api';

type DeleteCategoryFn = Api<unknown>['categories']['deleteCategory'];

export function useDeleteCategory({
  mutationKey = [],
  ...props
}: MutationOpts<
  Awaited<ReturnType<DeleteCategoryFn>>['data'],
  Parameters<DeleteCategoryFn>[0]
> = {}) {
  const api = useAPI();

  return useMutation({
    ...props,
    mutationKey: ['DELETE_CATEGORY_MUTATION', ...mutationKey],
    mutationFn: (id) => api.categories.deleteCategory(id).then((res) => res.data),
  });
}
