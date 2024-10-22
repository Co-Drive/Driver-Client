import { api } from '../../api';

const postAlarmRead = async (notificationIds: number) => {
  const { data } = await api.post('/notifications/read', {
    notificationIds: [notificationIds],
  });

  return data;
};

export default postAlarmRead;
