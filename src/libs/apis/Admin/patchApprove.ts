import { PatchApproveProps } from '../../../types/Admin/adminType';
import { api } from '../../api';

const patchApprove = async ({ roomId, requestId }: PatchApproveProps) => {
  const { data } = await api.patch(`/rooms/${roomId}/approve/${requestId}`);

  return data;
};

export default patchApprove;
