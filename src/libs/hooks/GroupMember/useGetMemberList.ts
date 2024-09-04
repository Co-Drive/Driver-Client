import { useQuery } from '@tanstack/react-query';
import { GetMemberListProps } from '../../../types/GroupMember/memberType';
import getMeberList from '../../apis/GroupMember/getMeberList';

const useGetMemberList = ({ groupId, sortType, page }: GetMemberListProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-member-list', page, sortType],
    queryFn: async () => await getMeberList({ groupId, sortType, page }),
  });

  return { data, isLoading };
};

export default useGetMemberList;
