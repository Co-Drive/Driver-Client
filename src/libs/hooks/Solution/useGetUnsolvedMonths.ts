import { useQuery } from '@tanstack/react-query';
import { getUnsolvedMonths } from '../../apis/Solution/getUnsolvedMonths';

const useGetUnsolvedMonths = (year: number) => {
  const { data } = useQuery({
    queryKey: ['get-unsolved-months', year],
    queryFn: async () => await getUnsolvedMonths(year),
  });

  return { unsolvedData: data };
};

export default useGetUnsolvedMonths;
