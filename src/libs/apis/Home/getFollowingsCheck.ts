import { api } from '../../api';

const getFollowingsCheck = async () => {
  const { data } = await api.get(`/follow/followings/weekly`);

  return data;
};

export default getFollowingsCheck;
