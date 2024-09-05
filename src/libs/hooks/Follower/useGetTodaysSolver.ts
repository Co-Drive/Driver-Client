import { useQuery } from '@tanstack/react-query';
import getTodaysSolver from '../../apis/Follower/getTodaysSolver';

const useGetTodaysSolver = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-todays-solver'],
    queryFn: async () => await getTodaysSolver(),
  });

  return { data, isLoading };
};

export default useGetTodaysSolver;
