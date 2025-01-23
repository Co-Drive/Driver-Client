import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  IcStatusBlack,
  IcStatusWhite,
  IcSuccess,
  IcSuccessGray,
} from '../../assets';
import Groups from '../../common/Groups';
import { SORTING, STATUS } from '../../constants/Follower/currentConst';
import useGetRooms from '../../libs/hooks/utils/useGetRooms';
import { removeSavedPage } from '../../utils/removeSavedPage';

const PersonalGroup = () => {
  const GROUP_CATEGORY = ['내가 참여한 그룹', '내가 생성한 그룹'];
  const savedPage = sessionStorage.getItem('savedPage');
  const savedCategory = sessionStorage.getItem('savedCategory');

  const [clickedPage, setClickedPage] = useState(
    savedPage ? parseInt(savedPage) : 1
  );
  const [clickedCategry, setClickedCategory] = useState(
    savedCategory ? savedCategory : GROUP_CATEGORY[0]
  );
  const [filter, setFilter] = useState({
    clickedStatus: '모집 중',
    sorting: '최신순',
  });
  const isJoinedRooms = clickedCategry === GROUP_CATEGORY[0];

  const { clickedStatus, sorting } = filter;
  const { data, isLoading } = useGetRooms({
    sortType: sorting,
    page: clickedPage - 1,
    status:
      clickedStatus === '모집 중'
        ? 'ACTIVE'
        : clickedStatus === '모집 마감'
          ? 'INACTIVE'
          : 'CLOSED',
    isJoinedRooms: isJoinedRooms,
  });
  const successData = !isLoading && data.data;
  const { totalPage, joinedRooms, createdRooms } = successData;
  const group = isJoinedRooms ? joinedRooms : createdRooms;

  useEffect(() => {
    sessionStorage.removeItem('savedPage');
  }, []);

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
    sessionStorage.setItem('savedCategory', innerHTML);

    setClickedPage(1);
  };

  const handleClickPrevBtn = () => {
    setClickedPage((prev) => prev - 1);
    removeSavedPage();
  };

  const handleClickPage = (page: number) => {
    setClickedPage(page);
    removeSavedPage();
  };

  const handleClickNextBtn = () => {
    setClickedPage((prev) => prev + 1);
    removeSavedPage();
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
              <StatusContainer
                key={status}
                type="button"
                onClick={(e) => handleClickSorting(e, false)}
              >
                {clickedStatus === status ? <IcSuccess /> : <IcSuccessGray />}

                <Status $idx={idx}>
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
      {!isLoading && (
        <Groups
          group={group}
          totalPage={totalPage}
          clickedPage={clickedPage}
          handleClickPages={{
            handleClickPrevBtn: handleClickPrevBtn,
            handleClickPage: handleClickPage,
            handleClickNextBtn: handleClickNextBtn,
          }}
        />
      )}
    </PersonalGroupContainer>
  );
};

export default PersonalGroup;

const PersonalGroupContainer = styled.article`
  display: flex;
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
  margin-left: 0.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
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

  width: 100%;
  margin: 3rem 0 2rem 0.8rem;
`;

const TotalStatus = styled.div`
  display: flex;
  gap: 1.4rem;
  justify-content: center;
  align-items: center;
`;

const StatusContainer = styled.button`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div<{ $idx: number }>`
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
  cursor: pointer;
`;
