import { api } from '../../api';

const patchRooms = async (requestBody: FormData, roomId: number) => {
  const { data } = await api.patch(`/rooms/${roomId}`, requestBody, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};

export default patchRooms;
