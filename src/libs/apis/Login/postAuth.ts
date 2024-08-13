import { api } from '../../api';

export const postAuth = (code: string) => {
  const data = api.post('/auth/login', { code });

  console.log(code);

  return data;
};
