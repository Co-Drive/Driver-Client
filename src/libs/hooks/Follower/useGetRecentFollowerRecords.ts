import { useQuery } from '@tanstack/react-query';
import { AdditionalProblemsModalProps } from '../../../types/Follower/Current/currentType';
import getRecentFollowerRecords from '../../apis/Follower/getRecentFollowerRecords';

const useGetRecentFollowerRecords = ({
  userId,
}: AdditionalProblemsModalProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get- recent-follower-records'],
    queryFn: async () => await getRecentFollowerRecords({ userId }),
  });

  return { data, isLoading };
};

export default useGetRecentFollowerRecords;
