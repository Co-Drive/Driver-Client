import { api } from '../../api';

export const postFollower = async (nickname: string) => {
  const data = await api.post(`/follow/${nickname}`);

  return data;
};
