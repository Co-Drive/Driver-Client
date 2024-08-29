import { GetMemberListProps } from '../../../types/GroupMember/memberType';
import { api } from '../../api';

const getMeberList = async ({ roomId, sortType }: GetMemberListProps) => {
  const { data } = await api.get(`/rooms/${roomId}/members/${sortType}`);

  return data;
};

export default getMeberList;
