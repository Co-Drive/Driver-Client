import { api } from '../../api';

export const deleteRecords = async (recordId: number) => {
  const { data } = await api.delete(`/records/${recordId}`);
  return data;
};
