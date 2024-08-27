import { api } from '../../api';

const getFollowerWeeklyCount = async () => {
  const { data } = await api.get('/follow/followings/weekly-count');

  return data;
};

export default getFollowerWeeklyCount;
