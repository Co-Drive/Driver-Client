import { api } from '../../api';

interface patchProfileProps {
  userId: number;
  profileInfo: {
    language: string;
    nickname: string;
    comment: string;
    githubRepositoryName: string;
  };
}

export const patchProfile = async ({
  userId,
  profileInfo,
}: patchProfileProps) => {
  const { nickname, language, comment, githubRepositoryName } = profileInfo;
  const data = await api.patch(`/users/${userId}/profile`, {
    nickname: nickname,
    language: language,
    comment: comment,
    githubRepositoryName: githubRepositoryName,
  });

  return data.data;
};
