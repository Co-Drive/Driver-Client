import { api } from '../../api';

const postCheckExitRepository = async (githubRepositoryName: string) => {
  const { data } = await api.post('/users/repository', {
    githubRepositoryName: githubRepositoryName,
  });

  return data;
};

export default postCheckExitRepository;
