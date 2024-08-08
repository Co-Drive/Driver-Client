import { api } from '../../api';

interface PostAnswerProps {
  roomId: number;
  password: string;
}

export const postAnswer = async ({ roomId, password }: PostAnswerProps) => {
  const { data } = await api.post(`rooms/${roomId}/private`, {
    password: password,
  });
  console.log(data);
  return data;
};
