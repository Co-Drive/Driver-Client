import { useQuery } from '@tanstack/react-query';
import { GetFollowerSummaryProps } from '../../../types/Follower/Current/currentType';
import getFollowerSummary from '../../apis/Follower/getFollowerSummary';

const useGetFollowerSummary = ({
  sortType,
  page,
  groupId,
}: GetFollowerSummaryProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-follower-summary', sortType, groupId],
    queryFn: async () => await getFollowerSummary({ sortType, groupId, page }),
  });

  return { data, isLoading };
};

export default useGetFollowerSummary;
