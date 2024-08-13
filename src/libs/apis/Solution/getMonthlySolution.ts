import { getMonthlySolutionProps } from '../../../types/Solution/solutionTypes';
import { api } from '../../api';

export const getMonthlySolution = async ({
  year,
  month,
  page,
}: getMonthlySolutionProps) => {
  const userId = sessionStorage.getItem('user');
  const { data } = await api.get(
    `/records/${userId}/month?pivotDate=${year}-0${month}-01&page=${page}&size=7`
  );

  return data;
};
