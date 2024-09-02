import { useQuery } from '@tanstack/react-query';
import { GetRoomInfoProps } from '../../../types/Admin/adminType';
import getRoomInfo from '../../apis/Admin/getRoomInfo';

const useGetRoomInfo = ({ roomId }: GetRoomInfoProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-room-info'],
    queryFn: async () => await getRoomInfo({ roomId }),
  });

  return { data, isLoading };
};

export default useGetRoomInfo;
