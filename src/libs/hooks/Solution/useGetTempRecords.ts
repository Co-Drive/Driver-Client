import { useQuery } from '@tanstack/react-query';
import { getTempRecords } from '../../apis/Solution/getTempRecords';

const useGetTempRecords = (page: number) => {
  const { data } = useQuery({
    queryKey: ['get-temp-records', page],
    queryFn: async () => await getTempRecords(page),
  });

  return { data };
};

export default useGetTempRecords;
