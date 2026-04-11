import { createContext } from 'react';
import type { Api } from '../api/api';

export const ApiContext = createContext<Api<unknown> | null>(null);
