import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Groups from '../../common/Groups';
import { PersonalGroupProps } from '../../types/MyGroup/myGroupType';

const PersonalGroup = ({ group }: PersonalGroupProps) => {
  const GROUP_CATEGORY = ['내가 참여한 그룹', '내가 생성한 그룹'];
  const [isClicked, setIsClicked] = useState(GROUP_CATEGORY[0]);

  const handleClickCategory = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setIsClicked(innerHTML);
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

      <Groups group={group} />
    </Recommendcontainer>
  );
};

export default PersonalGroup;

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
