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
  const newAlarms = notifications.filter((data) => data.isRead === false) || [];
  const readAlarms = notifications.filter((data) => data.isRead === true) || [];

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

            // /\[[^\]]+\]/g 정규식은 [ ]로 감싸진 텍스트를 [ ] 포함해서 추출
            const bracketText = data.content.match(/\[[^\]]+\]/g);
            //[ ]로 감싸진 부분을 기준으로 문자열을 분리합니다.
            const nonBracketText = data.content.split(/\[[^\]]+\]/);
            return (
              <ModalTab
                key={idx}
                onClick={() => handleAlarmClick(notificationId, type, dataId)}
              >
                <AlarmTitle>{bracketText}</AlarmTitle>
                {nonBracketText}
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
            const bracketText = content.match(/\[[^\]]+\]/g);
            const nonBracketText = content.split(/\[[^\]]+\]/);
            return (
              <ModalTab key={idx}>
                <AlarmTitle>{bracketText}</AlarmTitle>
                {nonBracketText}
              </ModalTab>
            );
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
  max-width: 36.4rem;

  max-height: 53rem;

  padding: 2.2rem 0 1.8rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray600};
  overflow-y: scroll;

  scrollbar-color: ${({ theme }) => theme.colors.gray500};

  /* 스크롤바 굵기 설정 */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* 스크롤바 막대 설정 */
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray500};
  }
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

const AlarmTitle = styled.span`
  ${({ theme }) => theme.fonts.title_semiBold_14};
  margin-right: 0.4rem;
`;
