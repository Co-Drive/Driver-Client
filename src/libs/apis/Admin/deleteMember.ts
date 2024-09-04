import { DeleteMemberProps } from '../../../types/Admin/adminType';
import { api } from '../../api';

const deleteMember = async ({ roomId, userId }: DeleteMemberProps) => {
  const { data } = await api.delete(`/rooms/${roomId}/kick/${userId}`);

  return data;
};

export default deleteMember;
