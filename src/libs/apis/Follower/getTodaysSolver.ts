import { api } from '../../api';

const getTodaysSolver = async () => {
  const { data } = await api.get('/follow/followings/today-solved');

  return data;
};

export default getTodaysSolver;
