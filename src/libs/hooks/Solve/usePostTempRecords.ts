import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postTempRecords } from '../../apis/Solve/postTempRecords';
import { PostRecordsProps } from './../../../types/Solve/solveTypes';

const usePostTempRecords = (onClose?: () => void) => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ questionInfo, codeblocks }: PostRecordsProps) => {
      return await postTempRecords({ questionInfo, codeblocks });
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
    onSuccess: ({ data }) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ['/get-temp-records'] });
        navigate('/solution');
        onClose && onClose();
      }
    },
  });

  return { mutation: mutation.mutate, postTempErr: errMsg };
};

export default usePostTempRecords;
