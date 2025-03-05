import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postAnswer } from '../../apis/GroupJoin/postAnswer';
import { PostAnswerProps } from './../../../types/GroupJoin/GroupJoinType';

const usePostAnswer = (roomId: number) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async ({ roomId, password }: PostAnswerProps) =>
      await postAnswer({ roomId, password }),
    onSuccess: () => {
      navigate(`/group/${roomId}/member?page=1&sort=NEW`);
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      alert(message);
    },
  });

  return { mutation: mutation.mutate, isMutationLoading: mutation.isPending };
};

export default usePostAnswer;
