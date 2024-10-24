import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostRecordsProps } from '../../../types/Solve/solveTypes';
import { postRecords } from '../../apis/Solve/postRecords';

const usePostRecords = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ id, questionInfo, codeblocks }: PostRecordsProps) => {
      return await postRecords({ id, questionInfo, codeblocks });
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-monthly-solution'] });
      navigate(`/solution`);
    },
  });
  return { postMutation: mutation.mutate, postErr: errMsg };
};

export default usePostRecords;
