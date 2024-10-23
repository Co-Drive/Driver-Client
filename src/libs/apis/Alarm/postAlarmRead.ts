import { api } from '../../api';

const postAlarmRead = async (notificationIds: number) => {
  const { data } = await api.post('/notifications/read', {
    // requestBody에서 배열로 받아옴
    notificationIds: [notificationIds],
  });

  return data;
};

export default postAlarmRead;
