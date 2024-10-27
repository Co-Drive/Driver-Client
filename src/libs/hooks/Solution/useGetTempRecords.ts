import { useQuery } from '@tanstack/react-query';
import { getTempRecords } from '../../apis/Solution/getTempRecords';

const useGetTempRecords = (page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-temp-records', page],
    queryFn: async () => await getTempRecords(page),
  });

  return { data, isLoading };
};

export default useGetTempRecords;
