import { useQuery } from '@tanstack/react-query';
import getRecentRooms from '../../apis/MyGroup/getRecentRooms';

const useGetRecentRooms = () => {
  const { data } = useQuery({
    queryKey: ['get-recent-rooms'],
    queryFn: async () => await getRecentRooms(),
  });

  return { data };
};

export default useGetRecentRooms;
