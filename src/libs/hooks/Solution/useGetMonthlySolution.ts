import { useQuery } from '@tanstack/react-query';
import { getMonthlySolution } from '../../apis/Solution/getMonthlySolution';
import { getMonthlySolutionProps } from './../../../types/Solution/solutionTypes';

const useGetMonthlySolution = ({
  userId,
  year,
  month,
  page,
  sortType,
}: getMonthlySolutionProps) => {
  const { data } = useQuery({
    // 어떤 값이 바뀔 때마다 queryFn이 실행되었으면 좋겠다 -> queryKey에 해당 값 포함시키기 !
    queryKey: ['get-monthly-solution', year, month, page, sortType, userId],
    queryFn: async () =>
      await getMonthlySolution({
        userId,
        year,
        month,
        page,
        sortType,
      }),
  });

  return { data };
};

export default useGetMonthlySolution;
