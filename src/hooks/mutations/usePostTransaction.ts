import { useMutation } from '@tanstack/react-query';
import type { MutationOpts } from '../../utils/types';
import { useAPI } from '../useAPI';
import type { Api } from '../../api/api';

type PostTransactionFn = Api<unknown>['transactions']['createTransaction'];

export function usePostTransaction({
  mutationKey = [],
  ...props
}: MutationOpts<
  Awaited<ReturnType<PostTransactionFn>>['data'],
  Parameters<PostTransactionFn>[0]
> = {}) {
  const api = useAPI();

  return useMutation({
    ...props,
    mutationKey: ['POST_TRANSACTION_MUTATION', ...mutationKey],
    mutationFn: (payload) => api.transactions.createTransaction(payload).then((res) => res.data),
  });
}
