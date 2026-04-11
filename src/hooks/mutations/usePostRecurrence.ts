import { useMutation } from '@tanstack/react-query';
import { useAPI } from '../useAPI';
import type { Api } from '../../api/api';

type PostRecurrenceFn = Api<unknown>['recurrences']['createRecurrence'];

export function usePostRecurrence({
  onSuccess,
  meta,
}: {
  onSuccess?: () => void;
  meta?: Record<string, unknown>;
} = {}) {
  const api = useAPI();

  return useMutation<
    Awaited<ReturnType<PostRecurrenceFn>>['data'],
    Error,
    Parameters<PostRecurrenceFn>[0]
  >({
    mutationFn: (payload) => api.recurrences.createRecurrence(payload).then((res) => res.data),
    onSuccess,
    meta,
  });
}
