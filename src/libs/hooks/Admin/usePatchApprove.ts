import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PatchApproveProps } from '../../../types/Admin/adminType';
import patchApprove from '../../apis/Admin/patchApprove';

const usePatchApprove = () => {
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ roomId, requestId }: PatchApproveProps) =>
      await patchApprove({ roomId, requestId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-participants-list'] });
      queryClient.invalidateQueries({ queryKey: ['get-room-info'] });
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
  });

  return { patchMutation: mutation.mutate, patchApproveErr: errMsg };
};

export default usePatchApprove;
