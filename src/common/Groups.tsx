import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  IcArrowLeftSmallGray,
  IcArrowRightSmallGray,
  IcStatusBlack,
  IcStatusWhite,
  IcSuccess,
} from '../assets';
import { SORTING, STATUS } from '../constants/Follower/currentConst';
import { PersonalGroupProps } from '../types/MyGroup/myGroupType';
import RecommendCard from './RecommendCard';

const Groups = ({ group }: PersonalGroupProps) => {
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
      <TopContainer>
        <TotalStatus>
          {STATUS.map((status, idx) => {
            return (
              <StatusContainer key={status}>
                <IcSuccess />

                <Status type="button" $idx={idx}>
                  {idx === 0 ? <IcStatusBlack /> : <IcStatusWhite />}
                  <Text $idx={idx}>{status}</Text>
                </Status>
              </StatusContainer>
            );
          })}
        </TotalStatus>

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
      </TopContainer>

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

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 1.4rem 0.1rem 0 0.6rem;
`;

const TotalStatus = styled.div`
  display: flex;
  gap: 1.4rem;
  justify-content: center;
  align-items: center;
`;

const StatusContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
`;

const Status = styled.button<{ $idx: number }>`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  padding: 0.7rem 1.4rem 0.7rem 1.2rem;

  border-radius: 0.6rem;
  background-color: ${({ $idx, theme }) => {
    switch ($idx) {
      case 0:
        return `${theme.colors.codrive_green}`;
      case 1:
        return `${theme.colors.codrive_purple}`;
      case 2:
        return `${theme.colors.gray600}`;
    }
  }};
`;

const Text = styled.p<{ $idx: number }>`
  color: ${({ $idx, theme }) =>
    $idx === 0 ? theme.colors.gray900 : theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_14};
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
