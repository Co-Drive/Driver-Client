import { useQuery } from '@tanstack/react-query';
import { getRecords } from '../../apis/Solution/getRecords';

const useGetRecords = (id: number) => {
  const { data } = useQuery({
    queryKey: ['get-records'],
    queryFn: async () => await getRecords(id),
  });

  return { data };
};

export default useGetRecords;
