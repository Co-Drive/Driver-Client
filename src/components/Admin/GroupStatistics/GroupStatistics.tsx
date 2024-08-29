import { useState } from 'react';
import styled from 'styled-components';
import GroupStatus from './GroupStatus';
import NumOfLanguages from './NumOfLanguages';
import NumOfMembers from './NumOfMembers';

const GroupStatistics = () => {
  const roomStatus = 'ACTIVE';
  const memberCount = 15;
  const capacity = 20;
  const approvedCount = 10;
  const requestedCount = 30;
  const languageMemberCount = [
    {
      language: 'Java',
      count: 5,
    },
    {
      language: 'Javascript',
      count: 16,
    },
    {
      language: 'Python',
      count: 3,
    },
    {
      language: 'Ruby',
      count: 20,
    },
    {
      language: 'C++',
      count: 17,
    },
  ];

  const [clickedStatus, setClickedStatus] = useState(
    roomStatus === 'ACTIVE'
      ? '모집 중'
      : roomStatus === 'INACTIVE'
        ? '모집 마감'
        : '활동 종료'
  );

  const handleClickStatus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    const { innerText } = e.currentTarget;
    setClickedStatus(innerText);
  };

  return (
    <GroupStatisticsContainer>
      <GroupStatus
        clickedStatus={clickedStatus}
        handleClickStatus={handleClickStatus}
      />
      <NumOfMembers
        numOfMembers={{
          memberCount: memberCount,
          capacity: capacity,
          approvedCount: approvedCount,
          requestedCount: requestedCount,
        }}
      />
      <NumOfLanguages
        languageMemberCount={languageMemberCount}
        capacity={capacity}
      />
    </GroupStatisticsContainer>
  );
};

export default GroupStatistics;

const GroupStatisticsContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 2.4rem 2.7rem 2.8rem 2.8rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;
