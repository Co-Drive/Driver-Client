import { api } from '../../api';

const postCheckExitNickname = async (nickname: string) => {
  const { data } = await api.post('/users/nickname', {
    nickname: nickname ? nickname : sessionStorage.getItem('nickname'),
  });

  return data;
};

export default postCheckExitNickname;
