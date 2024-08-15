import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../assets';
import { SORTING } from '../constants/Follower/currentConst';
import { RecommendGroupProps } from '../types/MyGroup/myGroupType';
import RecommendCard from './RecommendCard';

const Groups = ({  group }: RecommendGroupProps) => {
  // 일단 더미 데이터로 넣어둠, 서버 연결 시 0으로 초기화하고 서버에서 가져온 전체 페이지 데이터로 업데이트 예정
  const totalPageRef = useRef(3);
  const pages = Array.from(
    { length: totalPageRef.current },
    (_, idx) => idx + 1
  );

  const [sorting, setSorting] = useState('최신순');
  const [clickedPage, setClickedPage] = useState(1);

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setSorting(innerHTML);
    // 최신순/ 가나다순에 따라 서버 통신 들어갈 예정
  };

  const handleClickPrevBtn = () => {
    setClickedPage((prev) => prev - 1);
  };

  const handleClickPage = (page: number) => {
    setClickedPage(page);
  };

  const handleClickNextBtn = () => {
    setClickedPage((prev) => prev + 1);
  };

  return (
    <React.Fragment>
      <SortContainer>
        {SORTING.map((standard) => {
          return (
            <Sorting
              key={standard}
              onClick={(e) => standard !== '|' && handleClickSorting(e)}
              $isClicked={sorting === standard}
            >
              {standard}
            </Sorting>
          );
        })}
      </SortContainer>

      <RecommendCard group={group} isLongPage={true} />

      <PageNationBar>
        <IcArrowLeftSmallGray
          onClick={() => clickedPage !== 1 && handleClickPrevBtn()}
        />
        {pages.map((page) => {
          return (
            <PageNumber
              key={page}
              $isClicked={clickedPage === page}
              onClick={() => handleClickPage(page)}
            >
              {page}
            </PageNumber>
          );
        })}
        <IcArrowRightSmallGray
          onClick={() =>
            clickedPage !== totalPageRef.current && handleClickNextBtn()
          }
        />
      </PageNationBar>
    </React.Fragment>
  );
};

export default Groups;

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
