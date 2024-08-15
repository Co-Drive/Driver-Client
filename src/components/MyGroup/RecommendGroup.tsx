import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import RecommendCard from '../../common/RecommendCard';
import { SORTING } from '../../constants/Follower/currentConst';
import { RecommendGroupProps } from '../../types/MyGroup/myGroupType';

const RecommendGroup = ({ user, group }: RecommendGroupProps) => {
  const GROUP_CATEGORY = ['내가 참여한 그룹', '내가 생성한 그룹'];

  const [isClicked, setIsClicked] = useState(GROUP_CATEGORY[0]);
  const [sorting, setSorting] = useState('최신순');

  const handleClickCategory = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setIsClicked(innerHTML);
  };

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setSorting(innerHTML);
    // 최신순/ 가나다순에 따라 서버 통신 들어갈 예정
  };

  return (
    <Recommendcontainer>
      <RecommendHeader>
        {GROUP_CATEGORY.map((category, idx) => {
          return (
            <Category
              key={idx}
              onClick={handleClickCategory}
              $isClickedCategory={isClicked === category}
            >
              {category}
            </Category>
          );
        })}
      </RecommendHeader>

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

      <RecommendCard user={user} group={group} />
    </Recommendcontainer>
  );
};

export default RecommendGroup;

const Recommendcontainer = styled.article`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: end;
  flex-direction: column;

  width: 100%;
  padding: 0 4.2rem;
`;

const RecommendHeader = styled.header`
  display: flex;
  gap: 3.8rem;
  align-items: center;

  width: 100%;

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

const SortContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  margin-top: 0.2rem;
`;

const Sorting = styled.p<{ $isClicked: boolean }>`
  color: ${({ $isClicked, theme }) =>
    $isClicked ? theme.colors.white : theme.colors.gray500};
  ${({ theme }) => theme.fonts.body_medium_14};
`;
