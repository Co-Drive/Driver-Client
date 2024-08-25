import { GetFollowerSummaryProps } from '../../../types/Follower/Current/currentType';
import { api } from '../../api';

const getFollowerSummary = async ({
  sortType,
  groupId,
}: GetFollowerSummaryProps) => {
  const { data } = await api.get(
    `/follow/followings/summary/${sortType}${groupId && `/groupId=${groupId}`}`
  );

  return data;
};

export default getFollowerSummary;
