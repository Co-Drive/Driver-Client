import { GetRoomsProps } from '../../../types/MyGroup/myGroupType';
import { api } from '../../api';

const getRooms = async ({
  sortType,
  page,
  status,
  isJoinedRooms,
}: GetRoomsProps) => {
  const user = sessionStorage.getItem('user');
  const { data } = await api.get(
    `/rooms/${user}/${isJoinedRooms ? `member` : `owner`}/${sortType === '최신순' ? `NEW` : `DICT`}?page=${page}&status=%ED%99%9C%EB%8F%99%20%EC%A4%91`
  );

  return data;
};

export default getRooms;
