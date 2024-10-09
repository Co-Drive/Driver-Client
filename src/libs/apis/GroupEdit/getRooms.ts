import { api } from '../../api';

const getRooms = async (roomId: number) => {
  const { data } = await api.get(`/rooms/${roomId}`);

  return data;
};

export default getRooms;
