import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { DeleteMemberProps } from '../../../types/Admin/adminType';
import deleteMember from '../../apis/Admin/deleteMember';

const useDeleteMember = (handleDeleteSuccess: () => void) => {
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ roomId, userId }: DeleteMemberProps) =>
      await deleteMember({ roomId, userId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-participants-list'] });
      queryClient.invalidateQueries({ queryKey: ['get-room-info'] });
      handleDeleteSuccess();
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
  });

  return { deleteMutation: mutation.mutate, deleteMemberErr: errMsg };
};

export default useDeleteMember;
