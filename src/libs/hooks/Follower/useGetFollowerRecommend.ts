import { useQuery } from '@tanstack/react-query';
import getFollowerRecommend from '../../apis/Follower/getFollowerRecommend';

const useGetFollowerRecommend = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-follower-recommend'],
    queryFn: async () => await getFollowerRecommend(),
  });

  return { data, isLoading };
};

export default useGetFollowerRecommend;
