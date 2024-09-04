import { useQuery } from '@tanstack/react-query';
import getUser from '../../apis/MyProfile/getUser';

const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-user'],
    queryFn: async () => await getUser(),
  });

  return { data, isLoading };
};

export default useGetUser;
