import { api } from '../../api';

const getGroupId = async (uuid: string) => {
  const { data } = await api.get(`/rooms/uuid/${uuid}`);

  return data;
};

export default getGroupId;
