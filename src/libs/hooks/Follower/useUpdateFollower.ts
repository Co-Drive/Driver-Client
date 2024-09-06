import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { UpdateFollowerProps } from '../../../types/Follower/Personal/personalType';
import updateFollower from '../../apis/Follower/updateFollower';

const useUpdateFollower = () => {
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ isDelete, nickname }: UpdateFollowerProps) =>
      await updateFollower({ nickname, isDelete }),
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-follow-list'] });
      queryClient.invalidateQueries({ queryKey: ['get-user-profile'] });
    },
  });

  return { mutation: mutation.mutate, updateFollowerErr: errMsg };
};

export default useUpdateFollower;
