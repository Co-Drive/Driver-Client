import { GetFollowerSummaryProps } from '../../../types/Follower/Current/currentType';
import { api } from '../../api';

const getFollowerSummary = async ({
  sortType,
  groupId,
  page,
}: GetFollowerSummaryProps) => {
  const { data } = await api.get(
    `/follow/followings/summary/${sortType === '최신순' ? `NEW` : `DICT`}?page=${page}${groupId && `&groupId=${groupId}`}`
  );

  return data;
};

export default getFollowerSummary;
