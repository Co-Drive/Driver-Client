import { GetFollowerSummaryProps } from '../../../types/Follower/Current/currentType';
import { api } from '../../api';

const getFollowerSummary = async ({
  sortType,
  groupId,
  page,
}: GetFollowerSummaryProps) => {
  const isActiveGroupId = groupId && groupId > 0;
  const followerList = `/follow/followings/summary/${sortType === '최신순' ? `NEW` : `DICT`}?page=${page}`;
  const memberList = `/follow/followings/summary/${sortType === '최신순' ? `NEW` : `DICT`}?page=${page}${groupId && `&roomId=${groupId}`}`;
  const { data } = isActiveGroupId
    ? await api.get(memberList)
    : await api.get(followerList);

  return data;
};

export default getFollowerSummary;
