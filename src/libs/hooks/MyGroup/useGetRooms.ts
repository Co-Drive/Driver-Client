import { useQuery } from '@tanstack/react-query';
import { GetRoomsProps } from '../../../types/MyGroup/myGroupType';
import getRooms from '../../apis/MyGroup/getRooms';

const useGetRooms = ({
  sortType,
  page,
  status,
  isJoinedRooms,
}: GetRoomsProps) => {
  const { data } = useQuery({
    queryKey: ['get-participated-rooms'],
    queryFn: async () =>
      await getRooms({ sortType, page, status, isJoinedRooms }),
  });

  return { data };
};

export default useGetRooms;
