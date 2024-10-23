import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcNewAlarm } from '../assets';
import usePostAlarmRead from '../libs/hooks/Alarm/usePostAlarmRead';
import { AlarmModalProps } from '../types/Alarm/alarmType';

const AlarmModal = ({
  isOpen,
  handleClose,
  notifications,
}: AlarmModalProps) => {
  // notifications가 로드되지 않았을 때 빈 배열을 기본값으로 설정
  const newAlarms =
    notifications?.filter((data) => data?.isRead === false) || [];
  const readAlarms =
    notifications?.filter((data) => data?.isRead === true) || [];
  const { mutation } = usePostAlarmRead();

  const navigate = useNavigate();

  // notifications 에서 data 전달
  const handleAlarmClick = (
    notificationIds: number,
    type: string,
    dataId: number
  ) => {
    mutation(notificationIds, {
      onSuccess: () => {
        switch (type) {
          case 'FOLLOW':
            navigate('/follower');
            break;
          case 'CREATED_PUBLIC_ROOM_REQUEST':
            navigate(`/group/${dataId}/admin`);
            break;
          case 'CREATED_PRIVATE_ROOM_JOIN':
            navigate(`/group/${dataId}/admin`);
            break;
          case 'PUBLIC_ROOM_REQUEST':
            navigate(`/group/${dataId}`, {
              state: { disabledApply: true },
            }); // state 를 true로 변경하여 신청하기 버튼 없애기
            break;
          case 'PUBLIC_ROOM_APPROVE':
            navigate(`/group/${dataId}/member`);
            break;
          case 'ROOM_STATUS_INACTIVE':
            navigate('/group/my-page');
            break;
        }
      },
    });
  };

  return (
    <>
      {isOpen && (
        <ModalContainer onMouseLeave={handleClose}>
          <Title>새로운 알림</Title>
          {newAlarms.map((data, idx) => {
            return (
              <ModalTab
                key={idx}
                onClick={() =>
                  handleAlarmClick(data.notificationId, data.type, data.dataId)
                }
                /* 알림 클릭 시 type,dataId,notificationId 전달 */
              >
                {data.content}
                <IcContainer>
                  <IcNewAlarm />
                </IcContainer>
              </ModalTab>
            );
          })}
          <Divider />
          <Title>읽음</Title>
          {readAlarms.map((data, idx) => {
            return <ModalTab key={idx}>{data.content}</ModalTab>;
          })}
        </ModalContainer>
      )}
    </>
  );
};

export default AlarmModal;

const ModalContainer = styled.ul`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  right: -2rem;

  width: 36.4rem;
  padding: 2.2rem 0 1.8rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const ModalTab = styled.li`
  display: flex;
  position: relative;

  width: 100%;
  padding: 1.1rem 3.9rem 1.1rem 2.2rem;
  ${({ theme }) => theme.fonts.title_regular_14};

  color: ${({ theme }) => theme.colors.white};

  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray500};
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semiBold_14};
  }
`;

const Title = styled.p`
  margin-bottom: 0.8rem;
  margin-left: 2rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: 1.2rem 0;

  background-color: ${({ theme }) => theme.colors.gray500};
`;

const IcContainer = styled.div`
  display: flex;
  position: absolute;
  top: 1.1rem;
  right: 2.2rem;
`;
