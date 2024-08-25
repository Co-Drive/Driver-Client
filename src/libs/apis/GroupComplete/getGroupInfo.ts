import { api } from '../../api';

export const getGroupInfo = async (uuid: string) => {
  try {
    const response = await api.get(`rooms/uuid/${uuid}`);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
