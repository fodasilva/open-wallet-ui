import { useMutation } from '@tanstack/react-query';
import type { MutationOpts } from '../../utils/types';
import { useAPI } from '../useAPI';
import type { Api } from '../../api/api';

type LoginGoogleFn = Api<unknown>['auth']['v1LoginWithGoogle'];

export function usePostLoginGoogle({
  mutationKey = [],
  ...props
}: MutationOpts<
  Awaited<ReturnType<LoginGoogleFn>>['data'],
  Parameters<LoginGoogleFn>[0]['code']
> = {}) {
  const api = useAPI();

  return useMutation({
    ...props,
    mutationKey: ['LOGIN_GOOGLE_MUTATION', ...mutationKey],
    mutationFn: async (code) => {
      const response = await api.auth.v1LoginWithGoogle({
        code,
      });

      return response.data;
    },
  });
}
