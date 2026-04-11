import { useState, type FC, type ReactNode } from 'react';
import { Api } from '../api/api';
import { env } from '../utils/functions';
import { ApiContext } from './ApiContext';

export interface ApiProviderProps {
  children: ReactNode;
  apiClient?: Api<unknown>;
}

export const ApiProvider: FC<ApiProviderProps> = ({ children, apiClient }) => {
  const [api] = useState<Api<unknown>>(() => {
    if (apiClient) {
      return apiClient;
    }

    const defaultApi = new Api({
      baseURL: env().API_URL,
      securityWorker: () => {
        const token = localStorage.getItem('access_token');
        return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      },
    });

    defaultApi.instance.defaults.headers.post['Content-Type'] = 'application/json';

    return defaultApi;
  });

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};
