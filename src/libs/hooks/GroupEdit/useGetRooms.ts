import { useQuery } from '@tanstack/react-query';
import getRooms from '../../apis/GroupEdit/getRooms';

const useGetRooms = (roomId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => await getRooms(roomId),
  });

  return { data, isLoading };
};

export default useGetRooms;
