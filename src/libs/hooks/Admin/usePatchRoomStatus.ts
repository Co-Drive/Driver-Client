import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PatchRoomStatusProps } from '../../../types/Admin/adminType';
import patchRoomStatus from '../../apis/Admin/patchRoomStatus';

const usePatchRoomStatus = () => {
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ roomId, status }: PatchRoomStatusProps) =>
      await patchRoomStatus({ roomId, status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-room-info'] });
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
  });

  return { mutation: mutation.mutate, patchRoomErr: errMsg };
};

export default usePatchRoomStatus;
