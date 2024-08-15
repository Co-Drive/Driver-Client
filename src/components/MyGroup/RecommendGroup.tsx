import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import RecommendCard from '../../common/RecommendCard';
import { RecommendGroupProps } from '../../types/MyGroup/myGroupType';

const RecommendGroup = ({ user, group }: RecommendGroupProps) => {
  const [isClicked, setIsClicked] = useState('내가 참여한 그룹');

  const handleClickCategory = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setIsClicked(innerHTML);
  };

  return (
    <Recommendcontainer>
      <RecommendHeader>
        <Category
          onClick={handleClickCategory}
          $isClickedCategory={isClicked === '내가 참여한 그룹'}
        >
          내가 참여한 그룹
        </Category>
        <Category
          onClick={handleClickCategory}
          $isClickedCategory={isClicked === '내가 생성한 그룹'}
        >
          내가 생성한 그룹
        </Category>
      </RecommendHeader>
      <RecommendCard user={user} group={group} />
    </Recommendcontainer>
  );
};

export default RecommendGroup;

const Recommendcontainer = styled.article`
  display: flex;
  gap: 3rem;
  justify-content: center;
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
