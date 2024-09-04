import { api } from '../../api';

export const getRoomRecommend = async () => {
  const userId = sessionStorage.getItem('user');
  const { data } = await api.get(`/rooms/${userId}/recommend`);

  return data;
};
