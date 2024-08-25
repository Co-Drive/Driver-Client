import React, { useState } from 'react';
import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray } from '../../../assets';
import { SORTING } from '../../../constants/Follower/currentConst';
import useGetJoinedGroupList from '../../../libs/hooks/Follower/useGetJoinedGroupList';
import { FollowerFilterProps } from '../../../types/Follower/Current/currentType';

const FollowerFilter = ({
  sorting,
  updateSelectedGroupId,
  handleClickSorting,
}: FollowerFilterProps) => {
  const [isGroupClicked, setIsGroupClicked] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState('');

  const { data, isLoading } = useGetJoinedGroupList();
  const { joinedRooms } = !isLoading && data.data;

  const handleClickGroupOptions = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    id: number
  ) => {
    const { innerHTML } = e.currentTarget;
    setSelectedGroup(innerHTML);
    updateSelectedGroupId(id);
  };

  const handleClickGroupFilter = () => {
    setIsGroupClicked(!isGroupClicked);
  };

  return (
    <FilteredContainer>
      <GroupFilterContainer onClick={joinedRooms && handleClickGroupFilter}>
        <SelectedGroup $isEmpty={!selectedGroup.length}>
          {selectedGroup ? selectedGroup : '그룹 별 보기'}
        </SelectedGroup>

        {isGroupClicked ? (
          <>
            <IcArrowTopGray />
            <Options>
              {joinedRooms.map((room: { roomId: number; title: string }) => {
                const { roomId, title } = room;
                return (
                  <Option
                    key={roomId}
                    onClick={(e) => handleClickGroupOptions(e, roomId)}
                    $clickedOption={selectedGroup === title}
                  >
                    {title}
                  </Option>
                );
              })}
            </Options>
          </>
        ) : (
          <IcArrowBottomGray />
        )}
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

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray800};
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
  max-width: 16.4rem;
  overflow-x: hidden;

  color: ${({ theme, $isEmpty }) =>
    $isEmpty ? theme.colors.gray300 : theme.colors.white};

  ${({ theme }) => theme.fonts.body_ligth_16};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Options = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  position: absolute;
  top: 5.4rem;
  left: 0;
  z-index: 1;

  width: 100%;
  padding: 0.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const Option = styled.p<{ $clickedOption: boolean }>`
  width: 100%;
  padding: 1.2rem;

  overflow-x: hidden;

  border-radius: 0.4rem;
  background-color: ${({ theme, $clickedOption }) =>
    $clickedOption && theme.colors.gray500};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.body_ligth_16};
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray500};
  }
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
