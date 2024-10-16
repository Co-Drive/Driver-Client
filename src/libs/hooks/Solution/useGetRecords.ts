import { useQuery } from '@tanstack/react-query';
import { getRecords } from '../../apis/Solution/getRecords';

const useGetRecords = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-records'],
    queryFn: async () => await getRecords(id),
    enabled: !!id,
  });

  return { data, isLoading };
};

export default useGetRecords;
