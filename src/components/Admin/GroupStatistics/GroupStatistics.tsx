import { useState } from 'react';
import styled from 'styled-components';
import GroupStatus from './GroupStatus';
import NumOfLanguages from './NumOfLanguages';
import NumOfMembers from './NumOfMembers';

const GroupStatistics = () => {
  const roomStatus = 'ACTIVE';

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
      <NumOfMembers />
      <NumOfLanguages />
    </GroupStatisticsContainer>
  );
};

export default GroupStatistics;

const GroupStatisticsContainer = styled.article`
  display: flex;
  align-items: center;

  padding: 2.4rem 2.7rem 2.8rem 2.8rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;
