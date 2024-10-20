import { api } from '../../api';

const getRoomsId = async (roomId: number) => {
  const { data } = await api.get(`/rooms/${roomId}`);

  return data.data;
};

export default getRoomsId;
