import { api } from '../../api';

const getFollowerRecommend = async () => {
  const { data } = await api.get('/follow/recommend');

  return data;
};

export default getFollowerRecommend;
