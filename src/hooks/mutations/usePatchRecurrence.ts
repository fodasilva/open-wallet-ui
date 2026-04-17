import { useMutation } from '@tanstack/react-query';
import { useAPI } from '../useAPI';
import type { Api } from '../../api/api';

type PatchRecurrenceFn = Api<unknown>['recurrences']['v1UpdateRecurrence'];
type PayloadType = NonNullable<Parameters<PatchRecurrenceFn>[1]>;

export function usePatchRecurrence({
  onSuccess,
  meta,
}: {
  onSuccess?: () => void;
  meta?: Record<string, unknown>;
} = {}) {
  const api = useAPI();

  return useMutation<
    Awaited<ReturnType<PatchRecurrenceFn>>['data'],
    Error,
    { recurrenceId: Parameters<PatchRecurrenceFn>[0]; payload: Partial<PayloadType> }
  >({
    mutationFn: ({ recurrenceId, payload }) =>
      api.recurrences
        .v1UpdateRecurrence(recurrenceId, payload as Parameters<PatchRecurrenceFn>[1])
        .then((res) => res.data),
    onSuccess,
    meta,
  });
}
