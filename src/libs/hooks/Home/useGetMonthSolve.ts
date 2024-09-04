import { useQuery } from '@tanstack/react-query';
import { getMonthSolveProps } from '../../../types/Home/getMonthSolveTypes';
import getMonthSolve from '../../apis/Home/getMonthSolve';

const useGetMonthSolve = ({ year, month }: getMonthSolveProps) => {
  const data = useQuery({
    queryKey: ['get-month-solve', year, month],
    queryFn: async () => await getMonthSolve({ year, month }),
  });

  return data;
};

export default useGetMonthSolve;
