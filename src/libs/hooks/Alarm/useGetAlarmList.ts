import { useQuery } from '@tanstack/react-query';
import getAlarmList from '../../apis/Alarm/getAlarmList';

const useGetAlarmList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-alarm-list'],
    queryFn: async () => await getAlarmList(),
  });

  return { data, isLoading };
};

export default useGetAlarmList;
