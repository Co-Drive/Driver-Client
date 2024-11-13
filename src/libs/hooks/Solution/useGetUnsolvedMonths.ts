import { useQuery } from '@tanstack/react-query';
import { getUnsolvedMonths } from '../../apis/Solution/getUnsolvedMonths';

const useGetUnsolvedMonths = ({
  year,
  followerId,
}: {
  year: number;
  followerId?: number;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-unsolved-months', year, followerId],
    queryFn: async () => await getUnsolvedMonths({ year, followerId }),
  });

  return { unsolvedData: data, isLoading };
};

export default useGetUnsolvedMonths;
