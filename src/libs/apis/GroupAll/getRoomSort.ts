import { GetRoomSortProps } from '../../../types/GroupAll/GroupAllType';
import { api } from '../../api';

const getRoomSort = async ({ sortType, page }: GetRoomSortProps) => {
  const { data } = await api.get(
    `/rooms/sort/${sortType === '최신순' ? `NEW` : `DICT`}${page !== undefined ? `?page=${page}` : ''}`
  );

  return data;
};

export default getRoomSort;
