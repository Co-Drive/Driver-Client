import { api } from '../../api';

const getRanking = async (roomId: number) => {
  const { data } = await api.get(`/rooms/${roomId}/rank`);

  return data;
};

export default getRanking;
