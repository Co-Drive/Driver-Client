import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PatchRoomStatusProps } from '../../../types/Admin/adminType';
import patchRoomStatus from '../../apis/Admin/patchRoomStatus';

const usePatchRoomStatus = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ roomId, status }: PatchRoomStatusProps) =>
      await patchRoomStatus({ roomId, status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-room-info'] });
    },
  });

  return { mutation: mutation.mutate };
};

export default usePatchRoomStatus;
