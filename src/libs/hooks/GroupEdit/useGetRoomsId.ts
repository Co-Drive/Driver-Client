import { useQuery } from '@tanstack/react-query';
import getRoomsId from './../../apis/GroupEdit/getRoomsId';

const useGetRoomsId = (roomId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms-id'],
    queryFn: async () => await getRoomsId(roomId),
  });

  return { data, isLoading };
};

export default useGetRoomsId;
