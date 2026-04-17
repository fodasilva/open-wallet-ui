import { useMutation } from '@tanstack/react-query';
import type { MutationOpts } from '../../utils/types';
import { useAPI } from '../useAPI';
import type { Api } from '../../api/api';

type DeleteTransactionFn = Api<unknown>['transactions']['v1DeleteTransaction'];

export function useDeleteTransaction({
  mutationKey = [],
  ...props
}: MutationOpts<
  Awaited<ReturnType<DeleteTransactionFn>>['data'],
  Parameters<DeleteTransactionFn>[0]
> = {}) {
  const api = useAPI();

  return useMutation({
    ...props,
    mutationKey: ['DELETE_TRANSACTION_MUTATION', ...mutationKey],
    mutationFn: (id) => api.transactions.v1DeleteTransaction(id).then((res) => res.data),
  });
}
