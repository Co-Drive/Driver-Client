import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PatchUserProps } from '../../../types/MyProfile/MyProfileType';
import patchUser from '../../apis/MyProfile/patchUser';

const usePatchUser = (nickname: string) => {
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
      const originNickname = sessionStorage.getItem('nickname');
      queryClient.invalidateQueries({ queryKey: ['get-user'] });
      queryClient.invalidateQueries({ queryKey: ['get-user-profile'] });
      if (originNickname !== nickname) {
        sessionStorage.setItem('nickname', nickname);
        window.location.reload();
      }
    },
  });

  return { patchMutation: mutation.mutate };
};

export default usePatchUser;
