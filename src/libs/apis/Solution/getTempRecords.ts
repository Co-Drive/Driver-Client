import { api } from '../../api';

export const getTempRecords = async () => {
  const { data } = await api.get('/records/records/temp');

  return data;
};
