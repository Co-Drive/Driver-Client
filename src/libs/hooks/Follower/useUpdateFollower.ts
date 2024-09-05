import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateFollowerProps } from '../../../types/Follower/Personal/personalType';
import updateFollower from '../../apis/Follower/updateFollower';

const useUpdateFollower = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ isDelete, nickname }: UpdateFollowerProps) =>
      await updateFollower({ nickname, isDelete }),
    onError: (err) => console.log(err),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-follow-list'] });
      queryClient.invalidateQueries({ queryKey: ['get-user-profile'] });
    },
  });

  return { mutation: mutation.mutate };
};

export default useUpdateFollower;
