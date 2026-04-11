import { useMutation } from '@tanstack/react-query';
import { useAPI } from '../useAPI';

export function usePrepareRecurrences({
  onSuccess,
  meta,
}: {
  onSuccess?: () => void;
  meta?: Record<string, unknown>;
} = {}) {
  const api = useAPI();

  return useMutation({
    mutationFn: (period: string) =>
      api.recurrences.prepareRecurrences(period).then((res) => res.data),
    onSuccess,
    meta,
  });
}
