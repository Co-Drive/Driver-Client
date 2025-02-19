import { useMemo } from 'react';

export const updateRecentMonth = ({
  isUnsolvedDataLoading,
  unsolvedMonths,
  selectedYear,
}: {
  isUnsolvedDataLoading: boolean;
  unsolvedMonths: Array<number>;
  selectedYear: number;
}) => {
  const recentMonth = useMemo(() => {
    if (!isUnsolvedDataLoading)
      for (let month = 12; month > 0; month--) {
        if (!unsolvedMonths.includes(month)) {
          return month;
        }
      }
    return 1;
  }, [selectedYear, isUnsolvedDataLoading, unsolvedMonths]);

  return recentMonth;
};
