import { useQuery } from '@tanstack/react-query';
import { GetFollowerSummaryProps } from '../../../types/Follower/Current/currentType';
import getFollowerSummary from '../../apis/Follower/getFollowerSummary';

const useGetFollowerSummary = ({
  sortType,
  groupId,
}: GetFollowerSummaryProps) => {
  const { data } = useQuery({
    queryKey: ['get-follower-summary'],
    queryFn: async () => await getFollowerSummary({ sortType, groupId }),
  });

  return { data };
};

export default useGetFollowerSummary;
