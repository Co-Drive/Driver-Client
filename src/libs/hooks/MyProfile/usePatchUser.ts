import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PatchUserProps } from '../../../types/MyProfile/MyProfileType';
import patchUser from '../../apis/MyProfile/patchUser';

const usePatchUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      nickname,
      githubUrl,
      comment,
      language,
    }: PatchUserProps) =>
      await patchUser({ nickname, githubUrl, comment, language }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-user'] }),
        queryClient.invalidateQueries({ queryKey: ['get-user-profile'] });
    },
  });

  return { patchMutation: mutation.mutate };
};

export default usePatchUser;
