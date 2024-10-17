import { useQuery } from '@tanstack/react-query';
import getRanking from '../../apis/GroupMember/getRanking';

const useGetRanking = (roomId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-ranking'],
    queryFn: async () => await getRanking(roomId),
    enabled: !!roomId,
  });

  return { data, isLoading };
};

export default useGetRanking;
