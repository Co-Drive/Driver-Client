import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { useSearchParams } from 'react-router-dom';
import { IcArrowBottomWhite, IcArrowTopWhite, IcCalendar } from '../../assets';
import { OLD_AND_NEW } from '../../constants/Follower/currentConst';
import { ListFilterProps } from '../../types/Solution/solutionTypes';
import Calendar from './Calendar';

const ListFilter = ({
  sorting,
  recentMonth,
  unsolvedMonths,
  isUnsolvedDataLoading,
  handleClickSorting,
}: ListFilterProps) => {
  const [isCalendarClicked, setIsCalendarClicked] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedYear = Number(searchParams.get('year'));
  const selectedMonth = Number(searchParams.get('month'));

  const handleClickDateFilter = () => {
    setIsCalendarClicked(!isCalendarClicked);
  };

  const handleClickPrevBtn = () => {
    const prevYear = (selectedYear - 1).toString();

    setSearchParams({
      page: '1',
      sort: sorting,
      year: prevYear,
      month: recentMonth.toString(),
    });
  };

  const handleClickMonth = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    if (e) {
      const clickedMonth = e.currentTarget.innerHTML;
      setSearchParams({
        page: '1',
        sort: sorting,
        year: selectedYear.toString(),
        month: clickedMonth,
      });
    }
  };

  const handleClickNextBtn = () => {
    const nextYear = (selectedYear + 1).toString();

    setSearchParams({
      page: '1',
      sort: sorting,
      year: nextYear,
      month: recentMonth.toString(),
    });
  };

  useEffect(() => {
    if (!isUnsolvedDataLoading) {
      setSearchParams({
        page: '1',
        sort: 'NEW',
        year: selectedYear.toString(),
        month: recentMonth.toString(),
      });
    }
  }, [recentMonth, isUnsolvedDataLoading]);

  return (
    <FilteredContainer>
      <DateFilterContainer $isCalendarClicked={isCalendarClicked}>
        <IcCalendar onClick={handleClickDateFilter} />
        <DateContainer onClick={handleClickDateFilter}>
          <Year>{selectedYear}년</Year>
          <Month>{selectedMonth}월</Month>
        </DateContainer>

        {isCalendarClicked ? (
          <>
            <IcArrowTopWhite onClick={handleClickDateFilter} />
            <Calendar
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              unsolvedMonths={unsolvedMonths}
              handleClickPrevBtn={handleClickPrevBtn}
              handleClickMonth={handleClickMonth}
              handleClickNextBtn={handleClickNextBtn}
            />
          </>
        ) : (
          <IcArrowBottomWhite onClick={handleClickDateFilter} />
        )}
      </DateFilterContainer>

      <SortContainer>
        {OLD_AND_NEW.map((standard) => {
          const clickedSort = sorting === 'NEW' ? '최신순' : '오래된순';
          return (
            <Sorting
              key={standard}
              onClick={(
                e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
              ) => standard !== '|' && handleClickSorting(e)}
              $isClicked={clickedSort === standard}
            >
              {standard}
            </Sorting>
          );
        })}
      </SortContainer>
    </FilteredContainer>
  );
};

export default ListFilter;

const FilteredContainer = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding-bottom: 2.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};

  cursor: pointer;
`;

const DateFilterContainer = styled.div<{ $isCalendarClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  max-width: 17.9rem;

  width: 100%;
  padding: 1.3rem 1.4rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray700};

  ${({ $isCalendarClicked, theme }) =>
    $isCalendarClicked &&
    css`
      outline: 0.1rem solid ${theme.colors.gray500};
    `};
`;

const DateContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  width: 100%;
  padding-right: 0.4rem;
  padding-left: 1.4rem;
`;

const Year = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const Month = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const SortContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Sorting = styled.p<{ $isClicked: boolean }>`
  color: ${({ $isClicked, theme }) =>
    $isClicked ? theme.colors.white : theme.colors.gray500};
  ${({ theme }) => theme.fonts.body_medium_14};
`;
