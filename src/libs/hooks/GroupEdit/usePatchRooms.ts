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
    mutationFn: ({ roomId, requestBody }: PatchRoomsProps) =>
      patchRooms(roomId, requestBody), // await 제거
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

  return { patchMutation: mutation.mutate, patchApproveErr: errMsg };
};

export default usePatchRooms;
