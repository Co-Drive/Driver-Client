import { api } from '../../api';

export const getUnsolvedMonths = async (year: number) => {
  const userId = sessionStorage.getItem('user');

  const { data } = await api.get(
    `/records/${userId}/unsolved-months?pivotDate=${year}-01-01`
  );

  return data;
};
