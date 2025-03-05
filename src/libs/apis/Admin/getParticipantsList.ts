import { GetMemberListProps } from '../../../types/GroupMember/memberType';
import { api } from '../../api';

const getParticipantsList = async ({
  groupId,
  sortType,
  page,
}: GetMemberListProps) => {
  const { data } = await api.get(
    `/rooms/${groupId}/participants/${sortType}?page=${page}`
  );

  return data;
};

export default getParticipantsList;
