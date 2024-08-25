import { api } from '../../api';

export const postAuth = (code: string) => {
  const data = api.post('/auth/login', { code });

  return data;
};
