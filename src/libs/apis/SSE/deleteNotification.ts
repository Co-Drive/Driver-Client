import { api } from '../../api';

const deleteNotification = async () => {
  const { data } = await api.delete('/notifications');

  return data;
};

export default deleteNotification;
