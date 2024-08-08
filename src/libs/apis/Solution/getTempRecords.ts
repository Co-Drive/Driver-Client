import { api } from '../../api';

export const getTempRecords = async (page: number) => {
  const { data } = await api.get(`/records/records/temp?page=${page}&size=1`);

  return data;
};
