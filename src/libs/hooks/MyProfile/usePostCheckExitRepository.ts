import { useMutation } from '@tanstack/react-query';
import postCheckExitRepository from '../../apis/MyProfile/postCheckExitRepository';

const usePostCheckExitRepository = (
  updateIsExitRepositories: (isExit: boolean) => void
) => {
  const mutation = useMutation({
    mutationFn: async (githubRepositoryName: string) =>
      await postCheckExitRepository(githubRepositoryName),
    onSuccess: () => {
      updateIsExitRepositories(false);
    },
    onError: (err: { response: { data: { code: number } } }) => {
      const { code } = err.response.data;
      if (code === 404) updateIsExitRepositories(true);
    },
  });

  return { mutation: mutation.mutate };
};

export default usePostCheckExitRepository;
