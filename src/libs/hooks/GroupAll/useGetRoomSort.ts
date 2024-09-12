import { useQuery } from '@tanstack/react-query';
import { GetRoomSortProps } from '../../../types/GroupAll/GroupAllType';
import getRoomSort from '../../apis/GroupAll/getRoomSort';

const useGetRoomsSort = ({ sortType, page }: GetRoomSortProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-participated-rooms', sortType, page],
    queryFn: async () => await getRoomSort({ sortType, page }),
  });

  return { data, isLoading };
};

export default useGetRoomsSort;
