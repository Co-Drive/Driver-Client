import { api } from '../../api';

export const getRecords = async (id: number) => {
  const data = await api.get(`/records/${id}`);

  return data.data;
};
