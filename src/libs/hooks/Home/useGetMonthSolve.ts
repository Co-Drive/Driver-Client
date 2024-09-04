import { useQuery } from '@tanstack/react-query';
import { getMonthSolveProps } from '../../../types/Home/getMonthSolveTypes';
import getMonthSolve from '../../apis/Home/getMonthSolve';

const useGetMonthSolve = ({ year, month, userId }: getMonthSolveProps) => {
  const data = useQuery({
    queryKey: ['get-month-solve', year, month, userId],
    queryFn: async () => await getMonthSolve({ userId, year, month }),
  });

  return data;
};

export default useGetMonthSolve;
