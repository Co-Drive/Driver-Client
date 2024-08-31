import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PatchApproveProps } from '../../../types/Admin/adminType';
import patchApprove from '../../apis/Admin/patchApprove';

const usePatchApprove = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ roomId, requestId }: PatchApproveProps) =>
      await patchApprove({ roomId, requestId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-participants-list'] });
      queryClient.invalidateQueries({ queryKey: ['get-room-info'] });
    },
    onError: (err) => console.log(err),
  });

  return { patchMutation: mutation.mutate };
};

export default usePatchApprove;
