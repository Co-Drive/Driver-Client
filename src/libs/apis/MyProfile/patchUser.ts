import { PatchUserProps } from '../../../types/MyProfile/MyProfileType';
import { api } from '../../api';

const patchUser = async ({
  nickname,
  githubUrl,
  comment,
  language,
}: PatchUserProps) => {
  const id = sessionStorage.getItem('user');
  const userId = id && parseInt(id);
  const { data } = await api.patch(`/users/${userId}/profile`, {
    nickname: nickname,
    githubUrl: githubUrl,
    comment: comment,
    language: language,
  });

  return data;
};

export default patchUser;
