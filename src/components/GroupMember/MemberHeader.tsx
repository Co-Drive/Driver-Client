import React from 'react';
import styled from 'styled-components';
import { OLD_AND_NEW, SORTING } from '../../constants/Follower/currentConst';
import { MemberHeaderProps } from '../../types/GroupMember/memberType';

const MemberHeader = ({
  sorting,
  handleClickSorting,
  isAdmin,
}: MemberHeaderProps) => {
  const sortingFilter = isAdmin ? OLD_AND_NEW : SORTING;
  const title = isAdmin ? '그룹 멤버 관리하기' : '그룹 멤버';
  return (
    <Header>
      <Title>{title}</Title>
      <SortContainer>
        {sortingFilter.map((standard) => {
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
    </Header>
  );
};

export default MemberHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 92.6rem;
  padding: 0 1rem 2.6rem 0.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray800};
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
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
