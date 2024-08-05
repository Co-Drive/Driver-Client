import { api } from '../../api';

export const deleteFollower = async (nickname: string) => {
  const data = await api.delete(`/follow/${nickname}`);

  return data;
};
