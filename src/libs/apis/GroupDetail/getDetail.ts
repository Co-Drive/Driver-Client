import { api } from '../../api';

const getDetail = async (id: number) => {
  const { data } = await api.get(`/rooms/${id}`);

  return data;
};

export default getDetail;
