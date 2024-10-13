import { PostAnswerProps } from '../../../types/GroupJoin/GroupJoinType';
import { api } from '../../api';

export const postAnswer = async ({ roomId, password }: PostAnswerProps) => {
  const { data } = await api.post(`rooms/${roomId}/private`, {
    password: password,
  });

  return data;
};
