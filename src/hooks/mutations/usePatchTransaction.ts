import { useMutation } from '@tanstack/react-query';
import type { MutationOpts } from '../../utils/types';
import { useAPI } from '../useAPI';
import type { Api } from '../../api/api';

type PatchTransactionFn = Api<unknown>['transactions']['v1UpdateTransaction'];
type PayloadType = NonNullable<Parameters<PatchTransactionFn>[1]>;

export function usePatchTransaction({
  mutationKey = [],
  ...props
}: MutationOpts<
  Awaited<ReturnType<PatchTransactionFn>>['data'],
  { transactionId: Parameters<PatchTransactionFn>[0]; payload: Partial<PayloadType> }
> = {}) {
  const api = useAPI();

  return useMutation({
    ...props,
    mutationKey: ['PATCH_TRANSACTION_MUTATION', ...mutationKey],
    mutationFn: ({ transactionId, payload }) =>
      api.transactions
        .v1UpdateTransaction(transactionId, payload as Parameters<PatchTransactionFn>[1])
        .then((res) => res.data),
  });
}
