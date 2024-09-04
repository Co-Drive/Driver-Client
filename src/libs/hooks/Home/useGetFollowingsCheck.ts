import { useQuery } from '@tanstack/react-query';
import getFollowingsCheck from '../../apis/Home/getFollowingsCheck';

const useGetFollowingsCheck = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-followings-check'],
    queryFn: async () => await getFollowingsCheck(),
  });

  return { data, isLoading };
};

export default useGetFollowingsCheck;
