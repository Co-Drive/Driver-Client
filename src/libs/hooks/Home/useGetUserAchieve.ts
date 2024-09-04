import { useQuery } from '@tanstack/react-query';
import getUserAchieve from '../../apis/Home/getUserAchieve';

const useGetUserAchieve = () => {
  const { data } = useQuery({
    queryKey: ['get-user-achieve'],
    queryFn: async () => await getUserAchieve(),
  });

  return data;
};

export default useGetUserAchieve;
