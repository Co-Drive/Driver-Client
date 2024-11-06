import { useQuery } from '@tanstack/react-query';
import { GetMemberListProps } from '../../../types/GroupMember/memberType';
import getParticipantsList from '../../apis/Admin/getParticipantsList';

const useGetParticipantsList = ({
  groupId,
  sortType,
  page,
}: GetMemberListProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-participants-list', page, sortType, groupId],
    queryFn: async () => await getParticipantsList({ groupId, sortType, page }),
  });

  return { data, isLoading };
};

export default useGetParticipantsList;
