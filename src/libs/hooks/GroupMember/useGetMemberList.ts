import { useQuery } from '@tanstack/react-query';
import { GetMemberListProps } from '../../../types/GroupMember/memberType';
import getMeberList from '../../apis/GroupMember/getMeberList';

const useGetMemberList = ({ roomId, sortType }: GetMemberListProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-member-list'],
    queryFn: async () => await getMeberList({ roomId, sortType }),
  });

  return { data, isLoading };
};

export default useGetMemberList;
