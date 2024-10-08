import { getMonthSolveProps } from '../../../types/Home/getMonthSolveTypes';
import { api } from '../../api';

const getMonthSolve = async ({ year, month, userId }: getMonthSolveProps) => {
  const formatMonth = month < 10 ? `0${month}` : `${month}`;
  const { data } = await api.get(
    `/records/${userId}/board?pivotDate=${year}-${formatMonth}-01`
  );

  return data;
};

export default getMonthSolve;
