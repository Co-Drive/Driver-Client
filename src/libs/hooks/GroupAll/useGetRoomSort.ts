import { useQuery } from '@tanstack/react-query';
import { GetRoomSortProps } from '../../../types/GroupAll/GroupAllType';
import getRoomSort from '../../apis/GroupAll/getRoomSort';

const useGetRoomsSort = ({ sortType, page, request }: GetRoomSortProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-participated-rooms', sortType, page, request],
    queryFn: async () => await getRoomSort({ sortType, page, request }),
  });

  return { data, isLoading };
};

export default useGetRoomsSort;
