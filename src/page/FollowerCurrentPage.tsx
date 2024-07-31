import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../assets';
import Header from '../components/Follower/CurrentSituation/Header';
import WeeklyCurrent from '../components/Follower/CurrentSituation/WeeklyCurrent';
import PageLayout from '../components/PageLayout/PageLayout';
import { TOTAL_PAGES } from '../constants/Follower/currentConst';

const FollowerCurrentPage = () => {
  const [filter, setFilter] = useState({
    clickedGroup: '',
    isOptionOpen: false,
    sorting: '최신순',
  });

  const [clickedPage, setClickedPage] = useState(1);

  // 첫 화면에서 서버에 전체 리스트 수 아니면 전체 페이지 수 요청
  const pagesArr = Array(TOTAL_PAGES).fill(0);

  const { isOptionOpen } = filter;

  const handleClickInput = () => {
    [
      setFilter({
        ...filter,
        isOptionOpen: !isOptionOpen,
      }),
    ];
  };

  const handleClickOption = (selectedGroup: string) => {
    setFilter({
      ...filter,
      clickedGroup: selectedGroup,
      isOptionOpen: false,
    });
    // 선택한 옵션에 따라 서버 통신 들어갈 예정
  };

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setFilter({
      ...filter,
      sorting: innerHTML,
    });
    // 최신순/ 가나다순에 따라 서버 통신 들어갈 예정
  };

  const handleClickPrevBtn = () => {
    setClickedPage((prev) => prev - 1);
  };

  const handleClickPageNumber = (page: number) => {
    setClickedPage(page);
  };

  const handleClickNextBtn = () => {
    setClickedPage((prev) => prev + 1);
  };

  return (
    <PageLayout category="홈">
      <FollowerCurrentPageContainer>
        <Header
          filter={filter}
          handleClickInput={handleClickInput}
          handleClickOption={handleClickOption}
          handleClickSorting={handleClickSorting}
        />

        <WeeklyCurrent clickedPage={clickedPage} />

        <PageNationBar>
          <IcArrowLeftSmallGray
            onClick={() => clickedPage !== 1 && handleClickPrevBtn()}
          />
          {pagesArr.map((_, idx) => {
            const page = idx + 1;
            return (
              <PageNumber
                key={page}
                $isClicked={clickedPage === page}
                onClick={() => handleClickPageNumber(page)}
              >
                {page}
              </PageNumber>
            );
          })}
          <IcArrowRightSmallGray
            onClick={() => clickedPage !== TOTAL_PAGES && handleClickNextBtn()}
          />
        </PageNationBar>
      </FollowerCurrentPageContainer>
    </PageLayout>
  );
};

export default FollowerCurrentPage;

const FollowerCurrentPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-width: 61.1rem;

  width: 100%;
  padding: 6rem 41.45rem 11.5rem;
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
