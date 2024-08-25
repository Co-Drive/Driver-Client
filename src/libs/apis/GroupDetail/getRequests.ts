import { api } from '../../api';

const getRequests = async (roomId: number) => {
  const { data } = await api.get(`/rooms/${roomId}/requests`);

  return data;
};

export default getRequests;
