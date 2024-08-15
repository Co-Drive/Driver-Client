import React, { useState } from 'react';
import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray } from '../../../assets';
import { SORTING } from '../../../constants/Follower/currentConst';

const FollowerFilter = () => {
  const [groupFilter, setGroupFilter] = useState({
    isClicked: false,
    selectedGroup: '',
  });
  const [sorting, setSorting] = useState('최신순');

  const { isClicked, selectedGroup } = groupFilter;

  const handleClickGroupFilter = () => {
    setGroupFilter({ ...groupFilter, isClicked: !isClicked });
  };

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setSorting(innerHTML);
    // 최신순/ 가나다순에 따라 서버 통신 들어갈 예정
  };

  return (
    <FilteredContainer>
      <GroupFilterContainer onClick={handleClickGroupFilter}>
        <SelectedGroup $isEmpty={!selectedGroup.length}>
          {selectedGroup ? selectedGroup : '그룹 별 보기'}
        </SelectedGroup>

        {isClicked ? <IcArrowTopGray /> : <IcArrowBottomGray />}
      </GroupFilterContainer>

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
    </FilteredContainer>
  );
};

export default FollowerFilter;

const FilteredContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: end;

  width: 100%;
  padding-right: 1rem;
  padding-bottom: 1.6rem;
  margin-top: 6.2rem;
`;

const GroupFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  max-width: 22.9rem;

  width: 100%;
  padding: 1.2rem 1.2rem 1.2rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const SelectedGroup = styled.p<{ $isEmpty: boolean }>`
  color: ${({ theme, $isEmpty }) =>
    $isEmpty ? theme.colors.gray300 : theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_16};
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
