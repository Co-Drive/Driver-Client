import { api } from '../../api';

export const postNickname = async (nickname: string) => {
  const data = await api.post('/users/nickname', {
    nickname: nickname,
  });
  return data.data;
};
