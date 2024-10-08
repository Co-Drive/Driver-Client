import { GetRoomSortProps } from '../../../types/GroupAll/GroupAllType';
import { api } from '../../api';

const getRoomSort = async ({ sortType, page, request }: GetRoomSortProps) => {
  // URLSearchParams를 사용해 쿼리스트링을 생성
  const queryParams = new URLSearchParams();

  // 각 태그를 개별적으로 추가
  request.tags.forEach((tag) => {
    queryParams.append('tags', tag);
  });

  // 나머지 파라미터 추가
  queryParams.append('min', String(request.min));
  queryParams.append('max', String(request.max));

  const { data } = await api.get(
    `/rooms/filter/${sortType === '최신순' ? 'NEW' : 'DICT'}${
      page !== undefined
        ? `?page=${page}&${queryParams.toString()}`
        : `?${queryParams.toString()}`
    }`
  );

  return data;
};

export default getRoomSort;
