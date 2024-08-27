import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateFollowerProps } from '../../../types/Follower/Personal/personalType';
import updateFollower from '../../apis/Follower/updateFollower';

const useUpdateFollower = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ isDelete, nickname }: UpdateFollowerProps) =>
      await updateFollower({ nickname, isDelete }),
    onError: (err) => console.log(err.message),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-follower-summary'] });
      queryClient.invalidateQueries({ queryKey: ['get-user-profile'] });
      queryClient.invalidateQueries({ queryKey: ['get-follower-recommend'] });
      queryClient.invalidateQueries({
        queryKey: ['get-follower-weekly-count'],
      });
    },
  });

  return { mutation: mutation.mutate };
};

export default useUpdateFollower;
