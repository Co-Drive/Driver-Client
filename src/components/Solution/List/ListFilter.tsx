import React, { useState } from 'react';
import styled from 'styled-components';
import { IcArrowBottomWhite, IcCalendar } from '../../../assets';

const ListFilter = () => {
  const LIST_SORTING = ['최신순', '|', '즐겨찾기'];
  const YEAR = new Date().getFullYear();
  const MONTH = new Date().getMonth();

  const [selectedDate, setSelectedDate] = useState({
    year: YEAR,
    month: MONTH,
  });
  const [sorting, setSorting] = useState('최신순');

  const { year, month } = selectedDate;

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setSorting(innerHTML);
    // 최신순/ 가나다순에 따라 서버 통신 들어갈 예정
  };

  return (
    <FilteredContainer>
      <MonthFilterContainer>
        <IcCalendar />
        <DateContainer>
          <Year>{year}년</Year>
          <Month>{month}월</Month>
        </DateContainer>
        <IcArrowBottomWhite />
      </MonthFilterContainer>
      <SortContainer>
        {LIST_SORTING.map((standard) => {
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
`;

const MonthFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.3rem 1.4rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const DateContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  margin-right: 1rem;
  margin-left: 1.4rem;
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
