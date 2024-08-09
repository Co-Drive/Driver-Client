import { PostAnswerProps } from '../../../types/GroupJoin/GroupJoinType';
import { api } from '../../api';

export const postAnswer = async ({ roomdId, password }: PostAnswerProps) => {
  const { data } = await api.post(`rooms/${roomdId}/private`, {
    password: password,
  });
  return data;
};
