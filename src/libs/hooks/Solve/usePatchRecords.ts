import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PatchRecordsProps } from '../../../types/Solve/solveTypes';
import { patchRecords } from '../../apis/Solve/patchRecords';

const usePatchRecords = ({
  id,
  handleCommitSuccess,
}: {
  id?: number;
  handleCommitSuccess: (isSuccess: boolean) => void;
}) => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ id, questionInfo, codeblocks }: PatchRecordsProps) => {
      return await patchRecords({ id, questionInfo, codeblocks });
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-monthly-solution'] });
      queryClient.invalidateQueries({ queryKey: ['get-records'] });
      handleCommitSuccess(true);

      setTimeout(() => handleCommitSuccess(false), 1000);
      setTimeout(() => navigate(`/solution/${id}`), 1500);
    },
  });

  return { patchMutation: mutation.mutate, patchErr: errMsg };
};

export default usePatchRecords;
