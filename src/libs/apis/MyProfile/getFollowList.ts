import { api } from '../../api';

const getFollowList = async (isFollowerSelected: boolean) => {
  const { data } = await api.get(
    `/users/${isFollowerSelected ? 'followers' : 'followings'}`
  );

  return data;
};

export default getFollowList;
