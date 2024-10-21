import styled from 'styled-components';
import { AlarmModalProps } from '../types/Alarm/alarmType';

const AlarmModal = ({
  isOpen,
  handleClose,
  notifications,
}: AlarmModalProps) => {
  // const { NEWALARMS, READALARMS } = ALARMLIST;
  const newAlarms = notifications.filter((data) => data.isRead === false);
  const readAlarms = notifications.filter((data) => data.isRead === true);

  return (
    <>
      {isOpen && (
        <ModalContainer onMouseLeave={handleClose}>
          <Title>새로운 알림</Title>
          {newAlarms.map((data, idx) => {
            return (
              <ModalTab key={idx}>
                {/* <Highlight>{data.content}</Highlight> */}
                {data.content}
              </ModalTab>
            );
          })}
          <Divider />
          <Title>읽음</Title>
          {readAlarms.map((data, idx) => {
            return (
              <ModalTab key={idx}>
                {/* <Highlight>{data.groupName}</Highlight> */}
                {data.content}
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
  padding: 2.2rem 0 1.8rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const ModalTab = styled.li`
  width: 100%;
  padding: 1.1rem 3.9rem 1.1rem 2.2rem;
  ${({ theme }) => theme.fonts.title_regular_14};

  color: ${({ theme }) => theme.colors.white};

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

// const Highlight = styled.span`
//   ${({ theme }) => theme.fonts.title_semiBold_14};
//   color: ${({ theme }) => theme.colors.white};
// `;
