import { useQuery } from '@tanstack/react-query';
import { GetRoomsProps } from '../../../types/MyGroup/myGroupType';
import getRooms from '../../apis/utils/getRooms';

const useGetRooms = ({
  followerId,
  sortType,
  page,
  status,
  isJoinedRooms,
}: GetRoomsProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-participated-rooms', isJoinedRooms, sortType, page, status],
    queryFn: async () =>
      await getRooms({ followerId, sortType, page, status, isJoinedRooms }),
  });

  return { data, isLoading };
};

export default useGetRooms;
