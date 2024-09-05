import { api } from '../../api';

export const getRoomSort = async (sortType: string, page: number) => {
  const { data } = await api.get(
    `/rooms/sort/${sortType === '최신순' ? `NEW` : `DICT`}?page=${page}`
  );

  return data;
};
