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
    mutationFn: async ({ id, questionInfo, codeblocks }: PostRecordsProps) => {
      return await postTempRecords({ id, questionInfo, codeblocks });
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
    onSuccess: ({ data }) => {
      if (data) {
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;

        queryClient.invalidateQueries({ queryKey: ['get-temp-records'] });
        navigate(`/solution?page=1&year=${year}&month=${month}`);
        onClose && onClose();
      }
    },
  });

  return { mutation: mutation.mutate, postTempErr: errMsg };
};

export default usePostTempRecords;
