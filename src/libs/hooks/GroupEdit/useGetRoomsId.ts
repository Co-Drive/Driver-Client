import { useQuery } from '@tanstack/react-query';
import getRoomsId from './../../apis/GroupEdit/getRoomsId';

const uasGetRoomsId = (roomId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms-id'],
    queryFn: async () => await getRoomsId(roomId),
  });

  return { data, isLoading };
};

export default uasGetRoomsId;
