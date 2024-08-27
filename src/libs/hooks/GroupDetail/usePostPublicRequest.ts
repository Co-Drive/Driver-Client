import { useMutation, useQueryClient } from '@tanstack/react-query';
import postPublicRequest from '../../apis/GroupDetail/postPublicRequest';

const usePostPublicRequest = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: number) => await postPublicRequest(id),
    // 추후 변경 예정
    onError: (err) => {
      console.log(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-requests'] });
    },
  });

  return { mutation: mutation.mutate, isSuccess: mutation.isSuccess };
};

export default usePostPublicRequest;
