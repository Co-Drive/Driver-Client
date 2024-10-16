import { useQuery } from '@tanstack/react-query';
import getGroupId from '../../apis/GroupDetail/getGroupId';

const useGetGroupId = (uuid: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-group-id'],
    queryFn: async () => await getGroupId(uuid),
  });

  return { groupDataFromUuid: data, isGroupDataLoading: isLoading };
};

export default useGetGroupId;
