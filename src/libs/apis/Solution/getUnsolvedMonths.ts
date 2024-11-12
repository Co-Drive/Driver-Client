import { api } from '../../api';

export const getUnsolvedMonths = async ({
  year,
  followerId,
}: {
  year: number;
  followerId?: number;
}) => {
  const userId = followerId ? followerId : sessionStorage.getItem('user');

  const { data } = await api.get(
    `/records/${userId}/unsolved-months?pivotDate=${year}-01-01`
  );

  return data;
};
