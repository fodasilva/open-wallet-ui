import { useMutation } from '@tanstack/react-query';
import type { MutationOpts } from '../../utils/types';
import { useAPI } from '../useAPI';
import type { Api } from '../../api/api';

type PostCategoryFn = Api<unknown>['categories']['createCategory'];

export function usePostCategory({
  mutationKey = [],
  ...props
}: MutationOpts<Awaited<ReturnType<PostCategoryFn>>['data'], Parameters<PostCategoryFn>[0]> = {}) {
  const api = useAPI();

  return useMutation({
    ...props,
    mutationKey: ['POST_CATEGORY_MUTATION', ...mutationKey],
    mutationFn: (payload) => api.categories.createCategory(payload).then((res) => res.data),
  });
}
