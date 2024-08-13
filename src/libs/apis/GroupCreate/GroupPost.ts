import { api } from '../../api';

export const GroupPost = async (requestBody: FormData) => {
  try {
    const { data } = await api.post('/rooms', requestBody, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
