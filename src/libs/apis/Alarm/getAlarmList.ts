import { api } from '../../api';

const getAlarmList = async () => {
  const { data } = await api.get('/notifications/list');

  return data;
};

export default getAlarmList;
