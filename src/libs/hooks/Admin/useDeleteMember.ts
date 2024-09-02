import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteMemberProps } from '../../../types/Admin/adminType';
import deleteMember from '../../apis/Admin/deleteMember';

const useDeleteMember = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ roomId, userId }: DeleteMemberProps) =>
      await deleteMember({ roomId, userId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-participants-list'] });
      queryClient.invalidateQueries({ queryKey: ['get-room-info'] });
    },
    onError: (err) => console.log(err),
  });

  return { deleteMutation: mutation.mutate };
};

export default useDeleteMember;
