import { api } from '../../api';

interface patchProfileProps {
  userId: number;
  profileInfo: {
    language: string;
    nickname: string;
    comment: string;
    githubUrl?: string;
    githubRepositoryName: string;
  };
}

export const patchProfile = async ({
  userId,
  profileInfo,
}: patchProfileProps) => {
  const { nickname, language, comment, githubUrl, githubRepositoryName } =
    profileInfo;
  const data = await api.patch(`/users/${userId}/profile`, {
    nickname: nickname,
    language: language,
    comment: comment,
    githubUrl: githubUrl,
    githubRepositoryName: githubRepositoryName,
  });

  return data.data;
};
