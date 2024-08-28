import { useQuery } from '@tanstack/react-query';
import getFollowerWeeklyCount from '../../apis/Follower/getFollowerWeeklyCount';

const useGetFollowerWeeklyCount = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-follower-weekly-count'],
    queryFn: async () => await getFollowerWeeklyCount(),
  });

  return { data, isLoading };
};

export default useGetFollowerWeeklyCount;
