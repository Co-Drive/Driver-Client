import { useQuery } from '@tanstack/react-query';
import getUserProfile from '../../apis/Follower/getUserProfile';

const useGetUserProfile = (userId?: number) => {
  if (userId) {
    const { data, isLoading } = useQuery({
      queryKey: ['get-user-profile', userId],
      queryFn: async () => await getUserProfile(userId),
    });

    return { data, isLoading };
  }
};

export default useGetUserProfile;
