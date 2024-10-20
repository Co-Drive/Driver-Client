import { api } from '../../api';

const patchRooms = async (roomId: number, requestBody: FormData) => {
  try {
    const { data } = await api.patch(`/rooms/${roomId}`, requestBody, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default patchRooms;
