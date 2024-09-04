import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useGetRoomInfo from '../../../libs/hooks/Admin/useGetRoomInfo';
import GroupStatus from './GroupStatus';
import NumOfLanguages from './NumOfLanguages';
import NumOfMembers from './NumOfMembers';

const GroupStatistics = () => {
  const { id } = useParams();
  if (!id) return;
  const roomId = parseInt(id);

  const { data, isLoading } = useGetRoomInfo({ roomId });
  const {
    roomStatus,
    memberCount,
    capacity,
    approvedCount,
    requestedCount,
    languageMemberCount,
  } = !isLoading && data?.data;

  const [clickedStatus, setClickedStatus] = useState('');
  const [modalOn, setModalOn] = useState(false);

  const handleClickStatus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { innerText } = e.currentTarget;
    setClickedStatus(innerText);
    setModalOn(true);
  };

  useEffect(() => {
    const newStatus =
      roomStatus === 'ACTIVE'
        ? '모집 중'
        : roomStatus === 'INACTIVE'
          ? '모집 마감'
          : '활동 종료';

    setClickedStatus(newStatus);
  }, [roomStatus]);

  return (
    <>
      {!isLoading && (
        <GroupStatisticsContainer>
          <GroupStatus
            roomId={roomId}
            modalOn={modalOn}
            clickedStatus={clickedStatus}
            onClose={() => setModalOn(false)}
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
            approvedCount={approvedCount}
          />
        </GroupStatisticsContainer>
      )}
    </>
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
