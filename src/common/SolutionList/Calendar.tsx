import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../../assets';
import useGetUnsolvedMonths from '../../libs/hooks/Solution/useGetUnsolvedMonths';
import { CalendarProps } from '../../types/Solution/solutionTypes';

const Calendar = ({ followerId }: CalendarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedYear = Number(searchParams.get('year'));
  const selectedMonth = Number(searchParams.get('month'));

  const { unsolvedData, isLoading: isUnsolvedDataLoading } =
    useGetUnsolvedMonths({
      year: selectedYear,
      followerId,
    });
  const { months: unsolvedMonths } =
    !isUnsolvedDataLoading && unsolvedData.data;

  const monthCalendar = Array.from({ length: 12 }, (_, idx) => idx + 1);
  const solvedMonths =
    !isUnsolvedDataLoading &&
    monthCalendar.filter((month) => !unsolvedMonths.includes(month));
  const recentSolvedMonth =
    !isUnsolvedDataLoading && solvedMonths && Math.max(...solvedMonths);
  const isRecentSolvedMonthExit = recentSolvedMonth && recentSolvedMonth > 0;

  const handleClickPrevBtn = () => {
    const prevYear = (selectedYear - 1).toString();

    setSearchParams({
      page: '1',
      year: prevYear,
      month: isRecentSolvedMonthExit
        ? recentSolvedMonth.toString()
        : selectedMonth.toString(),
    });
  };

  const handleClickMonth = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    if (e) {
      const clickedMonth = e.currentTarget.innerHTML;
      setSearchParams({
        page: '1',
        year: selectedYear.toString(),
        month: clickedMonth,
      });
    }
  };

  const handleClickNextBtn = () => {
    const nextYear = (selectedYear + 1).toString();

    setSearchParams({
      page: '1',
      year: nextYear,
      month: isRecentSolvedMonthExit
        ? recentSolvedMonth.toString()
        : selectedMonth.toString(),
    });
  };

  return (
    <>
      {!isUnsolvedDataLoading && (
        <CalendarContainer>
          <YearContainer>
            <IcArrowLeftSmallGray onClick={handleClickPrevBtn} />
            <Year>{selectedYear}</Year>
            <IcArrowRightSmallGray onClick={handleClickNextBtn} />
          </YearContainer>

          <MonthBoard>
            {monthCalendar.map((month) => {
              const disabled = unsolvedMonths.includes(month);

              return (
                <Month
                  key={month}
                  $disabled={disabled}
                  $isClicked={selectedMonth === month}
                  onClick={(e) => !disabled && handleClickMonth(e)}
                >
                  {month}
                </Month>
              );
            })}
          </MonthBoard>
        </CalendarContainer>
      )}
    </>
  );
};

export default Calendar;

const CalendarContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5.6rem;

  width: 100%;
`;

const YearContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem 1.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray500};
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;

  background-color: ${({ theme }) => theme.colors.gray600};
`;

const Year = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const MonthBoard = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  width: 100%;
  padding: 1.7rem 1.9rem 1.7rem 1.8rem;

  background-color: ${({ theme }) => theme.colors.gray700};
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
`;

const Month = styled.span<{ $isClicked: boolean; $disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.8rem;
  height: 2.8rem;

  border-radius: 3rem;

  ${({ $disabled, $isClicked }) =>
    $disabled
      ? css`
          color: ${({ theme }) => theme.colors.gray400};
        `
      : $isClicked
        ? css`
            background-color: ${({ theme }) => theme.colors.codrive_green};
            color: ${({ theme }) => theme.colors.gray900};
          `
        : css`
            color: ${({ theme }) => theme.colors.white};

            &:hover {
              background-color: ${({ theme }) => theme.colors.gray500};
              color: ${({ theme }) => theme.colors.gray100};
            }
          `};

  ${({ theme }) => theme.fonts.title_bold_14};
`;
