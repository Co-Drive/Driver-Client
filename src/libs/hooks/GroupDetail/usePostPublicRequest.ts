import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import postPublicRequest from '../../apis/GroupDetail/postPublicRequest';

const usePostPublicRequest = () => {
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: number) => await postPublicRequest(id),
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-requests'] });
    },
  });

  return {
    mutation: mutation.mutate,
    isSuccess: mutation.isSuccess,
    err: errMsg,
  };
};

export default usePostPublicRequest;
