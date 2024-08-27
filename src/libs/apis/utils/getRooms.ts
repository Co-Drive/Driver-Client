import { GetRoomsProps } from '../../../types/MyGroup/myGroupType';
import { api } from '../../api';

const getRooms = async ({
  followerId,
  sortType,
  page,
  status,
  isJoinedRooms,
}: GetRoomsProps) => {
  const user = sessionStorage.getItem('user');
  const { data } = await api.get(
    `/rooms/${followerId ? followerId : user}/${isJoinedRooms ? 'member' : 'owner'}/${sortType === '최신순' ? 'NEW' : 'DICT'}${page !== undefined ? `?page=${page}` : ''}${status ? `&status=${status}` : ''}`
  );

  return data;
};

export default getRooms;
