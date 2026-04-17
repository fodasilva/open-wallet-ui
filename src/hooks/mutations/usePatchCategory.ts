import { useMutation } from '@tanstack/react-query';
import type { MutationOpts } from '../../utils/types';
import { useAPI } from '../useAPI';
import type { Api } from '../../api/api';

type PatchCategoryFn = Api<unknown>['categories']['v1UpdateCategory'];

export function usePatchCategory({
  mutationKey = [],
  ...props
}: MutationOpts<
  Awaited<ReturnType<PatchCategoryFn>>['data'],
  { id: Parameters<PatchCategoryFn>[0]; payload: Parameters<PatchCategoryFn>[1] }
> = {}) {
  const api = useAPI();

  return useMutation({
    ...props,
    mutationKey: ['PATCH_CATEGORY_MUTATION', ...mutationKey],
    mutationFn: ({ id, payload }) =>
      api.categories.v1UpdateCategory(id, payload).then((res) => res.data),
  });
}
