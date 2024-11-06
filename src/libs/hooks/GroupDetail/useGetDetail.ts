import { useQuery } from '@tanstack/react-query';
import getDetail from '../../apis/GroupDetail/getDetail';

const useGetDetail = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-detail', id],
    queryFn: async () => await getDetail(id),
  });

  return { data, isLoading };
};

export default useGetDetail;
