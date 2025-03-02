import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostRecordsProps } from '../../../types/Solve/solveTypes';
import { postRecords } from '../../apis/Solve/postRecords';

const usePostRecords = ({
  handleCommitSuccess,
}: {
  handleCommitSuccess: (isSuccess: boolean) => void;
}) => {
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
      handleCommitSuccess(true);

      setTimeout(() => handleCommitSuccess(false), 1000);
      setTimeout(() => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;

        queryClient.invalidateQueries({ queryKey: ['get-monthly-solution'] });
        queryClient.invalidateQueries({ queryKey: ['get-temp-records'] });
        
        navigate(`/solution?page=1&sort=NEW&year=${year}&month=${month}`);
      }, 1500);
    },
  });
  return {
    postMutation: mutation.mutate,
    postErr: errMsg,
    isPostLoading: mutation.isPending,
  };
};

export default usePostRecords;
