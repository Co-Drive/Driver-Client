import { PatchRoomStatusProps } from '../../../types/Admin/adminType';
import { api } from '../../api';

const patchRoomStatus = async ({ roomId, status }: PatchRoomStatusProps) => {
  const { data } = await api.patch(`/rooms/${roomId}/status/${status}`);

  return data;
};

export default patchRoomStatus;
