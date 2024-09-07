import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postPublicRequest from '../../apis/GroupDetail/postPublicRequest';

const usePostPublicRequest = (imageSrc: string) => {
  const navigate = useNavigate();
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
      queryClient.invalidateQueries({ queryKey: ['get-detail'] });
      navigate('/group-complete', { state: { imageSrc: imageSrc } });
    },
  });

  return {
    mutation: mutation.mutate,
    err: errMsg,
  };
};

export default usePostPublicRequest;
