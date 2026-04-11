import { useContext } from 'react';
import { ApiContext } from '../providers/ApiContext';

export const useAPI = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error('useAPI must be used within an ApiProvider');
  }

  return context;
};
