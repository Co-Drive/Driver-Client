import { api } from '../../api';

const postPublicRequest = async (id: number) => {
  const { data } = await api.post(`/rooms/${id}/public`);

  return data;
};

export default postPublicRequest;
