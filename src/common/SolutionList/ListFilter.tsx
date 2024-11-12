import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { IcArrowBottomWhite, IcArrowTopWhite, IcCalendar } from '../../assets';
import { OLD_AND_NEW } from '../../constants/Follower/currentConst';
import useGetUnsolvedMonths from '../../libs/hooks/Solution/useGetUnsolvedMonths';
import { ListFilterProps } from '../../types/Solution/solutionTypes';
import Calendar from './Calendar';

const ListFilter = ({
  followerId,
  sorting,
  year,
  month,
  handleClickSorting,
  handleClickPrevBtn,
  handleClickMonth,
  handleClickNextBtn,
}: ListFilterProps) => {
  const { unsolvedData, isLoading } = useGetUnsolvedMonths({
    year,
    followerId,
  });
  const { months } = !isLoading && unsolvedData.data;

  const [isCalendarClicked, setIsCalendarClicked] = useState(false);

  const handleClickDateFilter = () => {
    setIsCalendarClicked(!isCalendarClicked);
  };

  return (
    <FilteredContainer>
      <DateFilterContainer $isCalendarClicked={isCalendarClicked}>
        <IcCalendar onClick={handleClickDateFilter} />
        <DateContainer onClick={handleClickDateFilter}>
          <Year>{year}년</Year>
          <Month>{month}월</Month>
        </DateContainer>

        {isCalendarClicked ? (
          <>
            <IcArrowTopWhite onClick={handleClickDateFilter} />
            <Calendar
              date={{ clickedYear: year, clickedMonth: month }}
              unsolvedMonths={months}
              handleClickPrevBtn={() => handleClickPrevBtn(false)}
              handleClickMonth={(e) => {
                handleClickMonth(e);
                handleClickDateFilter();
              }}
              handleClickNextBtn={() => handleClickNextBtn(false)}
            />
          </>
        ) : (
          <IcArrowBottomWhite onClick={handleClickDateFilter} />
        )}
      </DateFilterContainer>

      <SortContainer>
        {OLD_AND_NEW.map((standard) => {
          return (
            <Sorting
              key={standard}
              onClick={(
                e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
              ) => standard !== '|' && handleClickSorting(e)}
              $isClicked={sorting === standard}
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
