import { useQuery } from '@tanstack/react-query';
import getAlarmList from '../../apis/Alarm/getAlarmList';

const useGetAlarmList = (isLoginSuccess: boolean) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-alarm-list'],
    queryFn: async () => await getAlarmList(),
    // isLoginSuccess가 true인 경우에만 queryFn 수행
    enabled: isLoginSuccess,
  });

  return { data, isLoading };
};

export default useGetAlarmList;
