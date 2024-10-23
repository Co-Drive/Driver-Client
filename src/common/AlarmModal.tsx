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

  // notifications 에서 data 전달
  const handleAlarmClick = (
    notificationId: number,
    type: string,
    dataId: number
  ) => {
    mutation({ notificationId, type, dataId });
  };

  return (
    <>
      {isOpen && (
        <ModalContainer onMouseLeave={handleClose}>
          <Title>새로운 알림</Title>
          {newAlarms.map((data, idx) => {
            const { notificationId, type, dataId } = data;
            return (
              <ModalTab
                key={idx}
                onClick={() => handleAlarmClick(notificationId, type, dataId)}
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
            const { content } = data;
            return <ModalTab key={idx}>{content}</ModalTab>;
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
