import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import patchRooms from '../../apis/GroupEdit/patchRooms';

interface PatchRoomProps {
  roomId: number;
  title: string;
  password: string;
  capacity: number;
  tags: string[];
  introduce: string;
  information: string;
  imageFile?: File; // imageFile은 선택적
}

interface usePatchRoomsProps {
  roomId: number;
}

const usePatchRooms = ({ roomId }: usePatchRoomsProps) => {
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      title,
      password,
      capacity,
      tags,
      introduce,
      information,
      imageFile,
    }: PatchRoomProps) =>
      await patchRooms({
        roomId,
        title,
        password,
        capacity,
        tags,
        introduce,
        information,
        imageFile,
      }),
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
      console.error('Error occurred while patching the room:', message); // 에러 로그 추가
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] });
      queryClient.invalidateQueries({ queryKey: ['get-room', roomId] });
    },
  });

  return { patchMutation: mutation.mutate, patchRoomsErr: errMsg };
};

export default usePatchRooms;
