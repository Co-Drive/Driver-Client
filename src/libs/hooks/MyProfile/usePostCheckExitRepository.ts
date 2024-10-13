import { useMutation } from '@tanstack/react-query';
import postCheckExitRepository from '../../apis/MyProfile/postCheckExitRepository';

const usePostCheckExitRepository = (
  updateIsExitRepository: (isExit: boolean) => void
) => {
  const mutation = useMutation({
    mutationFn: async (githubRepositoryName: string) =>
      await postCheckExitRepository(githubRepositoryName),
    onSuccess: () => {
      updateIsExitRepository(false);
    },
    onError: (err: { response: { data: { code: number } } }) => {
      const { code } = err.response.data;
      if (code === 409) updateIsExitRepository(true);
    },
  });

  return { mutation: mutation.mutate };
};

export default usePostCheckExitRepository;
