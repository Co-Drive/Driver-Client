import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../../../assets';
import ListFilter from './ListFilter';
import SavedSolution from './SavedSolution';

const SAVED_DUMMY = {
  totalPage: 2,
  records: [
    {
      recordId: 1,
      title: '문제 풀이 제목',
      level: 1,
      tags: ['완전탐색'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 2,
      title: '문제 풀이 제목',
      level: 1,
      tags: ['동적계획법 (Dynamic Programming)', '깊이 우선탐색 (DFS)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 3,
      title: '문제 풀이 제목',
      level: 1,
      tags: ['동적계획법 (Dynamic Programming)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 4,
      title: '문제 풀이 제목',
      level: 2,
      tags: ['정렬', '힙 (Heap)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 5,
      title: '문제 풀이 제목',
      level: 5,
      tags: ['깊이 우선탐색 (DFS)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 6,
      title: '문제 풀이 제목',
      level: 3,
      tags: ['구현', '탐욕법 (Greedy)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 7,
      title: '문제 풀이 제목',
      level: 2,
      tags: ['스택/큐', '해시'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
  ],
};

const SavedSolutionList = () => {
  const { totalPage, records } = SAVED_DUMMY;
  const pages = Array.from({ length: totalPage }, (_, idx) => idx + 1);
  const YEAR = new Date().getFullYear();
  const MONTH = new Date().getMonth() + 1;

  const [clickedPage, setClickedPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState({
    year: YEAR,
    month: MONTH,
  });

  const { year, month } = selectedDate;

  // 페이지 별 문제 리스트 요청 함수 추가할 예정 ! -> 페이지 이동 함수들에 들어갈 것임

  const handleClickPrevBtn = (isPage: boolean) => {
    isPage
      ? setClickedPage((prev) => prev - 1)
      : setSelectedDate({
          ...selectedDate,
          year: year - 1,
        });
  };

  const handleClickValue = (value: number, isPage: boolean) => {
    isPage
      ? setClickedPage(value)
      : setSelectedDate({
          ...selectedDate,
          month: month,
        });
  };

  const handleClickNextBtn = (isPage: boolean) => {
    isPage
      ? setClickedPage((prev) => prev + 1)
      : setSelectedDate({
          ...selectedDate,
          year: year + 1,
        });
  };

  return (
    <ListContainer>
      <ListFilter
        year={year}
        month={month}
        handleClickPrevBtn={handleClickPrevBtn}
        handleClickMonth={handleClickValue}
        handleClickNextBtn={handleClickNextBtn}
      />
      {records.map((record) => {
        return <SavedSolution key={record.recordId} record={record} />;
      })}

      <PageNationBar>
        <IcArrowLeftSmallGray
          onClick={() => clickedPage !== 1 && handleClickPrevBtn(true)}
        />
        {pages.map((page) => {
          return (
            <PageNumber
              key={page}
              $isClicked={clickedPage === page}
              onClick={() => handleClickValue(page, true)}
            >
              {page}
            </PageNumber>
          );
        })}
        <IcArrowRightSmallGray
          onClick={() => clickedPage !== totalPage && handleClickNextBtn(true)}
        />
      </PageNationBar>
    </ListContainer>
  );
};

export default SavedSolutionList;

const ListContainer = styled.section`
  display: flex;
  gap: 2.2rem;
  align-items: center;
  flex-direction: column;

  margin-top: 4.3rem;
`;

const PageNationBar = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 4.8rem;
`;

const PageNumber = styled.p<{ $isClicked: boolean }>`
  padding: 0.4rem 1rem;

  border-radius: 0.4rem;
  ${({ theme, $isClicked }) =>
    $isClicked
      ? css`
          background-color: ${theme.colors.gray700};
          color: ${theme.colors.white};
        `
      : css`
          background-color: transparent;
          color: ${theme.colors.gray200};
        `};
  ${({ theme }) => theme.fonts.body_medium_16};
`;
