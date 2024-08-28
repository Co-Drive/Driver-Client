import { useQuery } from '@tanstack/react-query';
import getJoinedGroupList from '../../apis/Follower/getJoinedGroupList';

const useGetJoinedGroupList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-joined-group-list'],
    queryFn: async () => await getJoinedGroupList(),
  });

  return { data, isLoading };
};

export default useGetJoinedGroupList;
