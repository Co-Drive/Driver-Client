import { api } from '../../api';

const getRecentRooms = async () => {
  const { data } = await api.get('/rooms/recent');

  return data;
};

export default getRecentRooms;
