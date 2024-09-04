import { useMutation } from '@tanstack/react-query';
import postCheckExitNickname from '../../apis/MyProfile/postCheckExitNickname';

const usePostCheckExitNickname = (
  updateIsExitNickname: (isExit: boolean) => void
) => {
  const mutation = useMutation({
    mutationFn: async (nickname: string) =>
      await postCheckExitNickname(nickname),
    onSuccess: () => {
      updateIsExitNickname(false);
    },
    onError: (err: { response: { data: { code: number } } }) => {
      const { code } = err.response.data;
      if (code === 409) updateIsExitNickname(true);
    },
  });

  return { mutation: mutation.mutate };
};

export default usePostCheckExitNickname;
