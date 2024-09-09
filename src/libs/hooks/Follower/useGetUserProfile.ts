import { useQuery } from '@tanstack/react-query';
import getUserProfile from '../../apis/Follower/getUserProfile';

const useGetUserProfile = (userId?: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-user-profile'],
    queryFn: async () => await getUserProfile(userId),
  });

  return { data, isLoading };
};

export default useGetUserProfile;
