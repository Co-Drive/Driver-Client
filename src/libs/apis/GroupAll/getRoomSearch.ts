import { api } from '../../api';

export const getRoomSearch = async (keyword: string, page: number) => {
  const { data } = await api.get(
    `/rooms/search?keyword=${keyword}&page=${page}`
  );

  return data;
};
