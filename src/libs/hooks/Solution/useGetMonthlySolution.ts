import { useQuery } from '@tanstack/react-query';
import { getMonthlySolution } from '../../apis/Solution/getMonthlySolution';
import { getMonthlySolutionProps } from './../../../types/Solution/solutionTypes';

const useGetMonthlySolution = ({
  year,
  month,
  page,
  isSmallList
}: getMonthlySolutionProps) => {
  const { data } = useQuery({
    // 어떤 값이 바뀔 때마다 queryFn이 실행되었으면 좋겠다 -> queryKey에 해당 값 포함시키기 !
    queryKey: ['get-monthly-solution', year, month, page],
    queryFn: async () => await getMonthlySolution({ year, month, page, isSmallList }),
  });

  return { data };
};

export default useGetMonthlySolution;
