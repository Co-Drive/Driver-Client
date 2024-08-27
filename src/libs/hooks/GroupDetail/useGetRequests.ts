import { useQuery } from '@tanstack/react-query';
import getRequests from '../../apis/GroupDetail/getRequests';

const useGetRequests = (roomId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-requests'],
    queryFn: async () => await getRequests(roomId),
  });

  return { data, isLoading };
};

export default useGetRequests;
