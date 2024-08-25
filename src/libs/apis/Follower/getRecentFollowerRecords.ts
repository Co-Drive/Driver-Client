import { api } from '../../api';
import { AdditionalProblemsModalProps } from './../../../types/Follower/Current/currentType';

const getRecentFollowerRecords = async ({
  userId,
}: AdditionalProblemsModalProps) => {
  const { data } = await api.get(`/records/${userId}/recent`);

  return data;
};

export default getRecentFollowerRecords;
