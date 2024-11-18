import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import patchRooms from './../../apis/GroupEdit/patchRooms';

interface PatchRoomsProps {
  requestBody: FormData;
  roomId: number;
}

const usePatchRooms = () => {
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ roomId, requestBody }: PatchRoomsProps) =>
      // 객체 형태로 전달
      await patchRooms(roomId, requestBody),
    onSuccess: (_, { roomId }) => {
      // roomId를 queryKey와 navigate에 사용
      queryClient.invalidateQueries({ queryKey: ['get-detail', roomId] });
      queryClient.invalidateQueries({ queryKey: ['get-rooms-id'] });
      navigate(`/group/${roomId}/admin`);
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message || 'Something went wrong';
      setErrMsg(message);
    },
  });

  return {
    patchMutation: mutation.mutate,
    patchApproveErr: errMsg,
    isPending: mutation.isPending,
  };
};

export default usePatchRooms;
