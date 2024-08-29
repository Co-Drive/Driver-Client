import React from 'react';
import styled from 'styled-components';
import { SORTING } from '../../constants/Follower/currentConst';

interface MemberHeaderProps {
  sorting: string;
  handleClickSorting: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

const MemberHeader = ({ sorting, handleClickSorting }: MemberHeaderProps) => {
  return (
    <Header>
      <Title>그룹 멤버</Title>
      <SortContainer>
        {SORTING.map((standard) => {
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

  width: 100%;
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
