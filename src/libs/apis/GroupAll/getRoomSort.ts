import { GetRoomSortProps } from '../../../types/GroupAll/GroupAllType';
import { api } from '../../api';

const getRoomSort = async ({
  sortType,
  page,
  request,
}: GetRoomSortProps & {
  request: { tags: string[]; min: number; max: number };
}) => {
  const queryString = new URLSearchParams({
    tags: request.tags.join(','), // 태그 배열을 콤마로 연결
    min: String(request.min),
    max: String(request.max),
  }).toString();

  const { data } = await api.get(
    `/rooms/filter/${sortType === '최신순' ? `NEW` : `DICT`}${page !== undefined ? `?page=${page}&${queryString}` : `?${queryString}`}`
  );

  return data;
};

export default getRoomSort;
