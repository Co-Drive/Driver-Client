import { GetRoomInfoProps } from '../../../types/Admin/adminType';
import { api } from '../../api';

const getRoomInfo = async ({ roomId }: GetRoomInfoProps) => {
  const { data } = await api.get(`/rooms/${roomId}/join`);

  return data;
};

export default getRoomInfo;
