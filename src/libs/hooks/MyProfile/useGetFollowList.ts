import { useQuery } from '@tanstack/react-query';
import getFollowList from '../../apis/MyProfile/getFollowList';

const useGetFollowList = (isFollowerSelected: boolean) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-follow-list', isFollowerSelected],
    queryFn: async () => await getFollowList(isFollowerSelected),
  });

  return { followData: data, isLoading };
};

export default useGetFollowList;
