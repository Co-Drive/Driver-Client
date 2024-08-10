import { api } from '../../api';

interface getMonthlySolutionProps {
  year: number;
  month: number;
  page: number;
}

export const getMonthlySolution = async ({
  year,
  month,
  page,
}: getMonthlySolutionProps) => {
  const userId = sessionStorage.getItem('user');
  const { data } = await api.get(
    `/records/${userId}/months?pivotDate=${year}-${month}-01&page=${page}&size=7`
  );

  return data;
};
