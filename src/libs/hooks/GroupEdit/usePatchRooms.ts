import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import patchRooms from './../../apis/GroupEdit/patchRooms';

interface PatchRoomsProps {
  requestBody: FormData;
  roomId: number;
}

const usePatchRooms = () => {
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ roomId, requestBody }: PatchRoomsProps) =>
      // 객체 형태로 전달
      await patchRooms(roomId, requestBody),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-detail'] });
      queryClient.invalidateQueries({ queryKey: ['get-rooms-id'] });
    },
    onError: (err: any) => {
      // 에러 메시지 처리
      const message = err?.response?.data?.message || 'Something went wrong';
      setErrMsg(message);
    },
  });

  return { patchMutation: mutation.mutate, patchApproveErr: errMsg };
};

export default usePatchRooms;
