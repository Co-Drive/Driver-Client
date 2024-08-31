import { PatchRoomStatusProps } from '../../../types/Admin/adminType';
import { api } from '../../api';

const patchRoomStatus = async ({ roomId, status }: PatchRoomStatusProps) => {
  const clickedStatusEN =
    status === '모집 중'
      ? 'ACTIVE'
      : status === '모집 마감'
        ? 'INACTIVE'
        : 'CLOSED';
  const { data } = await api.patch(
    `/rooms/${roomId}/status/${clickedStatusEN}`
  );

  return data;
};

export default patchRoomStatus;
