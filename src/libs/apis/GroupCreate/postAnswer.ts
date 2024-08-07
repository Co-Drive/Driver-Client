import { api } from '../../api';

export const postAnswer = async (password: string) => {
  const { data } = await api.post(`rooms/5/private`, {
    password: password,
  });
  console.log(data);
  return data;
};
