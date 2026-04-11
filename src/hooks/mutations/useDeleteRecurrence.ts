import { useMutation } from '@tanstack/react-query';
import { useAPI } from '../useAPI';
import type { Api } from '../../api/api';

type DeleteRecurrenceFn = Api<unknown>['recurrences']['deleteRecurrence'];

export function useDeleteRecurrence({
  onSuccess,
  meta,
}: {
  onSuccess?: () => void;
  meta?: Record<string, unknown>;
} = {}) {
  const api = useAPI();

  return useMutation<
    Awaited<ReturnType<DeleteRecurrenceFn>>['data'],
    Error,
    {
      id: Parameters<DeleteRecurrenceFn>[0];
      scope?: Extract<NonNullable<Parameters<DeleteRecurrenceFn>[1]>['scope'], string>;
    }
  >({
    mutationFn: ({ id, scope }) =>
      api.recurrences.deleteRecurrence(id, { scope }).then((res) => res.data),
    onSuccess,
    meta,
  });
}
