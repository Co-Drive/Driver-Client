import { getMonthlySolutionProps } from '../../../types/Solution/solutionTypes';
import { api } from '../../api';

export const getMonthlySolution = async ({
  userId,
  year,
  month,
  page,
  sortType,
}: getMonthlySolutionProps) => {
  const formatMonth = month < 10 ? `0${month}` : `${month}`;
  const { data } = await api.get(
    `/records/${userId}/month/${sortType === '오래된순' ? 'OLD' : 'NEW'}?pivotDate=${year}-${formatMonth}-01&page=${page}&size=7`
  );

  return data;
};
