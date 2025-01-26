import { useQuery } from '@tanstack/react-query';
import { getRoomRecommend } from '../../apis/GroupAll/getRoomRecommend';

const useGetRoomRecommend = (userId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-room-recommend', userId],
    queryFn: async () => await getRoomRecommend(userId),
  });

  return { data, isLoading };
};

export default useGetRoomRecommend;
