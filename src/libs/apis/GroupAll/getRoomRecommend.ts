import { api } from '../../api';

export const getRoomRecommend = async (userId: number) => {
  const { data } = await api.get(`/rooms/${userId}/recommend`);

  return data;
};
