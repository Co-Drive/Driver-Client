import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  IcStatusBlack,
  IcStatusWhite,
  IcSuccess,
  IcSuccessGray,
} from '../../assets';
import Groups from '../../common/Groups';
import { SORTING, STATUS } from '../../constants/Follower/currentConst';
import useGetRooms from '../../libs/hooks/MyGroup/useGetRooms';

const PersonalGroup = () => {
  const GROUP_CATEGORY = ['내가 참여한 그룹', '내가 생성한 그룹'];
  const [clickedPage, setClickedPage] = useState(1);
  const [clickedCategry, setClickedCategory] = useState(GROUP_CATEGORY[0]);
  const [filter, setFilter] = useState({
    clickedStatus: '모집 중',
    sorting: '최신순',
  });
  const isJoinedRooms = clickedCategry === GROUP_CATEGORY[0];

  const { clickedStatus, sorting } = filter;
  const { data } = useGetRooms({
    sortType: sorting,
    page: clickedPage - 1,
    status: clickedStatus,
    isJoinedRooms: isJoinedRooms,
  });

  const { totalPage, joinedRooms, createdRooms } = data?.data || {};

  const group = data ? (isJoinedRooms ? joinedRooms : createdRooms) : [];
  const totalPageRef = useRef(data ? totalPage : 1);

  const handleClickSorting = (
    e:
      | React.MouseEvent<HTMLParagraphElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isSorting: boolean
  ) => {
    const { innerText } = e.currentTarget;

    isSorting
      ? setFilter({
          ...filter,
          sorting: innerText,
        })
      : setFilter({
          ...filter,
          clickedStatus: innerText,
        });
    // 최신순/ 가나다순에 따라 서버 통신 들어갈 예정
  };

  const handleClickCategory = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setClickedCategory(innerHTML);
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
    <PersonalGroupContainer>
      <Header>
        {GROUP_CATEGORY.map((category, idx) => {
          return (
            <Category
              key={idx}
              onClick={handleClickCategory}
              $isClickedCategory={clickedCategry === category}
            >
              {category}
            </Category>
          );
        })}
      </Header>

      <TopContainer>
        <TotalStatus>
          {STATUS.map((status, idx) => {
            return (
              <StatusContainer key={status}>
                {clickedStatus === status ? <IcSuccess /> : <IcSuccessGray />}

                <Status
                  type="button"
                  $idx={idx}
                  onClick={(e) => handleClickSorting(e, false)}
                >
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
                onClick={(e) => standard !== '|' && handleClickSorting(e, true)}
                $isClicked={sorting === standard}
              >
                {standard}
              </Sorting>
            );
          })}
        </SortContainer>
      </TopContainer>
      <Groups
        group={group}
        totalPage={totalPageRef.current}
        clickedPage={clickedPage}
        handleClickPages={{
          handleClickPrevBtn: handleClickPrevBtn,
          handleClickPage: handleClickPage,
          handleClickNextBtn: handleClickNextBtn,
        }}
      />
    </PersonalGroupContainer>
  );
};

export default PersonalGroup;

const PersonalGroupContainer = styled.article`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 0 4.2rem;
`;

const Header = styled.header`
  display: flex;
  gap: 3.8rem;
  align-items: center;

  width: 100%;
  margin-bottom: 0.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray700};
`;

const Category = styled.p<{ $isClickedCategory: boolean }>`
  padding-bottom: 1.2rem;

  ${({ theme, $isClickedCategory }) =>
    $isClickedCategory
      ? css`
          border-bottom: 0.2rem solid ${theme.colors.white};
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          color: ${({ theme }) => theme.colors.gray300};
        `};

  ${({ theme }) => theme.fonts.title_medium_24};
`;

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
